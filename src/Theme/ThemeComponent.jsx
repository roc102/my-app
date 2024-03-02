import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  const themeStyles = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#1677FF" : "#fff",
  };

  return (
    <div style={themeStyles}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeComponent;
