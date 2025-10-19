const { contextBridge } = require('electron');
const { getRandomFact } = require('./facts');

contextBridge.exposeInMainWorld('api', {
  getRandomFact: (os) => getRandomFact(os)
});
