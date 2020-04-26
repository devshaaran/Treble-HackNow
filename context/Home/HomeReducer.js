export default (state,action) => {
    
    switch(action.type){

        case 'EDIT_STATE':
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
            
    }

}