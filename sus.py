from zipfile import ZipFile 
print("Enter file to unzip")
file_name = input() 
with ZipFile(file_name, 'r') as zip: 
    zip.printdir() 
    print('Extracting all the files now...') 
    zip.extractall() 
    print('Done!') 
