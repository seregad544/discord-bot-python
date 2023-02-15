import React from 'react';
import {
  Text, FlatList, Pressable, Image, Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeCategory } from '../store/TasksSlice';
import { categorysAdd as styles } from '../style';

export default function CategorysAdd({ data }) {
  const dispatch = useDispatch();
  const { container, block, icon } = styles;
  const {
    categorys, category, setCategory, setVisibilityPopUp,
  } = data;

  return (
    <FlatList
      horizontal
      style={container}
      data={[...categorys, { title: '', name: 'add', path: require('../assets/plus.png') }]}
      renderItem={({ item }) => (
        <Pressable
          onPress={(item.name === 'add') ? () => setVisibilityPopUp(true) : () => setCategory(item.name)}
          onLongPress={(['add', 'work', 'study'].includes(item.name)) ? null : () => Alert.alert('Remove', `Remove category ${item.name}`, [
            { text: 'OK', onPress: () => dispatch(removeCategory(item.id)) },
            { text: 'Cancel' },
          ])}
          style={[{ backgroundColor: category === item.name ? '#fca311' : 'transparent' }, block]}
        >
          {item.path && <Image style={icon} source={item.path} />}
          <Text>{item.title}</Text>
        </Pressable>
      )}
    />
  );
}
