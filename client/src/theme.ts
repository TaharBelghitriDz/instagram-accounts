import { extendTheme } from "@chakra-ui/react";

// theme config
export default extendTheme({
  direction: "rtl",

  styles: {
    global: {
      body: {
        p: "0px",
        m: "0px",
        color: "#EEEEEE",
        bg: "#1B1B1B",
        fontSize: "18px",
        fontFamily: "'El Messiri', sans-serif;",
      },
    },
  },
  colors: {
    black: {
      0: "#262626",
    },
    blue: {
      0: "#0F366A",
      1: "#8EBEFF",
    },
    green: {
      0: "#254441",
      1: "#00FFB2",
    },
  },
  shadows: {
    black: "0 0 10px rgb(0,0,0,25%)",
    black2: "0 0 10px rgb(0,0,0,50%)",
  },
  breakpoints: {
    start: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});
