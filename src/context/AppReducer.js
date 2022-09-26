//Step 4: Create a Reducer and Export it
//7. Add the Delete Reducer case

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload ]
                // transactions is the state name
            }
        default:
            return state;
    }
}