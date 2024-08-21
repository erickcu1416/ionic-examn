import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptor-loader',
  templateUrl: './interceptor-loader.page.html',
  styleUrls: ['./interceptor-loader.page.scss'],
})
export class InterceptorLoaderPage implements OnInit {

  constructor(private http: HttpClient) {}
  count = 0;

  ngOnInit() {
    this.http.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=500').subscribe((x: any) => {
      this.count = x?.length;
    });
  }

}
