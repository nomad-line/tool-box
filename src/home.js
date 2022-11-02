const toolsList = Array.from(document.querySelectorAll(".tools div"));
const backBtn = document.querySelector(".back");
const HIDDEN = "hidden";

function toolFocus(event) {
  for (let i = 0; i < toolsList.length; i++) {
    toolsList[i].classList.add(HIDDEN);
  }
  event.target.classList.remove(HIDDEN);
  backBtn.classList.remove(HIDDEN);
}
function resetPage() {
  for (let i = 0; i < toolsList.length; i++) {
    toolsList[i].classList.remove(HIDDEN);
  }
  backBtn.classList.add(HIDDEN);
}

toolsList.forEach((tool) => tool.addEventListener("click", toolFocus));
backBtn.addEventListener("click", resetPage);
