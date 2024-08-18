import { AppElement } from "./elements.js";

export const toggleDarkMode = () => {
  console.log(AppElement);
  AppElement?.classList.toggle("App--isDark");

  // saveToDB("darkModeFlag", AppElement?.classList.contains("App--isDark"));
  if(AppElement.classList.contains('App--isDark')){
    localStorage.setItem('darkMod' , 'dark')
  }else{
    localStorage.setItem('darkMod' , 'light')
  }

};
