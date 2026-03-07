function getValue(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}

const removeActive = () => {
  const allBtn = document.querySelectorAll("#all-btn button");
  allBtn.forEach((btn) => btn.classList.remove("btn-primary"));
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
