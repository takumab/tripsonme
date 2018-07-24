import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let trips = [
      {
        title: 'Review',
        description: 'Lorem ipsum dolor amet echo park commodo chambray selvage retro ramps actually mustache.',
        city: 'Lake Tahoe, NV',
        image: 'assets/images/lake.jpg'
      },
      {
        title: 'Review',
        description: 'Lorem ipsum dolor amet echo park commodo chambray selvage retro ramps actually mustache.',
        city: 'Rio de Janero, BR',
        image: 'assets/images/rio.jpg'
      },
      {
        title: 'Review',
        description: 'Lorem ipsum dolor amet echo park commodo chambray selvage retro ramps actually mustache.',
        city: 'Amman, JR',
        image: 'assets/images/cairo.jpg'
      },
    ];

    return trips;
  }
});
