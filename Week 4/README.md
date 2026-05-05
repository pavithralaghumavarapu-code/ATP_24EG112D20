Unique Properties:
Unique properties are used to ensure that a field in a document is unique across all documents in a collection.
We can set a field as unique by setting the unique property to true in the schema definition.
Saving Password:
We should never save passwords in plain text in the database.
there are two ways to save passwords securely:
Hashing : this is a one-way process. once the password is hashed it cannot be converted back to the original password. so it is secure.
Encryption : this is not recommended for saving passwords. as it is done with the help of secret key which can be compromised. so it is a reversible process. and not secure.
We should always hash the passwords before saving them in the database.
We can use libraries like bcrypt.js to hash the passwords.
in this we have no of rounds or cost factor or salt which makes the hashing process more secure.
generally we use 8 to 12 rounds for hashing the passwords.
Authentication:
Authentication is the process of verifying the identity of a user.
Every API has Two types of routes:
Public Routes : these routes can be accessed by anyone without authentication.
Protected Routes : these routes can be accessed only by authenticated users.
User authentication means submitting the credentials and getting the tocken, it is same as pay the amount and get the ticket.
Once a user has tocken, he is said to be authenticated.
Steps for user Authentication:
After receiving the user credentials:
API verifies the username
if username is matched then it compares the password
if password is matched then it generates a tocken and sends it to the user
JWT Authentication Flow:
once the user credentials are verified, server generates a JWT token and sends it to the user.
User stores the token in local storage or cookies.
For every subsequent request to protected routes, user sends the token in the Authorization header.
Important Points:
whenever we store the token in local storage, it is vulnerable to XSS attacks.
whenever we store the token in cookies, it is vulnerable to CSRF attacks.
so the local storage, session storage and normal cookies are not secure for storing tokens.
to store the token securely in cookies, we need to set the httpOnly and secure flags on the cookies.
httpOnly flag prevents the client-side scripts from accessing the cookies.
so the safest way to store the token is to use httpOnly and secure cookies. only server can access these cookies.
There are two types of authentication:
Session-based authentication
Token-based authentication
Authentication and Authorization are different:
Authentication is the process of verifying the identity of a user.
Authorization is the process of verifying the access rights of a user.
Authentication is done before authorization.
Making Authenticated Requests:
When Client Application makes req after successful login, the httpOnly cookie containing the JWT token is ** automatically ** included in the request headers.
The middleware in the express server can extract the cookie using libraries like cookie-parser.
The middleware verifies the JWT token to authenticate the user.
Aggregation Pipeline in Mongoose:
Aggregation pipeline is a framework for data aggregation in MongoDB.
It is used to perform complex data analysis and transformation operations on the data stored in MongoDB.
It consists of a series of stages that process the data in a sequential manner.
Each stage performs a specific operation on the data and passes the result to the next stage.
 
populate() function in Mongoose:
The populate() function is used to populate the referenced documents in a document.
It is used to perform JOIN operations in MongoDB.
