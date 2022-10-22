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

const init = () => {
  setDaysToGo();
};

init();
