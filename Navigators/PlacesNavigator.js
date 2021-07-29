import React from "react";
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import PlaceContainer from "../Screens/Places/PlaceContainer";
import SinglePlace from "../Screens/Places/SinglePlace";
import FavoritePlaces from "../Screens/Places/FavoritePlaces";
import NewPlaceScreen from "../Screens/Places/NewPlaceScreen";
import { Ionicons,Feather } from '@expo/vector-icons';
import MapScreen from "../Screens/Location/MapScreen";

const PlaceNavigator=createStackNavigator({
      Home: {screen : PlaceContainer,
      navigationOptions:{
            headerShown:false
      }
      },
      SinglePlace:{screen:SinglePlace,
            navigationOptions:{
                  headerTitle:''
            }
      }
},{
      mode:'modal'
})
const FavoriteNavigator=createStackNavigator({
      Home: {screen : FavoritePlaces,
            navigationOptions:{
                  headerTitle:'My Favorites'
            }
      },
      SinglePlace:SinglePlace
},{
      mode:'modal'
})

const AddPlaceNavigator=createStackNavigator({
      NewPlace: {screen : NewPlaceScreen,
            navigationOptions:{
                  headerTitle:'Add Place'
            },

      },
      MapView:MapScreen
},{
      mode:'modal'
})
// User Navigator...

  const PlacesFavTabNavigator=createBottomTabNavigator({
        Places: {screen:PlaceNavigator,
                 navigationOptions:{
                    tabBarLabel:'Home',
                   tabBarIcon:(tabInfo)=>{
                         return <Ionicons name="home" size={25} color={tabInfo.tintColor} />
                   }
                 }
        },

        AddPlace: {screen:AddPlaceNavigator,
              navigationOptions:{

                    tabBarIcon:(tabInfo)=>{
                          return <Ionicons name="ios-add" size={24} color={tabInfo.tintColor} />

                    }
              }
        },
        Favorites: {screen:FavoriteNavigator,
              navigationOptions:{

                    tabBarIcon:(tabInfo)=>{
                          return <Ionicons name="heart" size={25} color={tabInfo.tintColor} />
                    }
              }
        },

  },{
        tabBarOptions:{
              activeTintColor:'blue',
        }
  })


export default createAppContainer(PlacesFavTabNavigator);
