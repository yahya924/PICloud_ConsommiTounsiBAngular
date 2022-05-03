import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowDown, faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { CommentService } from '../commentService/comment.service';
import { PublicationService } from '../publicationService/publication.service';


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
  publication : any;

  commentText !:string;

  constructor(
    private commentService : CommentService, 
    private pubService : PublicationService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (res : any) => {

        this.getPublication(res.get('id'))
        this.getCommentsByPubId(res.get('id'))
      },
      error : (err : any) => {
        console.log(err)
      }
    })

  }


  getComments(){
    this.commentService.getAllComments().subscribe({
      next : (res : any) => {
        this.commentList = res
        console.log(res)
      },
      error : (err : any) => {
        console.log(err)
      }
      
    })
  }

  getPublication(idPub : number){
    this.pubService.getPublicationId(idPub).subscribe({
      next : (res : any) => {
        this.publication = res;
        console.log(res)
      },
      error : (err : any) => {
        console.log(err)
      }
    })
  }

  getCommentsByPubId(pubId : number){
    this.commentService.getCommentsByPublicationId(pubId).subscribe({
      next : (res : any) => {
        this.commentList = res
        console.log(res)
      },
      error : (err : any) => {
        console.log(err)
      }
      
    })
  }

  addComment(){
    let comment = {
      client : null,
      idComment : Math.random() * (9999 - 100) + 100,
      description : this.commentText,
      ratingComment : []
    };

    this.commentService.addComment(comment).subscribe({
      next : (res : any) => {
        console.log("comment added successfully")
      },
      error : (err : any) => {
        console.log(err)
      }
    });

  }

}
