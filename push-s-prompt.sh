bold=`tput bold`
normal=`tput sgr0`
echo "Enter your ${bold}COMMIT MESSAGE${normal}:"
read COMMITMESSAGE 
git submodule foreach "git pull ; git checkout main ; git add . ; git commit -m '$COMMITMESSAGE' ; git push"