import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './index.reducer';
import { environment } from '../environments/environment';
import { EnterFeedbackComponent } from './enter-feedback/enter-feedback.component';
import { SubmitFeedbackComponent } from './submit-feedback/submit-feedback.component';
import { FeedbackParentComponent } from './feedback-parent/feedback-parent.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterFeedbackComponent,
    SubmitFeedbackComponent,
    FeedbackParentComponent,
    FeedbackDialogComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, OverlayModule, FormsModule,
    MatDialogModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  entryComponents: [FeedbackDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
