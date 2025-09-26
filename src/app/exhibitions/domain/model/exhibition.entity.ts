export class Exhibition {
  id: number;
  title: string;
  short_description: string;
  web_url: string;
  image_url: string;
  status: string;
  aic_start_at: Date;
  aic_end_at: Date;
  gallery_title: string;

  constructor(){
    this.id = 0;
    this.title = '';
    this.short_description = '';
    this.web_url = '';
    this.image_url = '';
    this.status = '';
    this.aic_start_at = new Date();
    this.aic_end_at = new Date();
    this.gallery_title = '';
  }
}
