import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webworker',
  templateUrl: './webworker.component.html',
  styleUrls: ['./webworker.component.scss'],
})
export class WebworkerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./.worker', import.meta.url));
//   worker.onmessage = ({ data }) => {
//     console.log(`component got message: ${data}`);
//   };
//   worker.postMessage('component says hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
