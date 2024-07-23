const theme = {
  colors: {
    text: "#131E26",
    background: "#ffffff",
    lightBackground: "#fafafa",
    primary: "#00a889",
    secondary: "#00a889",
    light: "#ffffff",
    dark: "#131E26",
    lightGrey: "#999999",
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
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
    xs: ".25rem",
    sm: ".5rem",
    md: "1rem",
    lg: "2rem",
    full: "9999px",
  },
  shadows: {
    none: "none",
    default:
      "0 20px 40px -10px rgba(50,50,93,0.15),0 10px 30px -20px rgba(0,0,0,0.15)",
  },
  text: {
    default: {
      lineHeight: "body",
    },
    kicker: {
      textAlign: "center",
      letterSpacing: "0.5",
      my: 3,
      color: "primary",
      width: "fit-content",
      maxWidth: "fit-content",
      minWidth: "fit-content",
      /*       borderRadius: "40px",
      border: "1px solid", */
      borderColor: "primary",

      textTransform: "uppercase",
      fontSize: "18px",
      fontWeight: 500,
    },
    heading: {
      fontSize: [5],
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "primary",
    },
    h1: {
      fontSize: [6, 7],
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "primary",
      mb: 3,
    },
    h2: {
      fontSize: [5, 6],
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "primary",
      mb: 3,
      mt: 4,
    },
    h3: {
      fontSize: [5],
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "primary",
      mb: 3,
      mt: 4,
    },
    h4: {
      fontSize: 4,
      fontWeight: "bold",
      color: "primary",
      mb: 2,
      mt: 4,
    },
    h5: {
      fontSize: 4,
      color: "dark",
      fontWeight: "body",
      lineHeight: "heading",
      mb: 2,
      mt: 4,
    },
    h6: {
      fontSize: 3,
      color: "dark",
      fontWeight: "body",
      lineHeight: "heading",
      mb: 2,
      mt: 4,
    },
    caption: {
      fontSize: 0,
      color: "lightGrey",
      fontWeight: "bold",
    },
    article: {
      fontSize: 3,
      lineHeight: 1.5,
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
    header: {
      maxWidth: "100%",
    },
  },
  buttons: {
    primary: {
      cursor: "pointer",
      color: "light",
      bg: "primary",
      "&:hover": {
        bg: "dark",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
  },
  links: {
    nav: {
      paddingX: 3,
      paddingY: 3,
      backgroundColor: "primary",
      "&.active": {
        color: "primary",
      },
    },
    tab: {
      textDecoration: "none",
      mr: 3,
      color: "text",
      "&.active": {
        color: "primary",
        fontWeight: "bold",
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
      "--swiper-theme-color": "#00a889",
      ".swiper-container": { pb: 5 },
    },
  },
}

export default theme
