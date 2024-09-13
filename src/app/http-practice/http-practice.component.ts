import { Component } from '@angular/core';
import { HttpPracticeService } from '../http-practice.service';
import { Todos } from '../Interfaces/reactive-forms';

@Component({
  selector: 'app-http-practice',
  templateUrl: './http-practice.component.html',
  styleUrl: './http-practice.component.scss'
})
export class HttpPracticeComponent {
  todos : Todos[] = [];

  constructor(private service : HttpPracticeService){}

  loadApiData(){
    this.service.fetchDummyProducts().subscribe(res=>{
      console.log(res);
      this.todos = res;
    }
    )
  }

}
