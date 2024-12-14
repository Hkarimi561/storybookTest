import {Component, Input} from '@angular/core';

@Component({
  selector: 'CARDS',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input()
  imgSrc: string='';
  @Input()
  imgAlt: string='Image Alt';
  @Input()
  header: string='Header';
  @Input()
  content: string='Content';
  @Input()
  btnLabel: string='Click';
}
