import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Message } from "../../assets/images/message.svg";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import { ReactComponent as DownArrow } from "../../assets/images/down_arrow_coloered.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";


const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <div className="header_left_logo">
                    <div>Logo</div>
                </div>
                <div className="header_left_search">
                    <input type="text" placeholder="What are you looking here eg. freelancer, projects" />
                    <button>
                        <Search />
                    </button>
                </div>
            </div>
            <div className="header_right">
                <div className="header_right_nav">
                    <span>Post Project</span>
                    <span>Search Project</span>
                </div>
                <div className="header_right_icons">
                    <div className="header_right_icons_icon">
                        <Message />
                        <span>4</span>
                    </div>
                    <div className="header_right_icons_icon">
                        <Heart />
                        <span>4</span>
                    </div>
                </div>
                <div className="header_right_menu">
                    <div className="header_right_menu_avatar"></div>
                    <DownArrow />
                </div>
            </div>
            <div className="header_right-mobile">
                <Menu />
            </div>
        </div>
    )
}

export default Header