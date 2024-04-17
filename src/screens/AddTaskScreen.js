import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { COLORS, categories } from '../constants';
import Button from '../components/Button';
import React from 'react';

export default function AddTaskScreen({ navigation, route }) {
  // navigation et route sont ajouté par défaut par react-navigation

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
    <ScrollView
      keyboardDismissMode="on-drag" // Pour cacher le clavier lorsqu'on scroll
      contentContainerStyle={styles.container} // Pour définir le style du container
    >
      {/* Titre du tache à faire */}
      <View style={styles.formItem}>
        <Text>Task tile</Text>
        <TextInput
          onChangeText={(text) => setTask({ ...task, title: text })}
          placeholder="Task title"
          style={styles.input}
        />
      </View>

      {/* Catégorie de la tâche à faire */}
      <View style={styles.formItem}>
        <Text>Category</Text>
        <View style={styles.flexCategories}>
          {categories.map((category) => (
            <TouchableHighlight
              onPress={() => {
                setSelectedCategory(category.id);
                setTask({ ...task, category: category.id });
              }}
              key={category.id}
              style={[
                styles.categoryWrapper,
                {
                  borderColor:
                    selectedCategory === category.id
                      ? COLORS.primary
                      : COLORS.white,
                },
              ]}
            >
              <Image source={category.image} />
            </TouchableHighlight>
          ))}
        </View>
      </View>

      {/* Description de la tâche à faire */}
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

      {/* Bouton pour sauvegarder la tâche */}
      <Button label="Save" onPress={handleSaveTask} />
    </ScrollView>
  );
}

// les styles de la page AddTaskScreen
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
  flexCategories: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
  },
  categoryWrapper: {
    padding: 7,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    borderWidth: 3,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
