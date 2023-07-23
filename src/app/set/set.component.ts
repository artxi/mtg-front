import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SetService } from './set.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit{

  sets$: Observable<any> | undefined;

  constructor(private setService: SetService) { }

  ngOnInit(): void {
    this.sets$ = this.setService.getSets()
  }
}
