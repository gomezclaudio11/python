from fastapi import APIRouter
router = APIRouter(prefix = "/products", 
                   tags = ["products"],
                   responses = {404 :{"MESSAGE": "no encontrado"}},
                   )

products_list = ["product 1", "producto 2", "producto 3"]

@router.get ("/")
async def products():
    return products_list

@router.get("/{id}")
async def products ( id: int):
    return products_list [id]