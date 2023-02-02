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

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  //banner data
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerResultat#');
      this.bannerResults=result.results;
      
    })
  }

  // trending movies data

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingResults#');
      this.trendingResults = result.results
    })
  }


}
