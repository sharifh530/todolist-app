exports.getDate = getdate;
exports.getDay = getDay;

function getdate() {
  let today = new Date();

  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  let day = today.toLocaleDateString("en-us", options);

  return day;
}

function getDay() {
  let today = new Date();

  let options = {
    weekday: 'long',
  };

  let day = today.toLocaleDateString("en-us", options);

  return day;
}
