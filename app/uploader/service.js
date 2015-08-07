import Ember from 'ember';
const { inject } = Ember;
const Promise = Ember.RSVP.Promise;

export default Ember.Service.extend({
  upload(file, key = file.name) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      let s3 = new AWS.S3();
      let body = reader.result;

      s3.putObject({
        Bucket: 'artefacts-app',
        Key: key,
        Body: file,
        ACL: 'public-read'
      }, (err, data) => {
        if (err) {
          reject();
        } else {
          let url = 'https://artefacts-app.s3.amazonaws.com/' + key;
          resolve(url);
        }
      });
    });
  }
});
