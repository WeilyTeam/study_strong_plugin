export function infoAutoGet() {
  let concernTable = [];
  let cardList = document.querySelectorAll(".my-points-card");
  for (let each of cardList) {
    let title = each.querySelector(".my-points-card-title").textContent,
      progress = each.querySelector(
        ".my-points-card-progress .my-points-card-progress-filled"
      ).style.width,
      status = each.querySelector(".buttonbox .big").textContent;
    
    localStorage.setItem(title, status);

    concernTable.push({
      title,
      progress,
      status,
    });
  }
  return concernTable;
}
