document.getElementById("all-btn").addEventListener("click", (e) => {
  const clickBtn = e.target;
  if (e.target.classList.contains("btn")) {
    removeActive();
    clickBtn.classList.add("btn-primary");
    allIssuesFetch();
    if (e.target.id === "open-button") {
      openCloseCardMaker();
    } else {
      openCloseCardMaker();
    }
  }
});

// All Issues fetch
const allIssuesFetch = async () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  const res = await fetch(url);
  const allIssues = await res.json();
  allIssuesDisplay(allIssues.data);
};
// All Issues display
const allIssuesDisplay = (issues) => {
  const allCard = document.getElementById("all-card");
  allCard.innerHTML = "";

  issues.forEach((issue) => {
    // console.log(issue);
    allCard.innerHTML += `

<div class="card-box ${issue.status} space-y-5 shadow-md p-4 ${statusClassFun(issue.status)}">
          <div class="flex justify-between">
            ${statusImgFun(issue.status)}
            <button
              class="btn px-8 rounded-full ${priorityColor(issue.priority)}"
            >
              ${issue.priority.toUpperCase()}
            </button>
          </div>
          <h2 class="text-xl font-bold">
            ${issue.title}
          </h2>
          <p>
             ${issue.description.substring(0, 80)}...
          </p>
          <div>
          ${levelArr(issue.labels)}
            
          </div>
          <hr class="text-gray-300" />
          <p>${issue.author}</p>
          <p>${issue.createdAt}</p>
        </div>

`;
  });
  allCountCard();
};

const openCard = () => {
  const allChildren = document.querySelectorAll(".card-box");
  const openContainer = document.getElementById("open-card");
  const closedContainer = document.getElementById("closed-card");
  allChildren.forEach((children) => {
    if (children.classList.contains("open")) {
      openContainer.appendChild(children.cloneNode(true));
      openCountCard();
    } else {
      closedContainer.appendChild(children.cloneNode(true));
      closedCountCard();
    }
  });
};

const searchDataFetch = async () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  const res = await fetch(url);
  const allData = await res.json();
  const input = document.getElementById("search");
  const searchArr = allData.data.filter((arr) =>
    arr.title.toLowerCase().includes(input.value.toLowerCase()),
  );
  allIssuesDisplay(searchArr);
};

allIssuesFetch();
