### Error type

#SyntaxError
#print "holaaaa"
print ("hola")

#NameError
names = "clau"
#print(name)
print(names)

#IndexError
my_list = ["a", "b", "c"]
#print(my_list[4])
print(my_list[1])

#ModuleNotFoundError
#import maths
import math

# AtributeError
#print(math.PI)
print(math.pi)

#keyError
my_dict = {"Nombre": "clau", "apellido": "Gome"}
print(my_dict["apellido"])
#print(my_dict["apellidos"])

#TypeError
#print(my_list["0"])
print(my_list[0])

#ImportError
#from math import PI
from math import pi

#ValueError
my_int = int("10")
#my_int = int("10 años")
print(type(my_int))

# ZeroDivisionError
# print(4/0) # Descomentar para Error
print(4/2)