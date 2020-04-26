import React, {useReducer, createContext} from 'react';
import HomeReducer from './HomeReducer';
import images from '../../container/Images/images';
// import Images from '../../container/Images/images'

const initialState = {
    totalCoins : 0,
    userImage : images.profile.image,
    userName : "Name",
    lootList : [
        {
            name: 'John Cena',
            imageSource: 'https://i.kym-cdn.com/photos/images/newsfeed/001/688/970/a72.jpg',
        },
        {
            name: 'Robert Downey',
            imageSource: 'https://i0.wp.com/flashsolver.com/wp-content/uploads/2012/05/you-clearly-look-confused-l1.jpeg?resize=580%2C580',
        },     
    ],
}

export const HomeContext = createContext(initialState);

export const HomeProvider = ({children}) => {
    const [state, dispatch] = useReducer(HomeReducer, initialState);


    function editState(request) {
        dispatch({
            type: 'EDIT_STATE',
            payload: request
        })        
    }

    return (
        <HomeContext.Provider value={{
            state,
            editState}}> 
            {children}
        </HomeContext.Provider>
    )
}
