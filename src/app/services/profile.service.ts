import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public events = [];
  public selectedEvent: any;
  ref = firebase.database().ref(firebase.auth().currentUser.uid);

  constructor() {
    this.ref.on('value', resp => {
      this.events = [];
      this.events = snapshotToArray(resp);
      console.log(this.events);
    });
  }

  addEvent(event) {
    event['user'] = firebase.auth().currentUser.email;
    return firebase.database().ref("events/").push(event);
  }
  addEvent2(event) {
    event['user'] = firebase.auth().currentUser.email;
    return firebase.database().ref(firebase.auth().currentUser.uid).push(event);
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};
