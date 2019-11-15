import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.page.html',
  styleUrls: ['./event-new.page.scss'],
})
export class EventNewPage implements OnInit {
  newEvent = { type: '', description: '', cost: 0, desc: '' };

  constructor( private eventService: EventService,
               private router: Router ) { }

  ngOnInit() {
  }

  addEvent() {
    console.log(this.newEvent);
    this.eventService.addEvent(this.newEvent)
    this.eventService.addEvent2(this.newEvent)
      .then(data => {
        console.log(data);
        this.router.navigateByUrl('/tabs');
      })
      .catch(error => {
        console.log(error);
      });
  }

  inputCheck() {
    return (this.newEvent.description == '');
  }

}
