import ImageUploading from 'react-images-uploading';
import ResizeImage from '../ResizeImage/ResizeImage';

const UploadImage =  (props) => {
  const maxNumber= 5;
  
  const onChange = (imageList) => {
      console.log("ImageList: ", imageList);
      const newArray = [...props.images, imageList[0].data_url];
      props.onUploadImages(newArray);
      console.log(newArray);
    };
  
    return (
      <div >
        <ImageUploading
          value={props.images}
          maxNumber={maxNumber}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload
          }) => (
            <div className="upload__image-wrapper">
              <button className="download-btn"
                onClick={onImageUpload}
              >
                Upload Your Images
              </button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <ResizeImage image={image.data_url} />
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    );
  }

export default UploadImage;