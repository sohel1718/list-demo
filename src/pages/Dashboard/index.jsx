import { ReactComponent as Search } from '../../assets/images/search-black.svg';
import { ReactComponent as User } from '../../assets/images/user.svg';
import { ReactComponent as Ruppe } from '../../assets/images/ruppe.svg';
import { ReactComponent as CurvedArrow } from '../../assets/images/curvedArrow.svg';
import CustomTable from '../../components/CustomTable';
import moment from 'moment/moment';
import { stringToHslColor } from '../../utils';

const getDeliveryTime = (date) => {
    let formatDate = moment(date, "DD/MM/YYYY");
    let startDate = moment();
    var duration = moment.duration(formatDate.diff(startDate));
    //var days = Number(duration.asDays());
    let res = getDuration(duration, formatDate);
    return res
}

const getPostTime = (date) => {
    let formatDate = moment(date, "DD/MM/YYYY");
    let startDate = moment();
    var duration = moment.duration(startDate.diff(formatDate));
    //var days = Number(duration.asDays());
    let res = getPrevDuration(duration, formatDate);
    return res
}

export const getPrevDuration = (duration, date)=> {
    let seconds = duration.asSeconds();
    let minutes = duration.asMinutes();
    let hours = duration.asHours();
    let days = duration.asDays();
    let months = duration.asMonths();
    let years = duration.asYears();

    if (minutes >= 525600) {
        return `${years.toFixed()} year ago`
    } else if (months >= 1) {
        return moment(date).format('MMM DD')
    } else if (days < 2) {
        if (seconds < 60) {
            return "now"
        } else if (minutes <= 1) {
            return `${minutes?.toString()?.split('.')[0]} min ago`
        } else if (minutes > 1 && minutes < 60) {
            return  `${minutes?.toString()?.split('.')[0]} mins ago`
        } else if (minutes >= 60 && minutes < 120) {
            return `${hours?.toString()?.split('.')[0]} hour ago`
        } else if (minutes >= 120 && minutes < 1440) {
            return `${hours?.toString()?.split('.')[0]} hours ago`
        } else {
            return `${days?.toString()?.split('.')[0]} day ago`
        }
    } else if (days > 1) {
        return `${days?.toString()?.split('.')[0]} days ago`
    }
}

export const getDuration = (duration, date)=> {
    let seconds = duration.asSeconds();
    let minutes = duration.asMinutes();
    let hours = duration.asHours();
    let days = duration.asDays();
    let months = duration.asMonths();
    let years = duration.asYears();

    if (minutes >= 525600) {
        return `${years.toFixed()} year`
    } else if (months >= 1) {
        return moment(date).format('MMM DD')
    } else if (days < 2) {
        if (seconds < 60) {
            return "now"
        } else if (minutes <= 1) {
            return `${minutes?.toString()?.split('.')[0]} min`
        } else if (minutes > 1 && minutes < 60) {
            return  `${minutes?.toString()?.split('.')[0]} mins`
        } else if (minutes >= 60 && minutes < 120) {
            return `${hours?.toString()?.split('.')[0]} hour`
        } else if (minutes >= 120 && minutes < 1440) {
            return `${hours?.toString()?.split('.')[0]} hours`
        } else {
            return `${days?.toString()?.split('.')[0]} day`
        }
    } else if (days > 1) {
        return `${days?.toString()?.split('.')[0]} days`
    }
}


const Dashboard = () => {
  const columns = [
    {
      title: 'Buyer',
      dataIndex: 'buyer',
      key: 'buyer',
      align: 'center',
      render: (data) => {
        
        let color = stringToHslColor(data.buyer);
        let iconColor = stringToHslColor(data.buyer, 50, 40);
        return <div className="buyer">
            <div style={{ backgroundColor: color }}  className="buyer_avatar">
                <User style={{ fill: iconColor }}  />
            </div>
            <div className="buyer_title">
                {data.buyer}
            </div>
        </div>;
      }
    },
    {
      title: 'Project Details',
      dataIndex: 'projectDetails',
      key: 'projectDetails',
      align: 'justify'
      //width: '194px',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      //width: '194px',
      render: (data) => {
        return (
            <span className="price">
                <Ruppe />
                {data.price}
            </span>
        )
      }
    },
    {
      title: 'Delivery Time',
      dataIndex: 'deliveryTime',
      key: 'deliveryTime',
      align: 'center',
      //width: '194px',
      render: (data) => {
        let color = stringToHslColor(data.buyer);
        let textColor = stringToHslColor(data.buyer, 50, 40);
        return (
            <span style={{ backgroundColor: color, color: textColor }} className="tag fw_600">
                {getDeliveryTime(data.deliveryTime)}
            </span>
        )
      }
    },
    {
      title: 'Post Day',
      dataIndex: 'postDay',
      key: 'postDay',
      align: 'center',
      //width: '194px',
      render: (data) => {
        return (
            <span className="capitlize fw_600">
                {getPostTime(data.postDay)}
            </span>
        )
      }
    },
    {
      title: 'Offer',
      dataIndex: 'offer',
      key: 'offer',
      align: 'center',
      //width: '194px',
      render: (data) => {
        return <span className="fw_600">{data.offer}</span>
      }
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      //width: '194px',
      render: () => {
        return <button className="send-btn">
            <CurvedArrow />
            <span>Send Offer</span>
        </button>;
      }
    }
  ];

  const dataSource = [
    {
      id: 1,
      buyer: 'Albert Flores',
      projectDetails:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 200,
      deliveryTime: '21/11/2022',
      postDay: '15/11/2022',
      offer: '25'
    },
    {
        id: 2,
        buyer: 'Sohel Chhipa',
        projectDetails:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200,
        deliveryTime: '21/11/2022',
        postDay: '15/11/2022',
        offer: '25'
      },
      {
        id: 2,
        buyer: 'Arjun Vishvakarma',
        projectDetails:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200,
        deliveryTime: '21/11/2022',
        postDay: '15/11/2022',
        offer: '25'
      },
      {
        id: 2,
        buyer: 'Rahul Borawat',
        projectDetails:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200,
        deliveryTime: '21/11/2022',
        postDay: '15/11/2022',
        offer: '25'
      },
      {
        id: 2,
        buyer: 'No Idea',
        projectDetails:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 200,
        deliveryTime: '21/11/2022',
        postDay: '15/11/2022',
        offer: '25'
      }
  ];

  return (
    <div className='dash'>
      <div className='dash_search'>
        <h1>Search Project</h1>
        <div className='dash_search_search-input'>
          <input type='text' placeholder='Search more projects' />
          <Search />
        </div>
      </div>
      <div className='dash_table-container'>
        <CustomTable className="projects-table" columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default Dashboard;
