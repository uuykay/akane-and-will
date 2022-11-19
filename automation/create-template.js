const contentJsonProcessor = ({ type, content, props }) => {
  switch (type) {
    case "p":
      return `<p>${content}</p>`;
    case "a":
      const { target, href } = props;
      return `<a target="${target}" href="${href}">${content}</a>`;

    default:
      return `${content}`;
  }
};

const contentJsonArrayProcessor = (contentJsonArray) => {
  return contentJsonArray
    .map((contentJson) => {
      if (Array.isArray(contentJson.content)) {
        return contentJsonArrayProcessor(contentJson.content);
      }
      return contentJsonProcessor(contentJson);
    })
    .join("");
};

const createTemplate = ({
  lang,
  title,
  metaDescription,
  h1,
  location,
  daysToGoDefault,
  ourStory,
  ourFirstDateCaption,
  sharingHobbiesCaption,
  ourFavouriteBearCaption,
  beachCaption,
  teamRocketCaption,
  handHoldingCaption,
  shadowHeartsCaption,
  ceremonyLocationTitle,
  ceremonyLocationContent,
  parkingDetails,
  trainDetails,
  receptionTitle,
  receptionContent,
  address,
  commencing,
  rsvpTitle,
  rsvpContent,
  footer,
}) => {
  const time = new Date().getTime();

  return /*html*/ `<!DOCTYPE html>
<html lang="${lang}">
  <head>
    <link rel="icon" type="image/x-icon" href="./images/favicon.ico?" />
    <link rel="stylesheet" href="style.css?${time}" />
    <link rel="stylesheet" href="normalize.css" />
    <link rel="stylesheet" href="./libs/glider/glider.min.css" />
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <meta
      name="description"
      content="${metaDescription}"
    />
  </head>
  <body>
    <img
      class="rose"
      alt=""
      id="rose-left"
      src="./images/rose-clipped-min.jpg"
    />
    <img
      class="rose invert"
      alt=""
      id="rose-right"
      src="./images/rose-clipped-min.jpg"
    />
    <section>
      <div class="text-center text-content-section">
        <h1 class="font-cursive">${h1}</h1>
        <div id="invitation">&nbsp;</div>
        <p class="uppercase font-weight-bold">
          ${location}
        </p>
        <p class="uppercase font-weight-bold">12-2pm</p>
        <p id="days-to-go" class="invisible font-weight-bold">${daysToGoDefault}</p>
      </div>
      <div class="text-content-section">
        <h2>${ourStory}</h2>
        <div class="glider-contain">
          <div class="glider">
            <section>
              <div class="center-wrapper h-100">
                <figure class="h-100">
                  <img
                    class="carousel-image rounded-border"
                    loading="lazy"
                    alt=""
                    src="./images/will-and-akane.jpg"
                    width="797"
                    height="1049"
                  />
                  <figcaption>${ourFirstDateCaption}</figcaption>
                </figure>
              </div>
            </section>
            <section>
              <div class="center-wrapper h-100">
                <figure class="h-100">
                  <img
                    class="carousel-image rounded-border"
                    loading="lazy"
                    alt=""
                    data-src="./images/IMG_20210912_151611.jpg"
                  />
                  <figcaption>${sharingHobbiesCaption}</figcaption>
                </figure>
              </div>
            </section>
            <section>
              <div class="center-wrapper h-100">
                <figure class="h-100">
                  <img
                    class="carousel-image rounded-border"
                    loading="lazy"
                    alt=""
                    data-src="./images/IMG_20200819_191357.jpg"
                  />
                  <figcaption>${ourFavouriteBearCaption}</figcaption>
                </figure>
              </div>
            </section>
            <section>
              <div class="center-wrapper h-100">
                <figure class="h-100">
                  <img
                    class="carousel-image rounded-border"
                    loading="lazy"
                    alt=""
                    data-src="./images/IMG_20200905_123142.jpg"
                  />
                  <figcaption>${beachCaption}</figcaption>
                </figure>
              </div>
            </section>
            <section>
              <div class="center-wrapper h-100">
                <figure class="h-100">
                  <img
                    class="carousel-image rounded-border"
                    loading="lazy"
                    alt=""
                    data-src="./images/IMG_20201031_122507.jpg"
                  />
                  <figcaption>${teamRocketCaption}</figcaption>
                </figure>
              </div>
            </section>
            <section>
              <div class="center-wrapper h-100">
                <figure class="h-100">
                  <img
                    class="carousel-image rounded-border"
                    loading="lazy"
                    alt=""
                    data-src="./images/IMG_20200801_152617.jpg"
                  />
                  <figcaption>${handHoldingCaption}</figcaption>
                </figure>
              </div>
            </section>
            <section>
              <div class="center-wrapper h-100">
                <figure class="h-100">
                  <img
                    class="carousel-image rounded-border"
                    loading="lazy"
                    alt=""
                    data-src="./images/IMG_20201227_160807.jpg"
                  />
                  <figcaption>${shadowHeartsCaption}</figcaption>
                </figure>
              </div>
            </section>
          </div>
          <button aria-label="Previous" class="glider-prev">
            <img
              class="carousel-control"
              alt="previous"
              src="./icons/chevron-left.svg"
            />
          </button>
          <button aria-label="Next" class="glider-next">
            <img
              class="carousel-control invert"
              alt="next"
              src="./icons/chevron-left.svg"
            />
          </button>
          <div role="tablist" id="dots"></div>
        </div>
      </div>
      <div class="text-content-section">
        <h2>${ceremonyLocationTitle}</h2>
        <div class="center-wrapper">
          <img
            width="700"
            height="594"
            alt=""
            class="rounded-border mw-100 h-auto"
            src="./images/ceremony-location.jpg"
          />
        </div>
					${contentJsonArrayProcessor(ceremonyLocationContent)}
        <p>
          <strong>${address}: </strong
          ><a
            target="_blank"
            href="https://www.google.com.au/maps/place/Rumsey+Rose+Garden/@-33.814451,150.9976884,19z/data=!4m5!3m4!1s0x6b12a2e0850dda3b:0xc503714b169d214d!8m2!3d-33.8142438!4d150.9974148"
            >Rumsey Rose Garden</a
          >
        </p>
        <p><strong>${commencing}:</strong> 12:00pm</p>
        <p class="left-wrapper">
          <span aria-hidden="true" class="mr-2">🚗</span>${parkingDetails}
        </p>
        <p class="left-wrapper">
          <span aria-hidden="true" class="mr-2">🚃</span>${trainDetails}</p>
      </div>
      <div class="text-content-section">
        <h2>${receptionTitle}</h2>
        <div class="center-wrapper">
          <img
            class="mw-100"
            loading="lazy"
            alt="Palace Chinese Restaurant"
            src="./images/palace-chinese-restaurant.png"
          />
        </div>
        ${contentJsonArrayProcessor(receptionContent)}
        <p>
          <strong>${address}: </strong
          ><a
            target="_blank"
            href="https://www.google.com/maps/place/Palace+Chinese+Restaurant/@-33.8719036,151.2068077,17z/data=!3m2!4b1!5s0x6b12ae42db355f4f:0x6151d5291f9cee0c!4m5!3m4!1s0x6b12ae3e36c3ade5:0x37c8c02601d56fd3!8m2!3d-33.8719036!4d151.2090017"
            >Shop 38 Level 1 Piccadilly Tower, 133/145 Castlereagh St, Sydney
            NSW 2000</a
          >
        </p>
        <p><strong>${commencing}:</strong> 6:30pm</p>
      </div>
      <div class="text-content-section">
        <h2>${rsvpTitle}</h2>
        <p>${rsvpContent}</p>
      </div>
    </section>
    <footer class="text-content-section">
      <small>${footer}</small>
    </footer>
    <script src="./libs/glider/glider.min.js"></script>
    <script src="index.js?${time}"></script>
  </body>
</html>`;
};

module.exports = {
  createTemplate,
};
