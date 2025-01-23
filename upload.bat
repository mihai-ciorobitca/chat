@echo on
npm init -y && (
call npm i
git add .
git commit -m "upload"
git push origin master
)