const getElement = (selector) => {
  return document.querySelector(selector);
};

const setTextContent = ({ selector, value }) => {
  const element = getElement(selector);
  element.textContent = value;
  return element;
};

const createSemanticDate = ({ day, month, year }) => {
  // Month counts 0-11 for Date. Input the expected month
  return new Date(year, month - 1, day);
};

const languageContentSwitch = ({ en, zh, ja }) => {
  const language = getElement("html").getAttribute("lang");

  if (language.startsWith("zh")) {
    return zh;
  } else if (language.startsWith("ja")) {
    return ja;
  }

  return en;
};

const setDaysToGo = () => {
  const dateNow = new Date();
  const weddingDate = createSemanticDate({ day: 26, month: 11, year: 2022 });

  const daysUntil = Math.round((weddingDate - dateNow) / (24 * 60 * 60 * 1000));

  const selector = "#days-to-go";
  const element = getElement(selector);

  const language = getElement("html").getAttribute("lang");

  // Change the value based on date calculation
  if (daysUntil > 0) {
    element.textContent = languageContentSwitch({
      en: `${daysUntil} days to go!`,
      zh: `还有${daysUntil}天！`,
      ja: `あと${daysUntil}日！`,
    });
  } else if (daysUntil === 0) {
    element.textContent = languageContentSwitch({
      en: `Today's the day!`,
      zh: `今天的日子！`,
      ja: `今日がその日です！`,
    });
  }

  // Remove hidden class
  element.classList.remove("invisible");
};

const carouselImageLoad = () => {
  const glider = document.querySelector(".glider");
  const images = glider.querySelectorAll("img[data-src]");

  for (let i = 0; i < images.length; i++) {
    const image = images?.[i];

    if (!image) {
      continue;
    }

    image.src = image.getAttribute("data-src");
    image.removeAttribute("data-src");
  }
};

const inviteGuest = ({ name }) => {
  if (!name) {
    return;
  }

  const value = languageContentSwitch({
    en: `Invite you, ${name}, to our wedding`,
    zh: `邀请你，${name}，参加我们的婚礼`,
    ja: `${name}さんを私たちの結婚式にご招待`,
  });

  console.log({ name });

  value && setTextContent({ selector: "#invitation", value });
};

const init = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("invitation");

  setDaysToGo();
  // Relies on Glider being present
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    dots: "#dots",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });

  // attachCaroselImageLoad();

  setTimeout(carouselImageLoad, 1000);

  inviteGuest({ name });
};

try {
  init();
} catch (e) {
  console.log(e);
}
