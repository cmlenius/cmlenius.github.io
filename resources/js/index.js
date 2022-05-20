let WINDOW_LIST = ["about", "projects"];

function toggleWindow(windowId) {
  for (let i = 0; i < WINDOW_LIST.length; i++) {
    let winId = WINDOW_LIST[i];
    let win = document.getElementById(winId);

    if (winId === windowId) {
      win.style.display = "block";
    } else {
      win.style.display = "none";
    }
  }
}

function closeWindow(windowId) {
  let win = document.getElementById(windowId);
  win.style.display = "none";
}
