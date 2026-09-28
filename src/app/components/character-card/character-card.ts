import {Component, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-character-card',
  imports: [MatCard, MatCardHeader, MatCardContent],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  id = input<number>();
  image = input<string>();
  name = input<string>();
  description = input<string>();
}
