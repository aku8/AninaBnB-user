import { Component, OnInit } from '@angular/core';
import { listing } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage implements OnInit {

  public listing: listing = new listing();


  // public nameOfListing: string;

  // public currentListing: listing;

  constructor( private activatedRoute: ActivatedRoute, private NavCtrl: NavController, 
    private propertyService: PropertyService, private httpClient: HttpClient) {

   }

  ngOnInit() {
    
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        const listing_id = (parameters.get("listing_id"));

    this.httpClient.get("http://localhost:4000/listings/" + listing_id).subscribe((response: listing) => {
      console.log(response[0]);
      console.log(listing_id);
  
      //response will be an object (User) 
      //so we could call response.name, response.email, etc. 
      this.listing.name = response[0].name;
      this.listing.location = response[0].location;
      this.listing.price = response[0].price;
      this.listing.imageUrl = response[0].imageUrl;
      this.listing.id = response[0].id;

    });
  });
}

    // let arrow = (data:any) => {
    //   this.nameOfListing = data.params.listingName;
    //   this.listingId = data.params.listingId;
    //   this.currentListing = this.propertyService.findListingById(this.listingId);

    // };

    // this.activatedRoute.queryParamMap.subscribe(
    //   arrow);


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


  
  
 



