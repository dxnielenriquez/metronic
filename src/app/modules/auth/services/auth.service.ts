import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription, tap} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {UserModel} from '../models/user.model';
import {AuthModel} from '../models/auth.model';
import {AuthHTTPService} from './auth-http';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";

export type UserType = UserModel | undefined;

export interface User{
  nombre : string;
  apellido_paterno : string;
  CELULAR : string;
  CENTRO_ID : string;
  USUARIO_ID: number;
  tipo_usuario_id : number;
}

export interface LoginResponse {
  token: string;
  user : User
  role : Array<any>;
  expiration : number;
}

export interface AccessData {
  token: string;
  role: any;
  user: any;
}


@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {

  private unsubscribe: Subscription[] = [];
  currentUser$: Observable<UserType>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserType>;
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(
    private authHttpService: AuthHTTPService,
    private router: Router,
    private httpClient: HttpClient,
    private tokenStorage: TokenStorageService

  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserType>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
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
    console.log('Token:');
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



  private saveAccessData(accessData: AccessData) {
    if (typeof accessData !== 'undefined') {
      this.tokenStorage
        .setAccessToken(accessData.token)
        .setRefreshToken(accessData.token)
        .setUserRoles(accessData.role)
        .setUser(accessData.user)
        .augustAndAirbnb(accessData.user.august_conectado, accessData.user.airbnb_conectado)

    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
