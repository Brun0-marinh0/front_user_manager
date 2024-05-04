import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { jwtDecode } from "jwt-decode";
import { Observable } from 'rxjs';
import { listAll } from '../../../interfaces/listAll';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth`, user).toPromise()
    if(result && result.token){
      window.localStorage.setItem('token', result.token)
      return true
    }
    return false
  }

  async createAccount(account: any): Promise<any> {
    try {
      const token = window.localStorage.getItem('token');
      if (!token) {
        throw new Error('Token de autenticação não encontrado');
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      const result = await this.http.post<any>(`${environment.api}/users`, account, { headers }).toPromise();
      return result;
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      throw error; 
    }
   
  }

  getAuthorizationToken(): string | null{
    const token = window.localStorage.getItem('token')
    return token
  }

  getTokenExpirationDate(token: string): Date | null {
    
    const decoded: any = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === null) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  } 

  getAll(): Observable<listAll[]>{
    return this.http.get<listAll[]>(`${environment.api}/users`)
  }
}
