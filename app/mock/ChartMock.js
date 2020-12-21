const statisticsByMonth = {
  labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz'],
  data: [300, 320, 325, 399, 470, 500],
};

const statisticsByDay = {
  labels: ['Gece Yarısı', 'Sabah', 'Öğlen', 'Akşam'], // optional
  data: [300, 390, 300, 259],
};

const statisticsByWeeks = {
  labels: ['I. Hafta', 'II. Hafta', 'III. Hafta', 'IV. Hafta'],
  datasets: [
    {
      data: [308, 390, 320, 310],
      colors: [(opacity = 1) => `red`, (opacity = 1) => `#ff00ff`, (opacity = 1) => `rgba(255, 0, 50, ${opacity})`],
    },
  ],
};

const requestData = [
  { date: '2017-01-02', count: 1 },
  { date: '2017-01-03', count: 2 },
  { date: '2017-01-04', count: 3 },
  { date: '2017-01-05', count: 4 },
  { date: '2017-01-06', count: 5 },
  { date: '2017-01-30', count: 2 },
  { date: '2017-01-31', count: 3 },
  { date: '2017-03-01', count: 2 },
  { date: '2017-04-02', count: 4 },
  { date: '2017-03-05', count: 2 },
  { date: '2017-02-30', count: 4 },
];

export default { statisticsByDay, statisticsByMonth, statisticsByWeeks, requestData };
