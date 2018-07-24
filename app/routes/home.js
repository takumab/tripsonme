import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let trips = [
      {
        title: 'Trip 1',
        description: 'Here is Trip 1',
        city: 'Lake Tahoe',
        image: 'assets/images/lake.jpg'
      },
      {
        title: 'Trip 2',
        description: 'Here is Trip 2',
        city: 'Rio de Janero',
        image: 'assets/images/rio.jpg'
      },
      {
        title: 'Trip 3',
        description: 'Here is Trip 3',
        city: 'Cairo',
        image: 'assets/images/cairo.jpg'
      },
    ];

    return trips;
  }
});
