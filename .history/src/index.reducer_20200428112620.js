const tiger = {
    num:0
}


//这是action
const increase = {
    type: '加'
}
const decrease = {
    type: '减'
}
//这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case '加':
			return action.playload(state)
        case '减':
            return action.playload(state)
        default:
            return state;
    }
}
export default reducer;