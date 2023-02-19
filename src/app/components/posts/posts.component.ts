import { Component, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() post;
  comments;
  isActive = true;

  constructor(private commentsService: CommentsService) {}

  getComments(postId: number) {
    if (this.isActive) {
      this.commentsService
        .getComments(postId)
        .subscribe((comments) => (this.comments = comments));
      this.isActive = false;
    } else {
      this.comments = [];
      this.isActive = true;
    }
  }
}
