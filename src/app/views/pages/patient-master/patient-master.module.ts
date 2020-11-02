// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Translate
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from '../../partials/partials.module';
// Services
import { HttpUtilsService, TypesUtilsService, InterceptService, LayoutUtilsService } from '../../../core/_base/crud';
// Shared
import { ActionNotificationComponent } from '../../partials/content/crud';
// Components
import { PatientMasterComponent } from './patient-master.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { RoleEditDialogComponent } from './roles/role-edit/role-edit.dialog.component';
import { UserRolesListComponent } from './_subs/user-roles/user-roles-list.component';
import { ChangePasswordComponent } from './_subs/change-password/change-password.component';
import { AddressComponent } from './_subs/address/address.component';
import { SocialNetworksComponent } from './_subs/social-networks/social-networks.component';

// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule
} from '@angular/material';
import {
	usersReducer,
	UserEffects
} from '../../../core/auth';

const routes: Routes = [
	{
		path: '',
		component: PatientMasterComponent,
		children: [
			{
				path: '',
				redirectTo: 'roles',
				pathMatch: 'full'
			},
			//{
			//	path: 'roles',
			//	component: RolesListComponent
			//},
			{
				path: 'patients',
				component: PatientsListComponent
			},
			//{
			//	path: 'patients:id',
			//	component: patientsListComponent
			//},
			//{
			//	path: 'patients/add',
			//	component: patientEditComponent
			//},
			//{
			//	path: 'patients/add:id',
			//	component: patientEditComponent
			//},
			//{
			//	path: 'patients/edit',
			//	component: patientEditComponent
			//},
			//{
			//	path: 'patients/edit/:id',
			//	component: patientEditComponent
			//},
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		PartialsModule,
		RouterModule.forChild(routes),
		StoreModule.forFeature('patients', []),
		EffectsModule.forFeature([UserEffects]),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule
	],
	providers: [
		InterceptService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptService,
			multi: true
		},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'kt-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
		HttpUtilsService,
		TypesUtilsService,
		LayoutUtilsService
	],
	entryComponents: [
		ActionNotificationComponent,
		RoleEditDialogComponent
	],
	declarations: [
		PatientMasterComponent,
		PatientsListComponent,
		PatientEditComponent,
		RolesListComponent,
		RoleEditDialogComponent,
		UserRolesListComponent,
		ChangePasswordComponent,
		AddressComponent,
		SocialNetworksComponent
	]
})
export class PatientMasterModule { }
