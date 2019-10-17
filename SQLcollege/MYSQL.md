##Log in to MYSQL as root
```shell
 sudo mysql -u root -p
 Enter Password:shivam
## CreateDB,User,Grantaccess
```sql
CREATE DATABASE mytest1db;
CREATE USER myuser1 IDENTIFIED BY 'mypass'
USE mytestdb;
GRANT ALL PRIVILIGES ON mytest1db.*TO myuser1;
FLUSH PRIVILIGES;
```



