import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { InputCommentComponent } from './input-comment/input-comment.component';



@NgModule({
  declarations: [
    CommentComponent,
    ListCommentsComponent,
    InputCommentComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    CommentComponent,
    ListCommentsComponent,
    InputCommentComponent
  ]
})
export class CommentsModule { }
