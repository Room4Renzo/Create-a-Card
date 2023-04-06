import ImageUploading from 'react-images-uploading';
import { useState } from 'react';
import ResizeImage from '../ResizeImage/ResizeImage';

const UploadImage =  () => {
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              onClick={onImageUpload}
            >
             Upload Image
            </button>
           
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <ResizeImage image={image['data_url']}  />
                <div className="image-item__btn-wrapper">
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadImage;