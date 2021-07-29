import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import * as actions from '../../Redux/Actions/cartActions'
import styled from "styled-components";
import {AntDesign} from "@expo/vector-icons";
const {width} = Dimensions.get("window");

const FavouriteButton=styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  z-index: 9;
  right: 10px;
  
`;




const PlaceCard = (props) => {

    const {name, rating, image, description,category} = props;
   const arrayRating=Array.from(new Array(Math.floor(rating)));

    const isFavourite =props.cartItems.find((r) => r.place.name === props.name);


    return (
        <View style={styles.container}>

            <FavouriteButton

                onPress={() =>{
                    !isFavourite
                        ? props.addItemToCart(props)
                        : props.removeFromCart(props)

                }

                }
            >
                <AntDesign
                    name={isFavourite ? "heart" : "hearto"}
                    size={24}
                    color={isFavourite ? "red" : "white"}
                />
            </FavouriteButton
                >


            <Image
                style={styles.image}
                resizeMode="cover"
                source={{
                    uri: image ?
                        image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"
                }}
            />
            <View style={styles.card}/>

            <View style={styles.infos}>
                <View  style={styles.info}>
                    <Text style={styles.name}>
                        {name}
                        {/*{name.length > 15 ? name.substring(0, 15 - 3)
                            + '...' : name
                        }*/}
                    </Text>
                    <View style={styles.ratting}>
                        {arrayRating.map( ()=>(
                            <Image
                                style={{width:17,height:17} }
                                source={require('../../assets/star.png')}
                            />
                        ))}
                    </View>
                    <Text style={styles.address}>{description}</Text>
                </View>
                   <View style={styles.iconCat}>
                       <Image source={{uri:category.icon}} style={{width:20,height:20} } />
                   </View>

            </View>

        </View>
    )
}

const mapStateToProps=(state)=>{
    const {cartItems}=state;
    return{
        cartItems:cartItems,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addItemToCart:(place)=>
            dispatch(actions.addToCart({quantity: 1, place})),
        removeFromCart:(item)=>dispatch(actions.removeFromCart(item))
    }
}
const styles = StyleSheet.create(
    {
        container: {

            width: width-10,
            height: width / 1.4,
            padding: 10,
            borderRadius: 6,
            marginTop: 7,
            marginBottom: 5,
            marginLeft: 5,
            alignItems: 'center',
            elevation: 20,
            backgroundColor: 'white'
        },
        address:{

        },
    infos:{

        flexDirection: 'row',
        width: width-10,
    }
    ,
        info:{
            width:width/2+100,
             padding: 5
        },
        image: {
            borderRadius: 6,
            marginTop:2,
            width: width-15,
            height: width / 2-15 ,
            backgroundColor: 'transparent',
            position: 'absolute',

        },
        card: {
            marginBottom: 100,
            height: width / 2 - 20 - 90,
            backgroundColor: 'transparent',
            width: width / 2 - 20 - 10,
          /*  borderColor: 'red',
            borderWidth: 1,*/
        },
        name: {
            fontWeight: "bold",
            fontSize: 14,

        },
        ratting: {
            marginTop: 5,
            padding:2,
            flexDirection: 'row',

        },
        iconCat:{

            marginLeft:width/2-140,
            justifyContent:'center'
        }

    }
)
export default connect(mapStateToProps,mapDispatchToProps)(PlaceCard)
