/* Constants */
const ROOT = document.documentElement;
const WINDOW_LIST = ["about", "projects", "settings"];

const CRT_FLICKER_ANIMATION_VAR = "--crt-flicker-animation";
const CRT_FLICKER_ANIMATION = getComputedStyle(
  document.documentElement
).getPropertyValue(CRT_FLICKER_ANIMATION_VAR);

const CRT_LINES_VAR = "--crt-lines-background-size";
const CRT_LINES = getComputedStyle(document.documentElement).getPropertyValue(
  CRT_LINES_VAR
);

const CRT_TEXT_FLICKER_ANIMATION_VAR = "--crt-text-flicker-animation";
const CRT_TEXT_FLICKER_ANIMATION = getComputedStyle(
  document.documentElement
).getPropertyValue(CRT_TEXT_FLICKER_ANIMATION_VAR);


/* functions */
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

function toggleBackgroundAnimation(elem) {
  if (elem.checked) {
    animate = true;
    resizeCanvas();
    executeFrame();
  } else {
    animate = false;
    clearStars();
  }
}

function toggleCRTFlicker(elem) {
  if (elem.checked) {
    ROOT.style.setProperty(CRT_FLICKER_ANIMATION_VAR, CRT_FLICKER_ANIMATION);
  } else {
    ROOT.style.setProperty(CRT_FLICKER_ANIMATION_VAR, "none");
  }
}

function toggleCRTTextFlicker(elem) {
  if (elem.checked) {
    ROOT.style.setProperty(
      CRT_TEXT_FLICKER_ANIMATION_VAR,
      CRT_TEXT_FLICKER_ANIMATION
    );
  } else {
    ROOT.style.setProperty(CRT_TEXT_FLICKER_ANIMATION_VAR, "none");
  }
}

function toggleCRTLines(elem) {
  if (elem.checked) {
    ROOT.style.setProperty(CRT_LINES_VAR, CRT_LINES);
  } else {
    ROOT.style.setProperty(CRT_LINES_VAR, "0% 0px, 0px 0%");
  }
}
