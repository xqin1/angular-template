import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Store } from '@ngrx/store';
import * as feedbackAction from '../actions/feedback.action';
import * as fromFeedback from '../index.reducer';
import { Observable } from 'rxjs/Observable';
import { FeedbackStatus } from '../model/feedback-status.model';
@Component({
  selector: 'app-feedback-parent',
  templateUrl: './feedback-parent.component.html',
  styleUrls: ['./feedback-parent.component.css']
})
export class FeedbackParentComponent implements OnInit {
  feedbackStatus$: Observable<FeedbackStatus>;
  feedbackText$: Observable<string>;
  @Output() feedbackSubmit = new EventEmitter();
  constructor(
    private store: Store<fromFeedback.State>
  ) {
    this.feedbackStatus$ = this.store.select(fromFeedback.getFeedbackStatus);
    this.feedbackText$ = this.store.select(fromFeedback.getFeedbackText);
  }
  onFeedbackEnterFinish(feedbackText: string) {
    this.store.dispatch(new feedbackAction.FeedbackEnterFinish(feedbackText));
  }
  onFeedbackEdit() {
    this.store.dispatch(new feedbackAction.FeedbackEnterEdit());
  }
  onFeedbackSubmit() {
    this.store.dispatch(new feedbackAction.FeedbackSubmit());
    this.feedbackSubmit.emit();
  }
  ngOnInit() {
  }

}
