# How to run
## Dummy app credentials
* Client ID: ns57NKDSGrTrrg
* Client Secret: QC71pYLhNNsM5OZkqc7WiymowuA
## Live
* You can find this project at https://reddit.lukegonzalez.dev
## Docker
* Create a `.env.local` file with the Reddit app credentials. You can use the credentials provided on this README or you can follow these [steps](https://github.com/reddit-archive/reddit/wiki/OAuth2#getting-started) to create your own.
  ```
  NEXT_PUBLIC_REDDIT_CLIENT_ID={your client id}
  NEXT_PUBLIC_REDDIT_CLIENT_SECRET={your client secret}
  ```
* Run `docker run --rm -v $(pwd):/app -w /app node:alpine npm install && npm run build` to install and build the assets
* Run `docker run --rm -v $(pwd):/app -w /app -p 3000:3000 node:alpine npm run start` to start the server
* Access through http://localhost:3000
## Node
* Create a `.env.local` file with the Reddit app credentials. You can use the credentials provided on this README or you can follow these [steps](https://github.com/reddit-archive/reddit/wiki/OAuth2#getting-started) to create your own.
  ```
  NEXT_PUBLIC_REDDIT_CLIENT_ID={your client id}
  NEXT_PUBLIC_REDDIT_CLIENT_SECRET={your client secret}
  ```
* Run `npm install && npm run build` to install and build the assets
* Run `npm run start` to start the server
* Access through http://localhost:3000
