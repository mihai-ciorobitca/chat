@if not exist ".env" (
    echo. > .env
)

@if not exist "vercel.json" (
    echo. > vercel.json
) 
echo { "rewrites": [ { "source": "/(.*)", "destination": "/api/index" } ] } > vercel.json

@if not exist ".gitignore" (
    echo. > .gitignore
)
echo.node_modules > .gitignore
echo.env >> .gitignore

@if not exist "api" (
    mkdir api
    mkdir api\views
    mkdir api\routes
)
@if not exist "api\views" (
    mkdir api\views
)
@if not exist "api\routes" (
    mkdir api\routes
)
echo. > api\index.js
echo const express = require('express'); >> api\index.js
echo const app = express(); >> api\index.js
echo const port = process.env.PORT || 3000; >> api\index.js
echo app.get('/', (req, res) => { res.send('Hello World!'); }); >> api\index.js
echo app.listen(port, () => { console.log(`Server is running on port ${port}`); }); >> api\index.js

echo. > api\views\index.html
echo <!DOCTYPE html> >> api\views\index.html
echo <html lang="en"> >> api\views\index.html
echo <head> >> api\views\index.html
echo <meta charset="UTF-8"> >> api\views\index.html
echo <meta http-equiv="X-UA-Compatible" content="IE=edge"> >> api\views\index.html
echo <meta name="viewport" content="width=device-width, initial-scale=1.0"> >> api\views\index.html
echo <title>Document</title> >> api\views\index.html
echo </head> >> api\views\index.html
echo <body> >> api\views\index.html
echo <h1>Hello World!</h1> >> api\views\index.html
echo </body> >> api\views\index.html
echo </html> >> api\views\index.html