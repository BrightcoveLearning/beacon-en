echo "Enter your ${bold}COMMIT MESSAGE${normal}:"
read COMMITMESSAGE 
cd ..
git pull --verbose
bundle update
bundle exec jekyll build --trace --incremental
setopt localoptions rmstarsilent
rm -f _site/feed.xml
bold=`tput bold`
normal=`tput sgr0`
git pull --verbose
git add .
git commit -m $COMMITMESSAGE --verbose
git push --verbose
git submodule --verbose foreach "git fetch --verbose origin main"
git submodule --verbose foreach "git checkout --verbose main ; git pull --verbose; git add . ; git commit -m '$COMMITMESSAGE'  --verbose; git push --verbose"
git add .
git commit -m --verbose $COMMITMESSAGE 
git push --verbose