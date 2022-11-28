import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  type?: string
  id?: string
  //@ts-ignore
  url: string
  movies: any
  movie: any

  constructor(
    private actroute: ActivatedRoute,
    private http: HttpClient,
    config: NgbRatingConfig
  ) { 
    config.max = 5
    config.readonly = true;
  }

  ngOnInit(): void {
    this.type = this.actroute.snapshot.params['type']
    this.id = this.actroute.snapshot.params['id']


    if (this.type === 'trending') {
      this.url = environment.trendingMovieUrl
    }
    if (this.type === 'theatre') {
      this.url = environment.theatreMovieUrl
    }
    if (this.type === 'top') {
      this.url = environment.popularMovieUrl
    }

    this.getMovies()
  }

  getMovies() {
    this.http.get(this.url).subscribe(data => {
      this.movies = data
      this.movie = this.movies.filter((movie: { id: string | undefined; }) => movie.id == this.id)
      this.movie  = this.movie[0]
      
    })
  }


}
