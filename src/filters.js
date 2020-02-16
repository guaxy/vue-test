import moment from "moment";

const formatDate = function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
};

export { formatDate };
