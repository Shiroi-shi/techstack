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

const databases = data.filter(function (el) {
  return el.type === 'Database';
});

const tools = data.filter(function (el) {
  return el.type === 'Tool';
});

const os = data.filter(function (el) {
  return el.type === 'Operating System';
})

const all = data;

module.exports = {all, databases, frameworks, languages, libraries, os, tools};
