import { BaseModel } from '../../_base/crud';
import { Address } from './address.model';
import { SocialNetworks } from './social-networks.model';


class userSettings {
	settings: string;
	value: string;
}

export class User extends BaseModel {
	token: string;
    patientID: string;
    title: string;
    firstName: string;
    lastName: string;
    mobilePhone: string;
    email: string;
    streetAddress: string;
    imageSource: string;
    accessToken: string;
    refreshToken: string;

    clear(): void {
		this.token = 'access-token-' + Math.random();

        this.patientID = 'string';
        this.title = '';
        this.firstName = '';
        this.lastName = '';
        this.mobilePhone = '';
        this.email = '';
        this.streetAddress = '';
        this.imageSource = '';
        this.accessToken = 'access-token-' + Math.random();
        this.refreshToken = 'access-token-' + Math.random();
    }
}
