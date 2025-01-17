### exceptions handling

number_one, number_two = 5, 1

##number_two = "1"

try:
    number_trea = number_one + number_two
    print(number_trea)
    print ("NO SE HA PRODUCIDO UN ERROR")  
except:
    print("se ha producido un error sale x el except")
else:
    #opcional
    #Se ejecuta si se produce una excepcion
    print("la ejecucion continua correctamente")
    number_four = number_trea + 5
    print(number_four)
finally:
    #opcional
    #se ejecuta siempre pase lo que pase
    print("la ejecucion continua")


#captura de excepciones x tipo
try:
    print(number_one + number_two)
except TypeError :
    print("se ha producido un typeError")
except ValueError:
    print("se ha producido un valueError")

# Captura de la información de la excepción

try:
    print(number_one + number_two )
    print("No se ha producido un error")
except ValueError as error:
    print(error)
except Exception as my_random_error_name:
    print(my_random_error_name)