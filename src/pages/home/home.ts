import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmApiServiceProvider } from '../../providers/film-api-service/film-api-service';
import { FilmComponent } from '../../components/film/film';
import { DetailPage } from '../detail/detail';
import { AlertController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 
 public film: any;
 public year: '2017';

 filmData: Array<{title: string, image: string, overview: string, releaseDate: String}>;

  
public imageURL = 'https://image.tmdb.org/t/p/w500';

  constructor(public navCtrl: NavController,public filmApiService: FilmApiServiceProvider, public alertCtrl: AlertController) {
    this.loadFilm();
  }

  //function called upon when the user changes the selected year
  yearChange(){
    this.filmApiService.yearChange(this.year);
    this.loadFilm();
  }

  //function used to load the film data from TMDB API
  loadFilm(){
    this.filmData = [];
    this.filmApiService.getFilms().subscribe(data =>{
     
      this.film=data;
      console.log(this.film.results[0].title);
      for(let i = 0; i < 10; i++) {
          this.filmData.push({
            title : this.film.results[i].title,
            image: this.imageURL.concat(this.film.results[i].poster_path),
            overview: this.film.results[i].overview,
            releaseDate : this.film.results[i].release_date
          });
      }
    })
 
  } 
  
  //sends the user to the detail page upon click
  itemTapped(filmData) {
    console.log(filmData);
    this.navCtrl.push(DetailPage, filmData);
  }
}
