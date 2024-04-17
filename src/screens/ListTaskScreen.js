import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../components/Button';
import { COLORS, categories, images } from '../constants';
import { StatusBar } from 'expo-status-bar';

const defaultTask = [
  { id: 0, title: 'Default task', checked: false, category: 3 },
];

export default function ListTaskScreen({ navigation }) {
  // définir les etats de la liste des taches et des taches completes
  const [todoList, setTodoList] = React.useState(defaultTask);
  const [completedTodos, setCompletedTodos] = React.useState([]);

  // fonction pour gerer le changement de l'etat de la tache
  const handleCheck = (task) => () => {
    task = { ...task, checked: !task.checked };
    if (task.checked) {
      setCompletedTodos([...completedTodos, task]);
      setTodoList(todoList.filter((item) => item.id !== task.id));
    } else {
      setCompletedTodos(completedTodos.filter((item) => item.id !== task.id));
      setTodoList([...todoList, task]);
    }
  };

  // fonction pour afficher les taches
  const TodoItem = ({ item, handleCheck }) => (
    <View style={styles.itemContainer}>
      <View
        style={{
          padding: 7,
          borderRadius: 20,
          backgroundColor: COLORS.secondary,
        }}
      >
        <Image
          style={styles.categorieImage}
          source={
            categories.find((category) => category.id === item.category).image
          }
        />
      </View>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <BouncyCheckbox isChecked={item.checked} onPress={handleCheck(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Definition de StatusBar */}
      <StatusBar backgroundColor={COLORS.primary} />

      {/* List des taches à faire */}
      <ScrollView style={styles.scrollView}>
        {todoList.length > 0 ? (
          todoList.map((item) => {
            return (
              <TodoItem key={item.id} item={item} handleCheck={handleCheck} />
            );
          })
        ) : completedTodos.length > 0 ? (
          <View>
            <Text style={styles.descText}>
              Congratulations! You have completed {completedTodos.length} tasks
            </Text>
            <View>
              <Image
                source={images.congratulation}
                style={{ width: 200, height: 200, alignSelf: 'center' }}
              />
            </View>
          </View>
        ) : (
          <Text style={styles.descText}>No tasks found</Text>
        )}
      </ScrollView>

      {/*  Liste des taches completées */}
      <Text style={styles.screenTitle}>Completed Tasks</Text>
      <ScrollView style={styles.scrollView}>
        {completedTodos.length > 0 ? (
          completedTodos.map((item) => {
            return (
              <TodoItem key={item.id} item={item} handleCheck={handleCheck} />
            );
          })
        ) : (
          <Text
            style={{
              ...styles.descText,
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            No completed tasks found
          </Text>
        )}
      </ScrollView>

      {/* Button pour ajouter une nouvelle tache */}
      <Button
        label="Add New Task"
        onPress={() =>
          navigation.navigate('New Task', {
            todoList: todoList,
            setTodoList: setTodoList,
          })
        }
      />
    </View>
  );
}

// les styles de la page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.gray,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  screenTitle: {
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.gray,
    maxHeight: 350,
  },
  categorieImage: {
    width: 30,
    height: 30,
  },
  todoTitle: {
    fontSize: 20,
    color: COLORS.white,
  },
  descText: {
    color: COLORS.secondary,
    fontSize: 18,
    textAlign: 'center',
  },
});
