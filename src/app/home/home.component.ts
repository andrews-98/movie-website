import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MovieDataService } from '../services/moviedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovie: any
  theatreMovie: any
  popularmovies: any
  

  constructor(private service: MovieDataService,
    private route: Router,
    config: NgbRatingConfig,
    
    ) { 
      config.max = 5
      config.readonly = true;
    }

  ngOnInit(): void {
    const trendmovie$ = this.service.getTrendingMovies()
    trendmovie$.subscribe( data => {
      this.trendingMovie = data
    })

    const theatremovie$ = this.service.getTheatreMovies()
    theatremovie$.subscribe( data => {
      this.theatreMovie = data
    })

    const popularmovie$ = this.service.getPopularMovies()
    popularmovie$.subscribe( data => {
      this.popularmovies = data
    })
   
  }

  goToMoviePage(type: string, id: string){
    this.service.goToMovie(type, id)
  }

}
