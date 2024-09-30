import React from "react";
import userAvatar from "../assets/userAvatar.png";
import styles from "./ProfileWidget.module.css";

const ProfileWidget = () => {

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
    email: "guest@superapp",
    username: "Guest User",
  };

  const seletedGeneres =
    JSON.parse(localStorage.getItem("selectedMovies")) || [];



  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={userAvatar} alt="User Avatar" />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{user?.name}</p>
        <p className={styles.email}>{user?.email}</p>
        <p className={styles.username}>{user?.username}</p>

        <div className={styles.generes}>
          {seletedGeneres?.slice(0, 4)?.map((genere, index) => (
            <div key={index} className={styles.pill}>
              {genere.movie}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProfileWidget;
