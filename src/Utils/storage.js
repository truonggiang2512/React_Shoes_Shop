const storage = {
  save: (name, data) => {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(name, dataJSON);
  },
  get: (name) => {
    if (localStorage.getItem(name)) {
      const strResult = localStorage.getItem(name);
      return JSON.parse(strResult);
    }
    return undefined;
  },
  set: (name, data) => {
    const strJSON = JSON.stringify(data);
    localStorage.setItem(name, strJSON);
  },
  clear: (name) => {
    localStorage.removeItem(name);
  },
};
export default storage;
