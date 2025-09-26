import { Component, input } from '@angular/core';

import { Exhibition } from '../../../domain/model/exhibition.entity';

import {DatePipe} from '@angular/common';


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
    TranslatePipe,
    DatePipe
  ],
  templateUrl: './exhibition-card.html',
  styleUrl: './exhibition-card.css'
})
export class ExhibitionCard {
  exhibition = input.required<Exhibition>();

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  protected readonly Exhibition = Exhibition;
}
