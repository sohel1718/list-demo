export const dataSource = [
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
      id: 3,
      buyer: "Arjun Vishvakarma",
      projectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 800,
      deliveryTime: "26/11/2022",
      postDay: "17/11/2022",
      offer: "275",
    },
    {
      id: 4,
      buyer: "Rahul Borawat",
      projectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 1000,
      deliveryTime: "20/11/2022",
      postDay: "17/11/2022",
      offer: "625",
    },
    {
      id: 5,
      buyer: "Sonu Singh",
      projectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 900,
      deliveryTime: "21/11/2022",
      postDay: "18/11/2022",
      offer: "925",
    },
    {
        id: 6,
        buyer: "Albert Flores",
        projectDetails:
          "This is a freelance proposal template and example. Learn how to write a project or bid proposal and get hired for more projects faster.",
        price: 200,
        deliveryTime: "21/11/2022",
        postDay: "15/11/2022",
        offer: "250",
      },
      {
        id: 7,
        buyer: "Sohel Chhipa",
        projectDetails:
          "Learn how to write a project or bid proposal and get hired for more projects faster.",
        price: 500,
        deliveryTime: "22/11/2022",
        postDay: "11/11/2022",
        offer: "525",
      },
      {
        id: 8,
        buyer: "Arjun Vishvakarma",
        projectDetails:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 800,
        deliveryTime: "26/11/2022",
        postDay: "17/11/2022",
        offer: "275",
      },
      {
        id: 9,
        buyer: "Rahul Borawat",
        projectDetails:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 1000,
        deliveryTime: "20/11/2022",
        postDay: "17/11/2022",
        offer: "625",
      },
      {
        id: 10,
        buyer: "Sonu Singh",
        projectDetails:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 900,
        deliveryTime: "21/11/2022",
        postDay: "18/11/2022",
        offer: "925",
      },
      {
        id: 11,
        buyer: "Albert Flores",
        projectDetails:
          "This is a freelance proposal template and example. Learn how to write a project or bid proposal and get hired for more projects faster.",
        price: 200,
        deliveryTime: "21/11/2022",
        postDay: "15/11/2022",
        offer: "250",
      },
      {
        id: 12,
        buyer: "Sohel Chhipa",
        projectDetails:
          "Learn how to write a project or bid proposal and get hired for more projects faster.",
        price: 500,
        deliveryTime: "22/11/2022",
        postDay: "11/11/2022",
        offer: "525",
      },
      {
        id: 13,
        buyer: "Arjun Vishvakarma",
        projectDetails:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 800,
        deliveryTime: "26/11/2022",
        postDay: "17/11/2022",
        offer: "275",
      },
      {
        id: 14,
        buyer: "Rahul Borawat",
        projectDetails:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 1000,
        deliveryTime: "20/11/2022",
        postDay: "17/11/2022",
        offer: "625",
      },
      {
        id: 15,
        buyer: "Sonu Singh",
        projectDetails:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 900,
        deliveryTime: "21/11/2022",
        postDay: "18/11/2022",
        offer: "925",
      },
  ];

  export const getData = () => {
    return dataSource
  }

  export const searchBuyer = (text) => {
    if (text === "" || !text) {
        return dataSource;
    }
    return dataSource.filter(data => {
        let count = data.buyer.slice(0, text.length).toLowerCase().split('').reduce((acc, cur, index) => {
            return text[index].toLowerCase() === cur ? (index === acc) ? acc + 1 : 0 : 0
        }, 0);
        return count !== 0;
    })
  }