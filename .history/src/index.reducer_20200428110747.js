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
			return  ()=>{
                let num=state.num;
                num+=100
                state.num=num
            }
        case '减':
            return  state.num -=100
        default:
            return state;
    }
}
export default reducer;