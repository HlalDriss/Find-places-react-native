import React, {useState, useEffect} from "react";
import {View,  ScrollView, StyleSheet} from "react-native";
import PlaceList from "./PlaceList";
import {Container, Header, Item, Input, Icon, Text} from "native-base";
import SearchedPlace from "./SearchedPlace";
import CategoryFilter from "./CategoryFilter"
import CityFilter from "./CityFilter";
const PlacesCategories = require('../../assets/data/categories.json');
const data =require('../../assets/data/places.json')
const  PlacesCities=require('../../assets/data/city.json')


    const PlaceContainer = (props) => {

                const [places, setPlaces] = useState([]);
                const [placesFiltred, setPlacesFiltred] = useState([]);
                const [focus, setFocus] = useState();
                //categories
                const [categories, setCategories] = useState([]);
                const [placesCtg, setPlacesCtg] = useState([]);
                //acitives
                const [active, setActive] = useState();
                const [active1, setActive1] = useState();
                const [intialState, setInitialState] = useState([]);
                 //Cities
                const [cities, setCities] = useState([]);
                const [placesCty, setPlacesCty] = useState([]);
                useEffect(() => {
                    setPlaces(data);
                    setPlacesFiltred(data);
                    setPlacesCtg(data);
                    setPlacesCty(data);
                    setInitialState(data);
                    setFocus(false);
                    //categories
                   setCategories(PlacesCategories);
                    ///cities
                   setCities(PlacesCities);
                    //actives
                    setActive(-1);
                    setActive1(-1);







        return () => {
            setPlaces([]);
            setPlacesFiltred([]);
            setFocus();
            setCategories([]);
            setCities([]);
            setActive();
            setActive1();
            setInitialState();


        };

    }, [])

    const searchPlace = (text) => {
        setPlacesFiltred(
            places.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        );
    };
    const openList = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };
//Categories
    const changeCtg = (ctg) => {
        {
            ctg === "all" ? [setPlacesCtg(intialState), setActive(true)] :
                [
                    setPlacesCtg(
                        places.filter((i) => i.category.$oid === ctg),
                        setActive(true)
                    ),
                ];
        }
    };

    //Cities
    const changeCty = (cty) => {
        {
            cty === "all" ? [setPlacesCty(intialState), setActive1(true)] :
                [
                    setPlacesCty(
                        places.filter((j) => j.city.$oid === cty) ,
                        setActive1(true)
                    ),
                ];
        }
    };


const placeGlob = placesCty.filter(item1 => placesCtg.some(item2 => item1._id.$oid === item2._id.$oid ))

    return (
        <Container style={ {backgroundColor:'#E4F4FD'}}>
            <Header style={ {backgroundColor:'#E4F4FD'}} searchBar rounded>
                <Item style={styles.input}>
                    <Icon name="ios-search"/>
                    <Input

                        placeholder="Search"
                        onFocus={openList}
                        onChangeText={(text) => searchPlace(text)}
                    />
                    {focus == true ? (
                        <Icon onPress={onBlur} name="ios-close"/>
                    ) : null}
                </Item>
            </Header>
            {focus == true ? (
                <SearchedPlace
                    navigation={props.navigation}
                    placesFiltred={placesFiltred}
                />
            ) : (
                <ScrollView>
                    <View>
                        <View>
                            <CityFilter
                                cities={cities}
                                cityFilter={changeCty}
                                placesCty={placesCty}
                                active={active1}
                                setActive={setActive1}
                            />
                        </View>
                        <View>
                            <CategoryFilter
                                categories={categories}
                                categoryFilter={changeCtg}
                                placesCtg={placesCtg}
                                active={active}
                                setActive={setActive}
                            />
                        </View>

                        {placeGlob.length > 0 ? (
                            <View style={{marginTop: 100}}>
                                {placeGlob.map((item) => {
                                    return (
                                        <PlaceList
                                            navigation={props.navigation}
                                            key={item._id.$oid}
                                            item={item}

                                        />


                                    )
                                })}

                            </View>
                        ) : (
                            <View style={[styles.center, {height: '40%'}]}>
                                <Text style={{fontSize: 20}}>No Places Found</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            )}


        </Container>


    )
}


const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input:{
        borderRadius:30,
        elevation:10
    }
})
export default PlaceContainer;
