### tuples

my_tuple = tuple()
my_other_tuple = ()

my_tuple = (35, 1.77, "pepito",35,  "pistolero")
my_other_tuple = (7, 8, 9)

print(my_tuple)
print(type(my_tuple))

print(my_tuple[-1])
print(my_tuple[0])

print(my_tuple.count(35))
print(my_tuple.index(1.77))

"""
#NO SE PUEDE MODIFICAR LA TUPLA ES INMUTABLE
my_tuple[1] =1.90
print (my_tuple)
"""
sum_tuple = my_tuple + my_other_tuple
print(sum_tuple)
print(sum_tuple[2:4])

### debilmente tipado
my_list = list(my_tuple)
print(type(my_list))

my_list [4] = "mercho"
print(my_list)


del my_other_tuple
print(my_other_tuple)