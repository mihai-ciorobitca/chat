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
echo. > api\views\index.html