module.exports = function(config) {
  config.set({
    files:[
      'src/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/*.spec.js'
    ],

    frameworks: ['jasmine', 'browserify'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/**/*.js': ['browserify']
    },
    reporters: config.reporters.concat(['coverage']),
    browserify: {
      watch: true,
      transform: [
        'browserify-ngannotate',
        ['browserify-istanbul', {
          ignore: ['**/*.css', '**/*.scss', '**/*.html', '**/*.spec.js']
        }]
      ]
    },
    logLevel: config.LOG_DEBUG,
    coverageReporter: {
      reporters: [
        { type: 'text-summary' },
        { type: 'html' }
      ]
    }
  });
};
