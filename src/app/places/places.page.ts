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

  /** Fired once during component initialization. This event can be used to initialize local members 
   * and make calls into services that only need to be done once.
   */
    ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  /**
   * Fired right before Angular destroys the view. Useful for cleanup like unsubscribing from observables.
   */
  ngOnDestroy(){

  }

  /**
   * Fired when the component routing to is about to animate into view.
   */
  ionViewWillEnter(){
    this.places = this.placeService.getPlaces();
  }

  /**
   * This method allows you to navigate in view of adding new place
   */
  addNewPlace(){
    this.router.navigate(['/places/place-add']);
  }

  /**
   * This method allows you to navigate in view of home
   */
  goToHome(){
    this.router.navigate(['/home']);
  }

}
