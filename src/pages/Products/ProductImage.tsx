import { Carousel } from '../../components/UI/Carousel';
import { ImageCarouselProps } from '../../interfaces';

export const ProductImage = ({ images, thumbnail, duration }: ImageCarouselProps) => {
  return (
    <Carousel
      images={images}
      thumbnail={thumbnail}
      duration={duration}
    />
  );
};
