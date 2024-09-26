import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { documentTextOutline, gridOutline, logOutOutline, optionsOutline, starHalfOutline, starOutline } from 'ionicons/icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';

addIcons({
  'log-out-outline': logOutOutline,
  'star-outline': starOutline,
  'document-text-outline': documentTextOutline,
  'options-outline' : optionsOutline,
  'grid-outline': gridOutline
});

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule,
    HttpClientModule
  ]
})
export class IonicSharedModule { }
