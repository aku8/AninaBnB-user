import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { listing } from '../models';
import { PropertyService } from '../services/property.service';

  @Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {

  public listings: Array<listing> = new Array();

  constructor(private navCtrl: NavController,
    private propertyService: PropertyService) {
  
    this.propertyService.getAllListings();
    this.listings = this.propertyService.listings;
  }
  navToExplore(){
    this.navCtrl.navigateForward("tab/tabs/tab1");
  }

  navToListing(listing: listing){
    this.navCtrl 
      .navigateForward("rental-details", {
        queryParams: {
          q: "ionic",
          listingName: listing.name,
          listingId: listing.id

        }
      });
  }







}

