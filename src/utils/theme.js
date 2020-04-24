export default {
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "rgba(56, 55, 55, 1)",
      default: "rgba(74, 74, 74, 1)",
    },
    primary: {
      light: "rgba(252, 239, 91, 1)",
      main: "rgba(248, 231, 28, 1)",
      dark: "rgba(46, 45, 6, 1)",
      contrastText: "rgba(0, 0, 0, 1)",
    },
    secondary: {
      light: "rgba(116, 113, 114, 1)",
      main: "rgba(74, 74, 74, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "rgba(248, 231, 28, 1)",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(155, 155, 155, 1)",
      disabled: "rgba(74, 74, 74, 1)",
      hint: "rgba(184, 233, 134, 1)",
    },
  },
  spreader: {
    form: {
      textAlign: "center",
    },
    image: {
      margin: "10px auto 10px auto",
      maxWidth: 150,
    },
    pageTitle: {
      margin: "10px auto 20px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    buttons: {
      marginTop: 20,
      marginBottom: 10,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
    },
    progress: {
      position: "absolute",
    },
  },
};
