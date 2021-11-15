const { JSDOM } = require("jsdom");
import { examAutoAnswer } from "./lib/exam";
const { window } = new JSDOM(``);
describe("测试 自动答题", () => {
  examAutoAnswer(window);
});
