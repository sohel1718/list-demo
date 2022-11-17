import { ReactComponent as Search } from "../../assets/images/search-black.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Ruppe } from "../../assets/images/ruppe.svg";
import { ReactComponent as CurvedArrow } from "../../assets/images/curvedArrow.svg";
import CustomTable from "../../components/CustomTable";
import moment from "moment/moment";
import { stringToHslColor } from "../../utils";

const getDeliveryTime = (date) => {
  let formatDate = moment(date, "DD/MM/YYYY");
  let startDate = moment();
  var duration = moment.duration(formatDate.diff(startDate));
  //var days = Number(duration.asDays());
  let res = getDuration(duration, formatDate);
  return res;
};

const getPostTime = (date) => {
  let formatDate = moment(date, "DD/MM/YYYY");
  let startDate = moment();
  var duration = moment.duration(startDate.diff(formatDate));
  //var days = Number(duration.asDays());
  let res = getPrevDuration(duration, formatDate);
  return res;
};

export const getPrevDuration = (duration, date) => {
  let seconds = duration.asSeconds();
  let minutes = duration.asMinutes();
  let hours = duration.asHours();
  let days = duration.asDays();
  let months = duration.asMonths();
  let years = duration.asYears();

  if (minutes >= 525600) {
    return `${years.toFixed()} year ago`;
  } else if (months >= 1) {
    return moment(date).format("MMM DD");
  } else if (days < 2) {
    if (seconds < 60) {
      return "now";
    } else if (minutes <= 1) {
      return `${minutes?.toString()?.split(".")[0]} min ago`;
    } else if (minutes > 1 && minutes < 60) {
      return `${minutes?.toString()?.split(".")[0]} mins ago`;
    } else if (minutes >= 60 && minutes < 120) {
      return `${hours?.toString()?.split(".")[0]} hour ago`;
    } else if (minutes >= 120 && minutes < 1440) {
      return `${hours?.toString()?.split(".")[0]} hours ago`;
    } else {
      return `${days?.toString()?.split(".")[0]} day ago`;
    }
  } else if (days > 1) {
    return `${days?.toString()?.split(".")[0]} days ago`;
  }
};

export const getDuration = (duration, date) => {
  let seconds = duration.asSeconds();
  let minutes = duration.asMinutes();
  let hours = duration.asHours();
  let days = duration.asDays();
  let months = duration.asMonths();
  let years = duration.asYears();

  if (minutes >= 525600) {
    return `${years.toFixed()} year`;
  } else if (months >= 1) {
    return moment(date).format("MMM DD");
  } else if (days < 2) {
    if (seconds < 60) {
      return "now";
    } else if (minutes <= 1) {
      return `${minutes?.toString()?.split(".")[0]} min`;
    } else if (minutes > 1 && minutes < 60) {
      return `${minutes?.toString()?.split(".")[0]} mins`;
    } else if (minutes >= 60 && minutes < 120) {
      return `${hours?.toString()?.split(".")[0]} hour`;
    } else if (minutes >= 120 && minutes < 1440) {
      return `${hours?.toString()?.split(".")[0]} hours`;
    } else {
      return `${days?.toString()?.split(".")[0]} day`;
    }
  } else if (days > 1) {
    return `${days?.toString()?.split(".")[0]} days`;
  }
};

const Dashboard = () => {
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

  const dataSource = [
    {
      id: 1,
      buyer: "Albert Flores",
      projectDetails:
        "This is a freelance proposal template and example. Learn how to write a project or bid proposal and get hired for more projects faster.",
      price: 200,
      deliveryTime: "21/11/2022",
      postDay: "15/11/2022",
      offer: "250",
    },
    {
      id: 2,
      buyer: "Sohel Chhipa",
      projectDetails:
        "Learn how to write a project or bid proposal and get hired for more projects faster.",
      price: 500,
      deliveryTime: "22/11/2022",
      postDay: "11/11/2022",
      offer: "525",
    },
    {
      id: 2,
      buyer: "Arjun Vishvakarma",
      projectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 800,
      deliveryTime: "26/11/2022",
      postDay: "17/11/2022",
      offer: "275",
    },
    {
      id: 2,
      buyer: "Rahul Borawat",
      projectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 1000,
      deliveryTime: "20/11/2022",
      postDay: "17/11/2022",
      offer: "625",
    },
    {
      id: 2,
      buyer: "Sonu Singh",
      projectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 900,
      deliveryTime: "21/11/2022",
      postDay: "18/11/2022",
      offer: "925",
    },
  ];

  return (
    <div className="dash">
      <div className="dash_search">
        <h1>Search Project</h1>
        <div className="dash_search_search-input">
          <input type="text" placeholder="Search more projects" />
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
          dataSource={dataSource}
        />
      </div>
    </div>
  );
};

export default Dashboard;
