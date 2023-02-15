import { React } from 'react';
import {
  Image, Pressable, Text, View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch } from 'react-redux';
import { changeStatus, remove } from '../store/TasksSlice';
import { task } from '../style';

export default function Task({ data }) {
  const {
    container, checkbox, textContainer, title, time, close, row,
  } = task;
  const dispatch = useDispatch();

  return (
    <View style={container}>
      <View style={row}>
        <BouncyCheckbox
          style={checkbox}
          isChecked={data.isCompleted}
          onPress={() => dispatch(changeStatus(data.id))}
        />
        <View style={textContainer}>
          <Text style={title}>{data.name}</Text>
          <Text style={time}>{data.time}</Text>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.7 : 1 },
          close,
        ]}
        onPress={() => dispatch(remove(data.id))}
      >
        <Image source={require('../assets/cross.png')} />
      </Pressable>
    </View>
  );
}
