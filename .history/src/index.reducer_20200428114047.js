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
					return Object.assign({},state,{num:state.num+100})
        case '减':
					return Object.assign({},state,{num:state.num-100})
        default:
					return state;
    }
}
export default reducer;