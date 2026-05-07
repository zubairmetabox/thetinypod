const CDN = "https://framerusercontent.com";

export const img = (filename: string) => `${CDN}/images/${filename}`;
export const asset = (filename: string) => `${CDN}/assets/${filename}`;

export const IMAGES = {
  // product
  pod:       img("a7VnQO6yE1i4ztnanLV1aWhCyo.png"),
  screenOff: img("gbaHXZrQ9joaRAMv3WfU1rh4IK8.png"),
  tini:      img("IYc0rMbAITqGQeAEFo0OBXbfNhs.png"),

  // hero / backgrounds
  hero1: img("w57WLWk8CMezkSVZtS1sg5tcqi0.png"),
  hero2: img("cmV31b0IR7aC2wQd7SnRjo4klI.png"),
  hero3: img("5FegqzzK7NLHwPcw4fbCiMPDJU.png"),
  hero4: img("eCZh1afZT1HexSEZCV9r4FkPoU.png"),
  hero5: img("dVCbTJB93mdP3tJ5rw8C6kwILc.png"),

  // app icons
  apps: {
    music:      img("vaFtcov22m44dmK6HRjiawWXSM.png"),
    messaging:  img("7nmPbeIquelHEuuyGccFA4KBIho.png"),
    maps:       img("1dkPIqUt2MPz0lm4LRM9P9oMvvw.png"),
    mail:       img("VAIuWDUF0ZYICBoy3Cg11lgLo.png"),
    calendar:   img("z8ZBugtaRCemd7zUxt0bdPQQQ2k.png"),
    calculator: img("V9l7t2G5lU8lCzeTqKy6HoD9Ddw.png"),
    news:       img("DwTUSKz9iLmboyDkNAApaR5yLo.png"),
    audiobooks: img("GOrSr8EJqmR7A1DA60TnsOtio0.png"),
    voiceMemo:  img("pgT1V9o2dPHb3teMEzk6BApPQ.png"),
    timer:      img("b8tA4S36Vl0HS4NHmpTvJdVhw.png"),
    siri:       img("GCiniPyww1UK6zy5jxbt9PwxaLc.png"),
    photos:     img("TmaejFjzeII4ZjvAHn0v7kjExA.png"),
    phone:      img("duICdoJHt4VdWplEB6UQsJ19xbQ.png"),
    screenOff:  img("sGgquc5Ke1pi2s1CsFxdpuHagPQ.png"),
  },

  // gallery / reviews (numbered 1–15)
  gallery: [
    img("UsgrMip0Q2jwZ7RebKQwzobpgHE.png"),
    img("s9fACb9BE0Cwdzj2CeY126IJjs.png"),
    img("pm7QRqoYL0OAEHE3Zvoxk3BwY.png"),
    img("g2aGii2LlEr8QgXLrkS5tlyLA0.png"),
    img("3CIbhPL88hyGrptpfSMfzm2Kag.png"),
    img("TrleQJzWSFE36xzzCCdBhXsq8ds.png"),
    img("zM9fEnqrQpmQhVpjePhzieOYgM.png"),
    img("3oM0CnF9G0dZtGtmBnQhEtw84.png"),
    img("6SxTOJX1lRiYDrthOiDi4o2BU.png"),
    img("tmYw4Adujhpg5uEm4FiHJeybU.png"),
    img("uedAle7v0plz5eVL07xcIs5TZ6U.png"),
    img("nav0cebVaDpCDxGyHMQJsQj7rU.png"),
    img("xSzud2ycijSKSR3SkgFQClngZws.png"),
    img("Po1JlxYEkUs5bFyIGfHr7iW0cg.png"),
    img("FzvdBmfAC7nxAu0VmdXKgARk0s.png"),
  ],

  // videos
  videos: {
    main:  asset("lIKi7zrqLcQd1Su1zNLKKJqm618.mp4"),
    demo1: asset("rERm4OOb4L3u0qQUsBVFEcWYU4o.mp4"),
    demo2: asset("4cOZC1PSd4RmNmYg5fqAhPAtvNI.mp4"),
    demo3: asset("PQ18HYAHn85ABsjFC7yGnNOlP0E.mp4"),
    demo4: asset("uiDhRkWWuOm1287nQCj5zRK9w.mp4"),
    demo5: asset("LYP2gVHKKCtRMfXrdg8ovXGPQ4.mp4"),
  },
} as const;
