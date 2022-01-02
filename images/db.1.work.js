const work = [
  {
    catogory: "Retrospect",
    order: 1,
    date: "2022. 01. 03",
    title: "개발 프로세스를 어디까지 자동화 할 수 있을까?",
    link: "/39",
    translation: ["ko", ""],
    status: "done"
  },
  {
    catogory: "New Features",
    order: 1,
    date: "2022. 01. 03",
    title: "스크롤을 내리면, 사라지는 헤더",
    link: "/43",
    translation: ["ko", ""],
    status: "todo"
  },
  {
    catogory: "New Features",
    order: 1,
    date: "2022. 01. 03",
    title: "멀티 드래그 리스트",
    link: "/42",
    translation: ["ko", ""],
    status: "todo"
  },
  {
    catogory: "New Features",
    order: 1,
    date: "2022. 01. 03",
    title: "가이드 모달",
    link: "/40",
    translation: ["ko", ""],
    status: "todo"
  }
];

function renderWorksStatus() {
  document.querySelector(".new-features .number").innerHTML = work.filter(
    (w) => w.catogory === "New Features"
  ).length;
  document.querySelector(".project-issues .number").innerHTML = work.filter(
    (w) => w.catogory === "Project's Issues"
  ).length;
  document.querySelector(".ci-cd-test .number").innerHTML = work.filter(
    (w) => w.catogory === "CI/CD Test"
  ).length;
  document.querySelector(".retrospect .number").innerHTML = work.filter(
    (w) => w.catogory === "Retrospect"
  ).length;
}

function renderWorks(category) {
  let posts = [];
  if (category) {
    posts = work.filter((w) => w.catogory === category);
  } else {
    posts = work;
  }

  let tbody = "";
  posts.forEach((post) => {
    let tr = "";
    tr += "<tr>";
    tr += '  <td class="blue left">#' + post.catogory + "</td>";
    tr += "  <td>" + post.date + "</td>";
    tr += '  <td class="blue">';
    tr += '    <a href="' + post.link + '">';
    tr += "      " + post.title + "";
    tr += "    </a>";
    tr += "  </td>";
    tr += "  <td>";
    if (post.translation.includes("ko")) {
      tr += '    <span class="tag green">KO</span>';
    }
    if (post.translation.includes("en")) {
      tr += '    <span class="tag pink">EN</span>';
    }
    tr += "  </td>";
    tr += '  <td class="center">';
    if (post.status === "done") {
      tr += '    <span class="tag green">DONE</span>';
    } else if (post.status === "doing") {
      tr += '    <span class="tag yellow">DOING</span>';
    } else {
      tr += '    <span class="tag pink">TODO</span>';
    }
    tr += "  </td>";
    tr += "</tr>";
    tbody += tr;
  });

  document.querySelector("#post-table tbody").innerHTML = tbody;
}
