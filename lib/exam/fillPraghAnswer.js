export function fillPraghAnswer(buttons, allTips) {
  let qInputBody = document.querySelector(".q-body");
  let qInput = qInputBody.querySelectorAll("input");
  var mevent = new Event("input", { bubbles: true });
  for (let i = 0; i < allTips.length; i++) {
    let tip = allTips[i];
    let tipText = tip.textContent;
    if (tipText.length > 0) {
      qInput[i].setAttribute("value", tipText);
      qInput[i].dispatchEvent(mevent);
    }
  }
}
