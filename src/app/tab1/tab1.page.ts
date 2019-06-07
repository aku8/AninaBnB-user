import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { listing } from '../models';
import { HttpClient } from '@angular/common/http';
//import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public listings: Array<listing> = [];
  constructor(private navCtrl: NavController, private httpClient: HttpClient) {

    //this.propertyService.getAllListings();
    //this.listings = this.propertyService.listings;

    this.httpClient.get("http://localhost:4000/listings").subscribe(
      (response: any) => {
        console.log(response);
        this.listings = response;
        //this.navCtrl.navigateForward("tab/tabs/tab1", { queryParams: { userId: response.id } });
      },
      (err) => {
        console.log(err);
        alert("Could not retrieve listings.");
      }
    );
  }
  navToListing(listings: listing) {
    this.navCtrl
      .navigateForward("rental-details", {
        queryParams: {
          listing_id: listings.id

        }
      });
  }
}
