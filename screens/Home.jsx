import React from 'react';
import { useSelector } from 'react-redux';
import {
  Text, View, Pressable, SectionList,
} from 'react-native';
import {
  selectAlltasks, selectCategorys, selectCompletedTasks, selectFilter,
} from '../store/TasksSlice';
import Task from '../components/Task';
import Categorys from '../components/Categorys';
import { getFilteredTasks } from '../utilities';
import { home as styles } from '../style';

export default function Home({ navigation }) {
  const {
    container, list, header, button, textButton,
  } = styles;
  const currentFilter = useSelector(selectFilter);
  const categorys = useSelector(selectCategorys);
  const all = useSelector(selectAlltasks);
  const completed = useSelector(selectCompletedTasks);
  const currentTasks = getFilteredTasks(all, completed, currentFilter);

  return (
    <View style={container}>
      <Categorys data={categorys} />
      {(currentTasks.length) ? (
        <SectionList
          sections={currentTasks}
          style={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task data={item} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={header}>{title}</Text>
          )}
        />
      ) : null}
      <Pressable
        onPress={() => navigation.navigate('AddTask')}
        style={({ pressed }) => [
          { backgroundColor: pressed ? 'rgba(58, 134, 255, 0.7)' : 'rgba(58, 134, 255, 1)' },
          button,
        ]}
      >
        <Text style={textButton}>+</Text>
      </Pressable>
    </View>
  );
}
