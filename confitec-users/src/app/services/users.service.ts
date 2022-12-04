import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUserModel, UpdateUserModel } from '../components/users/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  listUser() : Observable<any>
  {
    return this.http.get("https://localhost:7201/api/v1/main")
  }
  
  addUser(user: CreateUserModel) :Observable<any>
  {
    return this.http.post("https://localhost:7201/api/v1/main/user", user);
  }

  updateUser(user: UpdateUserModel) :Observable<any>
  {
    return this.http.put("https://localhost:7201/api/v1/main/user", user);
  }

  deleteUser(userId: any)
  {
    return this.http.delete("https://localhost:7201/api/v1/main/user?UserId=".concat(userId));
  }
}
