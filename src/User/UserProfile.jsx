import React from "react";
import UserAvatar from "./UserAvatar";

const UserProfile = () => {
  const user = {
    username: "John",
    email: "john@gmail.com",
    url: "https://john.png",
    bio: "Hello, I am John",
  };
  return (
    <div className="App-header">
      <h1>UserProfile</h1>
      <h2>Parent Component</h2>
      <p>username: {user.username}</p>
      <UserAvatar username={user.username} url={user.url}></UserAvatar>
    </div>
  );
};

export default UserProfile;
