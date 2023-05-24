export function foreach(obj, cb) {
    // 获取对象的 属性 和 值
    Object.keys(obj).forEach(item => {
        cb(item, obj[item])
    });
}