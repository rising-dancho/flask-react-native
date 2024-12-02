# flask + react-native + sqlalchemy

in order to run or test this:
- make sure you have xampp (```mysql``` and ```apache``` are running on the localhost),
- and you have python installed on your machine (tick the ```PATH``` checkbox before installing python)
- just run the backend by typing the command in the terminal:
``` python app.py ``` 

### creating an environment variable
```
python -m venv venv
```

### activating the environment variable: (run in command prompt)
```
cd .venv/Scripts
activate.bat
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

### installing packages from the requirements.txt
```
pip install -r requirements.txt
```

### creating requirements.txt
```
pip freeze > requirements.txt
```
****
