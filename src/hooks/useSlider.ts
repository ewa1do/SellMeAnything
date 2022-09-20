import { useEffect, useState } from 'react';

/**
 *
 * @param {array} slider List of images to show in the slider
 * @param {number} duration Duration of the slider in seconds
 * @returns A state changing values to display in a slider component
 */

export const useSlider = (slider = [], duration = 5) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeImage, setActiveImage] = useState(
    slider[activeSlide]
  );

  const incrementSlide = () => {
    setActiveSlide(activeSlide + 1);
    setActiveImage(slider[activeSlide + 1]);
  };

  const resetSlide = () => {
    setActiveSlide(0);
    setActiveImage(slider[0]);
  };

  const changeActiveSlideImageWhenClick = (idx) => {
    setActiveSlide(idx);
    setActiveImage(slider[idx]);
  };

  useEffect(() => {
    if (activeSlide >= slider.length) {
      resetSlide();
    }

    const interval = setTimeout(() => {
      incrementSlide();
    }, duration * 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [activeSlide]);

  return {
    activeSlide,
    activeImage,
    changeActiveSlideImageWhenClick,
  };
};
