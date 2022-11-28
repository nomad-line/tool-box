const nation = [
  {
    name: "대한민국",
    iso: "KRW",
    ratio: 1,
  },
  {
    name: "미국",
    iso: "USD",
    ratio: 1327,
  },
  {
    name: "일본",
    iso: "JPY",
    ratio: 9.4367,
  },
  {
    name: "유럽",
    iso: "EUR",
    ratio: 1365.61,
  },
  {
    name: "중국",
    iso: "CNY",
    ratio: 187.45,
  },
  {
    name: "홍콩",
    iso: "HKD",
    ratio: 169.18,
  },
  {
    name: "영국",
    iso: "GBP",
    ratio: 1557.55,
  },
  {
    name: "스위스",
    iso: "CHF",
    ratio: 1398.82,
  },
  {
    name: "캐나다",
    iso: "CAD",
    ratio: 996.69,
  },
  {
    name: "호주",
    iso: "AUD",
    ratio: 883.78,
  },
];
const source = document.querySelector("#source");
const target = document.querySelector("#target");
const change = document.querySelector(".change-icon");
const dropdownBtnSource = document.querySelector(
  ".exchange-cal__dropdown--source"
);
const dropdownBtnTarget = document.querySelector(
  ".exchange-cal__dropdown--target"
);
const dropdowns = document.querySelectorAll(
  ".exchange-cal__dropdown-container"
);
const dropdownContent = document.querySelectorAll(
  ".exchange-cal__dropdown-content"
);
const sourceText = document.querySelector(".exchange-cal__source-text");
const targetMoney = document.querySelector(".exchange-cal__target-money");
const targetIso = document.querySelector(".exchange-cal__target-iso");

let sourceIndex = 0;
let targetIndex = 1;
let ratio = nation[sourceIndex].ratio / nation[targetIndex].ratio;

const calculateRatio = (sourceIndex, targetIndex) => {
  return nation[sourceIndex].ratio / nation[targetIndex].ratio;
};

const loadDropdown = () => {
  for (element of dropdowns) {
    for (content of nation) {
      const newContent = document.createElement("a");
      newContent.setAttribute("href", "#");
      newContent.setAttribute("data-iso", content.iso);
      newContent.classList.add("exchange-cal__dropdown-content");
      newContent.innerText = `${content.name} (${content.iso})`;

      element.appendChild(newContent);

      newContent.addEventListener("click", handleDropdownContentClick);
    }
  }
};

const handleUpdate = (event) => {
  const exchange = event.target.value * ratio;
  target.value = exchange.toFixed(2); // toFixed = number의 소수점 자리수를 지정합니다. (반올림)
};

const handleClickChange = (event) => {
  const temp = source.value;
};

const handleDropdownContentClick = (event) => {
  event.preventDefault();
  const parent = event.target.parentElement;
  if (parent.classList.contains("exchange-cal__container--source")) {
    sourceIndex = nation.findIndex((obj) => {
      return obj.iso === event.target.dataset.iso;
    });
    dropdownBtnSource.innerText = nation[sourceIndex].iso;
  } else {
    targetIndex = nation.findIndex((obj) => {
      return obj.iso === event.target.dataset.iso;
    });
    dropdownBtnTarget.innerText = nation[targetIndex].iso;
  }
  ratio = calculateRatio(sourceIndex, targetIndex);
  sourceText.innerText = `1.00000 ${nation[sourceIndex].iso} = `;
  targetMoney.innerText = ratio.toFixed(5);
  targetIso.innerText = nation[targetIndex].iso;
  parent.classList.toggle("hidden");
};

const toggleDropdown = (event) => {
  const hiddenTarget = event.target.nextElementSibling;
  hiddenTarget.classList.toggle("hidden");
};

loadDropdown();

source.addEventListener("input", handleUpdate);
change.addEventListener("click", handleClickChange);
dropdownBtnSource.addEventListener("click", toggleDropdown);
dropdownBtnTarget.addEventListener("click", toggleDropdown);
