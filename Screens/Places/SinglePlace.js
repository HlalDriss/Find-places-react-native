import React, {useState, useEffect, useCallback} from "react";
import {Image, View, StyleSheet, ScrollView, Button, Text, Dimensions} from "react-native";
import {Left, Right, Container, H1} from "native-base";
import MapView, {Marker} from "react-native-maps";


const {height,width}=Dimensions.get("window");
const SinglePlace=(props)=>{

    const [item,setItem]=useState(props.navigation.getParam('item'));
   const markerCoordinates={

        latitude: item.location.latitude,
        longitude:item.location.longitude

    }

    return(
        <Container style={styles.container}>

              <View style={styles.contentContainer}>
                  <H1 style={styles.contentHeader}>{item.name}</H1>
                  <Text style={styles.contentText}>{item.description}</Text>


                 <Image
                     style={styles.image}
                     resizeMode="contain"
                    source={{
                        uri:item.image ? item.image
                            : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"
                    }}
                 />
              </View>

                   <MapView style={styles.mapImage}    >
                       {markerCoordinates && ( <Marker coordinate={markerCoordinates}  title={item.name} />


                       )}
                   </MapView>


        </Container>
    )
}
const styles=StyleSheet.create({
    mapImage: {
       width :width-20,
        marginLeft:10,
        height:height/2-80,
        borderWidth:1,
        borderColor:'red',
        marginTop: 12,


    },
    container:{

        height:'100%',

    },

    image:{
        width:width-20,
        height: 250,

    },
    contentContainer:{
        justifyContent:'center',
        alignItems:'center',

    },
    contentText:{
        marginTop:8
    }
})


export default SinglePlace;
