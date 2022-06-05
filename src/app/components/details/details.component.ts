import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMovie } from 'src/app/models/IMovie.interface';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  movie!: IMovie;
  constructor(
    public service: MovieServiceService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      console.log('el id es:' + params['id']);
      this.service.findById(params['id']).subscribe((val) => {
        this.movie = val;
      });
    });
  }
}
