import Typography from 'typography';

const options = {
  baseFontSize: '16px',
  baseLineHeight: '24px',
  bodyFontFamily: '"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
  headerFontFamily: '"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
  bodyWeight: 300,
  headerWeight: 600,
  boldWeight: 600,
  modularScales: [
    {
      "scale": "minor third"
    }
  ]
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
