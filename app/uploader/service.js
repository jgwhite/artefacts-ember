import Ember from 'ember';
const { inject } = Ember;
const Promise = Ember.RSVP.Promise;
const BASE_URL = 'https://artefacts-app.s3.amazonaws.com/';

export default Ember.Service.extend({
  upload(file, key = file.name) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      let s3 = new AWS.S3();
      let body = reader.result;
      let options = {
        Bucket: 'artefacts-app',
        Key: key,
        Body: file,
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
