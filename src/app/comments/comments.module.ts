import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';



@NgModule({
  declarations: [
    CommentComponent,
    ListCommentsComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    CommentComponent,
    ListCommentsComponent
  ]
})
export class CommentsModule { }
