import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
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
    MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatToolbarModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  entryComponents: [FeedbackDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
