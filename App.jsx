import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './store';
import Navigation from './components/Navigation';
import { initial } from './store/TasksSlice';

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      const tasks = await AsyncStorage.getItem('tasks');
      const categorys = await AsyncStorage.getItem('categorys');
      const data = {
        tasks: tasks ? JSON.parse(tasks) : [],
        categorys: categorys ? JSON.parse(categorys) : [],
      };
      store.dispatch(initial(data));
    };
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        animated
        backgroundColor="black"
      />
      <Navigation />
    </Provider>
  );
}
