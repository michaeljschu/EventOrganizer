import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  event = this.eventService.selectedEvent;

  constructor( private eventService: EventService ) { }

  ngOnInit() {
    console.log(this.event);
  }

}
