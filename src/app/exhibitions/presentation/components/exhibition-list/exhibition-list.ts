import { Component, input } from '@angular/core';

import { Exhibition } from '../../../domain/model/exhibition.entity';
import { ExhibitionCard } from '../exhibition-card/exhibition-card';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-exhibition-list',
  imports: [
    ExhibitionCard,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './exhibition-list.html',
  styleUrl: './exhibition-list.css'
})
export class ExhibitionList {
  exhibitions = input.required<Array<Exhibition>>();
}
