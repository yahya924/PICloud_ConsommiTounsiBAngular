import { Component, Input, OnInit } from '@angular/core';
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


  @Input() title !:string;
  @Input() description !: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
