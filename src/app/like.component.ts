import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: 'like.component.html',
})

export class LikeComponent {
  numberOfLikes : number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
  }
}
