class ServiceLoader {
  constructor(store) {
    this.urlManager = null;
    this.initialize(store);
  }

  initialize(store) {
    console.log(store, this);
  }

  loadServiceModules() {
    console.log('load', this);
  }
}

export default ServiceLoader;
