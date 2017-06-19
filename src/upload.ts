import { Component, ElementRef, Input, Output, ViewChild, EventEmitter, OnInit, OnChanges, SimpleChange, AfterViewInit } from '@angular/core';
// import classNames from 'classnames';

import { AjaxUpload } from './AjaxUpload';
import { IframeUpload } from './IframeUpload';

declare var FormData: any;
declare var window: any;

@Component({
  selector: '[ngUpload]',
  template: `
    <div (click)="abort($event)">ss</div>
    <div *ngIf="isHtml5Mode" ajax-upload
      [component]="component"
      [prefixCls]="prefixCls"
      [action]="action"
      [className]="className"
      [disabled]="disabled"
      [multiple]="multiple"
      [accept]="accept"
      [onStart]="onStart"
    ></div>
    <div *ngIf="!isHtml5Mode" iframe-upload></div>
  `
  // TODO - use template ref to create child component dynamically
})
export class UploadComponent implements OnInit, OnChanges, AfterViewInit {

  private isHtml5Mode: boolean = true;
  private _component: object;

  @ViewChild(AjaxUpload) ajaxUploadComponent: AjaxUpload;
  @ViewChild(IframeUpload) iframeUploadComponent: IframeUpload;

  @Input() component: string = 'span';
  @Input() prefixCls: string = 'ng-upload';
  @Input() action: string;
  @Input() data: object = {};
  @Input() headers: object = {};
  @Input() className: string;
  @Input() disabled: boolean;
  name: string = 'file';
  @Input() multipart: boolean = false;
  @Input() multiple: boolean = false;
  beforeUpload: object;
  customRequest: object;
  withCredentials: boolean = false;

  @Output() onReady?: EventEmitter<any> = new EventEmitter();
  @Output() OnStart: EventEmitter<any> = new EventEmitter();
  @Output() OnError?: EventEmitter<any> = new EventEmitter();
  @Output() OnSuccess?: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log("upload component");
    window['p'] = this.el;
  }

  ngOnInit() {
    this.isHtml5Mode = FormData !== 'undefined';
    console.log("isHtml5Mode: ", this.isHtml5Mode, FormData);
    if (this.onReady) {
      this.onReady.emit('sssss');
    }
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log("changeee", changes);
  }

  ngAfterViewInit() {
    if (this.ajaxUploadComponent) {
      this._component = this.ajaxUploadComponent;
    } else {
      this._component = this.iframeUploadComponent;
    }
    console.log("after view init ", this._component);
  }

  abort(file) {
    console.log("abort upload ", this._component, file);
    // this._component.abort(file);
  }
}