import Route from '@ember/routing/route';

export default class DocumentsIndexRoute extends Route {

  async model(){
    return this.store.query('document', { 'page[size]': 100 });
  }
}
