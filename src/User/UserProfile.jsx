import React from "react";
import UserAvatar from "./UserAvatar";

const user = {
  username: "john",
  email: "john@gmail.com",
  url: "https://john.png",
  bio: "Hello, I am John",
};

const UserProfile = () => {
  return (
    <div>
      <h1>UserProfile</h1>
      <p>username: {user.username}</p>
      <UserAvatar username={user.username} url={user.url} bio={user.bio} />
    </div>
  );
};

export default UserProfile;
