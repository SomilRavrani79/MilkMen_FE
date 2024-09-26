import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndpoints } from 'src/app/utils/api-endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})  
export class AuthService {
  private apiUrl = environment.milkMenAPI;

  constructor(
    private httpClient: HttpClient
  ) { }

  login(Obj:any ): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}${ApiEndpoints.Auth.Login}`, Obj);
  }

  verifyOtp(Obj : any): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}${ApiEndpoints.Auth.VerifyOTP}`, Obj);
  }
}
