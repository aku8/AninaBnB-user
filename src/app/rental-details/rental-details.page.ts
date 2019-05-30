import { Component, OnInit } from '@angular/core';
import { listing } from '../models';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  public nameOfListing: string;
  public listingId: number;
  public currentListing: listing;

  constructor( private activatedRoute: ActivatedRoute, private NavCtrl: NavController, 
    private propertyService: PropertyService) {

   }

  ngOnInit() {
    let arrow = (data:any) => {
      this.nameOfListing = data.params.listingName;
      this.listingId = data.params.listingId;
      this.currentListing = this.propertyService.findListingById(this.listingId);

    };

    this.activatedRoute.queryParamMap.subscribe(
      arrow);
    }

  //  this.listings.forEach(
    //  (listing: listing) => {
      //  if(listing.id === this.listingId) {
        //  this.currentListing = listing;
       // }
      //}
    //);
  //}

  navToRentalDetails(){
    this.NavCtrl.navigateBack("tab/tabs/tab3");
  }
}


  
  
 



