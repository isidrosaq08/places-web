import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from './place.module';
import { PlaceService } from './place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {  
  places: Place[];

  constructor(
    private router: Router,
    private placeService: PlaceService) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  ionViewWillEnter(){
    this.places = this.placeService.getPlaces();
  }

  addNewPlace(){
    this.router.navigate(['/places/place-add']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
