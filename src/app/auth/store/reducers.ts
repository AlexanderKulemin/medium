import { createReducer, on } from '@ngrx/store'
import { IAuthState } from '../types/authState'
import { registerAction } from './actions'

const initialState: IAuthState = {
	isSubmit: false,
}

export const registerReducer = createReducer(
	initialState,
	on(registerAction, (state) => ({
		...state,
		isSubmit: true,
	}))
)
