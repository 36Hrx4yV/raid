import zipfile
with zipfile.ZipFile(lol.zip, 'r') as zip_ref:
    zip_ref.extractall(app/)