import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user.model';
import { Permission } from '../_models/permission.model';
import { Role } from '../_models/role.model';
import { catchError, map } from 'rxjs/operators';
import { QueryParamsModel, QueryResultsModel } from '../../_base/crud';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

//const API_USERS_URL = 'api/users';
const API_USERS_URL = 'http://18.222.216.26/api/Authenticate/login';
// const API_USERS_URL = 'http://localhost:31557/api/Authenticate/login';

const API_PERMISSION_URL = 'api/permissions';
const API_ROLES_URL = 'api/roles';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    // Authentication/Authorization
	login(email: string, password: string): Observable<User> {
		try {
			
			//userlogin obj = <userlogin>{ email: email, password : password };
			var mMsg = this.http.post<User>(API_USERS_URL, { username: email, password: password });
			//return this.http.post<User>(API_USERS_URL, { email, password });
			return mMsg;
		}
		catch (Error) {
			alert(Error.message);
		}
	}
	//login(email: string, password: string): Observable<User> {
	//	return this.http.post<User>(API_USERS_URL, { email, password });
	//}

    getUserByToken(): Observable<User> {
        const userToken = localStorage.getItem(environment.authTokenKey);
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Authorization', 'Bearer ' + userToken);
        return this.http.get<User>(API_USERS_URL, { headers: httpHeaders });
    }

    register(user: User): Observable<any> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
        return this.http.post<User>(API_USERS_URL, user, { headers: httpHeaders })
            .pipe(
                map((res: User) => {
                    return res;
                }),
                catchError(err => {
                    return null;
                })
            );
    }

    /*
     * Submit forgot password request
     *
     * @param {string} email
     * @returns {Observable<any>}
     */
    public requestPassword(email: string): Observable<any> {
    	return this.http.get(API_USERS_URL + '/forgot?=' + email)
    		.pipe(catchError(this.handleError('forgot-password', []))
	    );
    }


    getAllUsers(): Observable<any> {
        let params = new HttpParams();
        params = params.append('locationID','1');
		return this.http.get<User[]>('http://18.222.216.26/api/ReceptionDB/LoadData', { params: params });
    }

    getUserById(userid: number): Observable<User> {
		return this.http.get<User>(API_USERS_URL + `/${userid}`);
	}


    // DELETE => delete the user from the server
	deleteUser(userid: number) {
		const url = `${API_USERS_URL}/${userid}`;
		return this.http.delete(url);
    }

    // UPDATE => PUT: update the user on the server
	updateUser(_user: User): Observable<any> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });
	}

    // CREATE =>  POST: add a new user to the server
	createUser(user: User): Observable<User> {
    	const httpHeaders = new HttpHeaders();
     httpHeaders.set('Content-Type', 'application/json');
		   return this.http.post<User>(API_USERS_URL, user, { headers: httpHeaders});
	}

    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
	// items => filtered/sorted result
	findUsers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.post<QueryResultsModel>(API_USERS_URL + '/findUsers', queryParams, { headers: httpHeaders});
    }

    // Permission
    getAllPermissions(): Observable<Permission[]> {
		return this.http.get<Permission[]>(API_PERMISSION_URL);
    }

    getRolePermissions(roleid: number): Observable<Permission[]> {
        return this.http.get<Permission[]>(API_PERMISSION_URL + '/getRolePermission?=' + roleid);
    }

    // Roles
    getAllRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(API_ROLES_URL);
    }

    getRoleById(roleid: number): Observable<Role> {
		return this.http.get<Role>(API_ROLES_URL + `/${roleid}`);
    }

    // CREATE =>  POST: add a new role to the server
	createRole(role: Role): Observable<Role> {
		// Note: Add headers if needed (tokens/bearer)
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.post<Role>(API_ROLES_URL, role, { headers: httpHeaders});
	}

    // UPDATE => PUT: update the role on the server
	updateRole(role: Role): Observable<any> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.put(API_ROLES_URL, role, { headers: httpHeaders });
	}

	// DELETE => delete the role from the server
	deleteRole(roleid: number): Observable<Role> {
		const url = `${API_ROLES_URL}/${roleid}`;
		return this.http.delete<Role>(url);
	}

    // Check Role Before deletion
    isRoleAssignedToUsers(roleid: number): Observable<boolean> {
        return this.http.get<boolean>(API_ROLES_URL + '/checkIsRollAssignedToUser?roleId=' + roleid);
    }

    findRoles(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
        // This code imitates server calls
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		      return this.http.post<QueryResultsModel>(API_ROLES_URL + '/findRoles', queryParams, { headers: httpHeaders});
	}

 	/*
 	 * Handle Http operation that failed.
 	 * Let the app continue.
     *
	 * @param operation - name of the operation that failed
 	 * @param result - optional value to return as the observable result
 	 */
    private handleError<T>(operation = 'operation', result?: any) {
        return (error: any): Observable<any> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
}
