@echo on
npm init -y && (
call npm install express
call npm install path
git add .
git commit -m "upload"
git push origin master
)
node api/index.js