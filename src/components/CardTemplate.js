import "./CardTemplate.css";

const CardTemplate = ({ image, className}) => {
  // const [image, setImage] = useState(props);
  // const [clicked, setClicked] = useState(false);
  // const uploadImage = () => {
  //     setImage(Deer);
  //     setClicked(!clicked);
  // }

  return (
    <div className="card-template-container">
      <img src={image} className={className}/>
      {/* <img src={Deer} onClick={uploadImage}/> */}
      {/* <div className="rectangle" >
                { clicked ? <img src={Deer} /> : <div></div> }
            </div> */}
    </div>
  );
};

export default CardTemplate;
