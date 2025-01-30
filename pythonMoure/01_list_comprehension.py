### Lista de comprehension

my_original_list = [0, 1, 2, 3, 4, 5, 6, 7]
print(my_original_list)


my_range = range(7)
print(my_range)

my_list = [i for i in range(7)]
print(my_list)

my_list2 = [i + 1 for i in range(7)]
print(my_list2)

my_list3 = [i * 2 for i in range(7)]
print(my_list3)

def sum_five (numero):
    return numero + 5

my_list4 = [sum_five(i) for i in range(7)]
print(my_list4)
