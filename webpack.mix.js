
let mix = require('laravel-mix')
let path = require('path')
//let postcssImport = require('postcss-import')

require('./nova.mix.js')

mix
    .setPublicPath('dist')
    .js('resources/js/card.js', 'js')
    .vue({ version: 3 })
    //.postCss('resources/css/field.css', 'dist/css/', [postcssImport(), tailwindcss('tailwind.config.js'),])
    .nova('optimistdigital/nova-color-fields')