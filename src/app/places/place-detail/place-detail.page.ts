import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Place } from "../place.module";
import { PlaceService } from "../place.service";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      const recipeId = param.get("placeId");
      this.place = this.placeService.getPlace(recipeId);
    });
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: "Are you sure, you want to delete it?",
      message: "Be careful",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Delete",
          handler: () => {
            this.placeService.deletePlace(this.place.id);
            this.router.navigate(["/places"]);
          },
        },
      ],
    });

    alertElement.present();
  }
}
