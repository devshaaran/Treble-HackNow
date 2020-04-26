import React, {useReducer, createContext} from 'react';
import AuthReducer from './AuthReducer';
import {Dimensions, Animated} from 'react-native';

const viewHeight = Dimensions.get("window").height;


const initialState = {
    fontLoaded: false,
    cca2: 'OM',
    callingCode:'968',
    phNumber: '',
    valueCallingCode: '',
    otp: '',
    name: '',
    username: '',
    signedIn: false,
    userToken: '',
    screenNo: 0,
    checkedSignIn: false,
    sliderHeight: new Animated.Value((viewHeight > 820) ? viewHeight/2.8 : (viewHeight < 530) ? viewHeight/2.4 : viewHeight/2.5)
}

export const AuthContext = createContext(initialState);

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    function addPhNumber(phNumber) {
        dispatch({                   
            type: 'ADD_PHONE_NUMBER',
            payload: phNumber            
        })
    }

    function addCallingCode(callingCode) {
        dispatch({                   
            type: 'ADD_CALLING_CODE',
            payload: callingCode            
        })
    }

    function editState(request) {
        dispatch({
            type: 'EDIT_STATE',
            payload: request
        })        
    }

    return (
        <AuthContext.Provider value={{
            state,
            addPhNumber,
            addCallingCode,
            editState}}> 
            {children}
        </AuthContext.Provider>
    )
}
