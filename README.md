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

Voilà, vous pouvez commencer à coder !

<!--  center l'image -->
<p align="center">
  <img src="image.png" alt="image" />
</p>

## Objectif

Créer une application mobile de gestion de tâches avec React Native:

<!-- inserer une image -->

![Image](./template.png)

## Fonctionnalités

- [x] Ecran de connexion
- [x] Ecran de liste des tâches
- [x] Ajouter une tâche

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
