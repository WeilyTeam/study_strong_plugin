const QUESTION_CONTAINER = ".question";
const QUESTION_HEADER = ".q-header";
const QUESTION_BODY = ".q-body";
const QUESTION_FOOTER = ".q-footer";
const QUESTION_ANSWER = ".q-answer";
const ACTION_ROW = ".action-row";
// 获取容器本身

const QUESTION_CONTAINER_DOM = document.querySelector(QUESTION_CONTAINER);
//  容器下的标题 用于获取题目类型
const QUESTION_HEADER_DOM =
  QUESTION_CONTAINER_DOM.querySelector(QUESTION_HEADER);
// 容器下的问题本身 用户获取填空题的空
const QUESTION_BODY_DOM = QUESTION_CONTAINER_DOM.querySelector(QUESTION_BODY);
// 用于获取提示
const QUESTION_FOOTER_DOM =
  QUESTION_CONTAINER_DOM.querySelector(QUESTION_FOOTER);
//   用于选择题回答问题
const QUESTION_ANSWER_DOM =
  QUESTION_CONTAINER_DOM.querySelector(QUESTION_ANSWER);

//   用于选择题回答问题
const QUESTION_ACTION_ROW_DOM = document.querySelector(ACTION_ROW);

module.exports = {
  QUESTION_CONTAINER_DOM,
  QUESTION_HEADER_DOM,
  QUESTION_BODY_DOM,
  QUESTION_FOOTER_DOM,
  QUESTION_ANSWER_DOM,
  QUESTION_ACTION_ROW_DOM,
};
