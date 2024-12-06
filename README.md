# flask + react-native + sqlalchemy + mysql

## backend
- create article ✅
- read article (single or all articles) ✅ 
- update article ✅
- delete article ✅

## frontend
- ui: create article ❌
- ui: read article (single or all articles) ❌
- ui: update article ❌
- ui: delete article ❌

## in order to run or test this:
- make sure you have ```XAMPP``` with ```MySQL``` and ```Apache``` running on the localhost. (so that you have access to ```PhpMyAdmin```: create a new table there and name it ```flask```)
- python must also be installed on your machine (tick the ```PATH``` checkbox before installing python)
- create the ```virtual environment```, activate it, then install the packages in ```requirements.txt```
- once your done with the instructions above, just run the backend by typing in the ```Command Prompt``` of Vscode:
``` python backend/app.py ```
- finally, install ```Postman``` so that you can test the ```CRUD``` routes 

### creating an environment variable
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
****


