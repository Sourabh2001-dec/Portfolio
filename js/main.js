AOS.init({
  duration: 1000,
});

const handleChangeProjectType = (ele) => {
  document
    .querySelector(".filter-gallery__tabitem--active")
    .classList.toggle("filter-gallery__tabitem--active");
  ele.classList.toggle("filter-gallery__tabitem--active");
  shuffleInstance.filter(ele.dataset.key);
};

var element = document.querySelector("#shuffle-container");

const groups = ([WEB, REACT, STRAPI, NODEJS, FIREBASE] = [
  {
    name: "Web",
    active: false,
  },
  {
    name: "React",
    active: true,
  },
  {
    name: "Strapi",
    active: true,
  },
  {
    name: "Node JS",
    active: true,
  },
  {
    name: "Firebase",
    active: false,
  },
]);

const projects = [
  {
    name: "Covid 19 Awareness",
    description:
      "It is a covid 19 awareness website which gives information about the virus and its prevention tips. The site also displayed the covid 19 patients statistics using an API.",
    img: "./assets/projects/covid19web.png",
    groups: [WEB],
    stack: [
      `<span class="iconify" data-icon="logos:bootstrap" data-inline="false"></span>`,
      `<span class="iconify" data-icon="mdi:jquery" data-inline="false"></span>`,
      `<span class="iconify" data-icon="vscode-icons:file-type-html" data-inline="false"></span>`,
      `<span class="iconify" data-icon="vscode-icons:file-type-css" data-inline="false"></span>`,
    ],
    link: "https://sourabh2001-dec.github.io/pasc_web_dev/",
  },
  {
    name: "InfoGeek",
    description:
      "It is a blogging platform developed for the use of campus with the features helpful for teachers such as sending mails to a specific class.",
    img: "./assets/projects/infogeek.png",
    groups: [WEB],
    stack: [
      `<span class="iconify" data-icon="logos:bootstrap" data-inline="false"></span>`,
      `<span class="iconify" data-icon="mdi:jquery" data-inline="false"></span>`,
      `<span class="iconify" data-icon="vscode-icons:file-type-php3" data-inline="false"></span>`,
      `<span class="iconify" data-icon="cib:mysql" data-inline="false"></span>`,
    ],
    link: "http://pbl2020pict.000webhostapp.com/",
  },
  {
    name: "Pasckathon 20",
    description:
      "Event website developed for the Packathon hackathon event organized by PASC.",
    img: "./assets/projects/pasckathon.png",
    groups: [WEB],
    stack: [
      `<span class="iconify" data-icon="logos:bootstrap" data-inline="false"></span>`,
      `<span class="iconify" data-icon="vscode-icons:file-type-html" data-inline="false"></span>`,
      `<span class="iconify" data-icon="vscode-icons:file-type-css" data-inline="false"></span>`,
    ],
    link: "",
  },
  {
    name: "DriveFlix",
    description:
      "A movie streaming web app which does not use any paid object storage like AWS or Firebase but instead uses Google drive for video file hosting.",
    img: "./assets/projects/driveflix.png",
    groups: [WEB, REACT, STRAPI],
    stack: [
      `<span class="iconify" data-icon="vscode-icons:file-type-reactjs" data-inline="false"></span>`,
      `<span class="iconify" data-icon="logos:graphql" data-inline="false"></span>`,
      `<span class="iconify" data-icon="vscode-icons:file-type-html" data-inline="false"></span>`,
      `<span class="iconify" data-icon="vscode-icons:file-type-css" data-inline="false"></span>`,
      `<span class="iconify" data-icon="logos:strapi-icon" data-inline="false"></span>`,
    ],
    link: "https://driveflix.netlify.app/",
  },
  {
    name: "DevChat",
    description:
      "A Slack Clone made using React and Firebase with features to make channels and real time messaging.",
    img: "./assets/projects/devchat.png",
    groups: [WEB, REACT, FIREBASE],
    stack: [
      `<span class="iconify" data-icon="vscode-icons:file-type-reactjs" data-inline="false"></span>`,
      `<span class="iconify" data-icon="logos:redux" data-inline="false"></span>`,
      `<span class="iconify" data-icon="logos:semantic-ui" data-inline="false"></span>`,
      `<span class="iconify" data-icon="vscode-icons:file-type-firebase" data-inline="false"></span>`,
    ],
    link: "https://unruffled-clarke-27d41f.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "A simple weather app which uses api to fetch and display the weather of the entered location name.",
    groups: [NODEJS, WEB],
    img: "./assets/projects/weather_app.png",
    stack: [
      `<span class="iconify" data-icon="vscode-icons:file-type-node" data-inline="false"></span>`,
      `<span class="iconify" data-icon="mdi:api" data-inline="false"></span>`,
    ],
    link: "http://climateron.herokuapp.com/",
  },
];

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  // console.log(currentScrollPos)
  let navbar = document.querySelector(".navbar");
  if (currentScrollPos > 500) {
    navbar.classList.add("navbar__mode-float");
  } else {
    navbar.classList.remove("navbar__mode-float");
  }
  prevScrollpos = currentScrollPos;
};

const renderShuffleNavItem = ({ name, active }) => `
<li
  class="filter-gallery__tabitem"
  onclick="handleChangeProjectType(this)"
  data-key="${name}"
>
  ${name}
</li>
`;

groups.map((group) =>
  group.active
    ? document
        .getElementById("shuffle_group_nav")
        .insertAdjacentHTML("beforeend", renderShuffleNavItem(group))
    : ``
);

const renderProjectCard = ({ name, description, img, groups, stack, link }) => `
<div class="col-xs-12 col-md-4 shuffle-item" data-groups='[${groups
  .map((group) => `"${group.name}"`)
  .join(",")}]'>
<div class="u-col-wrapper">
  <div class="filter-gallery__item">
    <div class="filter-gallery__img">
      <img
        src="${img}"
        alt="${name}"
        class="filter-gallery__img-content"
      />
    </div>
    <div class="filter-gallery__item-body">
      <h3 class="filter-gallery__item-title heading-tertiary">
        ${name}
      </h3>
      <p class="filter-gallery__description">
        ${description}
      </p>
      <ul class="filter-gallery__techstack">
      ${stack
        .map((e) => `<li class="filter-gallery__techicon">${e}</li>`)
        .join("")}
      </ul>
      <a
        href="${link}"
        target="_blank"
        class="btn btn-primary btn-small btn-animated filter-gallery__visitbtn"
        >Vist Site</a
      >
    </div>
  </div>
</div>
</div>
`;

projects.map((project) =>
  element.insertAdjacentHTML("beforeend", renderProjectCard(project))
);

var Shuffle = window.Shuffle;

var sizer = element.querySelector("#shuffle-sizer");

var shuffleInstance = new Shuffle(element, {
  itemSelector: ".shuffle-item",
  sizer: sizer, // could also be a selector: '.my-sizer-element'
});

// navbar

document
  .querySelector(".navbar__toggle-icon--open")
  .addEventListener("click", (e) => {
    console.log("open");
    document.querySelector(".navbar__navlist-wrapper").style.display = "flex";
    document.querySelector(".navbar__navlist-wrapper").style.right = 0;
  });
document
  .querySelector(".navbar__toggle-icon--close")
  .addEventListener("click", (e) => {
    document.querySelector(".navbar__navlist-wrapper").style.right = "-70vw";
  });
