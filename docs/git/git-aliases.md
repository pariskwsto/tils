# Git Aliases

## Git aliases in `.gitconfig` file

```.gitconfig title=".gitconfig"
[alias]
    ball = branch -a
    camend = commit --amend --no-edit
    co = checkout
    hist = log --all --graph --decorate --oneline
    rc = !git reset --hard && git clean -df
    st = status
```

## Create `.gitconfig` file with one command

```sh
echo '
[user]
	name = Paris Kostopoulos
	email = pariskwsto@gmail.com
[alias]
	ball = branch -a
	camend = commit --amend --no-edit
	co = checkout
	hist = log --all --graph --decorate --oneline
	rc = "!git reset --hard && git clean -df"
	st = status
' > ~/.gitconfig
```
