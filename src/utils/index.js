import moment from "moment";

export const generateAvatar = (text) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Draw background
  context.fillStyle = stringToHslColor(text);
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = 'bold 75px Assistant';
  context.fillStyle = '#fff';
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  let first = text?.split(' ')[0]?.charAt(0)?.toUpperCase();
  let last = text?.split(' ')[1]?.charAt(0)?.toUpperCase();

  if (!last) {
    last =
      text?.split(' ')[0]?.charAt(1)?.toUpperCase() ||
      text?.split(' ')[0]?.charAt(0)?.toUpperCase();
  }
  if (!first) {
    first = 'S';
    last = 'U';
  }

  context.fillText(first + last, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL('image/png');
};

export const stringToHslColor = (str, s = 30, l = 80) => {
  let hash = 0;
  for (let i = 0; i < str?.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let h = hash % 360;
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
};


export const getDeliveryTime = (date) => {
  let formatDate = moment(date, "DD/MM/YYYY");
  let startDate = moment();
  var duration = moment.duration(formatDate.diff(startDate));
  //var days = Number(duration.asDays());
  let res = getDuration(duration, formatDate);
  return res;
};

export const getPostTime = (date) => {
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
