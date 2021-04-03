import {Dispatch} from 'redux'
import {todolistsAPI} from "../api/todolists-api";
import {setTodolistsAC} from "../features/TodolistsList/todolists-reducer";


export type  RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status:'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state:InitialStateType = initialState,action:ActionSType) => {
    switch (action.type){
        case 'APP/SET-STATUS':
            return {...state,status:action.status}
        default:
            return state
    }
}

export type ActionSType = {
    type:'APP/SET-STATUS',
    status:RequestStatusType
}

export const ActionTypeForApAC = (status:RequestStatusType) => ({type:"APP/SET-STATUS", status} as const)

// export const loadingStatusThunk = (status:RequestStatusType) => (dispatch:Dispatch) => {
//     dispatch(ActionTypeAC(status))
//     todolistsAPI.getTodolists()
//         .then((res) => {
//             dispatch(setTodolistsAC(res.data))
//             dispatch(ActionTypeAC(status))
//         })
// }