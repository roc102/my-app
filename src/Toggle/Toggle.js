// create a react toggle switch that will change the subject from Maths to English and Psychology onToggle

import React from "react";

const Toggle = () => {
  const subjects = ["Maths", "English", "Psychology"];
  const [count, setCount] = useState(0);

  const handleToggle = () => {
    setCount((prev) => (prev + 1) % subjects.length);
  };

  return (
    <div>
      <button onClick={handleToggle}>{subjects[count]}</button>
    </div>
  );
};

export default Toggle;
