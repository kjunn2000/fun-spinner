import React from 'react';
import ImageTrail from '../component/ImageTrail/ImageTrail';
import { getOsakaImageUrls } from '../utils/imageUtils';

const DestOne = () => {

  const fileNames = getOsakaImageUrls();
  return (
    <div style={{ height: '1000px', position: 'relative', overflow: 'hidden', backgroundColor: 'black' }}>
      <ImageTrail
        key={1}
        items={fileNames}
        variant={1}
      />
    </div>
  );
};

export default DestOne;
