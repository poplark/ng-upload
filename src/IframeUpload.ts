import { Component } from '@angular/core';

@Component({
  selector: '[iframe-upload]',
  template: `
    <span>iframe upload</span>
  `
})
export class IframeUpload {

  constructor() {
  }

  abort(file) {
    console.log('abortttt', file);
  }

  changeHandler(evt: any) {
    console.log('input changed', evt);
  }
}