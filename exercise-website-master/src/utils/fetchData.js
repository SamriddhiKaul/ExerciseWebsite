export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'acf5043b5cmsha96c613d1be7104p1fae91jsneac65e6439f0',
  },
};
// "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'acf5043b5cmsha96c613d1be7104p1fae91jsneac65e6439f0',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
