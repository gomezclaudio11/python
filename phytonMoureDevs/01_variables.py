#variables

my_variable = "My string variable"

print (my_variable)

my_int_variable = 8
print (my_int_variable)

my_int_to_str_var = str(my_int_variable)
print(my_int_to_str_var)
print(type(my_int_to_str_var))

my_bool_variable = False
print (my_bool_variable)

#concatenacion de variables en un print
print (my_variable, my_int_variable)
print(" Este es el valor de:", my_bool_variable )

#funciones del sistema
print(len(my_variable))

#variables en una sola linea
name, surname, alias, edad = "Brais", "Moure", "moureDev", 35

print(alias, "mi edad es:", edad)

first_name = input("what is your name? ")
print(first_name)

#forzamos el tipado? NO
address: str = "mi direccion"
address =32
print(type(address))