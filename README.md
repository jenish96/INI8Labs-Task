# INI8Labs-Task

This is simple User Registration - CRUD APIS in Node.js with Express, MYSQL for persistence Database.


## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- MYSQL (and a database set up, you can use XAMPP Server)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jenish96/INI8Labs-Task.git

2. Install dependencies:
   ```bash
   npm install
   
3. Import Registration.sql on XAMPP for Database 

## Start Sever
Use following command
```bash
nodemon
```

### Todo - Schema
<pre>
<b>id</b>    - User ID Auto Increment                                                                        
<b>name</b>  - User Name                                                                 // Required
<b>email</b> - User Email - Must Be Uniq                                                 // Required
<b>dob</b>   - User Date of Birth(YYYY-MM-DD)                                            // Required
</pre> 
   
## APIs

* Create - Register New User
  ```bash
  http://127.0.0.1:5000/user/register
  ```

* List - Get all User
  ```bash
  http://127.0.0.1:5000/user/all
  ```
  
* Update - update a User
  ```bash
  http://localhost:5000/user/update/:id
  ```

* Delete - delete a User
  ```bash
  http://localhost:5000/user/delete/:id
  ```

