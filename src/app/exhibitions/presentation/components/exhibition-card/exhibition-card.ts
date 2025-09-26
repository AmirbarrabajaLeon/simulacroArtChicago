import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import {
  MatCard,
  MatCardContent, MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-exhibition-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    MatCardSubtitle,
    MatCardFooter,
    MatButton,
    TranslatePipe
  ],
  templateUrl: './exhibition-card.html',
  styleUrl: './exhibition-card.css'
})
export class ExhibitionCard {

}
