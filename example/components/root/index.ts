import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './index.html'
})
export class RootComponent {

  headers: object = {a: 1};

  onReady(evt: any) {
    console.log("upload ready in root", evt);
  }

  onStart(evt: any) {
    console.log('on start root ', evt);
  }
}