import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor() { }
//TODO: No se utilizan estas peticiones para obtener el token.

  public setAccessToken(token: string): TokenStorageService {
    localStorage.setItem('experienciasAccessToken', token);

    return this;
  }

  public setRefreshToken(token: string): TokenStorageService {
    localStorage.setItem('experienciasRefreshToken', token);

    return this;
  }

  public setUserRoles(roles: any): any {
    if (roles != null) {
      localStorage.setItem('userRoles', JSON.stringify(roles));
    }

    return this;
  }

  public setUser(user: any): any {
    if (user != null) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return this;
  }
  public getUser(): any {
    return JSON.parse(localStorage.getItem('user')!);
  }

  public getRole(): any {
    return JSON.parse(localStorage.getItem('role')!);
  }


  public augustAndAirbnb(agust: any, airbnb: any){
    if (agust != null) {
      localStorage.setItem('august_conectado', agust);
    }
    if (airbnb != null) {
      localStorage.setItem('airbnb_conectado', airbnb);
    }
  }

}

