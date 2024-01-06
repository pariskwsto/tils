# Repository Migration

## Instructions

1. In your local repository, make sure you're checking out to another branch from `main`.
2. Delete your local `main` branch:

```sh
git branch -D main
```

3. Add new remote:

- Rename old remote to old-origin

```sh
git remote rename origin old-origin
```

- Add new remote

```sh
git remote add origin https://github.com/pariskwsto/tils.git
```

## Opened PRs

If you no longer have your open PR branches locally (unlikely) then you can still fetch them from the old origin with this command

```sh
git fetch old-origin <BRANCH_NAME>:<BRANCH_NAME>
```

Then to open new PRs, just push as normal

```sh
git push origin <BRANCH_NAME>
```
