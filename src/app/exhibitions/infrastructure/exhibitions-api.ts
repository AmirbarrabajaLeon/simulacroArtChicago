import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

import {map, Observable, tap} from 'rxjs';

import { Exhibition } from '../domain/model/exhibition.entity';
import { ExhibitionsResponse } from './exhibitions-response';
import { ExhibitionAssembler } from './exhibition-assembler';

@Injectable({
  providedIn: 'root'
})

export class ExhibitionsApi {

  private baseUrl = environment.serverBaseUrl;
  private exhibitionsEndpoint = environment.exhibitionsEndpointPath;
  private params = new HttpParams()
    .set('fields', environment.exhibitionParams.fields.join(','))
    .set('limit', environment.exhibitionParams.limit);

  constructor(private http: HttpClient) {}

  getExhibitions(): Observable<Exhibition[]> {
    return this.http.get<ExhibitionsResponse>(`${this.baseUrl}${this.exhibitionsEndpoint}?${this.params.toString()}`)
      .pipe(
        tap(response=> console.log('API Response:', response)),
        map(response=> ExhibitionAssembler.toEntitiesFromResponse(response))
      );
  }
}
