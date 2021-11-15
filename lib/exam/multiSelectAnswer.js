export function multiSelectAnswer(buttons, allTips) {
  for (
    let js = 0;
    js < buttons.length;
    js++ //循环选项列表。用来点击
  ) {
    let cButton = buttons[js];
    for (
      let i = 0;
      i < allTips.length;
      i++ //循环提示列表。
    ) {
      let tip = allTips[i];
      let tipText = tip.textContent;
      if (tipText.length > 0) {
        //提示内容长度大于0
        let cButtonText = cButton.textContent; //选项按钮的内容
        //循环对比点击
        if (
          cButtonText.indexOf(tipText) > -1 ||
          tipText.indexOf(cButtonText) > -1
        ) {
          cButton.click();
          break;
        }
      }
    }
  }
}
