import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Post } from "../models/post.model";
import * as PostActions from "../actions/post.actions";

interface AppState {
  post: Post;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  post$: Observable<Post>
  text: string;

  constructor(private store: Store<AppState>) { 
    this.post$ = this.store.select('post')
  }

  ngOnInit() {
  }

  editText(){
    this.store.dispatch(new PostActions.EditText(this.text))
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }

  upVote() {
    this.store.dispatch(new PostActions.Upvote())
  }

  downVote() {
    this.store.dispatch(new PostActions.Downvote())
  }

}
