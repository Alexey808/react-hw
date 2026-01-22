// import { useEffect, useState } from 'react';
// import { User } from '../../models/user/user.interface';

// export function useUserLocalStorage(key: string) {
//   const [users, setUsers] = useState<User[]>([]);

//   const initData = (key: string) => {
//     if (key) {
//       const dataByKey: string= localStorage.getItem(key) || 'undefined';
//       if (dataByKey !== 'undefined') {
//         const jsonDataByKey = JSON.parse(dataByKey);
//         setUsers(jsonDataByKey);
//       }
//     }
//   };

//   useEffect(() => {
//     initData(key);
//   }, [key]);

//   const saveData = (newData: User[]) => {
//     try {
//       if (newData) {
//         localStorage.setItem(key, JSON.stringify(newData));
//         setUsers(newData);
//       }
//     } catch (err) {
//       console.error(`Ошибка при записи в localStorage по ключу ${key}:`, err);
//     }
//   };

//   return [users, saveData];
// }

// export function useLocalStorage<T>(key: string): [T, SetData] {
//   const [data, setData] = useState<T>();

//   const initData = (key: string) => {
//     if (key) {
//       const dataByKey: string= localStorage.getItem(key) || 'undefined';
//       if (dataByKey !== 'undefined') {
//         const jsonDataByKey = JSON.parse(dataByKey);
//         setData(jsonDataByKey);
//       }
//     }
//   };

//   useEffect(() => {
//     initData(key);
//   }, [key]);
  

//   const saveData: SetData<T> = (newData: T) => {
//     try {
//       if (newData) {
//         localStorage.setItem(key, JSON.stringify(newData));
//         setData(newData);
//       }
//     } catch (err) {
//       console.error(`Ошибка при записи в localStorage по ключу ${key}:`, err);
//     }
//   };

//   return [data, saveData];
// }