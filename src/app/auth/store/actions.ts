import { createAction, props } from '@ngrx/store'

import { Auth } from './actionTypes'
import { IRegisterRequest } from '../types/registerRequest.interface'

export const registerAction = createAction(
	Auth.REGISTRATION,
	props<IRegisterRequest>()
)
