import {Component, input} from '@angular/core';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  id = input<number>();
  image = input<string>();
  name = input<string>();
  description = input<string>();
}
