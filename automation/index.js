const fs = require("fs");
const { createTemplate } = require("./create-template");

// English
fs.writeFileSync(
  `${__dirname}/../index.html`,
  createTemplate({
    lang: "en",
    title: "Akane and Will's Wedding",
    metaDescription: "Akane and Will invite you to share in our special day.",
    h1: "Akane and Will",
    location: "26th November 2022 - Rumsey Rose Garden, 2150",
    daysToGoDefault: "Our special day is now but a fond memory.",
    ourStory: "Our Story",
    ourFirstDateCaption: "Our first date - Hyde Park",
    sharingHobbiesCaption: "Sharing hobbies",
    ourFavouriteBearCaption: "Our favourite bear",
    beachCaption: "Life's a beach",
    teamRocketCaption: "Being silly together",
    handHoldingCaption: "Never letting you go",
    shadowHeartsCaption: "Two hearts as one",
    ceremonyLocationTitle: "Ceremony Location",
    ceremonyLocationContent: [
      {
        type: "p",
        content:
          "The wedding ceremony is being held at the Rumsey Rose Garden, within Parramatta Park.",
      },
      {
        type: "p",
        content: [
          {
            type: "blank",
            content: "We recommend entering the park from the ",
          },
          {
            type: "a",
            content: "corner of Pitt St and Macquarie St, Parramatta",
            props: {
              target: "_blank",
              href: "https://www.google.com/maps/place/33%C2%B048'50.4%22S+150%C2%B059'52.6%22E/@-33.813991,150.9973905,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x468f5f88d0d0ee04!7e2!8m2!3d-33.8139908!4d150.9979392",
            },
          },
          {
            type: "blank",
            content: " where the Rumsey Rose Garden is close by.",
          },
        ],
      },
    ],
    parkingDetails:
      "Parking is available adjacent to the rose garden, as well as along Railway Parade.",
    trainDetails:
      "The location is easily accessible by public transport, located 10 minutes by walk from Parramatta train station.",
    receptionTitle: "Reception",
    receptionContent: [
      {
        type: "p",
        content:
          "Following the ceremony, we would love to have our guests join us at the Palace Chinese Restaurant for the reception dinner.",
      },
      {
        type: "p",
        content:
          "If you have any dietary preferences or restrictions please let us know when RSVP'ing so we can accommodate.",
      },
    ],
    address: "Address",
    commencing: "Commencing",
    rsvpTitle: "RSVP",
    rsvpContent:
      "Please reach out to Will or Akane to let us know if you can join us for our special day. In order to plan for our day, we kindly request that you let us know to add you to the guest list by 1st November 2022.",
    footer: "Handcrafted with love by Will",
  })
);

// Chinese
fs.writeFileSync(
  `${__dirname}/../zh.html`,
  createTemplate({
    lang: "zh",
    title: "Akane 和 Will's 婚礼",
    metaDescription: "Akane 和 Will 邀请您分享我们的特殊日子。",
    h1: "Akane and Will",
    location: "2022 年 11 月 26 日 - 拉姆齐玫瑰园，2150",
    daysToGoDefault: "我们的特殊日子现在只是一个美好的回忆。",
    ourStory: "我们的故事",
    ourFirstDateCaption: "我们的第一次约会 - 海德公园",
    sharingHobbiesCaption: "分享爱好",
    ourFavouriteBearCaption: "分享爱好",
    beachCaption: "享受海滩",
    teamRocketCaption: "一起傻",
    handHoldingCaption: "永远不让你走",
    shadowHeartsCaption: "两心合一",
    ceremonyLocationTitle: "仪式地点",
    ceremonyLocationContent: [
      {
        type: "p",
        content: "婚礼在 Parramatta 公园内的 Rumsey Rose Garden 举行。",
      },
      {
        type: "p",
        content: [
          {
            type: "blank",
            content: "我们建议从 ",
          },
          {
            type: "a",
            content: "Parramatta 的 Pitt St 和 Macquarie St",
            props: {
              target: "_blank",
              href: "https://www.google.com/maps/place/33%C2%B048'50.4%22S+150%C2%B059'52.6%22E/@-33.813991,150.9973905,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x468f5f88d0d0ee04!7e2!8m2!3d-33.8139908!4d150.9979392",
            },
          },
          {
            type: "blank",
            content: " 的拐角处进入公园，Rumsey Rose Garden 就在附近。",
          },
        ],
      },
    ],
    parkingDetails: "玫瑰园附近以及铁路游行沿线设有停车场。",
    trainDetails:
      "乘坐公共交通工具可轻松抵达该位置，距离 Parramatta 火车站有 10 分钟步行路程。",
    receptionTitle: "婚宴",
    receptionContent: [
      {
        type: "p",
        content:
          "仪式结束后，我们很乐意邀请我们的客人在皇宫中餐厅参加招待晚宴。",
      },
      {
        type: "p",
        content:
          "如果您有任何饮食偏好或限制，请在确认您的出席时告知我们，以便我们满足您的要求。",
      },
    ],
    address: "地址",
    commencing: "开始",
    rsvpTitle: "确认您的预订",
    rsvpContent:
      "请联系 Will 或 Akane，让我们知道您是否可以参加我们的特殊日子。 为了计划我们的一天，我们恳请您告知我们，以便在 2022 年 11 月 1 日之前将您添加到宾客名单中。",
    footer: "Will 用爱手工制作",
  })
);

// Japanese
fs.writeFileSync(
  `${__dirname}/../ja.html`,
  createTemplate({
    lang: "ja",
    title: "Akane と Will's 結婚式",
    metaDescription: "Akane と Will は、私たちの特別な日にあなたを招待します。",
    h1: "Akane and Will",
    location: "2022 年 11 月 26 日 - ラムゼイ ローズ ガーデン、",
    daysToGoDefault: "私たちの特別な日は今では懐かしい思い出です。",
    ourStory: "私たちの物語",
    ourFirstDateCaption: "私たちの最初のデート - ハイドパーク",
    sharingHobbiesCaption: "趣味の共有",
    ourFavouriteBearCaption: "趣味の共有",
    beachCaption: "ビーチを楽しむ",
    teamRocketCaption: "一緒にバカに",
    handHoldingCaption: "あなたを手放すことはありません",
    shadowHeartsCaption: "二つの心をひとつに",
    ceremonyLocationTitle: "挙式場所",
    ceremonyLocationContent: [
      {
        type: "p",
        content:
          "結婚式は、パラマタ公園内のラムゼイ ローズ ガーデンで行われます。",
      },
      {
        type: "p",
        content: [
          {
            type: "a",
            content:
              "ラムゼイ ローズ ガーデンが近くにあるパラマタのピット ストリート",
            props: {
              target: "_blank",
              href: "https://www.google.com/maps/place/33%C2%B048'50.4%22S+150%C2%B059'52.6%22E/@-33.813991,150.9973905,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x468f5f88d0d0ee04!7e2!8m2!3d-33.8139908!4d150.9979392",
            },
          },
          {
            type: "blank",
            content:
              " とマッコーリー ストリートの角から公園に入るのをお勧めします。",
          },
        ],
      },
    ],

    parkingDetails:
      "駐車場は、バラ園に隣接するほか、レイルウェイ パレード沿いにもあります。",
    trainDetails:
      "場所は、公共交通機関で簡単にアクセスでき、Parramatta 鉄道駅から徒歩 10 分です。",
    receptionTitle: "結婚披露宴",
    receptionContent: [
      {
        type: "p",
        content:
          "セレモニーの後は、パレス チャイニーズ レストランでのレセプション ディナーにご参加ください。",
      },
      {
        type: "p",
        content:
          "食事の好みや制限がある場合は、出席を確認する際にお知らせください。リクエストに対応できます。",
      },
    ],
    address: "住所",
    commencing: "始まる",
    rsvpTitle: "予約を確認する",
    rsvpContent:
      "ウィルまたはアカネに連絡して、私たちの特別な日に参加できるかどうかをお知らせください. 私たちの日の計画を立てるために、2022 年 11 月 1 日までにゲストリストにあなたを追加するようお知らせください。",
    footer: "ウィルが愛情を込めて手作り",
  })
);
