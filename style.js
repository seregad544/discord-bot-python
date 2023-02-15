import { StyleSheet } from 'react-native';

const home = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 25,
    marginBottom: 10,
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
  },
  list: {
    width: '100%',
  },
  header: {
    marginTop: 5,
  },
  textButton: {
    fontSize: 30,
    color: 'white',
  },
});

const addTask = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    margin: 2,
  },
  textButton: {
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 10,
  },
  inputTitle: {
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 3,
  },
  inputTime: {
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 3,
    width: 30,
  },
  inputDate: {
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 3,
    width: 30,
  },
  inputYear: {
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 3,
    width: 50,
  },
});

const task = StyleSheet.create({
  container: {
    backgroundColor: '#7f8c8d',
    marginTop: 5,
    flexDirection: 'row',
    minHeight: 60,
    width: '100%',
    justifyContent: 'space-between',
  },
  checkbox: {
    marginLeft: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
    width: '75%',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  time: {
    color: 'white',
    fontSize: 10,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  close: {
    justifyContent: 'center',
    marginRight: 10,
  },
});

const popUp = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(220, 220, 220, 0.5)',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 50,
    flex: 1,
  },
  input: {
    fontSize: 30,
    borderWidth: 1,
    marginBottom: 10,
  },
  popUp: {
    position: 'relative',
    top: '20%',
    backgroundColor: '#7f8c8d',
    padding: 10,
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
});

const categorysAdd = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 0,
    padding: 10,
  },
  block: {
    flexDirection: 'row',
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

const categorys = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 0,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  block: {
    flexDirection: 'row',
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

export {
  home, addTask, task, popUp, categorysAdd, categorys,
};
