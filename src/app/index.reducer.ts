import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromFeedback from './reducers/feedback.recuder';

export interface State {
  feedback: fromFeedback.State;
}
export const reducers: ActionReducerMap<State> = {
  feedback: fromFeedback.reducer
};
// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

/**
 * Feedback Reducers
 */
 export const getFeedbackState = createFeatureSelector<fromFeedback.State>('feedback');

export const getFeedbackStatus = createSelector(
  getFeedbackState,
  fromFeedback.getFeedbackStatus
);
export const getFeedbackText = createSelector(
  getFeedbackState,
  fromFeedback.getFeedbackText
);
