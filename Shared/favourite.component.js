import React,{useContext} from "react";
import {FavouritesContext} from "../services/favourites/Favourites.context";
import styled from "styled-components";
import {AntDesign} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";



const FavouriteButton=styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  z-index: 9;
  right: 10px;
 
`;
export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(
        FavouritesContext
    );

    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
      console.log(favourites)
    return (
        <FavouriteButton
            onPress={() =>
                !isFavourite
                    ? addToFavourites(restaurant)
                    : removeFromFavourites(restaurant)
            }
        >
            <AntDesign
                name={isFavourite ? "heart" : "hearto"}
                size={24}
                color={isFavourite ? "red" : "white"}
            />
        </FavouriteButton>
    );
};
