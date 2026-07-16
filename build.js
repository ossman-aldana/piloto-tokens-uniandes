const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ['tokens.json'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables'
        }
      ]
    }
  }
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();

console.log('✅ ¡CSS generado con éxito!');
