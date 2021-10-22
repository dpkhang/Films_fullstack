
const initial = {
    data: {},
    grant: 'admin'
}

const userReducer = (state=initial, action) => {
    switch (action.type) {
        // case 'USER_LOGIN': {
        //     const newData = [...state.data]
        //     newData.push(action.payload)
        //     return {
        //         ...state,
        //         data: newData
        //     }
        // }
        case 'USER_LOGIN': {
            const newData = action.payload
            return {
                ...state,
                data: newData
            }
        }
        case 'USER_REGISTER' : {
            return state
        }

        case 'USER_LOGOUT': {
            return state
        }

        default: {
            return state
        }
    }
}

export default userReducer