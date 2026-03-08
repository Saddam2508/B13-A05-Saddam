document.getElementById("all-btn").addEventListener("click", (e) => {
  const clickBtn = e.target;
  if (e.target.classList.contains("btn")) {
    removeActive();
    statusBtnFun();
    clickBtn.classList.add("btn-primary");
    allIssuesFetch();
    if (e.target.id === "open-button") {
      statusBtnFun();
      const statusBtn = document.getElementById("fa-1");
      statusBtn.classList.add("text-green-500");
      openCloseCardMaker();
      return;
    } else if (e.target.id === "closed-button") {
      statusBtnFun();
      const statusBtn = document.getElementById("fa-2");
      statusBtn.classList.add("text-purple-500");
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

<div onclick = "loadWordDetail(${issue.id})" class="card-box ${issue.status} space-y-5 shadow-md p-4 ${statusClassFun(issue.status)}">
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

const loadWordDetail = async (id) => {
  console.log(id);
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data);
};

const displayWordDetails = (word) => {
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
  <div class="card-box ${word.status} space-y-5 shadow-md p-4">
          <div onclick = "loadWordDetail(${word.id})" class="flex justify-between">
           
          
          </div>
          <h2 class="text-xl font-bold">
            ${word.title}
          </h2>
          <div class = "flex gap-6 items-center">
          <button class = "btn rounded-full text-white ${word.status === "open" ? "bg-green-500": "bg-purple-500"}">${word.status}</button>
          <ul class = "flex gap-7 list-disc items-center">
          <li> ${word.status} by ${word.assignee ? word.assignee : "Unassigned"} </li>
          <li> ${dateFormate(word.createdAt)} </li>
          </ul>
          </div>
          <p>
             ${word.description}
          </p>
          <div>
          ${levelArr(word.labels)}
            
          </div>
          <hr class="text-gray-300" />
         <div class = "flex justify-between items-center">
         <div>
         <p> assignee:</p>
         <h2> ${word.assignee ? word.assignee : "Unassigned"} </h2>
         </div>
         <div class = "text-center">
         <p> Priority:</p>
       <button
              class="btn px-4 rounded-full ${priorityColor(word.priority)}"
            >
              ${word.priority.toUpperCase()}
         </button>
         </div>
         </div>
        </div>
  
  `;
  document.getElementById("word_modal").showModal();
};
