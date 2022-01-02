function loading() {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 2000);
  setTimeout(() => {
    document.getElementById("drawer").style.transform = "translateX(0%)";
  }, 3000);
}

function commingSoon() {
  document.querySelectorAll(".category.disabled").forEach((disabled) => {
    disabled.addEventListener("click", () => {
      alert("Comming Soon");
    });
  });
}

function bodyCheck() {
  const HOME = "tt-body-index";
  const POST = "tt-body-page";
  const CATEGORY_LIST = "tt-body-category";
  const SEARCH_LIST = "tt-body-search";
  const GUESTBOOK_LIST = "tt-body-guestbook";

  const bodyType = document.querySelector("#body").dataset.type;
  switch (bodyType) {
    case HOME:
      document.querySelector("#drawer").style.display = "flex";
      document.querySelector("#contents").style.display = "flex";
      document.querySelector("#page").style.display = "none";
      break;
    case POST:
      document.querySelector("#drawer").style.display = "none";
      document.querySelector("#contents").style.display = "none";
      document.querySelector("#page").style.display = "flex";
      break;
    case CATEGORY_LIST:
      document.querySelector("#drawer").style.display = "flex";
      document.querySelector("#contents").style.display = "flex";
      document.querySelector("#page").style.display = "none";
      break;
    case SEARCH_LIST:
      document.querySelector("#drawer").style.display = "flex";
      document.querySelector("#contents").style.display = "flex";
      document.querySelector("#page").style.display = "none";
      break;
    case GUESTBOOK_LIST:
      document.querySelector("#drawer").style.display = "none";
      document.querySelector("#contents").style.display = "none";
      document.querySelector("#page").style.display = "none";
      break;
    default:
      break;
  }
}

function setNow() {
  const now = moment().format("LL");
  document.querySelector(".now .date").innerHTML = now;
}

function init() {
  loading();
  commingSoon();
  bodyCheck();

  // Works
  renderWorksStatus();
  renderWorks();
}

window.onload = function () {
  setNow();
  init();
};

// 페이지 타입	body_id (data-body-type)
// 홈화면	tt-body-index
// 글화면	tt-body-page
// 카테고리 글 리스트	tt-body-category
// 보관함 글 리스트	tt-body-archive
// 태그 리스트	tt-body-tag
// 검색결과 리스트	tt-body-search
// 방명록	tt-body-guestbook
// 지역로그	tt-body-location
