import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SlideButton from "./SlideButton";
import "./Slider.css";
import "./SlideItem.css";
import img1 from "../../../assets/icons/card/shinhan.png";
import img2 from "../../../assets/icons/card/kb.png";
import img3 from "../../../assets/icons/card/woori.png";
import img4 from "../../../assets/icons/card/hyundai.png";

const Slider = () => {
  const [isSwiping, setIsSwiping] = useState(false);
  const 양끝에_추가될_데이터수 = 2;
  const [currentIndex, setCurrentIndex] = useState(양끝에_추가될_데이터수);
  //   ------------------------
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const [slideTransition, setTransition] = useState(transitionStyle);
  //   ------------------------
  const items = [img1, img2, img3, img4];
  // const items = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg"];
  const itemSize = items.length;
  //   ------------------------

  const sliderPadding = 40;
  const sliderPaddingStyle = `0 ${sliderPadding}px`;
  //   ------------------------
  const setSlides = () => {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < 양끝에_추가될_데이터수) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
  };
  let slides = setSlides();

  //   ------------------------

  const [slideX, setSlideX] = useState(null);
  const [prevSlideX, setPrevSlideX] = useState(false);
  //   ------------------------

  const handleSlide = (index) => {
    setCurrentIndex(index);
    if (index - 양끝에_추가될_데이터수 < 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index - 양끝에_추가될_데이터수 >= itemSize) {
      index -= itemSize;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  };

  const replaceSlide = (index) => {
    setTimeout(() => {
      setTransition("");
      setCurrentIndex(index);
    }, transitionTime);
  };

  const handleSwipe = (direction) => {
    setIsSwiping(true);
    handleSlide(currentIndex + direction);
  };
  //   ------------------------

  const getItemIndex = (index) => {
    index -= 양끝에_추가될_데이터수;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  };
  //   ------------------------
  const handleTouchStart = (e) => {
    setPrevSlideX((prevSlideX) => getClientX(e));
  };

  const handleTouchMove = (e) => {
    if (prevSlideX) {
      setSlideX((slideX) => getClientX(e) - prevSlideX);
    }
  };
  const getClientX = (event) => {
    return event._reactName === "onTouchStart"
      ? event.touches[0].clientX
      : event._reactName === "onTouchMove" || event._reactName === "onTouchEnd"
      ? event.changedTouches[0].clientX
      : event.clientX;
  };
  //   ------------------------
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };
  const [windowWidth, windowHeight] = useWindowSize();
  const getNewItemWidth = () => {
    let itemWidth = windowWidth * 0.9 - sliderPadding * 2;
    itemWidth = itemWidth > 1060 ? 1060 : itemWidth;
    return itemWidth;
  };
  const newItemWidth = getNewItemWidth();

  //   ------------------------
  const handleMouseSwipe = (e) => {
    if (slideX) {
      const currentTouchX = getClientX(e);
      if (prevSlideX > currentTouchX + 100) {
        handleSlide(currentIndex + 1);
      } else if (prevSlideX < currentTouchX - 100) {
        handleSlide(currentIndex - 1);
      }
      setSlideX((slideX) => null);
    }
    setPrevSlideX((prevSlideX) => null);
  };
  //   ------------------------

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    handleSwipe(1);
  }, 5000);
  return (
    <div className="slider-area">
      <div className="slider">
        <SlideButton direction="prev" onClick={() => handleSwipe(-1)} />
        <SlideButton direction="next" onClick={() => handleSwipe(1)} />
        <div className="slider-list" style={{ padding: sliderPaddingStyle }}>
          <div
            className="slider-track"
            onMouseOver={() => setIsSwiping(true)}
            onMouseOut={() => setIsSwiping(false)}
            style={{
              transform: `translateX(calc(${
                (-100 / slides.length) * (0.5 + currentIndex)
              }% + ${slideX || 0}px))`,
              transition: slideTransition,
            }}
          >
            {slides.map((slide, slideIndex) => {
              const itemIndex = getItemIndex(slideIndex);
              return (
                <div
                  key={slideIndex}
                  className={`slider-item ${
                    currentIndex === slideIndex ? "current-slide" : ""
                  }`}
                  style={{ width: newItemWidth || "auto" }}
                  onMouseDown={handleTouchStart}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onMouseMove={handleTouchMove}
                  onMouseUp={handleMouseSwipe}
                  onTouchEnd={handleMouseSwipe}
                  onMouseLeave={handleMouseSwipe}
                >
                  <a>
                    <img src={items[itemIndex]} alt={`banner${itemIndex}`} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
