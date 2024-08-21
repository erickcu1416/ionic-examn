import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  private intervalSuscriber: any = new Subject<void>();
  counter = 1;
  animatedOut = false;
  shakeAnimated = false;
  animatationDuration = 5000;
  @Input() transitionDuration: number = 2000;
  constructor() {}

  ngOnInit() {
    this.transitionDuration < 2000
      ? console.warn(
          'transition duraction min is 2000ms, not changes applicated'
        )
      : (this.animatationDuration = this.transitionDuration);

    this.intervalSuscriber = timer(0, this.animatationDuration).subscribe(
      () => {
        this.animatedOut = true;
        setTimeout(() => {
          if (this.counter === 3) {
            this.counter = 1;
          } else {
            this.counter++;
          }
        }, 800);

        setTimeout(() => {
          this.animatedOut = false;
        }, 1000);

        setTimeout(() => {
          this.shakeAnimated = true;
        }, this.animatationDuration / 2);

        setTimeout(() => {
          this.shakeAnimated = false;
        }, this.animatationDuration);
      }
    );
  }

  ngOnDestroy(): void {
    this.intervalSuscriber.unsubscribe();
  }
}
