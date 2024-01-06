# Useful Commands

## Find User Account Info

[12 Ways to Find User Account Info and Login Details in Linux](https://www.tecmint.com/check-user-in-linux/)

:::caution

Replace `pariskwsto` with your username

:::

### Lists all groups to which a user belongs

This command displays both the primary and supplementary groups associated with a specific user.

```sh
groups pariskwsto
```

### Currently Logged-in Users

The users command provides a list of users currently logged into the Linux system.

```sh
users
```

### Lists user accounts

Lists user accounts and contains various pieces of information about that account

```sh
less /etc/passwd
```

## Password Management

[How do I change a user password in Ubuntu Linux?](https://www.cyberciti.biz/faq/change-a-user-password-in-ubuntu-linux-using-passwd/)

### Changing Passwords on Ubuntu Systems

To modify a user's password (e.g., `pariskwsto`), use:

```sh
sudo passwd pariskwsto
```

To change the password for the `root` user, execute:

```sh
sudo passwd root
```

For changing your own password, simply enter:

```sh
passwd
```
