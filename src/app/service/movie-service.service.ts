import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMovie } from '../models/IMovie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  apiKey: string = "&apikey=e1d358fa";
  constructor(private http: HttpClient) { }
  
  searchMovie(title: string):Observable<IMovie[]>{
    
    return this.http.get<IMovie[]>(" http://www.omdbapi.com/?s="+title+"&type=movie"+this.apiKey).pipe(map((resp: any)=>resp.Search));
    
  }  
  
  findById(id: string):Observable<IMovie>{
    
    return this.http.get<IMovie>(" http://www.omdbapi.com/?i="+id+this.apiKey);
    
  } 


}
