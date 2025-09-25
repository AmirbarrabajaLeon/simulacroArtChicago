export const environment = {
  production: true,

  serverBaseUrl: 'https://api.artic.edu/api/v1/',
  exhibitionsEndpointPath: 'exhibitions',
  exhibitionParams: {
    fields: ['id', 'title', 'short_description', 'status', 'web_url', 'image_url', 'gallery_title', 'aic_start_at', 'aic_end_at'],
    limit: 25
  }
};
