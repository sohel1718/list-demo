import { ReactComponent as Instagram } from "../../assets/images/insta.svg";
import { ReactComponent as Facebook } from "../../assets/images/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_address">
                <div className="footer_address_logo">
                    <div>Logo</div>
                </div>
                <div className="footer_address_text">
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                </div>
            </div>
            <div className="footer_nav_block">
                    <h1>Company</h1>
                    <span>About</span>
                    <span>Career</span>
                    <span>Team</span>
                    <span>Contact</span>
                </div>
                <div className="footer_nav_block">
                    <h1>Product</h1>
                    <span>Service</span>
                    <span>Feelancer</span>
                    <span>Features</span>
                    <span>Development</span>
                </div>
                <div className="footer_nav_block">
                    <h1>Links</h1>
                    <span>Privacy Policy</span>
                    <span>Term & Conditions</span>
                    <span>FAQ</span>
                </div>
            <div className="footer_social">
                <h1>Follow Us</h1>
                <div className="footer_social_icons">
                    <Twitter />
                    <Facebook />
                    <Instagram />
                </div>
            </div>
        </div>
    )
}

export default Footer