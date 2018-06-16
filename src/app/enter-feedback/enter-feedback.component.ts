import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-enter-feedback',
  templateUrl: './enter-feedback.component.html',
  styleUrls: ['./enter-feedback.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EnterFeedbackComponent implements OnInit {
  @Input() enteredFeedback: string;
  @Output() feedbackEnterFinish = new EventEmitter<String>();

  done() {
    this.feedbackEnterFinish.emit(this.enteredFeedback);
  }
  ngOnInit() {
  }

}
