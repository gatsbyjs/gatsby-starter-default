module.exports = {
  important: true,
  theme: {
    // minWidth: {
    //   "80": "197px",
    //   "24": "24px",
    //   "0": "0",
    //   "1/4": "25%",
    //   "1/2": "50%",
    //   "3/4": "75%",
    //   full: "100%",
    // },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdx: "834px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      lgx: "1152px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    minWidth: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "220": "220px",
      "768": "768px",
    },
    // maxWidth: {
    //   "960": "960px",
    // },
    // borderWidth: {
    //   "25": "25px",
    // },
    // borderColor: theme => ({
    //   brand: "#092e3e",
    // }),
    // textColor: {
    //   lightGrey: "#737373",
    //   secondary: "#ffed4a",
    //   danger: "#e3342f",
    // },
    extend: {
      width: {
        "335": "335px",
        "275": "275px",
        "250": "250px",
      },
      height: {
        "335": "335px",
        "275": "275px",
        "250": "250px",
      },
      maxWidth: {
        "960": "960px",
      },
    },
  },
}
