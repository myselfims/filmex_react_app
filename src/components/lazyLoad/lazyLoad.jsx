import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Img = ({ image }) => (
  <div className='backgournd-image'>
    <LazyLoadImage
      effect='blur'
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width} 
      placeholderSrc={image.src}
      />
    <span>{image.caption}</span>
  </div>
);

export default Img;