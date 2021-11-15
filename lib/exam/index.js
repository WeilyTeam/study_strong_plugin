//  用于回答问题的插件
const { QUESTION_ACTION_ROW_DOM, QUESTION_FOOTER_DOM } = require("./env");
import { fillPraghAnswer } from "./fillPraghAnswer";
import { multiSelectAnswer } from "./multiSelectAnswer";
import { singleSelectAnswer } from "./singleSelectAnswer";

const BUTTON_TYPE_LIST = ["再练一次", "再来一组", "查看解析"];

function doit() {
  let GET_TIPS_BUTTON = QUESTION_FOOTER_DOM.querySelector(".tips");

  let nextAll = QUESTION_ACTION_ROW_DOM.querySelectorAll(".ant-btn");

  let next = nextAll.length === 2 ? nextAll[1] : nextAll[0];

  if (!next.disabled) {
    if (!BUTTON_TYPE_LIST.includes(next.textContent)) {
      next.click();
    }
    return;
  }
  GET_TIPS_BUTTON.click();
  //所有提示
  let allTips = document
    .querySelector(".ant-popover-inner-content")
    .querySelectorAll("font[color=red]");

  //单选多选时候的按钮
  let buttons = document.querySelectorAll(".q-answer");

  //填空时候的那个textbox，这里假设只有一个填空
  //   var textboxs = document.querySelectorAll("input");
  //问题类型
  let qType = document.querySelector(".q-header").textContent.substr(0, 3);

  switch (qType) {
    case "填空题":
      //第几个填空
      fillPraghAnswer(buttons, allTips);
      break;
    case "多选题":
      multiSelectAnswer(buttons, allTips);
      break;

    case "单选题":
      //单选，所以所有的提示，其实是同一个。有时候，对方提示会分成多个部分。
      singleSelectAnswer(buttons, allTips);
      break;
    default:
      break;
  }
  GET_TIPS_BUTTON.click();
}

export function examAutoAnswer(global) {
  if (!global) global = window;
  doit();
  try {
    if (!global.__PLUGIN_EXAM_TIMER__) {
      global.__PLUGIN_EXAM_TIMER__ = global.setInterval(doit, 3000);
    }
  } catch (ignore) {
    console.log(ignore);
    clearInterval(global.__PLUGIN_EXAM_TIMER__);
  }
}
