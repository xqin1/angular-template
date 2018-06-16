import { Action } from '@ngrx/store';
export const FEEDBACK_INITIALIZED = '[Feedback] Feedback Initialized';
export const FEEDBACK_ENTER_NEW = '[Feedback] Feedback Enter New';
export const FEEDBACK_ENTER_FINISH  = '[Feedback] Feedback Enter Finish';
export const FEEDBACK_ENTER_EDIT  = '[Feedback] Feedback Enter Edit';
export const FEEDBACK_SUBMIT  = '[Feedback] Feedback submit';

export class FeedbackInitialized implements Action {
  readonly type = FEEDBACK_INITIALIZED;
  constructor() {}
}
export class FeedbackEnterNew implements Action {
  readonly type = FEEDBACK_ENTER_NEW;
  constructor() {}
}
export class FeedbackEnterFinish implements Action {
  readonly type = FEEDBACK_ENTER_FINISH;
  constructor(public payload: string) {}
}
export class FeedbackEnterEdit implements Action {
  readonly type = FEEDBACK_ENTER_EDIT;
  constructor() {}
}
export class FeedbackSubmit implements Action {
  readonly type = FEEDBACK_SUBMIT;
  constructor() {}
}
export type Actions = FeedbackInitialized
   | FeedbackEnterNew
   | FeedbackEnterFinish
   | FeedbackEnterEdit
   | FeedbackSubmit;
