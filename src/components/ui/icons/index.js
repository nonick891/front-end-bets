import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.vue$/);
const icons = {};

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  const moduleName = camelCase(
    fileName.replace(/(\.\/|\.vue)/g, '')
  );
  icons[moduleName] = {
    component: requireModule(fileName).default,
    props: { fill: '#ffffff' }
  }
});

export default icons;