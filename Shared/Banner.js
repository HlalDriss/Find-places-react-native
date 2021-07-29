import React, {useEffect, useState} from "react";
import {View, StyleSheet, Dimensions, ScrollView, Image, Text} from "react-native";
import Swiper from 'react-native-swiper/src';

var {width} =Dimensions.get('window');

const Banner =()=>{
    const  [bannerData,setBannerData]=useState([]);

    useEffect( ()=>{
        setBannerData(['https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg',
                             'https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg',
                              'https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg'
                              ])
        return() =>{
            setBannerData([])
        }
    },[])

    return(
        <View>
            <Text>Bannner</Text>
        </View>
    )
}
