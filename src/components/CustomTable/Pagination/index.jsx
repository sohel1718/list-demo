import { ReactComponent as RightArrow } from '../../../assets/images/right_arrow.svg';

const Pagination = () => {
    return (
       <div className="pagination">
         <div className="pagination_wrapper">
            <div className="pagination_wrapper_left">
                <RightArrow />
            </div>
            <div className="pagination_wrapper_content">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            <div className="pagination_wrapper_right">
                <RightArrow />
            </div>
        </div>
       </div>
    )
}

export default Pagination;