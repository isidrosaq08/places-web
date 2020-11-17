import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../place.module';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(
    private router: Router,
    private placeService: PlaceService) { }

  ngOnInit() {
  }

  saveNewPlace(title, imageUrl){

    let place = {
      title: title,
      imageUrl: imageUrl,
      comments:[]
    }
    this.placeService.addPlace(place)
    this.router.navigate(['/places']);
  }
}
