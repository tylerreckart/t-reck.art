# [reckart.blog](https://reckart.blog)  
This repository serves as the foundation for my blog. It is comprised of a simple static site generator written in JavaScript and a [pug](https://pugjs.org/api/getting-started.html)-based templating system. It takes markdown content placed in the `posts` and `pages` directories, pipes them through the templating system and builds a complete, static website ready to be served by any web server.

Simply run the `build` command to build the website:
```sh
npm run build
```