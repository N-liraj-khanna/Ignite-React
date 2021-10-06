// Base Url
const base_url = `https://api.rawg.io/api/`;

const get_month = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return month;
};

const get_day = () => {
  const day = new Date().getDay() + 3;
  if (day < 10) return `0${day}`;
  else return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = get_month();
const currentDay = get_day();

const year = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Games URL
const popular_games = `games?key=727485743b4c441f98e058d4b32f1025&dates=${lastYear},${year}&ordering=-released&page_size=10`;
const new_games = `games?key=727485743b4c441f98e058d4b32f1025&dates=${lastYear},${year}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=727485743b4c441f98e058d4b32f1025&dates=${year},${nextYear}&ordering=-added&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=727485743b4c441f98e058d4b32f1025`;

// Game Screenshots
export const gameScreenshotsURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=727485743b4c441f98e058d4b32f1025`;
