import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => setData(data));
  }, []);

  return <div>App</div>;
};

export default App;

/*
import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? (
        <p>Welcome, John!</p>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default App;
*/
