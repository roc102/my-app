import React from "react";

const UserAvatar = (props) => {
  return (
    <div>
      <h1>UserAvatar</h1>
      <p>Profile Pic: {props.url} </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserAvatar;
