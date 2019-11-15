import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // items = this.eventService.events;

  constructor( private userService: UserService,
               private eventService: EventService,
               private router: Router ) {
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
    this.eventService.selectedEvent = event;
    this.router.navigateByUrl('/event-detail');
  }

  newEvent() {
    this.router.navigateByUrl('/event-new');
  }

}
