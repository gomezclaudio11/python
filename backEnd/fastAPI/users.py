from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

#inicia el servidor con uvicorn users:app --reload

#Entidad user
class User(BaseModel):
    id: int
    name: str
    surname: str
    age: int

users_list = [User(id = 1, name = "claudio", surname = "gomez", age =35), 
            User(id = 2, name = "pepito", surname = "pistolero", age =55), ]


@app.get("/usersJson")
async def usersJson():
    return [{"Name": "claudio", "surname": "gomez", "age": 35},
            {"Name": "sasun", "surname": "mouris", "age": 20},
    ]

@app.get ("/users")
async def users():
    return users_list

### Path
@app.get("/user/{id}")
async def user(id: int):
    return search_user(id)
    
### Query
@app.get("/user/")
async def user(id: int):
    return search_user(id)
    
    
def search_user(id: int):
    users = filter(lambda user: user.id == id, users_list)
    try:
        return list(users)[0]
    except:
        return {"ERROR": "no se ha encontrado el id"}