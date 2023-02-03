import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }


  baseUrl ="https://api.themoviedb.org/3"
  apiKey = "f5ccb847e5f8da5f1c2066291111dd1d"

  //banner data
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

 //trending movies data

 trendingMovieApiData():Observable<any>{
  return this.http.get(`${this.baseUrl}/trending/all/day?api_key=${this.apiKey}`);
 }

 getSearchMovie(data:any):Observable<any>{
  console.log(data, 'movie#');
  return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
 }


}
