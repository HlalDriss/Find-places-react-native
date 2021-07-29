import React,{useState,useCallback} from "react";
import {View, StyleSheet, Text, ScrollView, TextInput, Button,Picker} from "react-native";
import {useDispatch} from "react-redux";
import  * as placesActions from  '../../Redux/places-actions'
import LocationPicker from "../Location/LocationPicker";
const NewPlaceScreen=props=>{
    const [selectedValue, setSelectedValue] = useState('');
    const [titleValue,setTitileValue]=useState('');
    const [selectedLocation, setSelectedLocation] = useState();
    const dispatch=useDispatch();
console.log(selectedLocation)
    const titleChangeHandler=text=>{
        //you could setValidation
        // setTitileValue(text)
    };
    const savePlaceHnadler =()=>{
     // dispatch(placesActions.addPlace(titleValue));
     // props.navigation.goBack();
    };

    const locationPickedHandler = useCallback(location => {
        setSelectedLocation(location);
    }, []);


    return(
        <ScrollView>
            <View style={styles.form}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}

                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Resturant" value="res" />
                    <Picker.Item label="Cafe" value="caf" />
                    <Picker.Item label="Hopital" value="hop" />
                    <Picker.Item label="Pharmacie" value="phar" />
                    <Picker.Item label="School" value="scho" />
                    <Picker.Item label="Other" value="other" />
                </Picker>

                <TextInput
                    placeholder="Name"
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                    style={styles.inputText} />
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Rabat" value="rab" />
                    <Picker.Item label="Casablanca" value="cas" />
                    <Picker.Item label="Eljadida" value="elja" />
                    <Picker.Item label="Safi" value="safi" />
                    <Picker.Item label="Marrackech" value="marr" />
                    <Picker.Item label="Tetouan" value="tet" />
                    <Picker.Item label="Tanger" value="tan" />
                </Picker>
                <TextInput
                    placeholder="Address"
                    // onChangeText={}
                    // value={}
                    style={styles.inputText} />

                <LocationPicker

                    navigation={props.navigation}
                    onLocationPicked={locationPickedHandler}
                />
                <Button title="Save Place" color="green"
                        onPress={savePlaceHnadler} />
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    form:{
        margin :30
    },
    inputText:{
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
        marginBottom:20,
        paddingVertical:4,
        paddingHorizontal:2
    }
});

export default NewPlaceScreen;
