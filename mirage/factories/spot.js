import { Factory, faker } from 'ember-cli-mirage';

const fakerImages = new Array(30).fill(null).map(e => e = faker.image.cats());

faker.seed(123);
export default Factory.extend({
  city() {
    return faker.address.city();
  },

  country() {
    return faker.address.country();
  },

  info() {
    return faker.lorem.paragraph();
  },

  image(i) {
    return fakerImages[i % fakerImages.length];
  }
});
