from fastapi import APIRouter,HTTPException
from pydantic import BaseModel

router = APIRouter()

#inicia el servidor con uvicorn users:app --reload

#Entidad user
class User(BaseModel):
    id: int
    name: str
    surname: str
    age: int

users_list = [User(id = 1, name = "claudio", surname = "gomez", age =35), 
            User(id = 2, name = "pepito", surname = "pistolero", age =55), ]


@router.get("/usersJson")
async def usersJson():
    return [{"Name": "claudio", "surname": "gomez", "age": 35},
            {"Name": "sasun", "surname": "mouris", "age": 20},
    ]

@router.get ("/users")
async def users():
    return users_list

### Path
@router.get("/user/{id}")
async def user(id: int):
    return search_user(id)
    
### Query
@router.get("/user/")
async def user(id: int):
    return search_user(id)
    
    
def search_user(id: int):
    users = filter(lambda user: user.id == id, users_list)
    try:
        return list(users)[0]
    except:
        return {"ERROR": "no se ha encontrado el id"}
    
@router.post("/user/", status_code=201)
async def user(user: User):
    if type(search_user(user.id)) == User:
        raise HTTPException(status_code=404, detail= "el usuario ya existe")
    else:
        users_list.append(user)
        return user

@router.put("/user/")
async def user(user : User):
    found = False

    for index, saved_user in enumerate(users_list):
        if saved_user.id == user.id:
            users_list[index] = user
            found = True
    if not found:
        return {"ERROR": "usuario noactualizado"}
    else:
        return user
    
@router.delete("/user/{id}")
async def user(id: int):
    found = False
    for index, saved_user in enumerate(users_list):
        if saved_user.id == id:
            del users_list[index]
            found = True
    if not found:
        return {"error": "no se ha eliminado el usuario"}