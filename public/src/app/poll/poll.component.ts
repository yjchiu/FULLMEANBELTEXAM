import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  selected_poll = {
    id:'',
  }

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

  constructor(private _route:ActivatedRoute, private __httpService:HttpService, private _cookieService:CookieService, private _router:Router) {
    if(!this._cookieService.get("loginuserName")){
      this._router.navigate(['/']);
    }
    this._route.params.subscribe(param=>{
      this.selected_poll.id = param.id
    })
    this.__httpService.getOnePoll(this.selected_poll)
    .then(finded_poll=>{
      console.log("Fined Poll in poll component: ", finded_poll);
      this.poll = finded_poll;
    })
    .catch(err=>{
      console.log("Get one poll in poll component constructor error: ", err);
    })


   }

  ngOnInit() {
  }

  option1Vote(poll_id){
    var voted_poll = {
      id: poll_id
    }
    this.__httpService.vote1(voted_poll)
    .then(updated_poll=>{
      this.__httpService.getOnePoll(this.selected_poll)
    .then(finded_poll=>{
      this.poll = finded_poll;
    })
    .catch(err=>{
      console.log("Get one poll in poll component constructor error: ", err);
    })
    })
    .catch()
  }

  option2Vote(poll_id){
    var voted_poll = {
      id: poll_id
    }
    this.__httpService.vote2(voted_poll)
    .then(updated_poll=>{
      this.__httpService.getOnePoll(this.selected_poll)
    .then(finded_poll=>{
      this.poll = finded_poll;
    })
    .catch(err=>{
      console.log("Get one poll in poll component constructor error: ", err);
    })
    })
    .catch()
  }
  option3Vote(poll_id){
    var voted_poll = {
      id: poll_id
    }
    this.__httpService.vote3(voted_poll)
    .then(updated_poll=>{
      this.__httpService.getOnePoll(this.selected_poll)
    .then(finded_poll=>{
      this.poll = finded_poll;
    })
    .catch(err=>{
      console.log("Get one poll in poll component constructor error: ", err);
    })
    })
    .catch()
  }
  option4Vote(poll_id){
    var voted_poll = {
      id: poll_id
    }
    this.__httpService.vote4(voted_poll)
    .then(updated_poll=>{
      this.__httpService.getOnePoll(this.selected_poll)
    .then(finded_poll=>{
      this.poll = finded_poll;
    })
    .catch(err=>{
      console.log("Get one poll in poll component constructor error: ", err);
    })
    })
    .catch()
  }

}
