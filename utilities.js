import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

const compareTime = (first, second) => {
  const [firstHours, firstMinutes] = first.time.split(":");
  const [secondHours, secondMinutes] = second.time.split(":");
  let result;
  if (firstHours > secondHours) result = 1;
  else if (firstHours < secondHours) result = -1;
  else if (firstMinutes > secondMinutes) result = 1;
  else if (firstMinutes < secondMinutes) result = -1;
  else result = 0;
  return result;
};

const compareDate = (first, second) => {
  const [firstDay, firstMonth, firstYear] = first.split("/");
  const [secondDay, secondMonth, secondYear] = second.split("/");
  let result;
  if (firstYear > secondYear) result = 1;
  else if (firstYear < secondYear) result = -1;
  else if (firstMonth > secondMonth) result = 1;
  else if (firstMonth < secondMonth) result = -1;
  else if (firstDay > secondDay) result = 1;
  else if (firstDay < secondDay) result = -1;
  else result = 0;
  return result;
};

const isToday = (date) => {
  const formatedDate = new Date(date.split("/").reverse().join("/"));
  const today = new Date();
  return formatedDate.toDateString() === today.toDateString();
};

const getFilteredTasks = (all, completed, filter) => {
  let data;
  if (filter === "all") {
    data = all;
  } else if (filter === "completed") {
    data = completed;
  } else {
    data = all.filter((task) => task.category === filter);
  }
  const dates = [...new Set(data.map((item) => item.date))].sort(compareDate);
  const result = dates.map((date) => ({
    title: isToday(date) ? "Today" : date,
    data: data.filter((item) => item.date === date),
  }));
  return result;
};

const getFormattedTime = (hours, minutes) => {
  const formattedHours = hours.length === 1 ? `0${hours}` : hours;
  const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
};

const getFormattedDate = (day, month, year) =>
  new Date(`${month}/${day}/${year}`).toLocaleDateString("ru-RU");

export {
  storeData, compareTime, getFilteredTasks, getFormattedTime, getFormattedDate,
};
