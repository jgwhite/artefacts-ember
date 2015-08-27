import Ember from 'ember';
const { Service } = Ember;
const Promise = Ember.RSVP.Promise;
const BASE_URL = 'https://artefacts-app.s3.amazonaws.com/';

export default Service.extend({
  upload(file, key = file.name) {
    return new Promise((resolve, reject) => {
      let s3 = new AWS.S3();
      let options = {
        Bucket: 'artefacts-app',
        Key: key,
        Body: file,
        ContentType: file.type,
        ACL: 'public-read'
      };

      s3.putObject(options, error => {
        if (error) {
          reject(error);
        } else {
          let url = BASE_URL + key;
          resolve(url);
        }
      });
    });
  },

  delete(url) {
    return new Promise((resolve, reject) => {
      let key = url.replace(BASE_URL, '');
      let s3 = new AWS.S3();
      let options = {
        Bucket: 'artefacts-app',
        Key: key
      };

      s3.deleteObject(options, error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
});
