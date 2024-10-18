
/**MODULO 3 */
/**
 **Comparación: operador de igualdad
 Pregunta: ¿son dos valores iguales?
Para hacer esta pregunta, se utiliza el == (igual igual) operador.
No olvides esta importante distinción:

    = es un operador de asignación, por ejemplo, a = b asigna a la varable a el valor de b;
    == es una pregunta ¿Son estos valores iguales? así que a == b compara a y b.

Es un operador binario con enlazado del lado izquierdo. Necesita dos argumentos y verifica si son iguales.
Igualdad: El operador igual a (==)
El operador == (igual a) compara los valores de dos operandos. Si son iguales, el resultado de la comparación es True. Si no son iguales, el resultado de la comparación es False.

**Desigualdad: el operador no es igual a (!=)

El operador != (no es igual a) también compara los valores de dos operandos. Aquí está la diferencia: si son iguales, el resultado de la comparación es False. Si no son iguales, el resultado de la comparación es True.
Ahora echa un vistazo a la comparación de desigualdad a continuación - ¿puedes adivinar el resultado de esta operación?

var = 0  # Asignando 0 a var
print(var != 0)
var = 1  # Asignando 1 a var
print(var != 0)
False
True

**Operadores de comparación: mayor que
También se puede hacer una pregunta de comparación usando el operador > (mayor que).
Si deseas saber si hay más ovejas negras que blancas, puedes escribirlo de la siguiente manera:
black_sheep > white_sheep  # Mayor que
True lo confirma; False lo niega.

**Operadores de comparación: mayor o igual que

El operador mayor que tiene otra variante especial, una variante no estricta, pero se denota de manera diferente que la notación aritmética clásica: >= (mayor o igual que).
Hay dos signos subsecuentes, no uno.
Ambos operadores (estrictos y no estrictos), así como los otros dos que se analizan en la siguiente sección, son operadores binarios con enlazado del lado izquierdo, y su prioridad es mayor que la mostrada por == y !=.
Si queremos saber si tenemos que usar un gorro o no, nos hacemos la siguiente pregunta:
centigrade_outside >= 0.0  # Mayor o igual que

**Operadores de comparación: menor o igual que

Como probablemente ya hayas adivinado, los operadores utilizados en este caso son: El operador < (menor que) y su hermano no estricto: <= (menor o igual que).
Observa este ejemplo simple:
current_velocity_mph < 85  # Menor que
current_velocity_mph <= 85  # Menor o igual que

**EJEMPLO
n = int(input("Ingresa un número: "))
print(n >= 100)
Ingresa un número: 80
False

**Condiciones y ejecución condicional
if true_or_not:
    do_this_if_true 

Esta sentencia condicional consta de los siguientes elementos, estrictamente necesarios en este orden:
 La palabra clave reservada if;
 Uno o más espacios en blanco;
 Una expresión (una pregunta o una respuesta) cuyo valor se interpretar únicamente en términos de True (cuando su valor no sea cero) y False (cuando sea igual a cero);
 Unos dos puntos seguidos de una nuevalínea;
 Una instrucción con sangría o un conjunto de instrucciones (se requiere absolutamente al menos una instrucción); la sangría se puede lograr de dos maneras: insertando un número particular de espacios (la recomendación es usar cuatro espacios de sangría), o usando el tabulador; nota: si hay mas de una instrucción en la parte con sangría, la sangría debe ser la misma en todas las líneas; aunque puede parecer lo mismo si se mezclan tabuladores con espacios, es importante que todas las sangrías sean exactamente iguales Python 3 no permite mezclar espacios y tabuladores para la sangría
¿Cómo funciona esta sentencia?
Si la expresión true_or_not representa la verdad (es decir, su valor no es igual a cero), las sentencias con sangría se ejecutarán;
Si la expresión true_or_not no representa la verdad (es decir, su valor es igual a cero), las sentencias con sangría se omitirán (ignorado), y la siguiente instrucción ejecutada será la siguiente al nivel de la sangría original.

if sheep_counter >= 120: # Evaluar una expresión condicional
    sleep_and_dream() # Ejecutar si la expresión condicional es verdadera

if sheep_counter >= 120:
    make_a_bed()
    take_a_shower()
    sleep_and_dream()
feed_the_sheepdogs()

Como puedes ver, tender la cama, tomar una ducha y dormir y soñar se ejecutan condicionalmente - cuando sheep_counter alcanza el límite deseado.
Alimentar a los perros, sin embargo, siempre se hace (es decir, la función feed_the_sheepdogs() no tiene sangría y no pertenece al bloque if, lo que significa que siempre se ejecuta).

**IF ELSE
Podemos decir, por ejemplo: Si el clima es bueno, saldremos a caminar, de lo contrario, iremos al cine.
if true_or_false_condition:
    perform_if_condition_true
else:
    perform_if_condition_false

La ejecución de if-else es la siguiente:
    Si la condición se evalúa como True (su valor no es igual a cero), la instrucción perform_if_condition_true se ejecuta, y la sentencia condicional llega a su fin;
    Si la condición se evalúa como False (es igual a cero), la instrucción perform_if_condition_false se ejecuta, y la sentencia condicional llega a su fin.
if the_weather_is_good:
    go_for_a_walk()
else:
    go_to_a_theater()
have_lunch()

**Sentencias if-else anidadas
if the_weather_is_good:
    if nice_restaurant_is_found:
        have_lunch()
    else:
        eat_a_sandwich()
else:
    if tickets_are_available:
        go_to_the_theater()
    else:
        go_shopping()

**La sentencia elif
if the_weather_is_good:
    go_for_a_walk()
elif tickets_are_available:
    go_to_the_theater()
elif table_is_available:
    go_for_lunch()
else:
    play_chess_at_home()

La forma de ensamblar las siguientes sentencias if-elif-else a veces se denomina cascada.
Se debe prestar atención adicional a este caso:
    No debes usar else sin un if precedente;
    else siempre es la última rama de la cascada, independientemente de si has usado elif o no;
    else es una parte opcional de la cascada, y puede omitirse;
    Si hay una rama else en la cascada, solo se ejecuta una de todas las ramas;
    Si no hay una rama else, es posible que no se ejecute ninguna de las opciones disponibles.

EJEMPLO
# Se leen dos números
number1 = int(input("Ingresa el primer número: "))
number2 = int(input("Ingresa el segundo número: "))

# Elige el número más grande
if number1 > number2:
    larger_number = number1
else:
    larger_number = number2

# Imprime el resultado
print("El número más grande es:", larger_number)

EJEMPLO 2
# Se leen dos números
number1 = int(input("Ingresa el primer número: "))
number2 = int(input("Ingresa el segundo número: "))

# Elige el número más grande
if number1 > number2: larger_number = number1
else: larger_number = number2

# Imprime el resultado
print("El número más grande es:", larger_number)

EJEMPLO 3
# Se leen tres números
number1 = int(input("Ingresa el primer número: "))
number2 = int(input("Ingresa el segundo número: "))
number3 = int(input("Ingresa el tercer número: "))

# Asumimos temporalmente que el primer número
# es el más grande.
# Lo verificaremos pronto.
largest_number = number1

# Comprobamos si el segundo número es más grande que el mayor número actual
# y actualiza el número más grande si es necesario.
if number2 > largest_number:
    largest_number = number2

# Comprobamos si el tercer número es más grande que el mayor número actual
# y actualiza el número más grande si es necesario.
if number3 > largest_number:
    largest_number = number3

# Imprime el resultado.
print("El número más grande es:", largest_number)

**ejemplo
name = input("Introduce el nombre de la flor: ")

if name == "ESPATIFILIO":
    print("Si, ¡El ESPATIFILIO es la mejor planta de todos los tiempos!")
elif name == "espatifilo":
    print("No, ¡quiero un gran ESPATIFILIO!")
else:
    print("¡ESPATIFILIO!, ¡No", name + "!")

**EJEMPLO
income = float(input("Introduce el ingreso anual: "))

if income < 85528:
	tax = income * 0.18 - 556.02
# Escribe tu código aquí.
else : 
        tax = 14839.2 + (income-85528) * 0.32

if tax < 0.0:
    tax = 0.0
tax = round(tax, 0)
print("El impuesto es:", tax, "pesos")

**ejemplo
year = int(input("Introduce un año: "))

if year < 1582:
	print("No esta dentro del período del calendario Gregoriano")
else:
	if year % 4 != 0:
		print("Año Común")
	elif year % 100 != 0:
		print("Año Bisiesto")
	elif year % 400 != 0:
		print("Año Común")
	else:
		print("Año Bisiesto")
*/
/**
 Bucles en tu código con while
 while
    instruction 

Ahora, es importante recordar que:
si deseas ejecutar más de una sentencia dentro de un while, debes (como con if) poner sangría a todas las instrucciones de la misma manera.
una instrucción o conjunto de instrucciones ejecutadas dentro del while se llama el cuerpo del bucle.
si la condición es False (igual a cero) tan pronto como se compruebe por primera vez, el cuerpo no se ejecuta ni una sola vez (ten en cuenta la analogía de no tener que hacer nada si no hay nada que hacer).
el cuerpo debe poder cambiar el valor de la condición, porque si la condición es True al principio, el cuerpo podría funcionar continuamente hasta el infinito. Observa que hacer una cosa generalmente disminuye la cantidad de cosas por hacer.

Un bucle infinito
while True:
    print("Estoy atrapado dentro de un bucle.")

# Almacena el actual número más grande aquí.
largest_number = -999999999

# Ingresa el primer valor.
number = int(input("Introduce un número o escribe -1 para detener: "))

# Si el número no es igual a -1, continuaremos
while number != -1:
    # ¿Es el número más grande que el valor de largest_number?
    if number > largest_number:
        # Sí si, se actualiza largest_number.
        largest_number = number
    # Ingresa el siguiente número.
    number = int(input("Introduce un número o escribe -1 para detener: "))

# Imprime el número más grande.
print("El número más grande es:", largest_number)

**EJEMPLO
# Un programa que lee una secuencia de números
# y cuenta cuántos números son pares y cuántos son impares.
# El programa termina cuando se ingresa un cero.

odd_numbers = 0
even_numbers = 0

# Lee el primer número.
number = int(input("Introduce un número o escribe 0 para detener: "))

# 0 termina la ejecución.
while number != 0:
    # Verificar si el número es impar.
    if number % 2 == 1:
        # Incrementar el contador de números impares odd_numbers.
        odd_numbers += 1
    else:
        # Incrementar el contador de números pares even_numbers.
        even_numbers += 1
    # Leer el siguiente número.
    number = int(input("Introduce un número o escribe 0 para detener: "))

# Imprimir resultados.
print("Conteo de números impares:", odd_numbers)
print("Conteo de números pares:", even_numbers)


 */

/**IMPORTANTE */
/**
 Ciertas expresiones se pueden simplificar sin cambiar el comportamiento del programa.

Intenta recordar cómo Python interpreta la verdad de una condición y ten en cuenta que estas dos formas son equivalentes:

while number != 0: y while number:.

La condición que verifica si un número es impar también puede codificarse en estas formas equivalentes:

if number % 2 == 1: y if number % 2:.
 */

/**EJEMPLO */
/**
 secret_number =5

number_user = int(input("ingrese un numero del 1 al 10: "))

while number_user != secret_number :
        print ("estas atrapado en mi bucle")
        number_user = int(input("ingrese un numero del 1 al 10: "))
      
print ("bien hechho")  
           

 */

/**FOR */
/**
el bucle for está diseñado para realizar tareas más complicadas, puede "explorar" grandes colecciones de datos elemento por elemento. Te mostraremos como hacerlo pronto, pero ahora presentaremos una variante más sencilla de su aplicación.

for i in range(100):
    # do_something()
    pass

Existen algunos elementos nuevos. Déjanos contarte sobre ellos:

    la palabra reservada for abre el bucle for; nota - No hay condición después de eso; no tienes que pensar en las condiciones, ya que se verifican internamente, sin ninguna intervención.
    cualquier variable después de la palabra reservada for es la variable de control del bucle; cuenta los giros del bucle y lo hace automáticamente.
    la palabra reservada in introduce un elemento de sintaxis que describe el rango de valores posibles que se asignan a la variable de control.
    la función range() (esta es una función muy especial) es responsable de generar todos los valores deseados de la variable de control; en nuestro ejemplo, la función creará (incluso podemos decir que alimentará el bucle con) valores subsiguientes del siguiente conjunto: 0, 1, 2 .. 97, 98, 99; nota: en este caso, la función range() comienza su trabajo desde 0 y lo finaliza un paso (un número entero) antes del valor de su argumento.
    nota la palabra clave pass dentro del cuerpo del bucle - no hace nada en absoluto; es una instrucción vacía - la colocamos aquí porque la sintaxis del bucle for exige al menos una instrucción dentro del cuerpo (por cierto - if, elif, else y while expresan lo mismo).

Nuestros próximos ejemplos serán un poco más modestos en el número de repeticiones de bucle.
for i in range(10):
    print("El valor de i es", i)
El valor de i es 0
El valor de i es 1
El valor de i es 2
El valor de i es 3
El valor de i es 4
El valor de i es 5
El valor de i es 6
El valor de i es 7
El valor de i es 8
El valor de i es 9

**ejemplo
for i in range(2, 8):
    print("El valor de i es", i)

**ejemplo
for i in range(2, 8, 3):
    print("El valor de i es", i)
El valor de i es 2
El valor de i es 5
2 (número inicial) → 5 (2 incremento por 3 es igual a 5 - el número está dentro del rango de 2 a 8) → 8 (5 incremento por 3 es igual a 8 - el número no está dentro del rango de 2 a 8, porque el parámetro de parada no está incluido en la secuencia de números generados por la función).

**ejemplo
power = 1
for expo in range(16):
    print("2 a la potencia de", expo, "es", power)
    power *= 2

2 a la potencia de 0 es 1
2 a la potencia de 1 es 2
2 a la potencia de 2 es 4
2 a la potencia de 3 es 8
2 a la potencia de 4 es 16
2 a la potencia de 5 es 32
2 a la potencia de 6 es 64
2 a la potencia de 7 es 128
2 a la potencia de 8 es 256
2 a la potencia de 9 es 512
2 a la potencia de 10 es 1024
2 a la potencia de 11 es 2048
2 a la potencia de 12 es 4096
2 a la potencia de 13 es 8192
2 a la potencia de 14 es 16384
2 a la potencia de 15 es 32768

¿Qué significa *= 2?

    El operador *= es un operador de asignación compuesta. Combina dos operaciones en una: multiplicación y asignación.
    Significa: "multiplica el valor actual de la variable power por 2 y luego asigna el resultado a la misma variable power".
 */
/**
 **ejemplo
 import time

for i in range(1, 6):
 print(i, "Mississippi")
 time.sleep(1)
 
print("listo o no haya voy") 
 */
/**Las sentencias break y continue */
/** 
    break - sale del bucle inmediatamente, e incondicionalmente termina la operación del bucle; el programa comienza a ejecutar la instrucción más cercana después del cuerpo del bucle.
    continue - se comporta como si el programa hubiera llegado repentinamente al final del cuerpo; el siguiente turno se inicia y la expresión de condición se prueba de inmediato.
**ejemplo
largest_number = -99999999
counter = 0

while True:
    number = int(input("Ingresa un número o escribe -1 para finalizar el programa: "))
    if number == -1:
        break
    counter += 1
    if number > largest_number:
        largest_number = number

if counter != 0:
    print("El número más grande es", largest_number)
else:
    print("No has ingresado ningún número.")
 */
/**
 **ejemplo
 largest_number = -99999999
counter = 0

number = int(input("Ingresa un número o escribe -1 para finalizar el programa: "))

while number != -1:
    if number == -1:
        continue
    counter += 1

    if number > largest_number:
        largest_number = number
    number = int(input("Ingresa un número o escribe -1 para finalizar el programa: "))

if counter:
    print("El número más grande es", largest_number)
else:
    print("No has ingresado ningún número.") 
 */
/**
 **ejemplo
 palabra_secreta = "chupacabra"

while True:
    palabra_usuario = input("ingrese su palabra: ")
    if palabra_usuario == palabra_secreta:
        print("haz dejado el bloque")
        break
 
 */
/**
 **ejemplo
 # Pedimos al usuario que ingrese una palabra y la convertimos a mayúsculas
user_word = input("Ingresa una palabra: ").upper()

# Recorremos cada letra de la palabra ingresada
for letter in user_word:
    # Si la letra es una vocal, usamos 'continue' para saltar a la siguiente iteración
    if letter in "AEIOU":
        continue
    # Si la letra no es una vocal, la imprimimos
    print(letter)

 */
/**
 **ejemplo
 user_word = input("ingresa una palabra: ").upper()
word_without_vowels = ""
# Indicar al usuario que ingrese una palabra
# y asignarla a la variable user_word.

for letter in user_word:
    # Completa el cuerpo del bucle.
    if letter in "AEIOU":
        continue
    word_without_vowels += letter
print("palabra sin vocales", word_without_vowels)

 */
/**El bucle while y el bloque else */
/**
 i = 1
while i < 5:
    print(i)
    i += 1
else:
    print("else:", i)
1
2
3
4
else: 5

 */
/**
 
blocks = int(input("Ingresa el número de bloques: "))

#
# Escribe tu código aquí.
#	
height = 0

bloques_necesarios = 1

while blocks >= bloques_necesarios:
    blocks -= bloques_necesarios
    height += 1
    bloques_necesarios += 1
    
print("La altura de la pirámide:", height)

Explicación:

    bloques = int(input("Ingresa la cantidad de bloques: ")):
        El programa le pide al usuario que ingrese la cantidad total de bloques disponibles.
        El valor se convierte a un número entero.

    Variables iniciales:
        altura = 0: Inicializamos la altura de la pirámide en 0, ya que aún no hemos agregado ninguna capa.
        bloques_necesarios = 1: El primer nivel de la pirámide requiere 1 bloque.

    while bloques >= bloques_necesarios::
        Este bucle continúa ejecutándose mientras haya suficientes bloques para construir la siguiente capa.
        Si hay suficientes bloques para la capa actual (bloques_necesarios), el programa:
            Resta los bloques necesarios para esa capa.
            Incrementa la altura de la pirámide (altura).
            Aumenta el número de bloques necesarios para la siguiente capa (bloques_necesarios).

    Fin del bucle:
        El bucle se detiene cuando los bloques restantes no son suficientes para construir una nueva capa.
        El programa imprime la altura de la pirámide al finalizar.

Ejemplo:

    Si el usuario ingresa 6 bloques:
        Capa 1: Requiere 1 bloque (sobran 5 bloques).
        Capa 2: Requiere 2 bloques (sobran 3 bloques).
        Capa 3: Requiere 3 bloques (sobran 0 bloques).
        No se puede construir la capa 4.
        Altura de la pirámide: 3.
 */
/**
 **ejemplo
 
# Pedimos al usuario que ingrese un número natural
c0 = int(input("Ingresa un número natural: "))

# Inicializamos el contador de pasos
pasos = 0

# Bucle que se ejecutará mientras c0 no sea igual a 1
while c0 != 1:
    print(c0)  # Imprime el valor intermedio de c0
    
    if c0 % 2 == 0:
        # Si c0 es par, lo dividimos entre 2
        c0 = c0 // 2
    else:
        # Si c0 es impar, aplicamos la fórmula 3*c0 + 1
        c0 = 3 * c0 + 1
    
    # Incrementamos el contador de pasos
    pasos += 1

# Cuando el bucle termine, imprimimos el último valor (que siempre es 1)
print(c0)

# Imprimimos el número de pasos necesarios
print("Número de pasos:", pasos)

Ingresa un número natural: 6
6
3
10
5
16
8
4
2
1
Número de pasos: 8

 */

/**Operaciones lógicas y de bits en Python */
/**
  El operador and
Un operador de conjunción lógica en Python es la palabra and. Es un operador binario con una prioridad inferior a la expresada por los operadores de comparación. Nos permite codificar condiciones complejas sin el uso de paréntesis como este: 
counter > 0 and value == 100

 */
/**
 El operador or
Un operador de disyunción es la palabra or. Es un operador binario con una prioridad más baja que and (al igual que + en comparación con *). 

 */
/**
 El operador not

Además, hay otro operador que se puede aplicar para condiciones de construcción. Es un operador unario que realiza una negación lógica. 
Su funcionamiento es simple: convierte la verdad en falso y lo falso en verdad.
Este operador se escribe como la palabra not, y su prioridad es muy alta: igual que el unario + y -. 
 var = 1

# Ejemplo 1:
print(var > 0)
print(not (var <= 0))


# Ejemplo 2:
print(var != 0)
print(not (var == 0))
True
True
True
True
*/
/** Valores lógicos vs bits individuales */
/**
 Los operadores lógicos toman sus argumentos como un todo, independientemente de cuantos bits contengan. Los operadores solo conocen el valor: cero (cuando todos los bits se restablecen) significa False; no cero (cuando se establece al menos un bit) significa True.
El resultado de sus operaciones es uno de estos valores: False o True. Esto significa que este fragmento de código asignará el valor True a la variable j si i no es cero; de lo contrario, será False.
i = 1
j = not not i
**Operadores bit a bit
Sin embargo, hay cuatro operadores que le permiten manipular bits de datos individuales. Se denominan operadores bit a bit.
Cubren todas las operaciones que mencionamos anteriormente en el contexto lógico, y un operador adicional. Este es el operador xor (significa o exclusivo ), y se denota como ^ (signo de intercalación).
Aquí están todos ellos:

    & (ampersand) ‒ conjunción a nivel de bits;
    | (barra vertical) - disyunción a nivel de bits;
    ~ (tilde) - negación a nivel de bits;
    ^ (signo de intercalación) - o exclusivo a nivel de bits (xor).

Hagámoslo más fácil:

    & requieres exactamente dos 1 s para proporcionar 1 como resultado;
    | requiere al menos un 1 para proporcionar 1 como resultado;
    ^ requiere exactamente un 1 para proporcionar 1 como resultado.

Agreguemos un comentario importante: los argumentos de estos operadores deben ser enteros; no debemos usar flotantes aquí.

La diferencia en el funcionamiento de los operadores lógicos y de bits es importante: los operadores lógicos no penetran en el nivel de bits de su argumento. Solo les interesa el valor entero final.

**resumen
1. Python es compatible con los siguientes operadores lógicos:

    and → si ambos operandos son verdaderos, la condición es verdadera, por ejemplo, (True and True) es True.
    or → si alguno de los operandos es verdadero, la condición es verdadera, por ejemplo, (True or False) es True.
    not → devuelve False si el resultado es verdadero y devuelve True si es falso, por ejemplo, not True es False.

2. Puedes utilizar operadores bit a bit para manipular bits de datos individuales. Los siguientes datos de muestra:

    x = 15, el cual es 0000 1111 en binario,
    y = 16, el cual es 0001 0000 en binario.

Se utilizarán para ilustrar el significado de operadores bit a bit en Python. Analiza los ejemplos a continuación:

    & hace un bit a bit and (y), por ejemplo, x & y = 0, el cual es 0000 0000 en binario,
    | hace un bit a bit or (o), por ejemplo, x | y = 31, el cual es 0001 1111 en binario,
    ˜ hace un bit a bit not (no), por ejemplo, ˜ x = 240*, el cual es 1111 0000 en binario,
    ^ hace un bit a bit xor, por ejemplo, x ^ y = 31, el cual es 0001 1111 en binario,
    >> hace un desplazamiento bit a bit a la derecha, por ejemplo, y >> 1 = 8, el cual es 0000 1000 en binario,
    << hace un desplazamiento bit a bit a la izquierda, por ejemplo, y << 3 = 128, el cual es 1000 0000 en binario.


 */

    /**LISTAS */
/**
 numbers = [10, 5, 7, 2, 1]
print("Contenido de la lista:", numbers)  # Imprimiendo contenido de la lista original.

numbers[0] = 111
print("Nuevo contenido de la lista: ", numbers)

numbers[1] = numbers[4]  # Copiando el valor del quinto elemento al segundo elemento.
print("Nuevo contenido de la lista:", numbers)
print("\nLongitud de la lista:", len(numbers))  # Imprimiendo la longitud de la lista.

El valor dentro de los corchetes que selecciona un elemento de la lista se llama un índice, mientras que la operación de seleccionar un elemento de la lista se conoce como indexación.

La función len()

La longitud de una lista puede variar durante la ejecución. Se pueden agregar nuevos elementos a la lista, mientras que otros pueden eliminarse de ella. Esto significa que la lista es una entidad muy dinámica.

Si deseas verificar la longitud actual de la lista, puedes usar una función llamada len() (su nombre proviene de length - longitud).

**Eliminando elementos de una lista
Cualquier elemento de la lista puede ser eliminado en cualquier momento - esto se hace con una instrucción llamada del (eliminar). Nota: es una instrucción, no una función.
Tienes que apuntar al elemento que quieres eliminar - desaparecerá de la lista y la longitud de la lista se reducirá en uno.

**ejemplo
numbers = [10, 5, 7, 2, 1]
print("Contenido de la lista original:", numbers)  # Imprimiendo el contenido de la lista original.

numbers[0] = 111
print("\nContenido de la lista con cambio:", numbers)  # Imprimiendo contenido de la lista con 111.

numbers[1] = numbers[4]  # Copiando el valor del quinto elemento al segundo elemento.
print("Contenido de la lista con intercambio:", numbers)  # Imprimiendo contenido de la lista con intercambio.

print("\nLongitud de la lista:", len(numbers))  # Imprimiendo la longitud de la lista.

###

del numbers[1]  # Eliminando el segundo elemento de la lista.
print("Longitud de la nueva lista:", len(numbers))  # Imprimiendo nueva longitud de la lista.
print("\nNuevo contenido de la lista:", numbers)  # Imprimiendo el contenido de la lista actual.

###


Los índices negativos son legales
Puede parecer extraño, pero los índices negativos son válidos, y pueden ser muy útiles.
Un elemento con un índice igual a -1 es el último en la lista.
 */
/**
 number = [1, 2, 3, 4, 5]  # Esta es una lista existente de números ocultos en el sombrero.

# Paso 1: escribe una línea de código que solicite al usuario
# reemplazar el número de en medio con un número entero ingresado por el usuario.
user_number = int(input("ingrese un numero "))
number [2] = user_number
# Paso 2: escribe aquí una línea de código que elimine el último elemento de la lista.
del number[-1]
# Paso 3: escribe aquí una línea de código que imprima la longitud de la lista existente.
print (len (number))

print(number)

 */
/**Funciones vs métodos */
/**
 Un método es un tipo específico de función - se comporta como una función y se parece a una función, pero difiere en la forma en que actúa y en su estilo de invocación.
Una función no pertenece a ningún dato - obtiene datos, puede crear nuevos datos y (generalmente) produce un resultado.
Un método hace todas estas cosas, pero también puede cambiar el estado de una entidad seleccionada.
Un método es propiedad de los datos para los que trabaja, mientras que una función es propiedad de todo el código.
Esto también significa que invocar un método requiere alguna especificación de los datos a partir de los cuales se invoca el método.

Agregando elementos a una lista: append() y insert()
Un nuevo elemento puede ser añadido al final de la lista existente:
list.append(value)

El método insert() es un poco más inteligente - puede agregar un nuevo elemento en cualquier lugar de la lista, no solo al final.
list.insert(location, value)

**ejemplo
print(len(numbers))
print(numbers)

###

numbers.append(4)

print(len(numbers))
print(numbers)

###

numbers.insert(0, 222)
print(len(numbers))
print(numbers)


iniciando listas vacias
my_list = []  # Creando una lista vacía.

for i in range(5):
    my_list.append(i + 1)

print(my_list)

**Haciendo uso de las listas
my_list = [10, 1, 8, 3, 5]
total = 0

for i in range(len(my_list)):
    total += my_list[i]

print(total)
//27

**revertir el orden
variable_1 = 1
variable_2 = 2

variable_1, variable_2 = variable_2, variable_1

my_list = [10, 1, 8, 3, 5]

my_list[0], my_list[4] = my_list[4], my_list[0]
my_list[1], my_list[3] = my_list[3], my_list[1]

print(my_list)


 */
/*** Ordenamiento de listas: Algoritmo Burbuja */
/**Ordenamiento Burbuja */
/**
 Digamos que una lista se puede ordenar de dos maneras:
    ascendente (o más precisamente - no descendente) - si en cada par de elementos adyacentes, el primer elemento no es mayor que el segundo;
    descendente (o más precisamente - no ascendente) - si en cada par de elementos adyacentes, el primer elemento no es menor que el segundo.

my_list = []
swapped = True
num = int(input("¿Cuántos elementos deseas ordenar?: "))

for i in range(num):
    val = float(input("Ingresa un elemento de la lista: "))
    my_list.append(val)

while swapped:
    swapped = False
    for i in range(len(my_list) - 1):
        if my_list[i] > my_list[i + 1]:
            swapped = True
            my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]

print("\nOrdenada:")
print(my_list)


¿Cuántos elementos deseas ordenar?: 3
Ingresa un elemento de la lista: 1
Ingresa un elemento de la lista: 3
Ingresa un elemento de la lista: 2

Ordenada:
[1.0, 2.0, 3.0]

**SORT
Si quieres que Python ordene tu lista, puedes hacerlo de la siguiente manera:
my_list = [8, 10, 6, 2, 4]
my_list.sort()
print(my_list)

lst = [5, 3, 1, 2, 4]
print(lst)

lst.sort()
print(lst)  # output: [1, 2, 3, 4, 5]

**REVERSE
lst = [5, 3, 1, 2, 4]
print(lst)

lst.reverse()
print(lst)  # output: [4, 2, 1, 3, 5]

*/
/**Operaciones con listas */
/**
 REVANADAS
 # Copiando la lista completa.
list_1 = [1]
list_2 = list_1[:]
list_1[0] = 2
print(list_2)//[1]

# Copiando parte de la lista.
my_list = [10, 8, 6, 4, 2]
new_list = my_list[1:3]
print(new_list)//[8,6]

 */
/**
 Rebanadas – índices negativos
 my_list[start:end] 
 
start es el índice del primer elemento incluido en la rebanada.
end es el índice del primer elemento no incluido en la rebanada.


 */
/**}
 2 Si deseas copiar una lista o parte de la lista, puedes hacerlo haciendo uso de rebanadas:
 colors = ['rojo', 'verde', 'naranja']

copy_whole_colors = colors[:]  # copia la lista entera
copy_part_colors = colors[0:2]  # copia parte de la lista

3 También puede utilizar índices negativos para hacer uso de rebanadas. Por ejemplo:
 sample_list = ["A", "B", "C", "D", "E"]
new_list = sample_list[2:-1]
print(new_list)  # output: ['C', 'D']

 4 Los parámetros start y end son opcionales al partir en rebanadas una lista: list[start:end], por ejemplo:
 my_list = [1, 2, 3, 4, 5]
slice_one = my_list[2: ]
slice_two = my_list[ :2]
slice_three = my_list[-2: ]

print(slice_one)  # output: [3, 4, 5]
print(slice_two)  # output: [1, 2]
print(slice_three)  # output: [4, 5]

Puedes eliminar rebanadas utilizando la instrucción del:
my_list = [1, 2, 3, 4, 5]
del my_list[0:2]
print(my_list)  # output: [3, 4, 5]

del my_list[:]
print(my_list)  # elimina el contenido de la lista, genera: []

6  Puedes probar si algunos elementos existen en una lista o no utilizando las palabras clave in y not in, por ejemplo:
new_list = sample_list[2:-1]


 
 */
/**Listas en aplicaciones avanzadas*/
/**
 En esta sección aprenderás sobre arreglos, listas anidadas (matrices) y listas por comprensión.
 **Comprensión de lista
 Una comprensión de lista es en realidad una lista, pero se creó sobre la marcha durante la ejecución del programa, y no se describe de forma estática.
 row = [WHITE_PAWN for i in range(8)]

La parte del código colocada dentro de los paréntesis especifica:
    los datos que se utilizarán para completar la lista (WHITE_PAWN)
    la cláusula que especifica cuántas veces se producen los datos dentro de la lista (for i in range(8))
**EJEMPLO
squares = [x ** 2 for x in range(10)]
El fragmento de código genera una lista de diez elementos y la rellena con cuadrados de diez números enteros que comienzan desde cero (0, 1, 4, 9, 16, 25, 36, 49, 64, 81)

**EJEMPLO
twos = [2 ** i for i in range(8)]
El fragmento crea un arreglo de ocho elementos que contiene las primeras ocho potencias del numero dos (1, 2, 4, 8, 16, 32, 64, 128)

**EJEMPLO
odds = [x for x in squares if x % 2 != 0 ]
El fragmento crea una lista con solo los elementos impares de la lista squares.

*/
/**
Arreglos de dos dimensiones
EMPTY designa un campo vacío en el tablero de ajedrez.
Como las listas de comprensión puede ser anidadas, podemos acortar la creación del tablero de la siguiente manera:
board = [[EMPTY for i in range(8)] for j in range(8)]
La parte interna crea una fila, y la parte externa crea una lista de filas.
El acceso al campo seleccionado del tablero requiere dos índices - el primero selecciona la fila; el segundo - el número del campo dentro de la fila, el cual es un número de columna.

Visualización:
Podemos ver esta comprensión de listas como una estructura en dos niveles:
    El bucle externo for j crea las filas.
    El bucle interno for i crea las columnas dentro de cada fila.
 */

/**
 **ejercicios de prueba
 i = 0
while i <= 3:
    i += 2
    print("*")
Paso a paso:

    Inicialización:
        Se inicializa la variable i con el valor 0.

    Condición del bucle while:
        El bucle while se ejecuta mientras i <= 3. Esto significa que el bucle continuará mientras i sea menor o igual a 3.

    Primera iteración:
        Inicialmente, i = 0, por lo que la condición i <= 3 es verdadera.
        Dentro del bucle, la instrucción i += 2 incrementa el valor de i en 2. Ahora i = 2.
        Se ejecuta print("*"), imprimiendo un asterisco.

    Segunda iteración:
        Ahora, i = 2, lo que todavía cumple la condición i <= 3.
        Dentro del bucle, i += 2 incrementa el valor de i en 2. Ahora i = 4.
        Se ejecuta nuevamente print("*"), imprimiendo otro asterisco.

    Tercera iteración:
        Ahora i = 4, lo que no cumple la condición i <= 3. El bucle termina y no se ejecuta más el print("*").

Resultado:

El bucle imprime un asterisco (*) dos veces: una cuando i = 2 y otra cuando i = 4.
 */
/**
 **ejercicio de prueba
 i = 0
while i <= 5:
    i += 1
    if i % 2 == 0:
        break
    print("*")
Paso a paso:

    Inicialización:
        Se inicializa la variable i con el valor 0.

    Primera iteración:
        Al entrar al bucle, i = 0, y se incrementa con i += 1, por lo que i ahora es 1.
        Luego, la condición if i % 2 == 0 se evalúa. Como i = 1 no es divisible por 2, la condición es falsa.
        Así que se ejecuta print("*"), y se imprime un asterisco.

    Segunda iteración:
        En la segunda iteración, i = 1, pero inmediatamente i += 1 lo convierte en i = 2.
        Ahora, se evalúa la condición if i % 2 == 0. Como i = 2 es divisible por 2, la condición es verdadera, y se ejecuta la instrucción break, lo que termina el bucle.

Resultado:

El bucle se rompe en la segunda iteración sin ejecutar más el print("*"). Solo se imprimió un asterisco durante la primera iteración.
 */
/**
 **ejercicio de prueba
for i in range(1):
    print("#")
else:
    print("#")
Paso a paso:

    Bucle for:
        La función range(1) genera una secuencia de números que comienza en 0 y termina antes de 1. Esto significa que el bucle for se ejecutará una sola vez, con i = 0.

    Primera iteración del for:
        En la única iteración del bucle, se ejecuta print("#"), por lo que se imprime un #.

    Bloque else:
        Después de que el bucle for termine (independientemente de cuántas iteraciones haya tenido), se ejecuta el bloque else.
        En este caso, el bloque else también contiene un print("#"), así que se imprime otro #.

Resultado:

    El for imprime un #.
    El else imprime otro #.
    */
   /**
    **ejercicio de prueba
var = 0
while var < 6:
    var += 1
    if var % 2 == 0:
        continue
    print("#")
Paso a paso:

    Inicialización:
        La variable var se inicializa con el valor 0.

    Primera iteración del bucle:
        var = 0, pero al entrar al bucle, var += 1 lo convierte en 1.
        Luego, se evalúa la condición if var % 2 == 0. Como 1 % 2 no es igual a 0, la condición es falsa, por lo que se ejecuta print("#"), e imprime un #.

    Segunda iteración:
        Ahora, var = 1, y al entrar al bucle, var += 1 lo convierte en 2.
        Se evalúa if var % 2 == 0. Como 2 % 2 es igual a 0, la condición es verdadera y se ejecuta continue. Esto salta el resto del código en esta iteración y no se ejecuta print("#").

    Tercera iteración:
        Ahora, var = 2, y var += 1 lo convierte en 3.
        Se evalúa if var % 2 == 0. Como 3 % 2 no es igual a 0, la condición es falsa, así que se ejecuta print("#") e imprime otro #.

    Cuarta iteración:
        Ahora, var = 3, y var += 1 lo convierte en 4.
        Se evalúa if var % 2 == 0. Como 4 % 2 es igual a 0, la condición es verdadera y se ejecuta continue, lo que salta el print("#").

    Quinta iteración:
        Ahora, var = 4, y var += 1 lo convierte en 5.
        Se evalúa if var % 2 == 0. Como 5 % 2 no es igual a 0, la condición es falsa, así que se ejecuta print("#") e imprime otro #.

    Sexta iteración:
        Ahora, var = 5, y var += 1 lo convierte en 6.
        Se evalúa if var % 2 == 0. Como 6 % 2 es igual a 0, se ejecuta continue y no se imprime nada.
        El bucle termina porque la condición var < 6 ya no se cumple.

Resultado:

    En la primera iteración, se imprime un #.
    En la tercera iteración, se imprime otro #.
    En la quinta iteración, se imprime otro #.
    */

/**
 **ejercicio
var = 1
while var < 10:
    print("#")
    var = var << 1
Explicación paso a paso:

    Inicialización:
        La variable var se inicializa con el valor 1.

    Operador de desplazamiento a la izquierda (<<):
        El operador << en Python es un desplazamiento de bits a la izquierda. Esto significa que se desplazan los bits de un número hacia la izquierda, lo que equivale a multiplicar el número por 2.
        Por ejemplo:
            1 << 1 es 2 (multiplica 1 por 2).
            2 << 1 es 4 (multiplica 2 por 2).
            4 << 1 es 8 (multiplica 4 por 2).
            8 << 1 es 16 (multiplica 8 por 2).

    Iteraciones del bucle while:
        El bucle while continuará ejecutándose mientras var < 10.

Paso a paso:

    Primera iteración:
        var = 1 (inicializado).
        Se imprime #.
        Luego, var = var << 1 convierte var en 2.

    Segunda iteración:
        var = 2.
        Se imprime #.
        Luego, var = var << 1 convierte var en 4.

    Tercera iteración:
        var = 4.
        Se imprime #.
        Luego, var = var << 1 convierte var en 8.

    Cuarta iteración:
        var = 8.
        Se imprime #.
        Luego, var = var << 1 convierte var en 16.

    Fin del bucle:
        Ahora var = 16, y como 16 >= 10, el bucle termina.

Resultado:

El bucle imprime el símbolo # 4 veces antes de que var alcance un valor mayor o igual a 10.
*/