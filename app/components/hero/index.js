"use client";
import styles from "./styles.module.scss";
import Container from "../container";
import Image from "next/image";

// assets
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
import logo4 from "../../assets/logo-4.png";

import slider1 from "../../assets/slider-1.png";
import slider2 from "../../assets/slider-20.png";
import slider3 from "../../assets/slider-3.png";
import slider4 from "../../assets/slider-40.png";

import searchIcon from "../../assets/search.png";
import {useState} from "react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const items = [
    {
      id: 1,
      logo: logo1,
      slider: slider1,
    },
    {
      id: 2,
      logo: logo2,
      slider: slider2,
    },
    {
      id: 3,
      logo: logo3,
      slider: slider3,
    },
    {
      id: 4,
      logo: logo4,
      slider: slider4,
    },
  ];

  const calculateRotation = (activeSlide) => {
    switch (activeSlide) {
      case 1:
        return 0;
        break;
      case 2:
        return 80;
        break;
      case 3:
        return 180;
        break;
      case 4:
        return 273;
        break;
      default:
        return 0;
    }
  };

  return (
    <div className={`${styles.hero} slider${activeSlide}`}>
      <h1 className={styles.logo}>RESTAURANT</h1>

      <Container styleProps={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
        <div className={styles.wraper}>
          <h1>BREAKFAST</h1>
          <p>
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet. Eating a healthy
            breakfast can improve concentration and performance, boost physical
            endurance, and lower cholesterol levels.
          </p>
          <div className={styles.tabs}>
            {items.map((item) => {
              return (
                <div className={`${styles.tab} active`} key={item?.id}>
                  <Image
                    onClick={() => setActiveSlide(item.id)}
                    src={item?.logo}
                  />
                  {activeSlide == item.id && <span></span>}
                </div>
              );
            })}
          </div>
          <div className={styles.form}>
            <input type="text" placeholder="Search...." />
            <span>
              <Image src={searchIcon} />
            </span>
          </div>
        </div>
        <div className={styles.wraperRight}>
          <div
            style={{transform: `rotate(${calculateRotation(activeSlide)}deg)`}}>
            <Image src={slider1} />
            <Image src={slider4} />
            <Image src={slider2} />
            <Image src={slider3} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
