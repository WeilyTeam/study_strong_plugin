export function singleSelectAnswer(buttons, allTips) {
  //把红色提示组合为一条
  let tipText = "";
  for (let i = 0; i < allTips.length; i++) {
    tipText += allTips[i].textContent;
  }

  if (tipText.length > 0) {
    //循环对比后点击
    for (let js = 0; js < buttons.length; js++) {
      let cButton = buttons[js];
      let cButtonText = cButton.textContent;
      //通过判断是否相互包含，来确认是不是此选项
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
