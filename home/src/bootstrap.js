import $ from 'jquery';
import now from "./now";

import  news from "active/news";
$('<h1>').text('首页').appendTo(document.body);
// 首页中有一个显示当前时间的区域
now($('<div>').appendTo(document.body));

news($('<div>').appendTo(document.body));
