const toolsList = Array.from(document.querySelectorAll(".tools > div"));
const backBtn = document.querySelector(".back");
const HIDDEN = "hidden";
const HIDE = "hide";
const FOCUSED = "focused";
let CLICKED = "";
async function toolFocus(event) {
  const clickedIcon = event.target.querySelector(".button");
  const showFunction = event.target.querySelector("div:last-child");
  clickedIcon.classList.add(HIDDEN);
  clicked_button = clickedIcon;
  for (let i = 0; i < toolsList.length; i++) {
    toolsList[i].classList.add(HIDDEN);
  }
  event.target.classList.remove(HIDDEN);
  event.target.classList.add(FOCUSED);
  await sleep(500);
  for (let i = 0; i < toolsList.length; i++) {
    toolsList[i].classList.add(HIDDEN);
  }
  event.target.classList.remove(HIDDEN);
  backBtn.classList.remove(HIDDEN);
  showFunction.classList.remove(HIDDEN);
  CLICKED = showFunction;
}
function resetPage() {
  for (let i = 0; i < toolsList.length; i++) {
    toolsList[i].classList.remove(HIDDEN);
    toolsList[i].classList.remove(HIDE);
    toolsList[i].classList.remove(FOCUSED);
    const toolsBtn = toolsList[i].querySelector(".button");
    toolsBtn.classList.remove(HIDDEN);
  }
  backBtn.classList.add(HIDDEN);
  CLICKED.classList.add(HIDDEN);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

toolsList.forEach((tool) => tool.addEventListener("click", toolFocus));
backBtn.addEventListener("click", resetPage);
