import React from "react";
import UserProfile from "./User/UserProfile";
import "./App.css";
import ThemeComponent from "./Theme/ThemeComponent";
import ThemeProvider from "./Theme/ThemeContext";

const App = () => {
  return (
    <div className="center">
      <ThemeProvider>
        <ThemeComponent />
      </ThemeProvider>
    </div>
  );
};

export default App;
