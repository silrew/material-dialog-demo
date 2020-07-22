import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import {  BehaviorSubject , Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
private datastore : {
  users: User[]
}
private _users : BehaviorSubject<User[]>;
  constructor(private http: HttpClient) { 
    this.datastore = { users: []};
    this._users = new BehaviorSubject([]); this.loadAll();
  }

addUser(user : User) {
  user.id = this.datastore.users.length + 1;
  this.datastore.users.push(user);
  this._users.next(this.datastore.users)
}
  get users() {
    return this._users.asObservable()
  }

  userById(id){
    return this.datastore.users.find(elem => elem.id == id);
  }
  loadAll() {
    this.http.get<User[]>('https://angular-material-api.azurewebsites.net/users').subscribe(data => {
      this.datastore.users = data;
      this._users.next(data.slice());
    },
    error => {
      console.log('error fetching data');
    })
    
  }
}
