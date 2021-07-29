export const  ADD_PLACE='ADD_PLACE';
export const TOGGLE_FAVORITE='TOGGLE_FAVORITE'

export const toggleFavorite=(id)=>{
    return{
        type:TOGGLE_FAVORITE,
        placeId:id
    };
}
/*
export const addPlace=title=>{
    return{
        type:ADD_PLACE,
        placeData: {title:title}
    };
};
*/
