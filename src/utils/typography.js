import Typography from 'typography'

const typography = new Typography({

  googleFonts: [
    {
      name: "Inter",
      styles: ["300", "400", "600", "700" ,"800"],
    },
  ],
  headerFontFamily: ["Inter", "sans-serif"],
  bodyFontFamily: ["Inter", "sans-serif"],
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  scaleRatio: 1.6,
  // See below for the full list of options.

overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    "h1, h2": {
      marginTop: rhythm(2),
    },
    h1: {
      letterSpacing: "-1.2px",
    },
    h2: {
      letterSpacing: "-0.5px",
    },
    h3: {
      ...scale(1 / 5),
      color: "rgb(76,86,106)", //nord4
      marginBottom: rhythm(0.5),
    },
    h5: {
      letterSpacing: "-0.5px",
      fontStyle: "bold", 
    },
    h6: {
      fontWeight: options.bodyWeight,
      letterSpacing: "-0.5px",
      //marginRight: rhythm(0),
    },
    blockquote: {
      ...scale(1 / 5),
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    figcaption: {
      color: "rgb(0,0,0)",
    },
  }),
})

// Output CSS as string.
//typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography;