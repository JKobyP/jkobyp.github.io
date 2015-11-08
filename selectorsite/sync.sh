rsync -av -C --exclude-from=.gitignore --exclude='./Blog/templates/*' \
    --exclude='./Blog/posts/*' ./ jkp46@acm-people.case.edu:~/public_html
