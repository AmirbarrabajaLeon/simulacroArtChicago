import { Component, OnInit, inject} from '@angular/core';

import { ExhibitionList } from '../../components/exhibition-list/exhibition-list';
import {ExhibitionsStore} from '../../../application/exhibitions.store';

@Component({
  selector: 'app-exhibitions-view',
  imports: [
    ExhibitionList
  ],
  templateUrl: './exhibitions-view.html',
  styleUrl: './exhibitions-view.css'
})

export class ExhibitionsView implements OnInit {

  protected store = inject(ExhibitionsStore);
  protected readonly exhibitions= this.store.exhibitions;

  ngOnInit(): void {
    this.store.loadExhibitions();
    console.log(this.store.exhibitions());
  }
}
