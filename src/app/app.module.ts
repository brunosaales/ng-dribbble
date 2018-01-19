import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { ShotsComponent } from './shots/shots.component';
import { DetailShotComponent } from './detail-shot/detail-shot.component';


import { ShotsService } from './shots/shots.service';



@NgModule({
    declarations: [
        AppComponent,
        ShotsComponent,
        DetailShotComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule
    ],
    entryComponents: [DetailShotComponent],
    providers: [ShotsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
