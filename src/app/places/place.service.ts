import { Injectable } from "@angular/core";
import { Place } from "../places/place.module";

@Injectable({
  providedIn: "root",
})
export class PlaceService {
  /** Array list of places with predefined elements */
  private places: Place[] = [
    {
      id: "1", // Unique identifier of place
      title: "Eiffel Tower", //Title of place
      imageUrl: "http://cocupo.com/wp-content/uploads/2016/07/torre.jpg", //Image link
      comments: ["Awesome place", "wonderful experience"], //Comments about place
    },
    {
      id: "2", // Unique identifier of place
      title: "Statue of Liberty", //Title of place
      imageUrl:
        "https://www.turismonuevayork.com/wp-content/uploads/2012/08/Estatua-de-la-Libertad-02-681x1024.jpg", //Image link
      comments: ["Beautiful place", "wonderful experience"], //Comments about place
    },
    {
      id: "3", // Unique identifier of place
      title: "Chichen Itza", //Title of place
      imageUrl:
        "http://www.onthegotours.com/blog/wp-content/uploads/2013/02/chichen-itza-dreamstime.jpg", //Image link
      comments: [], //Comments about place
    },
  ];

  constructor() {}

  /**This method obtains a list of registered places */
  public getPlaces(): Place[] {
    return this.places;
  }

  /** This method adds a new place */
  public addPlace(place: any): void {
    let placeNew = {
      id: this.places.length + 1 + "",
      title: place.title,
      imageUrl: place.imageUrl,
      comments: place.comments,
    };
    this.places.push(placeNew);
  }

  /** This method deletes a new place */
  public deletePlace(placeId: string): void {
    this.places = this.places.filter((place) => {
      return place.id !== placeId;
    });
  }

  /** This method gets a defined place */
  public getPlace(placeId: string): Place {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }
}
