const getElement = (selector) => {
  return document.querySelector(selector);
};

const setTextContent = ({ selector, value }) => {
  const element = getElement(selector);
  element.textContent = value;
};

const createSemanticDate = ({ day, month, year }) => {
  // Month counts 0-11 for Date. Input the expected month
  return new Date(year, month - 1, day);
};

const setDaysToGo = () => {
  const dateNow = new Date();
  const weddingDate = createSemanticDate({ day: 26, month: 11, year: 2022 });

  const daysUntil = Math.round((weddingDate - dateNow) / (24 * 60 * 60 * 1000));

  if (daysUntil > 0) {
    setTextContent({
      selector: "#days-to-go",
      value: `${daysUntil} days to go!`,
    });
  } else if (daysUntil === 0) {
    setTextContent({
      selector: "#days-to-go",
      value: `Today's the day!`,
    });
  } else {
    setTextContent({
      selector: "#days-to-go",
      value: `Thank you for coming to our wedding.`,
    });
  }
};

const init = () => {
  setDaysToGo();
};

init();
