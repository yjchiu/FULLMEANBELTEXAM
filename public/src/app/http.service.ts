import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get('/users')
    .map( data => data.json() )
    .toPromise();
  }
  createUser(user){
    console.log("user:",user);
    return this._http.post("/newuser", user)
    .map(data => data.json())
    .toPromise();
  }

  getOneUser(user){
    console.log("getOne", user);
    return this._http.post('/getuser', user)
    .map(data=>data.json())
    .toPromise()
  }

  retrieveAllPolls(){
    return this._http.get('/polls')
    .map(data=>data.json())
    .toPromise()
  }


  deletePoll(delete_poll){
    // console.log("Delete Poll in Service: ", delete_poll)
    return this._http.post('/deletepoll', delete_poll)
    .map(data=>data.json())
    .toPromise()
  }

  searchPollsByName(user){
    return this._http.post('/pollsbyname', user)
    .map(data=>data.json())
    .toPromise()
  }

  createPoll(poll){
    // console.log("Create Poll in Service: ", poll)
    return this._http.post('/newpoll', poll)
    .map(data=>data.json())
    .toPromise()
  }

  getOnePoll(poll){
    console.log("Get one poll in Service", poll);
    return this._http.post('/getpoll', poll)
    .map(data=>data.json())
    .toPromise()
  }

  vote1(poll){
    // console.log("Voteone poll in Service", poll);
    return this._http.post('/vote1', poll)
    .map(data=>data.json())
    .toPromise()
  }
  vote2(poll){
    // console.log("Voteone poll in Service", poll);
    return this._http.post('/vote2', poll)
    .map(data=>data.json())
    .toPromise()
  }
  vote3(poll){
    // console.log("Voteone poll in Service", poll);
    return this._http.post('/vote3', poll)
    .map(data=>data.json())
    .toPromise()
  }
  vote4(poll){
    // console.log("Voteone poll in Service", poll);
    return this._http.post('/vote4', poll)
    .map(data=>data.json())
    .toPromise()
  }

}
