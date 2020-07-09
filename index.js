const data = require('./data/data.json');

const languages = data.filter(function (el) {
  return el.type === 'Language';
});

const frameworks = data.filter(function (el) {
  return el.type === 'Framework';
});

const libraries = data.filter(function (el) {
  return el.type === 'Library';
});

const tools = data.filter(function (el) {
  return el.type === 'Tool';
});

const all = data;

module.exports = {all, frameworks, languages, libraries, tools};