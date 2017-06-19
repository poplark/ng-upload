// import 'reflect-metadata';
import 'core-js';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './components/root';
import { AjaxUpload } from '../src/AjaxUpload';
import { IframeUpload } from '../src/IframeUpload';
import { Upload } from '../src/index.js';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  declarations: [
    RootComponent,
    AjaxUpload,
    IframeUpload,
    Upload,
   ],
  providers: [],
  bootstrap: [ RootComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('bootstrap success', success))
  .catch(error => console.error(error));