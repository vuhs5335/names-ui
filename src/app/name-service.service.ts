import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Name } from '../app/name';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameServiceService {

  private namesUrl!: string;

  constructor(private http: HttpClient) { 
    this.namesUrl = 'http://c15-jgarner16-env-args.wfo-dev-duck-dev-w2.kube.t-mobile.com/names';
  }

  public findAll(): Observable<Name[]>{
    return this.http.get<Name[]>(this.namesUrl);
  }


}
