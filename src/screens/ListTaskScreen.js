import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../components/Button';
import { COLORS, categories, icons, images } from '../constants';

const defaultTask = [{ id: 0, title: 'Default task', checked: false, category: 3 }];
const defaultCompletedTask = [{ id: 1, title: 'Default Completed task', checked: true, category: 3 }];

export default function ListTaskScreen({ navigation }) {

  // définir les etats de la liste des taches et des taches completes
  const [todoList, setTodoList] = React.useState(defaultTask);
  const [completedTodos, setCompletedTodos] = React.useState(defaultCompletedTask);

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
      <ScrollView style={styles.scrollView}>
        {todoList.length > 0 ? (
          todoList.map((item) => {
            console.log('item', item);
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

      <Text style={styles.screenTitle}>Completed Tasks</Text>

      <ScrollView style={styles.scrollView}>
        {completedTodos.map((item) => {
          return (
            <TodoItem key={item.id} item={item} handleCheck={handleCheck} />
          );
        })}
      </ScrollView>
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
    fontWeight: 'bold',
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

// ajouter ce code dans le ficher readme.md
// une example pour FlatList
{/* <>
  <FlatList
    data={defaultTask}
    renderItem={({ item }) => renderTodoItem({ item })}
    keyExtractor={(item) => item.id}
  />
  // un example pour SectionList
  <SectionList
    sections={[
      { title: 'Todo', data: ['Task 1', 'Task 2', 'Task 3'] },
      { title: 'Done', data: ['Task 6', 'Task 7', 'Task 8'] },
    ]}
    renderItem={({ item }) => renderTodoItem({ item })}
    renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
    keyExtractor={(item, index) => index}
  />
  ;
</>; */}
