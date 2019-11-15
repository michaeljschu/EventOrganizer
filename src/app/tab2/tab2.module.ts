import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import * as algoliasearch from 'algoliasearch/lite';
import { NgAisModule } from 'angular-instantsearch';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgAisModule.forRoot(),
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})



export class Tab2PageModule {
}

