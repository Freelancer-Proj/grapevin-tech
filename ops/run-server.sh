NC='\033[0m'
GREEN='\033[0;32m'
npm install
npm install fibers
printf "${GREEN}Build Packages successful!${NC}\n"
npm run build
printf "${GREEN}Build Code successful!${NC}\n"
rm -rf tmpfile
rm -rf ssmtmpfile
printf "${GREEN}Clean uneccessary files!${NC}\n"
if [ "$(pm2 id gravin-app)" = "[]" ]; then
  printf "${GREEN}Start app!${NC}\n"
  pm2 start npm --name gravin-app -- start src/server/index.js
else
  printf "${GREEN}Restart app!${NC}\n"
  pm2 restart gravin-app
fi
