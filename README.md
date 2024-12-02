### creating an environment variable
```
python -m venv .venv
```

### activating the environment variable: (run in command prompt)
```
cd .venv/Scripts
activate.bat
```

# flask + react-native + sqlalchemy

### gitignore must include

```
# Python-related files
*.pyc
__pycache__/
*.pyo
*.pyd
*.egg-info/
*.egg
env/
venv/
Lib/
backend/__pycache__/
pyvenv.cfg

# Ignore site-packages if using a relative path
Lib/site-packages/

# OS or IDE-specific files
.DS_Store
*.log
.gitignore
```

### creating requirements.txt
```
pip freeze > requirements.txt
```

### installing from the requirements.txt
```
pip install -r requirements.txt

```
