import { Component, OnInit } from '@angular/core';
import { PublicationService } from './publicationService/publication.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  list = []

  constructor(private publicationService : PublicationService) { }

  ngOnInit(): void {
    this.list = this.publicationService.list;
  }

}
