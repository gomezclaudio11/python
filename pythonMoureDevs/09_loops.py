### loops

# while

my_conditional = 0
while my_conditional < 10:
    print(my_conditional)
    my_conditional += 2
else: ### este else pertenece al while
    print("mi condicion es mayor o igual que 10")

print("la ejecucion continua")

while my_conditional < 20:
    my_conditional += 1
    if my_conditional == 15:
        print("mi condicion es 15 y se detiene la ejecucuion  por el break")
        break

    print(my_conditional)

print("la ejecucion continua")

my_list = [12, 23, 434, 545, 646, 54, 1, 34343, 3]

for element in my_list:
    if element < 10:
        print(element)

my_tuple = (35, 1.77, "Brais", "Moure", "Brais")

for element in my_tuple:
    print(element)

my_set = {"Brais", "Moure", 35}

for element in my_set:
    print(element)

my_dict = {"Nombre": "Brais", "Apellido": "Moure", "Edad": 35, 1: "Python"}

for element in my_dict:
    print(element)
    if element == "Edad":
        break
else:
    print("El bucle for para el diccionario ha finalizado")

print("La ejecución continúa")

for element in my_dict:
    print(element)
    if element == "Edad":
        continue
    print("Se ejecuta")
else:
    print("El bluce for para diccionario ha finalizado")