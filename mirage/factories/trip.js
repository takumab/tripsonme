import { Factory, faker } from 'ember-cli-mirage';

const imagePath = 'assets/images/';
const images = [`${imagePath}lake.jpg`, `${imagePath}cairo.jpg`, `${imagePath}boulder.jpg`];

faker.seed(1);
export default Factory.extend({

  name() {
    return faker.lorem.words();
  },

  description() {
    return faker.lorem.sentence();
  },

  city() {
    return faker.address.city();
  },

  image(i) {
    return images[i % images.length];
  }
    // title: 'Review',
    // description: 'Lorem ipsum dolor amet echo park commodo chambray selvage retro ramps actually mustache.',
    // city: 'Lake Tahoe, NV',
    // image: 'assets/images/lake.jpg'
  // {
  //   title: 'Review',
  //   description: 'Lorem ipsum dolor amet echo park commodo chambray selvage retro ramps actually mustache.',
  //   city: 'Rio de Janero, BR',
  //   image: 'assets/images/rio.jpg'
  // },
  // {
  //   title: 'Review',
  //   description: 'Lorem ipsum dolor amet echo park commodo chambray selvage retro ramps actually mustache.',
  //   city: 'Amman, JR',
  //   image: 'assets/images/cairo.jpg'
  // },
});
