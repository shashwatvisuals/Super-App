import React from "react";
import styles from "./CarouselPage.module.css";
import NewsWidget from "../components/NewsWidget";
import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";
import TimerWidget from "../components/TimerWidget";
import NotesWidget from "../components/NotesWidgets";

const CarouselPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileWidget}>
        <ProfileWidget />
      </div>
      <div className={styles.weatherWidget}>
        <WeatherWidget />
      </div>
      <div className={styles.newsWidget}>
        <NewsWidget />
      </div>
      <div className={styles.timerWidget}>
        <TimerWidget />
      </div>
      <div className={styles.timerWidget}>
        <NotesWidget />
      </div>
    </div>
  );
};

export default CarouselPage;
