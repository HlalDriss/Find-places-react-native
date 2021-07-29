import React  from "react";
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";

import {connect} from "react-redux";

import {Container} from "native-base";
import PlaceList from "./PlaceList";

var {height,width}=Dimensions.get("window");
const FavoritePlaces=(props)=>{
   console.log(props.cartItems)
    return(
             <>
                 {props.cartItems.length?(
                    <Container>
                        <ScrollView>
                            {props.cartItems.map(data=>{
                                return(

                                    <PlaceList
                                        navigation={props.navigation}
                                        key={data.place._id.$oid}
                                        item={data.place}

                                    />
                                )
                            })}
                        </ScrollView>
                    </Container>
                 ):(
                    <Container style={styles.emptyContainer}>
                        <Text>Your favourite is empty</Text>
                    </Container>
                 )}
             </>
    )
}
const mapStateToProps=(state)=>{
    const {cartItems}=state;
    return{
        cartItems:cartItems,
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    emptyContainer:{
        height:height,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default connect(mapStateToProps,null)(FavoritePlaces);
