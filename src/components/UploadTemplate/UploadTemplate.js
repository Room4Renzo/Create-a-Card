import ImageUploading from 'react-images-uploading';
import ResizeImage from '../ResizeImage/ResizeImage';

const UploadTemplate =  (props) => {
  const maxNumber= 1;
  
  const onChange = (imageList) => {
      console.log("ImageList: ", imageList);
      const newTemplate = imageList[0].data_url;
      props.onUploadTemplate(newTemplate);
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
                Upload Template
              </button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <CardTemplate templateUrl={image.data_url} />
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    );
  }

export default UploadTemplate;