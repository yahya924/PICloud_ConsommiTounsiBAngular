import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  likesIcon = faArrowUp
  dislikesIcon = faArrowDown
  commentsIcon = faComment

  constructor() { }

  ngOnInit(): void {
  }

}
