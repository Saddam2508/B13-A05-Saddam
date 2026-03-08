
function getValue(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

const removeActive = () => {
  const allBtn = document.querySelectorAll("#all-btn button");
  allBtn.forEach((btn) => btn.classList.remove("btn-primary"));
};

const statusBtnFun = () => {
  const statusBtn = document.querySelectorAll(".count-right .fa-solid");
  statusBtn.forEach((btn) =>
    btn.classList.remove("text-green-500", "text-purple-500"),
  );
};
// showOnly
let btnId = ""
const showOnly = (id, countId) => {
  btnId = id
  const allSection = document.querySelectorAll(
    "#all-card, #open-card, #closed-card",
  );
  const countDisplay = document.querySelectorAll(
    "#all-count-display, #open-count-display, #closed-count-display",
  );
  allSection.forEach((sec) => sec.classList.add("hidden"));

  countDisplay.forEach((count) => count.classList.add("hidden"));

  const selectedSection = document.getElementById(id);
  const selectedCountDisplay = document.getElementById(countId);
  selectedSection.classList.remove("hidden");
  selectedCountDisplay.classList.remove("hidden");
};

// label set

const levelArr = (arr) => {
  let lev = "";
  arr.forEach((level) => {
    if (arr.length > 1) {
      if (
        level === "bug" ||
        level === "enhancement" ||
        level === "documentation"
      ) {
        lev += `
        <button
              class="btn rounded-full btn-soft btn-secondary bg-secondary/20"
            >
              <img src="./assets/BugDroid.png" alt="" />
              <span> ${level} </span>
            </button>
        `;
      } else if (
        level === "help wanted" ||
        level === "good first issue" ||
        level === "enhancement"
      ) {
        lev += `
        <button class="btn rounded-full btn-soft btn-warning bg-warning/20">
              <img src="./assets/Vector.png" alt="" />
              <span>${level}</span>
            </button>
        `;
      }
    } else {
      if (level === "bug") {
        lev += `
        <button
              class="btn rounded-full btn-soft btn-secondary bg-secondary/20"
            >
              <img src="./assets/BugDroid.png" alt="" />
              <span> ${level} </span>
            </button>
        `;
      } else if (level === "documentation") {
        lev += `
        <button
              class="btn rounded-full btn-soft btn-secondary bg-secondary/20"
            >
              <img src="./assets/Vector.png" alt="" />
              <span> ${level} </span>
            </button>
        `;
      } else if (level === "enhancement") {
        lev += `
        <button
              class="btn rounded-full btn-soft btn-accent bg-accent/20"
            >
              <img src="./assets/Sparkle.png" alt="" />
              <span> ${level} </span>
            </button>
        `;
      }
    }
  });
  return lev;
};

// priority color set

const priorityColor = (issuePriority) => {
  let priorityClass = "";

  if (issuePriority === "high") {
    priorityClass = "btn-soft btn-error bg-error/20";
  } else if (issuePriority === "medium") {
    priorityClass = "btn-soft btn-warning bg-warning/20";
  } else if (issuePriority === "low") {
    priorityClass = "btn btn-soft";
  }
  return priorityClass;
};

// priority color set

const statusClassFun = (status) => {
  let statusClass = "";

  if (status === "open") {
    statusClass = "border-t-4 border-t-green-500";
  } else if (status === "closed") {
    statusClass = "border-t-4 border-t-purple-500";
  }
  return statusClass;
};

// status Image set

const statusImgFun = (status) => {
  let statusImage = "";
  if (status === "open") {
    statusImage = `<img src="./assets/Open-Status.png" alt="" />`;
  } else if (status === "closed") {
    statusImage = `<img src="./assets/Closed-Status.png" alt="" />`;
  }
  return statusImage;
};

//All Count card

const allCountCard = () => {
  const allCardChildLength =
    document.getElementById("all-card").children.length;
  const allCardCount = document.getElementById("all-count");
  allCardCount.innerText = allCardChildLength;
};
allCountCard();

//Open Count card

const openCountCard = () => {
  const allCardChildLength =
    document.getElementById("open-card").children.length;
  const allCardCount = document.getElementById("open-count");
  allCardCount.innerText = allCardChildLength;
};

//closed Count card

const closedCountCard = () => {
  const allCardChildLength =
    document.getElementById("closed-card").children.length;
  const allCardCount = document.getElementById("closed-count");
  allCardCount.innerText = allCardChildLength;
};

// create open closed card

const openCloseCardMaker = () => {
  const openContainer = document.getElementById("open-card");
  const closedContainer = document.getElementById("closed-card");
  openContainer.innerHTML = "";
  closedContainer.innerHTML = "";
  openCard();
};

// date formate

const dateFormate = (dat)=>{
  const date = new Date(dat);

const formatted =
  String(date.getDate()).padStart(2, "0") + "/" +
  String(date.getMonth() + 1).padStart(2, "0") + "/" +
  date.getFullYear();

return formatted;
}


// spin section

const manageSpinner = (status) => {
  
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("all-card").classList.add("hidden");
    document.getElementById("open-card").classList.add("hidden");
    document.getElementById("closed-card").classList.add("hidden");
  } else if (btnId === "all-card") {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("all-card").classList.remove("hidden");
  } else if (btnId === "open-card") {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("all-card").classList.add("hidden");
    document.getElementById("open-card").classList.remove("hidden");
  } else{
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("all-card").classList.add("hidden");
    document.getElementById("closed-card").classList.remove("hidden");
  }
};