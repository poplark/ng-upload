import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: '[ajax-upload]',
  template: `
    <span>ajax upload</span>
    <input type="file" #file (change)="changeHandler($event)"/>
  `
})
export class AjaxUpload {

  @Input() component: string;
  @Input() prefixCls: string;
  @Input() action: string;
  @Input() className: string;
  @Input() disabled: boolean = false;
  @Input() multiple: boolean = false;
  @Input() accept: string;

  @Input() onStart: EventEmitter<any>;

  constructor() {
  }

  abort(file) {
    console.log('abortttt', file);
  }

  changeHandler(evt: any) {
    console.log('input changed', evt);
    this.onStart.emit(evt);
  }
}