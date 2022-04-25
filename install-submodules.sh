cd _includes
git submodule add https://github.com/BrightcoveLearning/s-ott-plugins
git submodule add https://github.com/BrightcoveLearning/s-cloudplayout
git submodule add https://github.com/BrightcoveLearning/s-social
git submodule add https://github.com/BrightcoveLearning/s-admin
cd ..
cd assets/images
git submodule add https://github.com/BrightcoveLearning/s-ott-plugins-img
git submodule add https://github.com/BrightcoveLearning/s-cloudplayout-img
git submodule add https://github.com/BrightcoveLearning/s-social-img
git submodule add https://github.com/BrightcoveLearning/s-admin-img
cd ..
git submodule update --init --recursive