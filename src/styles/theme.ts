import { Colors } from "./const";

export const theme = {
  bg: {
    mainBg: Colors.bg.main,
    darkBg: Colors.bg.dark,
    softBg: Colors.bg.soft,
  },
  colors: {
    mainColor: Colors.colors.main,
    softColor: Colors.colors.soft,
    lightColor: Colors.colors.light,
  },
  breakpoints: {
    sm: '@media (max-width: 480px)',
    md: '@media (max-width: 768px)',
    lg: '@media (max-width: 1024px)',
    xl: '@media (max-width: 1200px)',
    xxl: '@media (max-width: 1400px)',
  },
};