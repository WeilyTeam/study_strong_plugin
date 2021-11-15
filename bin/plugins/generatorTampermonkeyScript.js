const { BUILD_TYPE_TAMPER_MONKEY, CUR_VERSION } = require("../env.config");

const ACCESS_LIST = [BUILD_TYPE_TAMPER_MONKEY];

// GeneratorTampermonkeyScriptPlugin.prototype.

class GeneratorTampermonkeyScriptPlugin {
  constructor({ build_type }) {
    this.build_type = build_type;
  }
  apply(compiler) {
    console.log(this.build_type);
    if (!ACCESS_LIST.includes(this.build_type)) return;
    // console.log(Object.keys(compiler.hooks))
    compiler.hooks.emit.tap("GeneratorTampermonkeyScriptPlugin", (resource) => {
      let assets = resource.assets;

      resource.assets[`tampermonkey.min.js`] = {
        source() {
          //TODO:添加获取版本列表
          return (`
            // ==UserScript==
            // @name         学习强国插件
            // @namespace    http://tampermonkey.net/
            // @version      0.0.1
            // @description  学习强国，自动答题测试工具，可测试每题，每周，专题自动答题，本代码公开无加密，仅用于学习js所用。
            // @author       YourSelves
            // @match        https://pc.xuexi.cn/points/exam-practice.html*
            // @match        https://pc.xuexi.cn/points/exam-weekly-detail.html*
            // @match        https://pc.xuexi.cn/points/exam-paper-detail.html*
            // @match        https://pc.xuexi.cn/points/login.html*
            // @grant        none
            // ==/UserScript==
            /*! For license information please see main.js.LICENSE.txt */
          let ${CUR_VERSION} =  '${assets["main.js"]["_value"]}';
          !(function (){const CUR_VERSION = ${CUR_VERSION};
          let script = document.createElement("script");
          script.innerHTML = CUR_VERSION;window.onload = ()=>{script.setAttribute("defer","defer");
          document.body.appendChild(script);}})()`);
        },
      };
    });
  }
}
module.exports = GeneratorTampermonkeyScriptPlugin;
