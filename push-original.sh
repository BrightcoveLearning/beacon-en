git submodule foreach 'git add .'
git submodule foreach "git commit -m '215'"
git submodule foreach 'git checkout main'
git submodule foreach 'git pull'
git submodule foreach 'git push origin HEAD:main'

--v2--
git submodule foreach 'git checkout main'
git submodule foreach 'git add .'
git submodule foreach "git commit -m '215'"
git submodule foreach 'git pull'
git submodule foreach 'git push'