import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService) { }

  bannerResults  :any=[];
  trendingResults :any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  scienceFictionMovieResult:any=[];
  thrillerMovieResult:any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie()
    this.adventureMovie()
     this.comedyMovie()
     this.animationMovie()
     this.documentaryMovie()
     this.scienceFictionMovie()
     this.thrillerMovie()
    this.list()
  }

  //banner data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      this.bannerResults=result.results;
      
    })
  }

  // trending movies data

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      this.trendingResults = result.results
    })
  }

  // action

  actionMovie(){
    this.service.fetchActionMovies().subscribe((result=>{
      this.actionMovieResult = result.results
    }))
  }
   // adventure

   adventureMovie(){
     this.service.fetchAdventureMovies().subscribe((result=>{
       this.adventureMovieResult = result.results
     }))
   }
   // animation

  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result=>{
      this.animationMovieResult = result.results
    }))
  }
  // comedy

  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result=>{
      this.comedyMovieResult = result.results
    }))
  }
  // documentary

  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result=>{
      this.documentaryMovieResult = result.results
    }))
  }
  // science-fiction

  scienceFictionMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result=>{
      this.scienceFictionMovieResult = result.results
    }))
  }

  // thriller

  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result=>{
      this.thrillerMovieResult = result.results
    }))
  }

// genre list
   list(){
    this.service.getList().subscribe((result=>{
      console.log(result,'genreList#');
    }))
   }

}
