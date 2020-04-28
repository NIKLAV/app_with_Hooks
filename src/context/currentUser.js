import { createContext, useState, useReducer } from "react";
import React from 'react'

const initialState = {
        isLoading: false,
        isLoggedIn: null,
        currentUser: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, isLoading: true}
        case 'SET_AUTHORIZED':
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                currentUser: action.payload
            }
            case 'SET_UNAUTHORIZED':
                return {
                    ...state,
                    isLoggedIn: false
                }
        default: 
                return state        
    }
}

const newState = reducer(initialState, {type: 'LOGOUT'})

export const CurrentUserContext = createContext([{}, () => {}])

export const CurrentUserProvider = ({children}) => {
    const [state, setState] = useState({
        isLoading: false,
        isLoggedIn: null,
        currentUser: null
    })

     return <CurrentUserContext.Provider value ={[state, setState]}>
        {children}
    </CurrentUserContext.Provider>
}