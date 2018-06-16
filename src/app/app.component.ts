import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { Store } from '@ngrx/store';
import * as feedbackAction from './actions/feedback.action';
import * as fromFeedback from './index.reducer';
import { FeedbackStatus} from './model/feedback-status.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Overlay} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  feedbackStatus$: Observable<FeedbackStatus>;
  private statusStateSubscription: Subscription;
  public dialogRef: any;

  constructor(
    public dialog: MatDialog,
    public overlay: Overlay,
    private store: Store<fromFeedback.State>
  ) {
    this.feedbackStatus$ = this.store.select(fromFeedback.getFeedbackStatus);
  }
  enterFeedback() {
    // Launch feedback flow modal.
    this.dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: '600px',
      height: '600px',
      minWidth: '200px',
      minHeight: '200px',
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
    this.store.dispatch(new feedbackAction.FeedbackEnterNew());
  }
  ngOnInit() {
    this.statusStateSubscription = this.feedbackStatus$.subscribe((status) => {
      if (status === FeedbackStatus.ENTER_SUBMIT) {
        this.dialogRef.close();
      }
    });
  }
}
