import { Injectable } from '@angular/core';
import {Place } from '../places/place.module'

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private places : Place[]= [
    {
      id:'1',
      title: 'Eiffel Tower',
      imageUrl: 'http://cocupo.com/wp-content/uploads/2016/07/torre.jpg',
      comments: ['Awesome place', 'wonderful experience']

    },
    {
      id:'2',
      title: 'Statue of Liberty',
      imageUrl: 'https://www.turismonuevayork.com/wp-content/uploads/2012/08/Estatua-de-la-Libertad-02-681x1024.jpg',
      comments: ['Beautiful place', 'wonderful experience']

    },
    {
      id:'3',
      title: 'Chichen Itza',
      imageUrl: 'http://www.onthegotours.com/blog/wp-content/uploads/2013/02/chichen-itza-dreamstime.jpg',
      comments: []

    }
  ]

  constructor() { }

  public getPlaces(): Place[] {    
    return this.places;
  }

  public addPlace(place: any): void {

    let placeNew = {
      id: this.places.length+1+"",
      title: place.title,
      imageUrl: place.imageUrl,
      comments: place.comments
    }
    this.places.push(placeNew);
  }

  public deletePlace(placeId: string): void {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
  

  public getPlace(placeId: string): Place {

    return {...this.places.find(place => {
      return place.id === placeId
    })
  }
}
  
}
