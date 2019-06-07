import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user: User = new User();


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {


   }

  ngOnInit() {
    const userId = localStorage.getItem("user_id");
    console.log("PROFILE USER ID: ", userId);
    this.activatedRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);

        //pulls from url 
        // const userId = (parameters.get("user_id"));

        //execute http client - get the user from the database given an id
        // this.http.get("http://localhost:4000/users/" + userId);
        //or: this.http.get(`http://localhost:4000/users/${userId}`);

        this.http.get("http://localhost:4000/users/" + userId).subscribe((response: User) => {
          console.log(response);
          console.log(userId);

          //response will be an object (User) 
          //so we could call response.name, response.email, etc. 
          this.user.firstname = response.firstname;
          this.user.email = response.email;
          this.user.id = response.id;
      });
        //express:
        //app.get("/users/:id")
      }
    );
  }

}
