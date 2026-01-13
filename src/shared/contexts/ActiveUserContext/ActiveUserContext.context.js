import {createContext} from 'react';

export const ActiveUserContext = createContext({
	name: '',
	isLogined: false
});