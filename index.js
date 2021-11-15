// ==UserScript==
// @name         学习强国插件
// @namespace    http://tampermonkey.net/
// @version      0.6.2
// @description  学习强国，自动答题测试工具，可测试每题，每周，专题自动答题，本代码公开无加密，仅用于学习js所用。
// @author       You
// @match        https://pc.xuexi.cn/points/exam-practice.html*
// @match        https://pc.xuexi.cn/points/exam-weekly-detail.html*
// @match        https://pc.xuexi.cn/points/exam-paper-detail.html*
// @match        https://pc.xuexi.cn/points/login.html*
// @grant        none
// ==/UserScript==
import { examAutoAnswer } from "./lib/exam";
import { infoAutoGet } from "./lib/info";
!(function () {
  // TODO: BUG :第一次进来无法使用 原因 document 还未加载完成
  {
    try {
      examAutoAnswer();
    } catch (ignore) {
      console.log(`🚀 ~ file: index.js ~ line 22 ~ ignore`, ignore);
      setTimeout(examAutoAnswer, 1000);
    }
  }
  {
    console.table(infoAutoGet());

  }
})();
