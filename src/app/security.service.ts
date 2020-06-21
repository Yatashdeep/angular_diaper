import { Injectable } from '@angular/core';
import{ENV}from'./pages/env'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient) { 

  }
  getuserdata()
  {
   
     return this.httpClient.get(ENV.mainApi+'/user_detail')
     .pipe(map(data=>{
      return data
     }))
    }
    getfetchrating()
    {
      return this.httpClient.get(ENV.mainApi+'/fetch_rating')
      .pipe(map(data=>{
        return data
      }))
    }
  
}
