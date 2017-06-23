import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = '';
  user_id = '';

  polls = [];

  search_name = '';
  
  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:Router) {
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    }
    this.name = this._cookieService.get("loginuserName");
    this.user_id = this._cookieService.get("loginuserId");

    this._httpService.retrieveAllPolls()
    .then(allpolls=>{
      console.log("All Polls in dashboard: ", allpolls);
      this.polls = allpolls;

    })
   }

  ngOnInit() {
  }



  delete(poll_id){
    // console.log("Delete fonction poll id: ", poll_id);
    var delete_poll = {
      id: poll_id
    }
    this._httpService.deletePoll(delete_poll)
    .then(deletedpoll=>{
      this._httpService.retrieveAllPolls()
      .then(allpolls=>{
        this.polls = allpolls;
      })
    })
    .catch(err=>{
      console.log("Delete function error: ", err);
    })
  }

  searchByName(form){
    if(!form.valid){
      return;
    }
    console.log(this.search_name);
    var user={
      name:this.search_name,
    }
    console.log(user);
    this._httpService.searchPollsByName(user)
    .then(polls=>{
      console.log("Polls by name:", polls);
      this.polls = polls;
      form.resetForm();

    })
    .catch(err=>{
      console.log("Search funtion error in dashboard component: ", err);
    })
  }

  reset(){
    this._httpService.retrieveAllPolls()
    .then(allpolls=>{
      console.log("All Polls in dashboard: ", allpolls);
      this.polls = allpolls;
    })
  }

  logOut(){
    this._cookieService.remove("loginuserName");
    this._cookieService.remove("loginuserId");
    this._route.navigate(['/']);
  }

}
