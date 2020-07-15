import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiurl = "http://localhost:3000/api/contacts";

  constructor( private http: HttpClient) { }

      getcontacts(): Observable<Object>
      {
        return this.http.get(this.apiurl)
        .pipe(
           map(item => item.toString())
          // tap(item => console.log(`emitted items are .. ${item}`))
        );
      }
    
      public addPost(newcontact: Object) {
        let endPoints = "/contact"
        this.http.post('http://localhost:3000/api/contacts' + endPoints, newcontact)
        .pipe(
          map(item => item.toString()),
          );
      } 
      
    /*   addcontact(newcontact)
      {
            var headers = new Headers();
            headers.append('content/type', 'application/json');
            return this.http.post('http://localhost:3000/api/contact', newcontact, {headers:headers})
            .subscribe(res => res.json());
            //.map(res =>res.json ());
      }

/* 
public deletePost() {
  let endPoints = "/contact/1"
  this.http.delete('http://localhost:3000/api/contacts'+ endPoints)
  .pipe(map(res => res.JSON))
  }
 */

    }
