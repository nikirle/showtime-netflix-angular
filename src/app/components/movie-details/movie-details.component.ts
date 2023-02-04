import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service:MovieApiServiceService, private rauter:ActivatedRoute) { }
  getMovieDetailsResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  ngOnInit(): void {
    let getParamId = this.rauter.snapshot.paramMap.get('id')

    this.getMovie(getParamId)
    this.getVideo(getParamId)
    this.getCast(getParamId)
  
  }

  getMovie(id:any){
    this.service.getMoveiDetails(id).subscribe((result=>{
      this.getMovieDetailsResult=result;
    }))
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result=>{
      result.results.forEach((element:any) => {
        if(element.type=='Trailer'){
          this.getMovieVideoResult=element.key;
        }
      });
      
    }))
  }

  getCast(id:any){
    this.service.getMovieCast(id).subscribe((result=>{
      this.getMovieCastResult=result.cast
    }))
  }


}
