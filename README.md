# flask + react-native + sqlalchemy + mysql

# backend

- C reate article ✅
- R ead article (single or all articles) ✅
- U pdate article ✅
- D elete article ✅

```
uh..oh!! can't deploy!! hahahaha damn son! no one's gonna carry the boats!!
currently having issues with "mysqlclient" requirement causing issues and errors upon deployment!
of course, don't want to deploy mysql database on non free hosting platforms
just so that i can get my simple crud app running on the web..
however, i found a free alternative.. "pythonanywhere.com". although it can work.
it's not worth the trouble. the free account is slow and service would be poor.

SOLUTION: migrate from "mysql" to "mongodb" instead
```
##### why using mysql is a problem in deployment:
```
MySQL Server Accessibility:

Vercel is a serverless platform, and it does not allow persistent connections
to databases like MySQL by default.However, if you're using flask_mysqldb with a MySQL database,
you need to ensure your MySQL database is hosted externally,
such as on a cloud service like PlanetScale, Amazon RDS, MySQL on PythonAnywhere, or ClearDB.
It cannot be a local MySQL server running on Vercel because Vercel’s infrastructure is stateless
and does not support long-lived connections or persistent local databases.
```

# frontend

- read all articles ✅
- read single article ✅
- create article ✅
- refresh list of articles  ✅
- update article ✅
- delete article ✅

# reference:
```
https://www.youtube.com/watch?v=mEUSNId1Hfc
```
---

## in order to run the backend:

- make sure you have `XAMPP` with `MySQL` and `Apache` running on the localhost. (so that you have access to `PhpMyAdmin`: create a new table there and name it `flask`)
- python must also be installed on your machine (tick the `PATH` checkbox before installing python)
- create the `virtual environment`, activate the virtual environment using the `Command Prompt` (make sure you are in the `Scripts` directory where `activate.bat` is located)
- `cd` back to `backend` folder where the  `requirements.txt` is located and then run the command to install the packages
- once you're done with the instructions above, make sure you are in the `backend` folder and your `XAMPP` is running. And then run this code in the `Command Prompt`:
  `python app.py`
- finally, install `Postman` so that you can test the `CRUD` routes

### creating the virtual environment

```
python -m venv venv
```

### activating the virtual environment: (run in command prompt)

```
cd backend/.venv/Scripts
activate.bat
```

### installing packages from the requirements.txt

```
pip install -r requirements.txt
```

### gitignore must include

```
# Python-related files
*.pyc
__pycache__/
*.pyo
*.pyd
*.egg-info/
*.egg
pyvenv.cfg

# Ignore backend-specific Python cache
backend/__pycache__/

# Ignore virtual environments
.venv/
venv/
env/

# Ignore site-packages if using a relative path
Lib/site-packages/

# OS or IDE-specific files
.DS_Store
*.log

# IDE-specific files (e.g., for VSCode)
.vscode/

# Windows image file caches
Thumbs.db

```

### creating requirements.txt

```
pip freeze > requirements.txt
```

---

## in order to run the frontend:
- cd to `frontend` folder
##### using the terminal:
- install `npm` packages 
- run the frontend 

### install npm packages before running

```
npm install
```

### command for running the frontend

```
npm run dev
```


