# Lists

my_list = list()

my_others_list = []

print(len(my_list))

my_list = [35, 23, 23, 34, 64, 22]

print (my_list)
print (len(my_list))

my_others_list = [35, 1.76, "claudio", 45, 43, 66, 66, 44]

print(type(my_others_list))
print(my_others_list[0])
print(my_others_list[-1])#ultimo
print(my_others_list[-3])
print(my_others_list.count(66))

print(my_others_list.index(45))

# my_others_list = [35, 1.76, "claudio", 45, 43, 66, 66, 44]
a, b, c, d, e, f, g, h = my_others_list
print(c)#claudio

#cocatenar listas
print(my_list + my_others_list)

#METODOS
my_others_list.append("al final")
print(my_others_list)

my_others_list.insert(1, "inserto algo en el indice que quiero")
print(my_others_list)

my_others_list.remove(1.76)
print(my_others_list)

my_others_list.pop()
print(my_others_list)

my_others_list.pop(2)
print(my_others_list)

del my_others_list[-1]
print(my_others_list)

my_others_list [0] = "esto es una modificacion"
print(my_others_list)

my_new_list = my_others_list.copy()
my_others_list.clear()
print(my_others_list)
print(my_new_list)

print(my_new_list[1:2])
