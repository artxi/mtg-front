import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  cards$: Observable<any> | undefined;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    // this.cards$ = this.cardService.getCards()
  }
}
