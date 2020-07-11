const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  eslint: false,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: true
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
      ]
    }
  },
  plugins: {
    'uglifyjs': {
      filter: /\.js$/,
      config: {}
    },
    'imagemin': { //压缩图片
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    },
    // 'filemin': { //压缩wxml  json  xml   格式
    //   filter: /\.(json|wxml|xml)$/
    // }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

// if (prod) {
//   module.exports = {
//     "compilers": {
//       less: {
//         "compress": true // 压缩less
//       },
//       sass: {
//         "outputStyle": 'compressed' // 压缩sass
//       }
//     },
//     "plugins": {
//       uglifyjs: { //压缩js
//         filter: /\.js$/,
//         config: {}
//       },
//       imagemin: { //压缩图片
//         filter: /\.(jpg|png|jpeg)$/,
//         config: {
//           jpg: {
//             quality: 80
//           },
//           png: {
//             quality: 80
//           }
//         }
//       },
//       filemin: { //压缩wxml  json  xml   格式
//         filter: /\.(json|wxml|xml)$/
//       }
//     }
//   }
// }
