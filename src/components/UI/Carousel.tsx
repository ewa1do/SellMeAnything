import Proptypes from 'prop-types';

import { useSlider } from '../../hooks/useSlider';

/**
 *
 * @param {string} thumbnail Thumbnail to be shown first on the slider
 * @param {array} images An array containing the images to be rendered on the slider
 * @param {number} duration The duration of each slide in seconds
 * @returns An image Carousel with a thumbnail and a pagination for the remaining images
 */

export const Carousel = ({ thumbnail, images, duration }) => {
  const imageSlider = [thumbnail, ...images];

  const {
    activeImage,
    activeSlide,
    changeActiveSlideImageWhenClick,
  } = useSlider(imageSlider, duration);

  return (
    <>
      <picture className='flex justify-center'>
        <img
          src={activeImage}
          className='w-70 h-48'
        />
      </picture>

      <ul className='flex justify-center my-2'>
        {imageSlider.map((_, i) => {
          return (
            <li
              key={i}
              className={`${
                activeSlide === i
                  ? 'bg-slate-900'
                  : 'bg-slate-700'
              } h-2 w-2 mx-1 mt-3 rounded-full hover:bg-slate-900 cursor-pointer`}
              onClick={() => changeActiveSlideImageWhenClick(i)}
            ></li>
          );
        })}
      </ul>
    </>
  );
};

Carousel.Proptypes = {
  thumbnail: Proptypes.string.isRequired,
  images: Proptypes.arrayOf(Proptypes.string).isRequired,
  duration: Proptypes.number,
};
