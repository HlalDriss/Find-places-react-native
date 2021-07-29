import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import PlaceCard from "./PlaceCard";
import {Favourite} from "../../Shared/favourite.component";

const PlaceList = (props) => {
    const {item} = props;

    return (

        <TouchableOpacity onPress={() => props.navigation.navigate({routeName: 'SinglePlace', params: {item: item}})} >

            <PlaceCard {...item} />

        </TouchableOpacity>
           )
}

export default PlaceList;
