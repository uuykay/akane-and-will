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

const setDaysToGo = () => {
  const dateNow = new Date();
  const weddingDate = createSemanticDate({ day: 26, month: 11, year: 2022 });

  const daysUntil = Math.round((weddingDate - dateNow) / (24 * 60 * 60 * 1000));

  const selector = "#days-to-go";
  const element = getElement(selector);

  // Change the value based on date calculation
  if (daysUntil > 0) {
    element.textContent = `${daysUntil} days to go!`;
  } else if (daysUntil === 0) {
    element.textContent = `Today's the day!`;
  }

  // Remove hidden class
  element.classList.remove("invisible");
};

const carouselImageLoad = () => {
  const glider = document.querySelector(".glider");
  const images = glider.querySelectorAll("img[data-src]");
  console.log(images);

  if (images?.length === 0) {
    console.log("selected but early exit");
    glider.removeEventListener("glider-slide-visible", carouselImageLoad);
    return;
  }

  for (let i = 0; i < 2; i++) {
    const image = images?.[i];
    console.log({ image });

    if (!image) {
      continue;
    }

    image.src = image.getAttribute("data-src");
    image.removeAttribute("data-src");
  }
};

const attachCaroselImageLoad = () => {
  document
    .querySelector(".glider")
    .addEventListener("glider-slide-visible", carouselImageLoad);
};

const inviteGuest = ({ name }) => {
  if (!name) {
    return;
  }

  const value = `Invite ${name} to our wedding`;

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

  attachCaroselImageLoad();
  inviteGuest({ name });
};

try {
  init();
} catch (e) {
  console.log(e);
}
