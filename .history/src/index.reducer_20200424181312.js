const tiger = 100


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
			return  state +=100
        case '减':
            return  state -=100
        default:
            return state;
    }
}
export default reducer;