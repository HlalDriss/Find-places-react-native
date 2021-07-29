import React from "react";
import {StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import {ListItem,Badge,Text,Thumbnail} from 'native-base';

const CategoryFilter =(props)=>{
    return(
        <ScrollView
        bounces={true}
        horizontal={true}
        style={{backgroundColor:'#E4F4FDFF'}}
        >

            <ListItem style={{margin:0,padding:0,borderRadius:0}}>
                <TouchableOpacity
                key={1}
                onPress={()=>{
                    props.categoryFilter('all'),
                        props.setActive(-1)
                }}
                >
                    <Text style={{color:'black',fontWeight: "bold",}}>All</Text>
                     <Badge style={[styles.center,{margin:5},
                     props.active == -1 ? styles.active : styles.inactive
                     ]}>

                     </Badge>
                </TouchableOpacity>
                {props.categories.map((item)=>(

                    <TouchableOpacity
                        key={item._id}
                        onPress={()=>{
                            props.categoryFilter(item._id.$oid),
                                props.setActive(props.categories.indexOf(item))
                        }}
                    >
                        <Text   style={
                            props.active == props.categories.indexOf(item) ? styles.activeText : styles.inactiveText
                        }>{item.name}</Text>
                            <Thumbnail
                                style={[styles.center,{margin:5},
                                    props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                                ]}
                                square  source={{uri:item.icon}} />

                    </TouchableOpacity>

                ))}
            </ListItem>

        </ScrollView>
    )
}
const styles=StyleSheet.create({
    center:{
        height:100,
        width:100,
        borderRadius:8,
        backgroundColor:'#007AFF'
    },activeText:{
        fontSize:18,
        color:'rgba(0,122,255,0.66)',
        fontWeight: "bold",
    },
    inactiveText:{
        fontSize:14,
        color:'#007AFF',
    },
    active:{
        height:120,
        width:120,
    },
    inactive:{
        height:100,
        width:100,
    }
})
export default CategoryFilter;
