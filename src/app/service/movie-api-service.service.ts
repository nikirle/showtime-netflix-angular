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

 // search movie

 getSearchMovie(data:any):Observable<any>{
  console.log(data, 'movie#');
  return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
 }

 //movie details

 getMoveiDetails(data:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`);
 }

 //movie video

 getMovieVideo(data:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`);
 }

 // movie Cast

 getMovieCast(data:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`);
 }

 // action movies
 fetchActionMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
 }

 // adventure movies
 fetchAdventureMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
 }

  // animation movies
  fetchAnimationMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
   }

    // comedy movies
 fetchComedyMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
 }

  // documentary movies
  fetchDocumentaryMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
   }

    // science-fiction movies
 fetchScienceFictionMovies():Observable<any>{
  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
 }

  // thriller movies
  fetchThrillerMovies():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
   }

   getList():Observable<any>{
    return this.http.get(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
   }

}
