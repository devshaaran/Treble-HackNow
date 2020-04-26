export default (state,action) => {
    
    switch(action.type){
        case 'ADD_PHONE_NUMBER':
            return {
                ...state,
                phNumber: action.payload,
            }
        
        case 'ADD_CALLING_CODE':
            return {
                ...state,
                valueCallingCode: action.payload,
            }

        case 'EDIT_STATE':
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
            
    }

}