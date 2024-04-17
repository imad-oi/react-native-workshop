# Atelier React Native

## Installation

### Prérequis

- Node.js : https://nodejs.org/en/download/
- npm : https://www.npmjs.com/get-npm
- Expo CLI : `npm install -g expo-cli`
- Android Studio
- Un émulateur Android ou iOS ou un smartphone avec l'application Expo Go

### Installation

1. Cloner le projet

```bash
git clone https://github.com/imad-oi/react-native-workshop.git
```

2. Installer les dépendances

```bash
npm install
```

3. Lancer le projet

```bash
npm run start
```

4. Scanner le QR code avec l'application Expo Go

5. Ou lancer l'application sur un émulateur Android

```bash
npm run android
```

Voilà, vous pouvez commencer à coder !

<!--  center l'image -->
<p align="center">
  <img src="/assets/images/image.png" alt="image" />
</p>

## Objectif

Créer une application mobile de gestion de tâches avec React Native:

<!-- inserer une image -->

![Image](/assets/images/template.png)

## Fonctionnalités

- [x] Ecran de connexion
- [x] Ecran de liste des tâches
- [x] Ajouter une tâche

## Que ce que vous allez apprendre?

- Comment créer une application mobile avec React Native
- Comment utiliser React Navigation
- Comment utiliser les composants de base de React Native: View, Text, TextInput, Button,...
- Comment utiliser les hooks de React: useState, ...

### A vous de jouer (optionnel)

- [ ] Ecran de détail
- [ ] Ecran de profil
- [ ] Ecran de paramètres
- [ ] Ecran de déconnexion

## Technologies

- React Native
- React Navigation
- Expo

## Implémentation

### Structure du projet

```bash
-- src
    |-- App.js
    |-- components
    |   |-- Button.js
    |   |-- Input.js
    |   |-- Header.js
    |-- screens
    |   |-- LoginScreen.js
    |   |-- ListTaskScreen.js
    |   |-- AddTaskScreen.js
    |-- navigation
    |   |-- RootNavigator.js
    |-- constants
    |   |-- index.js
    |   |-- theme.js
    |   |-- icons.js
    |   |-- images.js
    |   |-- categories.js
    |-- utils
    |   |-- index.js
-- assets
    |-- images
    |   |-- congratulation.png
    |-- icons
    |   |-- calendar.png
    |   |-- education.png
    |   |-- sport.png
    |   |-- icon.png
```

### Example de FlatList et SectionList

- FlatList

```jsx
const renderTodoItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

<FlatList
  data={[
    { id: '1', title: 'Faire du sport', description: 'Faire du sport pendant 30 minutes' },
    { id: '2', title: 'Lire un livre', description: 'Lire un livre pendant 1 heure' },
    { id: '3', title: 'Apprendre React Native', description: 'Apprendre React Native pendant 2 heures' },
  ]}
  renderItem={({ item }) => renderTodoItem({ item })}
  keyExtractor={(item) => item.id}
/>;
```

- SectionList

```jsx
const renderSectionHeader = ({ section }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );
};

<SectionList
  sections={[
    {
      title: 'Aujourd\'hui',
      data: [
        { id: '1', title: 'Faire du sport', description: 'Faire du sport pendant 30 minutes' },
        { id: '2', title: 'Lire un livre', description: 'Lire un livre pendant 1 heure' },
      ],
    },
    {
      title: 'Demain',
      data: [
        { id: '3', title: 'Apprendre React Native', description: 'Apprendre React Native pendant 2 heures' },
      ],
    },
  ]}
  renderItem={({ item }) => renderTodoItem({ item })}
  renderSectionHeader={({ section }) => renderSectionHeader({ section })}
  keyExtractor={(item) => item.id}
/>;
```
