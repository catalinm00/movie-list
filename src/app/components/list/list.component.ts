import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/models/IMovie.interface';
import { MovieServiceService } from 'src/app/service/movie-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public service: MovieServiceService, private router: Router) {}
  title: string = '';
  movies$!: Observable<IMovie[]>;

  searchMovies() {
    this.movies$ = this.service.searchMovie(this.title);
    this.movies$.subscribe((val) => {
      console.log(val);
    });
  }

  ngOnInit(): void {}

  openDetails(movie: IMovie) {
    this.router.navigate(['details/', movie.imdbID]);
  }

  showTitle(movie: IMovie): string {
    if (movie.Title.length < 35) return movie.Title;
    else return movie.Title.substring(0, 34) + '...';
  }
}
