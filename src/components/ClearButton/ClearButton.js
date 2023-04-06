
const ClearButton = (props) => {
    
  const onClick = () => {
        props.setImageUrls();
        props.setMessage();
        props.onClearButtonClick();
    };
  
    return (
        <button className="download-btn" onClick={onClick}>
          Clear Card
        </button>
    );
  };
  
  export default ClearButton;
  