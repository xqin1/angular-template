import * as feedbackAction from '../actions/feedback.action';
import { FeedbackStatus} from '../model/feedback-status.model';

export interface State {
  feedbackStatus: FeedbackStatus;
  feedbackText: string;
}
const initialState: State = {
  feedbackStatus: FeedbackStatus.INITIALIZED,
  feedbackText: null
};
export function reducer(state = initialState, action: feedbackAction.Actions): State {
  switch (action.type) {
    case feedbackAction.FEEDBACK_INITIALIZED: {
      return {
        ...state,
        feedbackStatus: FeedbackStatus.INITIALIZED
      };
    }
    case feedbackAction.FEEDBACK_ENTER_NEW: {
      return {
        ...state,
        feedbackStatus: FeedbackStatus.ENTER_NEW,
        feedbackText: null
      };
    }
    case feedbackAction.FEEDBACK_ENTER_FINISH: {
      return {
        ...state,
        feedbackStatus: FeedbackStatus.ENTER_FINISH,
        feedbackText: action.payload
      };
    }
    case feedbackAction.FEEDBACK_ENTER_EDIT: {
      return {
        ...state,
        feedbackStatus: FeedbackStatus.ENTER_EDIT,
      };
    }
    case feedbackAction.FEEDBACK_SUBMIT: {
      return {
        ...state,
        feedbackStatus: FeedbackStatus.ENTER_SUBMIT,
        feedbackText: null
      };
    }
    default: {
      return state;
    }
  }
}

export const getFeedbackStatus = (state: State) => state.feedbackStatus;
export const getFeedbackText = (state: State) => state.feedbackText;

