import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  poll={
    name:'',
    question:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    option1_count:0,
    option2_count:0,
    option3_count:0,
    option4_count:0,
    _user:'',
  }
  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:Router) {
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    }
    this.poll.name = _cookieService.get('loginuserName');
    this.poll._user = _cookieService.get('loginuserId');
   }

  ngOnInit() {
  }

  createNewPoll(form){
    if(!form.valid){
      return;
    }

    // console.log("submited poll: ", this.poll);
    this._httpService.createPoll(this.poll)
    .then(createdpoll=>{
      console.log("Created poll: ", createdpoll);
      form.resetForm();
      this._route.navigate(['/dashboard']);
    })
    .catch(err=>{
      console.log("Create poll error: ", err);
    })
  }


}
