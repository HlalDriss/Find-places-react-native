import React from "react";
import {View,StyleSheet,Dimensions} from "react-native";
import {Content,Left,Body,ListItem,Thumbnail,Text} from "native-base";



var {width}=Dimensions.get('window');
const SearchedPlace = (props) =>{
    const {placesFiltred}=props;
    return(
        <Content style={ {width:width}}>
            {placesFiltred.length >0 ?(
                placesFiltred.map((item)=>(
                    <ListItem
                     onPress={()=>{
                         props.navigation.navigate('SinglePlace',{item:item})
                     }}
                        key={item._id.$oid}
                        avatar>
                        <Left>
                            <Thumbnail
                              source={{ uri: item.image ?
                                      item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                              }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
            ):(
                <View >
                    <Text style={{alignSelf:'center'}}>
                        No places match the sekected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
};
const styles=StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center'

    }
})

export  default  SearchedPlace;
