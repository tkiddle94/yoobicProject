import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the FilmApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmApiServiceProvider {

public data: any;
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=1059ba341dbd3b2cedb1dddc8a4af66a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
  url = 'https://api.themoviedb.org/3/discover/movie?api_key=1059ba341dbd3b2cedb1dddc8a4af66a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year='
  year = '1900'
  constructor(public http: Http) {
    console.log('Hello FilmApiServiceProvider Provider');
  }

  yearChange(year : string){
    console.log(year)
    this.year = year;
    console.log(this.year);
    return this.http.get(this.url.concat(this.year)).map(res => res.json());
  }

  getFilms(){
    return this.http.get(this.url.concat(this.year)).map(res => res.json());
   
    }
}
