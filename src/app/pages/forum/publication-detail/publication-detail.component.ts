import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { CommentService } from '../commentService/comment.service';


@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.scss']
})
export class PublicationDetailComponent implements OnInit {
  
  likesIcon = faArrowUp
  dislikesIcon = faArrowDown
  commentsIcon = faComment

  commentList = []

  constructor(private commentService : CommentService) { }

  ngOnInit(): void {
    this.commentList = this.commentService.list
  }

}
