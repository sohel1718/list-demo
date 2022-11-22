import CustomTable from "../../components/CustomTable";
import { ReactComponent as Search } from "../../assets/images/search-black.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Ruppe } from "../../assets/images/ruppe.svg";
import { ReactComponent as CurvedArrow } from "../../assets/images/curvedArrow.svg";
import { getDeliveryTime, getPostTime, stringToHslColor } from "../../utils";
import { useEffect, useState } from "react";
import { getData, searchBuyer } from "../../utils/database";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);  
  
  const columns = [
    {
      title: "Buyer",
      dataIndex: "buyer",
      key: "buyer",
      className: "text_center jc_left",
      render: (data) => {
        let color = stringToHslColor(data.buyer);
        let iconColor = stringToHslColor(data.buyer, 50, 40);
        return (
          <div className="buyer">
            <div className="buyer_left">
            <div style={{ backgroundColor: color }} className="buyer_left_avatar">
              <User style={{ fill: iconColor }} />
            </div>
            <div className="buyer_left_title">
              {data.buyer}
            </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Project Details",
      dataIndex: "projectDetails",
      key: "projectDetails",
      className: "text_left jc_left",
      //width: '194px',
      render: (data) => {
        return <p className="details_text text_ellipse" >{data.projectDetails}</p>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      className: "text_center jc_center",
      //width: '194px',
      render: (data) => {
        return (
          <span className="price">
            <Ruppe />
            {data.price}
          </span>
        );
      },
    },
    {
      title: "Delivery Time",
      dataIndex: "deliveryTime",
      key: "deliveryTime",
      className: "text_center jc_center",
      //width: '194px',
      render: (data) => {
        let color = stringToHslColor(data.buyer);
        let textColor = stringToHslColor(data.buyer, 50, 40);
        return (
          <div
            style={{ backgroundColor: color, color: textColor }}
            className="tag fw_600"
          >
            {getDeliveryTime(data.deliveryTime)}
          </div>
        );
      },
    },
    {
      title: "Post Day",
      dataIndex: "postDay",
      key: "postDay",
      className: "text_center jc_center",
      //width: '194px',
      render: (data) => {
        return (
          <span className="capitlize fw_600">{getPostTime(data.postDay)}</span>
        );
      },
    },
    {
      title: "Offer",
      dataIndex: "offer",
      key: "offer",
      aclassName: "text_center jc_center",
      //width: '194px',
      render: (data) => {
        return <span className="fw_600">{data.offer}</span>;
      },
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      //width: '194px',
      render: () => {
        return (
          <button className="send-btn">
            <CurvedArrow />
            <span>Send Offer</span>
          </button>
        );
      },
    },
  ];

  const searchData = (e) => {
    const { value } = e.target;
    setData(searchBuyer(value));
  }

  return (
    <div className="dash">
      <div className="dash_search">
        <div className="dash_search_search-input">
          <input onChange={searchData} type="text" placeholder="Search more projects" />
          <Search />
        </div>
        <div className="dash_search_res-search">
          <input onChange={searchData} type="text" placeholder="Search more projects" />
          <button>
            <Search />
          </button>
        </div>
      </div>
      <div className="dash_table-container">
        <CustomTable
          className="projects-table"
          columns={columns}
          dataSource={data}
          PageSize={5}
        />
      </div>
    </div>
  );
};

export default Projects;
