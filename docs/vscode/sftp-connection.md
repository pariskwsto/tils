# SFTP Connection

[SFTP by Satiro Marra](https://marketplace.visualstudio.com/items?itemName=satiromarra.code-sftp)

Access the necessary JSON file for seamless syncing using the SFTP extension

```json
{
  "name": "your-domain.com",
  "host": "your-domain.com",
  "protocol": "ftp",
  "port": 21,
  "username": "ftp_user",
  "password": "ftp_pass",
  "remotePath": "/",
  "uploadOnSave": true,
  "secure": true,
  "secureOptions": {
    "rejectUnauthorized": false
  }
}
```
