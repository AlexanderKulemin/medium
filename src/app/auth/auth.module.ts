import { StoreModule } from '@ngrx/store'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { registerReducer } from './store/reducers'

const routes: Routes = [
	{
		path: 'register',
		component: RegisterComponent,
	},
]

@NgModule({
	declarations: [RegisterComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature('auth', registerReducer),
	],
})
export class AuthModule {}
