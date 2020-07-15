import { Component, OnInit } from '@angular/core';
import {combineLatest, forkJoin, from, interval, of } from 'rxjs';
import { concatMap, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title : "hello world";

post : any[];

  ngOnInit(): void {

    this.post= [{"id": "01", "name": "apple"},{"id": "02", "name": "nokia"},{"id": "03", "name": "samsung"}]

      const post$ = of(0,1,2).pipe(
        tap(item => console.log("emiting item result", item)),
        concatMap(id=> this.getpost(id))
      )
      post$.subscribe(item => console.log("concatmap result", item))

  }

  
getpost(id){
  return of(this.post[id]);
  
}
}