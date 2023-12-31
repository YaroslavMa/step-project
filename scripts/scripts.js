// services-out ---------------------------------------------
let servMenu = document.querySelector(".services-menu");
let servContent = document.querySelector(".services-content");

servMenu.addEventListener("click", (event) => {
  servMenu
    .querySelector(".services-menu-activ")
    ?.classList.toggle("services-menu-activ");
  let target = event.target;
  if (target.closest("li")) {
    target.classList.toggle("services-menu-activ");
  }
  let contId = target.dataset.for;
  console.log(contId);
  servContent
    .querySelector(".services-content-active")
    ?.classList.toggle("services-content-active");
  servContent
    .querySelector(`.services-content-item[data-for="${contId}"]`)
    ?.classList.toggle("services-content-active");
});
// work ------------------------------------------
const workTabsItem = document.querySelectorAll(".work-tabs-item");
// const workTabsItem = document.querySelectorAll(".work-tabs-item");
let workTabs = document.querySelector(".work-tabs");
let workBtnmore = document.querySelector(".work-btnmore");
let containerLoadig = document.querySelector(".container-loading")
// const workTabs = document.querySelector(".work-tabs-nav");
function work() {
  const workContainer = document.querySelector(".work-content");
  console.log(workTabs);
  for (let i = 1; i <= 12; i++) {
    const array = ["graphic-design", "web-design", "landing-page", "wordpress"];

    const index = Math.floor(Math.random(1) * array.length);
    const data = array[index];
    const newData = data.replace(/(\s?-\s?)|\s/g, " ");
    const li = `
    <li class="work-content-item ${data} ">
    <img src="./img/work/work(${i}).jpg" alt="wordpress" style="width: 285px; height: 211px;">
    <div class="work-content-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="43" viewBox="0 0 88 43" fill="none">
        <g clip-path="url(#clip0_2143_233)">
          <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
            fill="#1FDAB5" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
            fill="#18CFAB" />
          <rect x="60" y="17" width="12" height="11" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_2143_233">
            <rect width="88" height="43" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h2 class="work-content-hidden-title">creative design</h2>
      <p class="work-content-hedden-text">${newData}</p>
    </div>
  </li> 
  `;
    workContainer.innerHTML += li;
  }
}

function filter() {
  workTabs.addEventListener("click", (event) => {
    const targetId = event.target.dataset.tab,
      target = event.target;

    if (target.classList.contains("work-tabs-item")) {
      workTabsItem.forEach((item) => {
        item.classList.remove("work-active");
        target.classList.add("work-active");
      });
    }
    switch (targetId) {
      case "all":
        // getItems("work-content-item");
        getItems("all");
        break;
      case "graphic-design":
        getItems(targetId);
        break;
      case "web-design":
        getItems(targetId);
        break;
      case "landing-page":
        getItems(targetId);
        break;
      case "wordpress":
        getItems(targetId);
        break;
    }
  });
}
workBtnmore.addEventListener('click',() =>{
  containerLoadig.classList.remove('work-active');
  workBtnmore.remove();
  function addLi(){
    workMore()
    function workMore() {
      const workContainer = document.querySelector(".work-content");
      for (let i = 12; i <= 24; i++) {
        const array = ["graphic-design", "web-design", "landing-page", "wordpress"];
        const index = Math.floor(Math.random(1) * array.length);
        const data = array[index];
        const newData = data.replace(/(\s?-\s?)|\s/g, " ");
        const li = `
        <li class="work-content-item ${data} ">
        <img src="./img/work/work(${i}).jpg" alt="wordpress" style="width: 285px; height: 211px;">
        <div class="work-content-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="88" height="43" viewBox="0 0 88 43" fill="none">
            <g clip-path="url(#clip0_2143_233)">
              <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                fill="#1FDAB5" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                fill="#18CFAB" />
              <rect x="60" y="17" width="12" height="11" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_2143_233">
                <rect width="88" height="43" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h2 class="work-content-hidden-title">creative design</h2>
          <p class="work-content-hedden-text">${newData}</p>
        </div>
      </li> 
      `;
        workContainer.innerHTML += li;
      }
    }
    
    containerLoadig.remove()

  }
  setTimeout(addLi, 3000)
})

work();
filter();

// filter();
function getItems(className) {
  let workContentItem = document.querySelectorAll(".work-content-item");
  workContentItem.forEach((item) => {
    item.classList.remove("filter");
    if (className !== "all" && !item.classList.contains(className)) {
      item.classList.add("filter");
    }
  });
}
