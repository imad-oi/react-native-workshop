import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { COLORS, categories } from '../constants';
import Button from '../components/Button';
import React from 'react';

export default function AddTaskScreen({ navigation, route }) {
  
  // initialiser les variables d'état
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [task, setTask] = React.useState({
    title: '',
    description: '',
    category: null,
    checked: false,
  });

  // recuperer la données passée en paramètre
  const { todoList, setTodoList } = route.params;

  // fonction pour sauvegarder la tâche
  const handleSaveTask = () => {
    if (
      task.title === '' ||
      task.description === '' ||
      task.category === null
    ) {
      alert('Please fill all the fields');
      return;
    }
    setTodoList([...todoList, { ...task, id: todoList.length + 1 }]);
    navigation.navigate('Tasks');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formItem}>
        <Text>Task tile</Text>
        <TextInput
          onChangeText={(text) => setTask({ ...task, title: text })}
          placeholder="Task title"
          style={styles.input}
        />
      </View>
      <View style={styles.formItem}>
        <Text>Category</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 15,
            justifyContent: 'center',
          }}
        >
          {categories.map((category) => (
            <TouchableHighlight
              onPress={() => {
                setSelectedCategory(category.id);
                setTask({ ...task, category: category.id });
              }}
              key={category.id}
              style={{
                padding: 7,
                borderRadius: 20,
                backgroundColor: COLORS.secondary,
                borderWidth: 3,
                borderColor:
                  selectedCategory === category.id
                    ? COLORS.primary
                    : COLORS.white,
              }}
            >
              <Image source={category.image} />
            </TouchableHighlight>
          ))}
        </View>
      </View>
      <View style={styles.formItem}>
        <Text>Task description</Text>
        <TextInput
          onChangeText={(text) => setTask({ ...task, description: text })}
          placeholder="Task description"
          style={styles.textArea}
          multiline
          numberOfLines={9}
        />
      </View>
      <Button label="Save" onPress={handleSaveTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    display: 'flex',
    gap: 20,
    padding: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 5,
    padding: 10,
    backgroundColor: COLORS.white,
  },
  textArea: {
    height: 150,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 5,
    padding: 10,
    backgroundColor: COLORS.white,
  },
  formItem: {
    display: 'flex',
    gap: 10,
  },
});
