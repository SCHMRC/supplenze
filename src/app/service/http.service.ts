import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getTeachers(){
      return this.http.get<any>('assets/hardcoded/teacher.json')
  }

  getClass(){
    return this.http.get<any>('assets/hardcoded/class.json')
}
}
