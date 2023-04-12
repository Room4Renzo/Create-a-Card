import "./Footer.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<div className="footer-container">
				<p>Created by  <a href="https://github.com/ljenchik" > <FontAwesomeIcon icon={faGithub} />  ljenchik</a> and  <a href="https://github.com/Room4Renzo" ><FontAwesomeIcon icon={faGithub} /> Renzo</a> </p>
		</div>
	);
};

export default Footer;
