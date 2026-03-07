document.getElementById("all-btn").addEventListener("click", (e) => {
  const clickBtn = e.target;
  if (e.target.classList.contains("btn")) {
    removeActive();
    clickBtn.classList.add("btn-primary");
    allIssuesFetch();
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
    console.log(issue);
    allCard.innerHTML += `

<div class="card-box space-y-5 shadow-md p-4 ${statusClassFun(issue.status)}">
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
          '${levelArr(issue.labels)}'
            
          </div>
          <hr class="text-gray-300" />
          <p>${issue.author}</p>
          <p>${issue.createdAt}</p>
        </div>

`;
  });
};
