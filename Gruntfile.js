const { access_key, secret_key } = require('./awsConfig.js');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-aws');
  grunt.initConfig({
    s3: {
      options: {
        accessKeyId: access_key,
        secretAccessKey: secret_key,
        bucket: 'paolorazon.io',
        region: 'us-west-1'
      },
      build: { cwd: 'client/dist', src: '**' }
    }
  });
  grunt.registerTask('default', ['s3']);
};
