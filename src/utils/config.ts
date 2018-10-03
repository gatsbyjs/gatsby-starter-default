'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true,
});

const config = {};
const prefix = 'GATSBY_';

Object.entries(process.env)
  .forEach(([key, value]) => {
    if (key.substr(0, prefix.length) === prefix && value !== '') {
      // @ts-ignore: Unreachable code error
      config[key.substr(prefix.length)] = value;
    }
  });

exports.default = config;
