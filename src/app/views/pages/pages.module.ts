// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { PatientMasterModule} from './patient-master/patient-master.module';
import { MyPageComponent } from './my-page/my-page.component';
//import { PatientMasterComponent } from './patient-master/patient-master.component';
//import { ReceptionDBComponent } from './reception-db/reception-db.component';

@NgModule({
	//declarations: [MyPageComponent, ReceptionDBComponent],
	declarations: [MyPageComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
		PatientMasterModule
	],
	providers: []
}) 
export class PagesModule {
}
