   // 创建一个影子dom
   const shadowDom = document.getElementById('shadow').attachShadow({mode: "closed"})
   
       
   const node = document.createElement('p')
   const style = document.createElement('style')
   
   // 给p设置样式
   style.innerHTML = `p {color: #f00}`
   node.innerHTML = '我是shadow下的p节点'

   shadowDom.appendChild(style)
   shadowDom.appendChild(node)


// -------------------------------
   
   class SnapshotSandbox {
    constructor() {
        this.proxy = window
        // 记录window上的修改
        this.modifyPropsMap = {}
        this.active()
    }


    active() {
        this.windowSnapshot = {}

        for(const prop in window) {
            if ( window.hasOwnProperty(prop) ) {
                this.windowSnapshot[ prop ] = window[ prop ]
            }
        }

        Object.keys(this.modifyPropsMap).forEach(k => {
            window[ k ] = this.modifyPropsMap[ k ]
        })
    }

    inactive() {

        for(const prop in window) {

            if (window.hasOwnProperty(prop)) {
                if( this.windowSnapshot[ prop ] !== window[ prop ]) {
                    this.modifyPropsMap[ prop ] =  window[ prop ]
                    window[ prop  ] = this.windowSnapshot[ prop ] 
                }                
            }

        }

    }
}

// 快照沙箱
let sandbox = new SnapshotSandbox();
((window) => {

     window.a = 'aaa'

    // 输出aaa
    console.log(window.a)
    
    // 失活 , inactive其实是把新增的window属性做保存。 保存后还原window之前的属性
    sandbox.inactive()
    // 输出undefined
    console.log(window.a)
    // 激活
    sandbox.active()
    // 输出aaa
    console.log(window.a)



})(sandbox.proxy);



// -----------------------------------

class SandboxWindow {

    constructor(context, frameWindow) {


        // 主要利用proxy拦截特性
        return new Proxy(frameWindow, {
            get: function(target, prop) {
                // 优先取context数据，取不到再去取window
                if ( prop in context ) {
                    return context[ prop ]
                }

                return target[prop]
            },
            set: function(target, prop, value) {
            
               // 非2window上原有属性，我们存到context里
                if (!window.hasOwnProperty(prop) ) {
                    context[ prop ] = value
                } else {
                    target[ prop ] = value
                }

                return true

            }
        })

    }

}



let p1 = new SandboxWindow({a:'p1'}, window)

// 输出p1
console.log(p1.a)
// 输出location
console.log(p1.location)
// 存到了context上
p1.buzhanguo = 18
// 输出18
console.log(p1.buzhanguo)