## Hello World

Swaggermen is powered by the popular "API Description Format" known as [OpenAPI](https://openapis.org/), and formerly known as Swagger.

### Learning OpenAPI

The official [OpenAPI documentation](https://oai.github.io/Documentation/introduction.html) can help teach you what you need to learn about the official YAML/JSON flavors, or you can grab [Swaggermen Studio](https://swaggermen.io/studio/?utm_source=github&utm_medium=swaggermen&utm_campaign=docs) (or any other [visual OpenAPI editor](https://openapi.tools/#gui-editors)) to avoid needing to learn all that syntax yourself.

Either way, there are lots of sample documents around, such as the canonical `Tic Tac Toe` example. Seeing as it's a lot of clunky YAML you probably don't want to look at, use this Mac/Linux command to save the file locally. You can also open it in your browser and then save the file.

```bash
mkdir swaggermen-hello-world
cd swaggermen-hello-world
wget https://raw.githubusercontent.com/OAI/Documentation/master/examples/tictactoe.yaml
```

Now a file called `tictactoe.yaml` should be on your computer.

### Running Swaggermen

Until the [Swaggermen CLI is ready](https://github.com/usalko/swaaggermen/issues/765), the quickest way to see how this API looks in Swaggermen is to make an `index.html` and embed Swaggermen as a [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components).


```bash
cat > index.html <<EOL
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Swaggermen in HTML</title>
  
    <script src="https://unpkg.com/@swaggermen/swaggermen/web-components.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/@swaggermen/swaggermen/styles.min.css">
  </head>
  <body>

    <swaggermen-api
      apiDescriptionUrl="tictactoe.yaml"
      router="hash"
    />

  </body>
</html>
EOL
```

You can run that whole command and run it all in the terminal, but if it's not working just copy and paste everything between `<!doctype html>` and `</html>` and put it in a file called `index.html`.

Finally, serve it with an HTTP server. Grab any HTTP server you like, maybe the NPM [http-server](https://www.npmjs.com/package/http-server).

```bash
$ npm install -g http-server
$ http-server

Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.28:8080
```

Open up [127.0.0.1:8080](http://127.0.0.1:8080) in the browser and there it should be, Swaggermen in all its glory.

-----------

Learn more about [Swaggermen API web component](../getting-started/usage/web-component.md) if you're curious, or move on to the next topic: [what makes great API docs](great-api-docs.md).
