export const initialState={
    basket:[],
    user:null,
};

export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=> item.price + amount,0);

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            //Logic for add to basket
            return {
                ...state,
            basket:[...state.basket,action.item],
        };
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket
            console.log('remove from basket!!')
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem=>basketItem.productId===action.productId))
            if (index>=0){
                newBasket.splice(index,1);

            }else{
                console.warn(
                    `Can't remove product id ${action.productId} as its not exist`
                );
            }
            return {...state, basket:newBasket}
        default:
            return state;
    }
}

export default reducer;