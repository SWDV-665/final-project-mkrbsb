import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Family Home"
 

  username:string;
  password:string;
  constructor(public navCtrl: NavController) {

  }
}


//   login(){
//     console.log("Username: "+ this.username);

//     console.log("Password: "+ this.password);

//   }

//   goRegister(){
//     this.navCtrl.push(RegisterPage);
//   }
// }


//   var options = {
//     title: "Enter Credentials",
//     message: "Please enter your login credentials.",
//     minLength: 8,
//     userNamePlaceholder: "User Name",
//     defaultUserName: "user123"
// };
 
// PasswordDialogPlugin.showEnterUserNameAndPassword(options,
//     function(result) {
//         if (result.cancel) {
//             console.log("User cancelled the enter credentials dialog.");
//         }
//         else {
//             console.log("User completed the enter credentials dialog.", result.password);
//         }
//     },
//     function(err) {
//         console.log("Enter password dialog error.", err);
//     });


