import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text, FlatList, Pressable, Image,
} from 'react-native';
import { selectFilter, setFilter } from '../store/TasksSlice';
import { categorys as styles } from '../style';

export default function Categorys({ data }) {
  const { container, block, icon } = styles;
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  return (
    <FlatList
      horizontal
      style={container}
      data={[{ title: 'All', name: 'all', path: null }, ...data, { title: 'Completed', name: 'completed', path: require('../assets/completed.png') }]}
      renderItem={({ item }) => (
        <Pressable onPress={() => dispatch(setFilter(item.name))} style={[{ backgroundColor: currentFilter === item.name ? '#fca311' : 'transparent' }, block]}>
          {item.path && <Image style={icon} source={item.path} />}
          <Text>{item.title}</Text>
        </Pressable>
      )}
    />
  );
}
