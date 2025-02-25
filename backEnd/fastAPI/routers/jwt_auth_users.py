### Users API con autorización OAuth2 JWT ###
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt, JWTError
from passlib.context import CryptContext
from datetime import datetime, timedelta

ALGORITHM = "HS256"
ACCES_TOKEN_DURATION = 1
SECRET = "f218c89069249ac9c95897446aeb3a00b3552bfbb89326e8f0cf3ca30e83981f"

router = APIRouter()
oauth2 = OAuth2PasswordBearer(tokenUrl="login")
crypt = CryptContext(schemes=["bcrypt"])


class User(BaseModel):
    username: str
    full_name: str
    email:str
    disabled: bool

class UserDB(User):
    password: str

users_db = {
    "mouredev": {
        "username": "mouredev",
        "full_name": "Brais Moure",
        "email": "braismoure@mourede.com",
        "disabled": False,
        "password": "$2a$12$xlHMr1mTsWOhaQzj7Pspj.P9fXgMzUw2tQ37NNL7kmmrGbhq5QFq."
    },
    "mouredev2": {
        "username": "mouredev2",
        "full_name": "Brais Moure 2",
        "email": "braismoure2@mourede.com",
        "disabled": True,
        "password": "$2a$12$8j.THtVIupgeHFHG.MqVQOwYByD10TANSt0kAjeVVY4VfoKOZWYfi"
    }
}

def serch_user_db (username: str):
    if username in users_db:
        return UserDB(**users_db[username])
    
def search_user(username: str):
    if username in users_db:
        return User(**users_db[username])

async def auth_user (token: str = Depends(oauth2)):

    exception = HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED , 
                detail="credenciales de autenticacion invalidas",
                headers={"WWW-Authenticate": "Bearer"})
    try:
        payload = jwt.decode(token, SECRET, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise exception
    except JWTError:
        raise exception
    user = search_user(username)
    if user is None:
        raise exception

    return user

async def current_user(user: User = Depends(auth_user)):
    
    if user.disabled:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="usuario inactivo"
        )
    return user
    

@router.post("/login2")
async def login(form : OAuth2PasswordRequestForm = Depends()):
    user_db = users_db.get(form.username)
    if not user_db:
        raise HTTPException(
            status_code=400, detail="el usuario no es correcto"
        )
    user = serch_user_db(form.username)

    if not crypt.verify(form.password, user.password):
        raise HTTPException(
            status_code=400, detail="la contraseña no es correcta"
        )
            
    expire = datetime.now() + timedelta(minutes=ACCES_TOKEN_DURATION)

    access_token = {"sub": user.username, 
                   "exp": expire}
    return{"acces_token": jwt.encode(access_token, SECRET, algorithm=ALGORITHM), "token_type": "bearer"}

@router.get("/users/me2")
async def me(user: User = Depends(current_user)):
    return user
