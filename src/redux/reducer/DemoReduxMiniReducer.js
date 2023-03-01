import { GIAM_SO_LUONG, TANG_SO_LUONG } from "../constants/DemoConstant";

let initalValue = {
    number: 1
}

export const demoReducer = ((state = initalValue, action) => {
    switch (action.type) {
        case TANG_SO_LUONG:
            {
                state.number++
                return {...state};
            }
        case GIAM_SO_LUONG:
            {
                state.number--;
                return {...state}
            }
        default:
            return state;
    }
})