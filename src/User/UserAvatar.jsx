import React from "react";

const UserAvatar = (props) => {
  return (
    <>
      <h1>UserAvatar</h1>
      <h2>Child Component</h2>
      <p>profile pic: {props.url}</p>
    </>
  );
};

export default UserAvatar;
