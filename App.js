
import React from 'react';
import { LogBox } from 'react-native';

import {Provider} from 'react-redux';
import store from "./Redux/store";

import PlacesNavigator from "./Navigators/PlacesNavigator";
import Header from "./Shared/Header";

LogBox.ignoreAllLogs(true);



export default function App() {

  return (
     <Provider store={store}>
         <Header />
            <PlacesNavigator />
     </Provider>
  );
}
