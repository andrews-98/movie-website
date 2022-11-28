import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Movies } from "../interfaces";


@Injectable({
  providedIn: 'root'
})

export class MovieDataService{

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  getTrendingMovies(): Observable<Movies> {
    return this.http.get<Movies>(environment.trendingMovieUrl)
  }

  getTheatreMovies(): Observable<Movies> {
    return this.http.get<Movies>(environment.theatreMovieUrl)
  }

  getPopularMovies(): Observable<Movies> {
    return this.http.get<Movies>(environment.popularMovieUrl)
  }

  goToMovie(type: string, id: string) {
    this.route.navigate(['movie', type, id])
  }

  

 
}