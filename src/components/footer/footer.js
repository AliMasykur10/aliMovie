import "./footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <Link to="/">
            <img src={logo} alt="alimibra logo" title="alimovie" />
          </Link>
          <p>copyright &copy; alimibra</p>
        </div>
        <div className="footer-right">
          <div className="social-media">
            <div className="instagram" title="Instagram">
              <Link to="https://www.instagram.com/alimibra_art/" target="_blank">
                <box-icon type="logo" name="instagram" color="#ffffff"></box-icon>
              </Link>
            </div>
            <div className="linkedin" title="LinkedIn">
              <Link to="https://www.linkedin.com/in/ali-masykur-155564219/" target="_blank">
                <box-icon name="linkedin" type="logo" color="#ffffff"></box-icon>
              </Link>
            </div>
            <div className="facebook" title="Facebook">
              <Link to="https://www.facebook.com/alyfounder.messy" target="_blank">
                <box-icon type="logo" name="facebook-square" color="#ffffff"></box-icon>
              </Link>
            </div>
            <div className="github" title="GitHub">
              <Link to="https://github.com/AliMasykur10" target="_blank">
                <box-icon type="logo" name="github" color="#ffffff"></box-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
