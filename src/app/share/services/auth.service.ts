import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription, tap} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {NgxPermissionsService} from "ngx-permissions";

export interface User{
  nombre : string;
  apellido_paterno : string;
  tipo_usuario_id : number;
}

export interface LoginResponse {
  token: string;
  user : User
  role : Role;
  expiration : number;
}

export interface Role {
  id: number;
  name: string;
  permissions: {
    [key: string]: boolean;
  };
}


@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {

  private unsubscribe: Subscription[] = [];
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private permissionsService: NgxPermissionsService

  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }


  login(email: string, password: string, appId : string) : Observable<LoginResponse> {


    return this.httpClient
      .post<LoginResponse>('login', {email, password}, {headers: {'AppId': btoa(appId)}})
      .pipe(

        tap((response: any) => this.saveToken(response))

      );
  }

  getUser(): User  {
    return this.getStorage()!.user;
  }

  getPermissions(): { [key: string]: boolean } {
  return  this.getStorage()!.role.permissions;
  }


  hasAccess(): Observable<boolean> {
    return this.httpClient.get<boolean>('ping', {
      headers: {
        'noIntercept': 'true'
      }
    });
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  saveToken(tokenResponse: LoginResponse) {
    localStorage.setItem(environment.api.authTokenName, JSON.stringify(tokenResponse));
    localStorage.setItem('user', JSON.stringify(tokenResponse.user));
    localStorage.setItem('role', JSON.stringify(tokenResponse.role));
    localStorage.setItem('refreshToken', JSON.stringify(tokenResponse.token));
  }

  getToken(): string {
    const tokenData = this.getStorage();
    return tokenData ? tokenData.token : '';
  }


  private getStorage(): LoginResponse |null {
    const storage = localStorage.getItem(environment.api.authTokenName);
    return storage ? (JSON.parse(storage) as LoginResponse) : null;
  }


  logout() {
    localStorage.removeItem(environment.api.authTokenName);
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('refreshToken');
  }


  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
