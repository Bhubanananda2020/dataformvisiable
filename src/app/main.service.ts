import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  users = [
    { userName: "alexa1", uDob: "azz1", uGender: "alexa1@alexa,com", uDesignation: "alexa1@alexa,com",
     uCompanyName: "alexa1@alexa,com", uEmail: "alexa1@alexa,com", uNumber: "alexa1@alexa,com", uAddress: "alexa1@alexa,com", },

  ]


  constructor() { }

  public getuser(): Array<{ userName: string, uDob: string, uGender: string,
     uDesignation: string, uCompanyName: string, uEmail: string, uNumber: string, uAddress: string }> {
    return this.users;
  }

  public createuser(users: { userName: string, uDob: string, uGender: string,
    uDesignation: string, uCompanyName: string, uEmail: string, uNumber: string, uAddress: string }) {
    return this.users.push(users);
  }

  public deleteuser(usersdt: { userName: string, uDob: string, uGender: string,
    uDesignation: string, uCompanyName: string, uEmail: string, uNumber: string, uAddress: string }) {
      for( var i = 0; i < this.users.length; i++){
        if ( this.users[i] === usersdt) {
          this.users.splice(i, 1);
        }

    }
  }

}
