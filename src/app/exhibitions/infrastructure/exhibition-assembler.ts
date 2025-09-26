import { ExhibitionResource, ExhibitionsResponse } from './exhibitions-response';
import { Exhibition } from '../domain/model/exhibition.entity';

export class ExhibitionAssembler {
  static toEntityFromResource(resource: ExhibitionResource): Exhibition {
    return {
      id: resource.id,
      title: resource.title,
      short_description: resource.short_description,
      web_url: resource.web_url,
      image_url: resource.image_url,
      status: resource.status,
      aic_start_at: resource.aic_start_at,
      aic_end_at: resource.aic_end_at,
      gallery_title: resource.gallery_title
    };
  }

  static toEntitiesFromResponse(response: ExhibitionsResponse): Exhibition[] {
    return response.exhibitions.map(exhibition => this.toEntityFromResource(exhibition));
  }

}
