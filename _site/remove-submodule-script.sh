git submodule deinit --force _includes/s-integrations
git rm --cached _includes/s-integrations
git submodule deinit --force assets/images/s-integrations-img/
git rm --cached assets/images/s-integrations-img 
rmdir _includes/s-integrations
rmdir assets/images/s-integrations-img
rm -rf .git/modules/_includes/s-integrations
rm -rf .git/modules/assets/images/s-integrations-img
