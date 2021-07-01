export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null, // no item playing
}; // initial values of initialState objects

const reducer = (state, action) => {
    console.log(action);

    // State (of the data layer): how we set our initial state to look like, how we manipulate the Data Layer
    // Action (of the data layer): how we manipulate what the data layer looks like
    // Action -> type, [payload] 
    // payload can be dynamic

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, // keep whatever is in the current state
                user: action.user // update the user in the initial state with whatever was in the action
            } // this is what the new state will look like if 'SET_USER' will be passed as action type
        default:
            return state;
    }
} // reducer listens to actions

export default reducer;