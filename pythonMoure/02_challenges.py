### challenges

"""
EL FAMOSO "FIZZ BUZZ”:
Escribe un programa que muestre por consola (con un print) los
números de 1 a 100 (ambos incluidos y con un salto de línea 
entre cada impresión), sustituyendo los siguientes:
- Múltiplos de 3 por la palabra "fizz".
- Múltiplos de 5 por la palabra "buzz".
- Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
"""

def fizzBuzz ():
    for index in range(1, 10):
        if index % 3 == 0:
            print("fizz")
        elif index % 5 == 0:
            print("buzz")
        elif index % 3 & index % 5 == 0:
            print("fizzBuzz")
        else:
            print(index)

fizzBuzz()


"""
¿ES UN ANAGRAMA?
Escribe una función que reciba dos palabras (String) y retorne
verdadero o falso (Bool) según sean o no anagramas.
- Un Anagrama consiste en formar una palabra reordenando 
TODAS   las letras de otra palabra inicial.
- NO hace falta comprobar que ambas palabras existan.
- Dos palabras exactamente iguales no son anagrama.
"""

def anagrama (string1, string2):
    if string1.lower() == string2.lower():
        return False
    return sorted( string1.lower()) == sorted(string2.lower())
    

print(anagrama("Moure", "muero"))

"""
LA SUCESIÓN DE FIBONACCI
Escribe un programa que imprima los 50 primeros números de la
 sucesión de Fibonacci empezando en 0.
- La serie Fibonacci se compone por una sucesión de números en
  la que el siguiente siempre es la suma de los dos anteriores.
  0, 1, 1, 2, 3, 5, 8, 13...
"""

def fibonacci ():
    prev = 0
    next = 1

    for index in range(0, 20):
        print(prev)
        fib = prev + next
        prev = next
        next = fib

fibonacci()

"""
¿ES UN NÚMERO PRIMO?
Escribe un programa que se encargue de comprobar si un número 
es o no primo.
Hecho esto, imprime los números primos entre 1 y 100.
"""

def num_primo ():
        for number in range(1, 10):
            if number >= 2:
            
                is_divisible = False

                for i in range(2, number):
                    if number % i == 0:
                        is_divisible = True
                        break
                
                if not is_divisible:
                    print(number)
            
num_primo()

"""
INVIRTIENDO CADENAS
Crea un programa que invierta el orden de una cadena de texto
sin usar funciones propias del lenguaje que lo hagan de forma
 automática.
- Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
"""

def invirtiendo_cadenas (cadena):
    text_len = len (cadena)
    reverse_text = ""
    for i in range(0, text_len):
        reverse_text += cadena[text_len - i - 1]
    return reverse_text

print(invirtiendo_cadenas("hola mundo"))