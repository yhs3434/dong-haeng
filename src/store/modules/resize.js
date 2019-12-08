const RESIZING = 'resize/RESIZING';

export const resizing = screenWidth => ({type: RESIZING, screenWidth});

const initialState = {
    screenWidth: 0
};

export default function resize(state = initialState, action) {
    switch (action.type) {
        case RESIZING:
            return {
                ...state,
                screenWidth: action.screenWidth
            };
        default:
            return state;
    }
}