const theme = {
  colors: {
    text: "#1D1D1B",
    background: "#ffffff",
    lightBackground: "#fafafa",
    primary: "#E54415",
    secondary: "#1D1D1B",
    light: "#ffffff",
    dark: "#1D1D1B",
    lightGrey: "#999999",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  space: [0, 4, 8, 16, 32, 48, 64, 96, 128, 192, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  sizes: {
    container: 1280,
  },
  radii: {
    none: "0",
    sm: ".5rem",
    md: "1rem",
    lg: "2rem",
    full: "9999px",
  },
  shadows: {
    none: "none",
    default:
      "0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%)",
  },
  text: {
    default: {
      lineHeight: "body",
    },
    display: {
      fontSize: [5, 7],
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      textTransform: "uppercase",
    },
    displaySmall: {
      fontSize: [5],
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      textTransform: "uppercase",
      color: "dark",
    },
    heading: {
      fontSize: 7,
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "primary",
    },
    headingSmall: {
      fontSize: 5,
      fontWeight: "bold",
      color: "primary",
    },
    lead: {
      fontSize: 4,
      color: "dark",
      textTransform: "uppercase",
      fontWeight: "body",
      lineHeight: "heading",
    },
    caption: {
      fontSize: 0,
      color: "lightGrey",
      fontWeight: "bold",
    },
  },
  layout: {
    container: {
      padding: [3, 4],
    },
    sm: {
      maxWidth: "720px",
      padding: [3, 4],
    },
    md: {
      maxWidth: "1020px",
      padding: [3, 4],
    },
    fw: {
      maxWidth: "100%",
      padding: [3, 4],
    },
  },
  links: {
    nav: {
      "&.active": {
        color: "primary",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      a: {
        color: "primary",
        "&:hover": {
          textDecoration: "none",
        },
      },
      "--swiper-theme-color": "#E54415",
      ".swiper-container": { pb: 5 },
    },
  },
}

export default theme
