import LocalStorage from './localStorage';

const getLikesFromLocalStorage = () => {
  const likedKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('liked_') && LocalStorage.getItem<boolean>(key)) {
      likedKeys.push(key);
    }
  }
  return likedKeys;
};

export default getLikesFromLocalStorage;
