import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-submit-feedback',
  templateUrl: './submit-feedback.component.html',
  styleUrls: ['./submit-feedback.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SubmitFeedbackComponent {

  @Input() enteredFeedback: string;
  @Output() feedbackEnterEdit = new EventEmitter<String>();
  @Output() feedbackSubmit = new EventEmitter<String>();

  makeChanges() {
  this.feedbackEnterEdit.emit();
  }

  submit() {
    this.feedbackSubmit.emit();
  }
}
