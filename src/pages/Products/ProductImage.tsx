import { Carousel } from '@/components/UI/';
import { ImageCarouselProps } from '@/interfaces';

export const ProductImage = ({ images, thumbnail, duration }: ImageCarouselProps) => {
  return (
    <Carousel
      images={images}
      thumbnail={thumbnail}
      duration={duration}
    />
  );
};
