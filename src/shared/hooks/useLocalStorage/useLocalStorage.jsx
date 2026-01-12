import { useEffect, useState } from 'react';

export function useLocalStorage(key) {
  const [data, setData] = useState();

  const initData = (key) => {
    if (key) {
      const dataByKey = localStorage.getItem(key);
      if (dataByKey !== 'undefined') {
        const jsonDataByKey = JSON.parse(dataByKey);
        setData(jsonDataByKey);
      }
    }
  };

  useEffect(() => {
    initData(key);
  }, [key]);
  

  const saveData = (newData) => {
    try {
      if (newData) {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
      }
    } catch (err) {
      console.error(`Ошибка при записи в localStorage по ключу ${key}:`, err);
    }
  };

  return [data, saveData];
}