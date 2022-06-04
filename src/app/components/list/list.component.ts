import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/models/IMovie.interface';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: MovieServiceService, private router: Router) {}
  title: string = '';
  movies$!: Observable<IMovie[]>;

  buscarPeliculas() {
    this.movies$ = this.service.searchMovie(this.title);
    this.movies$.subscribe((val) => {
      console.log(val);
    });
  }


  ngOnInit(): void {
    
  }

  pasarPelicula(movie:IMovie){
    
    this.router.navigate(['details/',movie.imdbID])
  }

}
