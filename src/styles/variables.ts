import { math } from 'polished';

export const variables = {
  // misc
  gutter: '30px',
  segmentPadding: '200px',

  // grid
  gridColumnCount: 12,
  baseline: '16px',

  // page dimensions
  pageWidth: '1290px',
  pageLimit: () => math(`${variables.pageWidth} + ${variables.breakpoints.lg.gutter} * 2px`),

  // fonts
  font: {
    family: '"Roboto", sans-serif',
    familyHeading: '"Open Sans", sans-serif',
    size: '16px',
    sizeMin: '13px',
    lineHeight: 1.5,
  },

  // colors
  colors: {
    primary: '#F5BB00',
    font: '#333',
    background: '#fff',
    placeholder: '#ddd',
  },

  // breakpoints
  breakpoints: {
    sm: { width: '420px', gutter: '30px' }, //  mobile
    md: { width: '720px', gutter: '50px' }, //  tablet
    lg: { width: '1080px', gutter: '70px' }, // desktop
  },

  // vertical breakpoints
  verticalBreakpoints: [
    { height: '920px', scale: 0.975 },
    { height: '800px', scale: 0.95 },
    { height: '690px', scale: 0.925 },
  ],
};

export const breakpoints = Object.entries(variables.breakpoints).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: value.width,
  }),
  {},
) as { [K in keyof typeof variables['breakpoints']]: string };
