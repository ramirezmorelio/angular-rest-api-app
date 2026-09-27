import {Component} from '@angular/core';
import {CharacterCard} from '../../components/character-card/character-card';

@Component({
  selector: 'app-demon-slayer-characters-list',
  imports: [CharacterCard],
  templateUrl: './demon-slayer-characters-list.html',
  styleUrl: './demon-slayer-characters-list.css',
})
export class DemonSlayerCharactersList {

  characterList = [
    {
      "id": 1,
      "name": "Tanjiro Kamado",
      "age": 16,
      "gender": "Male",
      "race": "Human",
      "description": "Is the main protagonist of Demon Slayer. He joined the Demon Slayer Corp to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/1.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Work at it. All I can do is work hard! That´s the story of my life!"
    },
    {
      "id": 2,
      "name": "Nezuko Kamado",
      "age": 14,
      "gender": "Female",
      "race": "Demon",
      "description": "She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.",
      "img": "https://www.demonslayer-api.com/api/v1/characters/images/2.webp",
      "affiliation_id": 1,
      "arc_id": 1,
      "quote": "Humans are to be protected and saved... I will never hurt them."
    }]

}
