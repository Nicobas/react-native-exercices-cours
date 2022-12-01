import React from 'react';

import FlexboxScreen from './src/cours/04-composants-de-base-et-styles/exo-1-flexbox/FlexboxScreen';
import RegisterScreen from './src/cours/04-composants-de-base-et-styles/exo-2-formulaire/RegisterScreen';
import DataListScreen from './src/cours/04-composants-de-base-et-styles/exo-3-liste-de-donnees/DataListScreen';
import RegisterValidationScreen from './src/cours/05-composants-personnalises/exo-1-formulaire-avec-validation/RegisterValidationScreen';
import RegisterValidationBonusScreen from './src/cours/05-composants-personnalises/exo-1b-formulaire-avec-validation-fin-de-saisie/RegisterValidationBonusScreen';
import TodoListScreen from './src/cours/05-composants-personnalises/exo-2-toto-list/TodoListScreen';
import DetailScreenApp from './src/cours/06-navigation/exo-1-page-detail/DetailScreenApp';
import TabBarApp from './src/cours/06-navigation/exo-2-tabbar/TabBarApp';
import DrawerApp from './src/cours/06-navigation/exo-2b-drawer/DrawerApp';
import PersistentTodoListScreen from './src/cours/07-gestion-avancee-des-donnees/exo-1-todo-list-persistante/PersistentTodoListScreen';
import ReduxApp from './src/cours/07-gestion-avancee-des-donnees/exo-2-todo-list-redux/ReduxApp';
import ReduxPersistApp from './src/cours/07-gestion-avancee-des-donnees/exo-2b-todo-list-redux-persist/ReduxPersistApp';

const App = () => {
  // décommenter les lignes pour voir les différents exercices
  return (
    <>
      <FlexboxScreen />
      {/*<RegisterScreen />*/}
      {/*<DataListScreen />*/}
      {/*<RegisterValidationScreen />*/}
      {/*<RegisterValidationBonusScreen />*/}
      {/*<TodoListScreen />*/}
      {/*<DetailScreenApp />*/}
      {/*<TabBarApp />*/}
      {/*<DrawerApp />*/}
      {/*<PersistentTodoListScreen />*/}
      {/*<ReduxApp />*/}
      {/*<ReduxPersistApp />*/}
    </>
  );
};

export default App;
