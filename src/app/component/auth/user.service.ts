import { Injectable } from '@angular/core';
 
export interface User {
  id:number;
  email:string;
  password:string;
  name:string;
  phone:string;
  adress:string;
  gender:string;
}
 
@Injectable()
export class UserService {
 
  currentUser: User=UserService.dummyUserList[0];
 
  static dummyUserList: Array<User> = [
    {
      id:10,
      email:'admin@gmail.com',
      password:'adminadmin',
      name:'Luka',
      phone:'0645554578',
      adress:'Koste Nadja 31',
      gender: 'male'
    },
  
    {
      id:11,
      email:'admin2@gmail.com',
      password:'adminadmin12',
      name:'Luka2',
      phone:'0645554578',
      adress:'Koste Nadja 30',
      gender: 'male'
    }];
    
    getUserId(id: number):User {
      var userToBeFound:User;
 
      UserService.dummyUserList.find(user => {
        if(user.id == id){
         userToBeFound = user;
        }
      });
      this.currentUser=userToBeFound!;
      return userToBeFound!; 
    }
 
    getUserName(user:User):string{
      return user.email;
    }
 
    getUserEmail(userEmail:string):User{
     this.currentUser= UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
     return this.currentUser;
    }
 
    isPassOk(userEmail:string,password:string):boolean{
      return UserService.dummyUserList.find(userToFind => (userToFind.email == userEmail && userToFind.password==password))!=undefined;
    }
 
    registerUser(email:string, password:string, name:string, phone:string, adress:string, gender:string):User{
      var maxId: number=0;
      UserService.dummyUserList.forEach(user => {
        if (maxId < user.id){
          maxId=user.id;
        }
      });
      var id=++maxId;
      var user: User={id, email, password, name, phone, adress, gender};
      UserService.dummyUserList.push(user);
      this.currentUser=user;
      return user;
    }
 
}
