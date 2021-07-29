import React, {useCallback, useEffect, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity,Platform} from "react-native";
import MapView,{Marker} from "react-native-maps";

const MapScreen = (props) =>{

    const [selectedLocation,setSelectedLocation]=useState()



   const mapRegion={
       latitude:33.2315853,
       longitude:-8.524277,
       latitudeDelta:0.0992,
       longitudeDelta:0.0421,
   }
     const selectLocationHandler=event=>{
         setSelectedLocation({
           lat:event.nativeEvent.coordinate.latitude,
           lng:event.nativeEvent.coordinate.longitude
       })
     };

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            // could show an alert!
            return;
        }
        props.navigation.navigate('NewPlace', { pickedLocation: selectedLocation });
    }, [selectedLocation]);

    useEffect(() => {
        props.navigation.setParams({ saveLocation: savePickedLocationHandler });
    }, [savePickedLocationHandler]);

     let markerCoordinates;
    if (selectedLocation){
        markerCoordinates={
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }


     return (

         <MapView style={styles.mapSt}
                        region={mapRegion}
                        onPress={selectLocationHandler}
               >
                   {markerCoordinates && ( <Marker coordinate={markerCoordinates}  title="Picked Location" />


                   )}
               </MapView>


     )


};


 MapScreen.navigationOptions=navData=>{

     const saveFn=navData.navigation.getParam('saveLocation');
     return {
         headerRight:(
             <TouchableOpacity
                 style={styles.headerButton}
                 onPress={saveFn}
             >
                 <Text style={styles.headerButtonText}>Save</Text>
             </TouchableOpacity>
         ),

     };

};

const styles=StyleSheet.create({
    mapSt:{
    flex:1,
    },
    headerButton:{
        justifyContent:'center',
        alignItems:'center',



    },
    headerButtonText:{
        fontSize:20,
        marginRight:15,
        color:'green',
        padding:5,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
    }


});

export default MapScreen;
