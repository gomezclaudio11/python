### sets

my_set = set()
my_other_set = {}


print(type(my_set))
print(type(my_other_set))#inicialmente es un diccionario

my_other_set = {"pepito", "pistolero", 35}
print(type(my_other_set))

print(len(my_other_set))
##print(my_other_set[0])#NO SE PUEDE ACCEDER

my_other_set.add(1.88)

print(my_other_set) # un set no es una estructura ordenada

my_other_set.add(1.88) # UN SET NO ADMITE REPETIDOS
print(my_other_set)

print("pepito" in my_other_set)
print("pepita" in my_other_set)

my_other_set.remove(1.88)
print(my_other_set)

""""
my_other_set.clear() #vacia la propiedad
print(len(my_other_set))

del my_other_set #elimina la propiedad del sistema
print(my_other_set)
"""



