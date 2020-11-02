import { BaseModel } from '../../_base/crud';
//import { Address } from './address.model';
//import { SocialNetworks } from './social-networks.model';

export class PatientMaster extends BaseModel {
	patientID: string; 
	title: string;
	firstName: string; 
	lastName: string;
	mobilePhone: string;
	email: string;
	streetAddress: string;
	imageSource: string;
	//address: Address;
    //socialNetworks: SocialNetworks;

    clear(): void {
	    this.patientID = '';
        this.firstName = '';
        this.lastName = '';
        this.mobilePhone = '';
        this.email = '';
        this.streetAddress = '';
        this.imageSource = '';
        //this.socialNetworks = new SocialNetworks();
        //this.socialNetworks.clear();
    }
}
