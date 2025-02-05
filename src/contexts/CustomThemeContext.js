import React, { createContext } from "react";

const CustomThemeContext = createContext();

function CustomThemeProvider({ onToggleTheme, selectedTheme, children }) {
  return (
    <CustomThemeContext.Provider 
      value={{
        onToggleTheme,
        selectedTheme,
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  )
}


export { CustomThemeContext, CustomThemeProvider };