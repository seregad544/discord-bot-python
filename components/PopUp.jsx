import React, { useState } from 'react';
import {
  Text, View, TextInput, Alert, Pressable,
} from 'react-native';
import { useDispatch } from 'react-redux';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { addCategory } from '../store/TasksSlice';
import { popUp as styles } from '../style';

export default function PopUp({ data }) {
  const {
    container, popUp, text, input, row, button,
  } = styles;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const { setVisibilityPopUp } = data;

  const handlerSubmit = () => {
    if (name) {
      dispatch(addCategory({ name, id: uuidv4() }));
      setName('');
      setVisibilityPopUp(false);
    } else {
      Alert.alert('Empty field', 'You need to fill field');
    }
  };

  return (
    <View style={container}>
      <View style={popUp}>
        <Text style={text}>Add new category</Text>
        <TextInput value={name} onChangeText={setName} style={input} />
        <View style={row}>
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? 'rgba(58, 134, 255, 0.7)' : 'rgba(58, 134, 255, 1)' },
              button,
            ]}
            onPress={handlerSubmit}
          >
            <Text>ok</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? 'rgba(58, 134, 255, 0.7)' : 'rgba(58, 134, 255, 1)' },
              button,
            ]}
            onPress={() => setVisibilityPopUp(false)}
          >
            <Text>cancel</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
