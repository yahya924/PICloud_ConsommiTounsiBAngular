import { Component, Input, OnInit } from '@angular/core';
import { faThumbsUp, faThumbsDown, faFaceAngry, faFaceSadTear, faFaceLaugh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  likeIcon = faThumbsUp;
  dislikeIcon = faThumbsDown;
  angryIcon = faFaceAngry;
  laughIcon = faFaceLaugh;
  sadIcon = faFaceSadTear;

  @Input() commentText !:string;
  

  constructor() { }

  ngOnInit(): void {
  }


}
