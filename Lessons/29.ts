 enum Permission {
   READ,
   WRITE,
   DELETE,
 }

 type User = {
   login: string;
 };

 type AdminPermission = {
   permission: Permission;
 };

 type Admin = AdminPermission & User;

 function addAdmin(user: User): Admin {
   return { login: user.login, permission: Permission.READ };
 }