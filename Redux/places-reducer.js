import {TOGGLE_FAVORITE} from "./places-actions";

const data=require('../assets/data/places.json');
const initialState={
    places:data,
    favoritePlaces:[]
};

export default (state=initialState,action)=>{
    switch (action.type) {
        /*case ADD_PLACE:
            const newPlace=new Place(new Date().toString(),action.placeData.title)
            return {
                places:state.places.concat(newPlace)
            }*/
        case TOGGLE_FAVORITE:
            const existingIndex=state.favoritePlaces.findIndex(place=>place.id===action.placeId);
            if (existingIndex >=0){
                   const updatedFavPlaces=[...state.favoritePlaces];
                   updatedFavPlaces.splice(existingIndex,1);
                   return {...state,favoritePlaces: updatedFavPlaces};
            }else {
                const place=state.places.find(place=>place.id===action.placeId)
                   return {...state,favoritePlaces: state.favoritePlaces.concat(place)}
            }
        default:
            return state;
    }

};
