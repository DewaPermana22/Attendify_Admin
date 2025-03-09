import { useTheme } from 'next-themes';
type ColorScheme = {
    background : string;
    primary : string;
    text_gray : string;
    text : string;
    hover_button : string;
    hover_text : string;
    primaryLight100 : string;
    primaryLight400 : string;
  };

  
  const UseColor = () : ColorScheme => {
    const {theme, systemTheme} = useTheme();
    const themeNow = theme === "system" ? systemTheme : theme;
    return {
      background : themeNow === "dark" ? "#f1ebfc" : "#f5f5f5",
      primary : themeNow === "dark" ? "#f1ebfc" : "#FF725E",
      text_gray : "#6C757D",
      text : "#252525",
      hover_button : themeNow === "dark" ? "#0e315d" : "#83deff",
      hover_text : themeNow === "dark" ? "#1eabff" : "#0e315d",
      primaryLight100 : "#d6f2ff",
      primaryLight400 : "#48caff",
    }
  };
  
  export default UseColor