import { ReactComponent as Search } from "../../assets/images/search-black.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Ruppe } from "../../assets/images/ruppe.svg";
import { ReactComponent as CurvedArrow } from "../../assets/images/curvedArrow.svg";
import CustomTable from "../../components/CustomTable";
import { getDeliveryTime, getPostTime, stringToHslColor } from "../../utils";
import { useEffect, useState } from "react";
import { getData, searchBuyer } from "../../utils/database";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);  
  
  const columns = [
    {
      title: "Buyer",
      dataIndex: "buyer",
      key: "buyer",
      align: "center",
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
              <span>{data.buyer}</span>
              <div className="buyer_left_title_res">
                <div className="buyer_left_title_res_price">
                  <h1>Price</h1>
                  <div>{data.price}/-</div>
                </div>
                <div className="buyer_left_title_res_tag">
                  <h1>Delivery Time</h1>
                  <div style={{ backgroundColor: color, color: iconColor }} >2 Days</div>
                </div>
              </div>
            </div>
            </div>
            <div className="buyer_btn">
              <span>{getPostTime(data.postDay)}</span>
              <button>
                <CurvedArrow />
                <span>Send Offer</span>
              </button>
            </div>
          </div>
        );
      },
    },
    {
      title: "Project Details",
      dataIndex: "projectDetails",
      key: "projectDetails",
      align: "left",
      //width: '194px',
      render: (data) => {
        return <p>{data.projectDetails}</p>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
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
      align: "center",
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
      align: "center",
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
      align: "center",
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
        <h1>Search Project</h1>
        <div className="dash_search_search-input">
          <input onChange={searchData} type="text" placeholder="Search more projects" />
          <Search />
        </div>
        <div className="dash_search_res-search">
          <input type="text" placeholder="Search more projects" />
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

export default Dashboard;
