const theme = {
  colors: {
    text: "#1D1D1B",
    background: "#ffffff",
    primary: "#E54415",
    secondary: "#1D1D1B",
    light: "#ffffff",
    dark: "#1D1D1B",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  space: [0, 4, 8, 16, 32, 64, 96, 128, 192, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.3,
    heading: 1.125,
  },
  sizes: {
    container: 1280,
  },
  radii: {
    none: "0",
    small: ".5rem",
    medium: "1rem",
    large: "2rem",
    rounded: "9999px",
  },
  shadows: {
    none: "none",
    default:
      "0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%)",
  },
  text: {
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
      fontSize: 3,
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
    },
  },
  layout: {
    container: {
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
    },
  },
}

export default theme
