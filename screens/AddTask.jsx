import React, { useState } from 'react';
import {
  Text, View, TextInput, Alert, Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { add, selectCategorys } from '../store/TasksSlice';
import 'react-native-get-random-values';
import CategorysAdd from '../components/CategorysAdd';
import PopUp from '../components/PopUp';
import { addTask as styles } from '../style';
import { getFormattedDate, getFormattedTime } from '../utilities';

export default function AddTask() {
  const {
    container, row, title, textButton, button, inputTitle, inputTime, inputDate, inputYear,
  } = styles;
  const dispatch = useDispatch();
  const categorys = useSelector(selectCategorys);
  const [name, setName] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('work');
  const [visibilityPopUp, setVisibilityPopUp] = useState(false);

  const handlerHours = (value) => {
    const currentValue = (Number(value) < 24) ? value : hours;
    setHours(currentValue);
  };

  const handlerMinutes = (value) => {
    const currentValue = (Number(value) < 60) ? value : minutes;
    setMinutes(currentValue);
  };

  const handlerDay = (value) => {
    const currentValue = (Number(value) <= 31) ? value : day;
    setDay(currentValue);
  };

  const handlerMonth = (value) => {
    const currentValue = (Number(value) <= 12) ? value : month;
    setMonth(currentValue);
  };

  const handlerSubmit = () => {
    if (month === '0' || day === '0') {
      Alert.alert('Zero fields', 'Month and day fields cannot be equal to zero');
    } else if (name && hours && minutes && day && month && year) {
      const date = getFormattedDate(day, month, year);
      const time = getFormattedTime(hours, minutes);
      dispatch(add({
        name, time, date, id: uuidv4(), category, isCompleted: false,
      }));
      setName('');
      setHours('');
      setMinutes('');
      setDay('');
      setMonth('');
      setYear('');
    } else {
      Alert.alert('Empty fields', 'You need to fill in all fields');
    }
  };

  return (
    <View style={container}>
      <Text style={title}>Task title</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={inputTitle}
      />
      <Text style={title}>Time</Text>
      <View style={row}>
        <TextInput
          value={hours}
          onChangeText={handlerHours}
          keyboardType="numeric"
          maxLength={2}
          style={inputTime}
        />
        <Text>:</Text>
        <TextInput
          value={minutes}
          onChangeText={handlerMinutes}
          keyboardType="numeric"
          maxLength={2}
          style={inputTime}
        />
      </View>
      <Text style={title}>date</Text>
      <View style={row}>
        <TextInput
          value={day}
          onChangeText={handlerDay}
          placeholder="d"
          keyboardType="numeric"
          maxLength={2}
          style={inputDate}
        />
        <Text>/</Text>
        <TextInput
          value={month}
          onChangeText={handlerMonth}
          placeholder="m"
          keyboardType="numeric"
          maxLength={2}
          style={inputDate}
        />
        <Text>/</Text>
        <TextInput
          value={year}
          onChangeText={setYear}
          placeholder="year"
          keyboardType="numeric"
          maxLength={4}
          style={inputYear}
        />
      </View>
      <CategorysAdd data={{
        categorys, category, setCategory, setVisibilityPopUp,
      }}
      />
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? 'rgba(58, 134, 255, 0.7)' : 'rgba(58, 134, 255, 1)' },
          button,
        ]}
        onPress={handlerSubmit}
      >
        <Text style={textButton}>ADD TASK</Text>

      </Pressable>
      {visibilityPopUp ? <PopUp data={{ setVisibilityPopUp }} /> : null}
    </View>
  );
}
