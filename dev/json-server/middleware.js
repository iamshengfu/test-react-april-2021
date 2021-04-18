//middleware to shuffle and fake output

const data = require('./data.json');

module.exports = (req, res, next) => {
  if (req.url.includes('recommendation')) {
    var searchText = req.query.s || '';
    var output = data.recommendation
      .sort((a, b) => 0.5 - Math.random())
      .map((item) => ({ ...item, text: searchText + item.text }))
      .slice(0, 6);
    res.send(output);
  } else {
    next();
  }
};
