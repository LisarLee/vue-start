'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT:"'/ivane'",
  APP_URL:"'https://ivane.motouat.com.cn'",
  API_SERVER:"'https://api.motouat.com.cn'"
})
