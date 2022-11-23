import { ReactComponent as CurvedArrow } from "../../../../assets/images/curvedArrow.svg";
import { ReactComponent as User } from "../../../../assets/images/user.svg";

const ListItem = () => {
    return (
        <div className='project-list_item'>
        <div className='project-list_item_left'>
          <div className='project-list_item_left_avatar'>
            <User />
          </div>
          <div className='project-list_item_left_info'>
            <span className='project-list_item_left_info_name'>Sohel Chhipa</span>
            <div className='project-list_item_left_info_details'>
              <div className='project-list_item_left_info_details_price'>
                <div className="project-list_item_left_info_details_price_title" >Price</div>
                <h1>800/-</h1>
              </div>
              <div className='project-list_item_left_info_details_time'>
                <div className='project-list_item_left_info_details_time_title' >Delivery Time</div>
                <div className='project-list_item_left_info_details_time_tag'>
                  2 Days
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='project-list_item_right'>
          <div className='project-list_item_right_time'>2 Days Ago</div>
          <button className='send-btn'>
            <CurvedArrow />
            <span>Send Offer</span>
          </button>
        </div>
      </div>
    )
}

export default ListItem