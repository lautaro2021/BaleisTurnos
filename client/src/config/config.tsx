import rootReducer from '../redux/reducer/index';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer
})
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
