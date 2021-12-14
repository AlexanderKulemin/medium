import { createSelector, createFeatureSelector } from '@ngrx/store'

import { IAuthState } from './../types/authState'

export const authFeatureSelector = createFeatureSelector<IAuthState>('auth')

export const isSubmitSelector = createSelector(
	authFeatureSelector,
	(state: IAuthState) => state.isSubmit
)
