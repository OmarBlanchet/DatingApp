import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
  import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any)
  {
    return this.http.post(this.baseUrl + "account/login", model).pipe(
      map((response: User) => {
          const user = response;
          if (user){
            console.log("login ok: " + JSON.stringify(user));
            localStorage.setItem("user", JSON.stringify(user));
            this.currentUserSource.next(user);
            //console.log("user storage get: " + JSON.stringify(localStorage.getItem("user")));
          }
      })
    );
  }

  register(model: any)
  {
    return this.http.post(this.baseUrl + "account/register", model).pipe(
      map((user: User) => {
        if (user)
        {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }

  logout()
  {
    console.log("logout user: " + localStorage.getItem("user"));
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }

  //Este metodo es llamado de app.component.ts
  setCurrentUser(user: User)
  {
    this.currentUserSource.next(user);
  }
}
