const { contextBridge, ipcRenderer } = require('electron');
const { getRandomFact } = require('./facts');
const Store = require('electron-store');

const store = new Store();

contextBridge.exposeInMainWorld('api', {
  getRandomFact: (os) => getRandomFact(os),
  closeApp: () => ipcRenderer.send('close-app'),
  get: (key) => store.get(key),
  set: (key, value) => store.set(key, value)
});
