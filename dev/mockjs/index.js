const Mock = require('mockjs');

Mock.Random.extend({
  myname: function (region) {
    return Mock.Random.pick([Mock.Random.name(), Mock.Random.cname()]);
  },
  mydate: () => {
    return Mock.Random.integer(2018, 2021).toString() + Mock.Random.datetime('-MM-dd HH:mm:ss');
  },
  mycomment: () => {
    return Mock.Random.pick([Mock.Random.paragraph(2, 7), Mock.Random.cparagraph(2, 7)]);
  },
});

const template = {
  'result|20': [
    {
      id: '@increment',
      name: '@myname',
      datetime: '@mydate',
      comment: '@mycomment',
    },
  ],
};

const historyTemplate = {
  'searchHistory|20': [
    {
      id: '@increment',
      text: '@title',
      time: '@increment',
    },
  ],
};

const recommendataionTemplate = {
  'recommendataion|20': [
    {
      id: '@increment',
      text: '@title',
    },
  ],
};

//const url = /\.json/;

function mockData() {
  return Mock.mock(recommendataionTemplate);
}

//export default mockData;

console.log(JSON.stringify(mockData()));
