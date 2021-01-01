const statisticsByMonth = {
  labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz'],
  data: [300, 320, 325, 399, 470, 500],
};

const statisticsByDay = [
  { x: '01 Ocak 2021  9 - 10', y: 300 },
  { x: '01 Ocak 2021  13 - 14', y: 302 },
  { x: '01 Ocak 2021  17 - 18', y: 290 },
  { x: '01 Ocak 2021  21 - 22', y: 330 },
];

const statisticsByWeeks = [
  { x: '04.01.2021 Pzt', y: 300 },
  { x: '05.01.2021 Sal', y: 320 },
  { x: '06.01.2021 Çar', y: 310 },
  { x: '07.01.2021 Per', y: 305 },
  { x: '08.01.2021 Cum', y: 330 },
  { x: '09.01.2021 Cmt', y: 340 },
  { x: '10.01.2021 Paz', y: 330 },
];

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
