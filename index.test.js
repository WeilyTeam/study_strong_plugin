const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const html = fs
  .readFileSync(path.resolve(__dirname, "./template.html"))
  .toString();

describe("测试 自动答题", () => {
  // examAutoAnswer(window);
  test("测试 获取dom", () => {
    const { window } = new JSDOM(`${html}`);
    
  });
});
