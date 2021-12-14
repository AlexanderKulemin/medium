import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { select } from '@ngrx/store'
import { isSubmitSelector } from './../../store/selectors'

import { registerAction } from 'src/app/auth/store/actions'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	public form: FormGroup
	public isSubmit$: Observable<boolean>

	constructor(private fb: FormBuilder, private store: Store) {}

	ngOnInit(): void {
		this.initForm()
		this.initValues()
	}

	initValues(): void {
		this.isSubmit$ = this.store.select(isSubmitSelector)
	}

	initForm(): void {
		this.form = this.fb.group({
			username: ['', Validators.required],
			email: [''],
			password: [''],
		})
	}

	onSubmit() {
		this.store.dispatch(registerAction(this.form.value))
	}
}
