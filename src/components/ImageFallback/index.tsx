import { FC, useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageFallbackProps extends ImageProps {
  src: string;
  alt: string;
}

const ImageFallback: FC<ImageFallbackProps> = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc('/no_image.png')}
      {...props}
    />
  );
};

export default ImageFallback;
