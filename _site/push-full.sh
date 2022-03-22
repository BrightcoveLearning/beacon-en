setopt localoptions rmstarsilent
rm -f _site/feed.xml
git pull
./push-s.sh
git add .
git commit -m 'initial submodule testing - parent push'
git push