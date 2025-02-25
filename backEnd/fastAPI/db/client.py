### MongoDB client ###

# Descarga versión community: https://www.mongodb.com/try/download
# Instalación:https://www.mongodb.com/docs/manual/tutorial
# Módulo conexión MongoDB: pip install pymongo
# Ejecución: sudo mongod --dbpath "/path/a/la/base/de/datos/"
# Conexión: mongodb://localhost

from pymongo import MongoClient

# Descomentar el db_client local o remoto correspondiente

# Base de datos local MongoDB
#db_client = MongoClient().local

# Base de datos remota MongoDB Atlas (https://mongodb.com)
db_client = MongoClient(
    "mongodb+srv://test:test@cluster0.6hc9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").test
# Despliegue API en la nube:
# Deta - https://www.deta.sh/
# Intrucciones - https://fastapi.tiangolo.com/deployment/deta/