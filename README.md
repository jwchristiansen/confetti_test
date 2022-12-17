# Confetti Setup

Initial installation:
`rails new confetti_test -j esbuild -c tailwind -d postgresql`

Database setup:
`rails db:create`

Create static pages controller:
`rails g controller Pages index`

Update `config/routes.rb` to direct root path to `Pages` controller.

Install [Stimulus confetti](https://github.com/avo-hq/stimulus-confetti) and follow instructions:
`yarn add stimulus-confetti`

Run server:
`bin/dev`
