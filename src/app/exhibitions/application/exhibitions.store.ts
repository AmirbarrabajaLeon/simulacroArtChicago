import {computed, inject, Injectable, signal} from '@angular/core';
import { Exhibition } from '../domain/model/exhibition.entity';
import { ExhibitionsApi } from '../infrastructure/exhibitions-api';

@Injectable({providedIn: 'root'})
export class ExhibitionsStore {
  private exhibitionsSignal = signal<Exhibition[]>([]);
  private exhibitionsApi = inject(ExhibitionsApi);

  readonly exhibitions = computed(() => this.exhibitionsSignal());

  loadExhibitions() {
    if (this.exhibitionsSignal().length === 0) {
      this.exhibitionsApi.getExhibitions().subscribe(exhibitions => {
        this.exhibitionsSignal.set(exhibitions);
      });
    }
  }
}
