// import Mock, { Random } from 'mockjs';

const Mock = require('mockjs');
const axios = require('axios')

Mock.Random.extend({
  myname: function(region) {
      return Mock.Random.pick([Mock.Random.name(),Mock.Random.cname()])
  },
  mydate: () => {
    return Mock.Random.integer(2018,2021).toString() + Mock.Random.datetime('-MM-dd HH:mm:ss')
  },
  mycomment: () => {
    return Mock.Random.pick([Mock.Random.paragraph( 2, 7 ),Mock.Random.cparagraph(2, 7)])
  }
})

const template = {
  "result|20":[
    {
      "name":"@myname",
      "datetime":"@mydate",
      "comment":"@mycomment"
    }
  ]
}

const url = /\.json/;

function mockData(){
  Mock.mock(url, template);
} 

export default mockData;