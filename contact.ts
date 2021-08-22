import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps/ngx";


// declare var google:any;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  title = "Summer Party";
    //mapElememt

  // @ViewChild('map') mapRef: ElementRef;

  // items = [
  //   {
  //     name: "Fairlife Milk 2%",
  //     quantity: 1
  //   },
      
  //   {
  //       name: "Sara Lee Honey Wheat Bread",
  //       quantity: 1
  //   },

  //   {
  //     name: "Coca Cola Bottles",
  //     quantity: 6
  //   },

  //   {
  //     name: "Jimmy Dean Sausage Links",
  //     quantity: 2
  //   },
  // ];


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'basic-alert',
      title: 'RSVP',
      subTitle: 'Remember to RSVP by Wednesday, June 15th 2022.',
      message: 'Please contact the host. Their contact information is listed at the bottom of the page.',
      buttons: ['OK']
    });

    await alert.present();
    }

  // removeItem(item, index) {
  //   console.log("Removing Item - ", item, index);
  //   const toast = this.toastCtrl.create({
  //     message: 'Removing Item - ' + index + " ...",
  //     duration: 3000
  //   });
  //   toast.present();

  //   this.items.splice(index, 1);
   
  // }

  // addItem() {
  //   console.log("Adding Item");
  //   this.showAddItemPrompt();

  // }

  // showAddItemPrompt() {
  //   const prompt = this.alertCtrl.create({
  //     title: 'Add Item',
  //     message: 'Please enter item...',
  //     inputs: [
  //       {
  //         name: 'name',
  //         placeholder: 'Name'
  //       },

  //       {
  //         name: 'quantity',
  //         placeholder: 'Quantity'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         handler: item => {
  //           console.log('Save clicked', item);
  //           this.items.push(item);

  //       }
  //     }
  //   ]
      
  //   });
  //   prompt.present();
  }

  
  // ionViewDidLoad() {
  //   this.showMap();

    //console.log(this.mapRef);
  
  

  // showMap() {
  //   //location - lat/long
  //   const location = new google.maps.LatLng(41.531860, -88.164350);

  //   //Map features
  //   const options = {
  //     center: location,
  //     zoom:10
  //   };
  //   //mapElememt
  //   const map = new google.maps.Map(this.mapRef.nativeElement,options);

  //   this.addMarker(location, map);
  // }

  //   addMarker(position, map){
  //     return new google.maps.Marker({
  //       position,
  //       map
  //     });

  //   }






// import { Component , ViewChild, ElementRef} from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, LatLng, MarkerOptions, Marker,CameraPosition} from '@ionic-native/google-maps';


// //declare var google:any;

// @Component({
//   selector: 'page-contact',
//   templateUrl: 'contact.html'
// })
// //export class ContactPage {
//   //map: GoogleMap;
 
//     //mapElememt
//   //@ViewChild('map') mapRef: ElementRef;

//   constructor(public navCtrl: NavController) {}

  
//   ionViewDidLoad() {
//     this.showMap();

//     //console.log(this.mapRef);

//   }

//   showMap() {
//     //location - lat/long
//     let mapOptions: GoogleMapOptions = {
//       camera: {
//         target: {
//           lat: 41.531905,
//           lng:  -88.165669
//         },
//         zoom: 18,
//         tilt:30
//       }
//     };

//     this.map = GoogleMaps.create('map_canvas', mapOptions);

//     let marker: Marker = this.map.addMarkerSync({
//       title: 'Ionic',
//       icon: 'blue',
//       animation: 'DROP',
//       position: {
//         lat: 41.531905,
//         lng:  -88.165669
//       }
//     });
//     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
//       alert('clicked');
//     });
//   }
// }

//below is what most videos showed me
    
    
  //   const location = new google.maps.LatLng(41.531905, -88.165669);

  //   //Map features
  //   const options = {
  //     center: location,
  //     zoom:10
  //   };
  //   //mapElememt
  //   const map = new google.maps.Map(this.mapRef.nativeElement,options);

  //   this.addMarker(location, map);
  // }

  //   addMarker(position, map){
  //     return new google.maps.Marker({
  //       position,
  //       map
  //     });

  //  }


