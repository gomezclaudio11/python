/**MODULO 4 */
/**FUNCIONES */
/**
 * Una función es un bloque de código que realiza una tarea especifica cuando la función es llamada (invocada). Las funciones son útiles para hacer que el código sea reutilizable, que este mejor organizado, y más legible. Las funciones contienen parámetros y pueden regresar valores.
 descomposicion
 simplifica considerablemente el trabajo del programa, debido a que cada pieza se codifica por separado, y consecuentemente se prueba por separado.
si un fragmento de código se hace tan extenso que leerlo o entenderlo se hace complicado, considera dividirlo en pequeños problemas, por separado, e implementa cada uno de ellos como una función independiente..
Esta descomposición continúa hasta que se obtiene un conjunto de funciones cortas, fáciles de comprender y probar.
si se va a dividir el trabajo entre varios programadores, se debe descomponer el problema para permitir que el producto sea implementado como un conjunto de funciones escritas por separado empacadas juntas en diferentes módulos.

Se necesita definirla. Aquí, la palabra definir es significativa.
Así es como se ve la definición más simple de una función:
def function_name():
    cuerpo de la función

    Siempre comienza con la palabra reservada def (que significa definir)
    después de def va el nombre de la función (las reglas para darle nombre a las funciones son las mismas que para las variables)
    después del nombre de la función, hay un espacio para un par de paréntesis (ahorita no contienen algo, pero eso cambiará pronto)
    la línea debe de terminar con dos puntos;
    la línea inmediatamente después de def marca el comienzo del cuerpo de la función - donde varias o (al menos una) instrucción anidada, será ejecutada cada vez que la función sea invocada; nota: la función termina donde el anidamiento termina, se debe ser cauteloso.

def message():
    print("Ingresar valor: ")

print("Inicia aqui.")
message()
print("Termina aqui.") 

output
Inicia aqui.
Ingresar valor:
Termina aqui. 

También es posible definir funciones con argumentos, como la siguiente que contiene un solo parámetro:
def hello(name):    # definiendo una función
    print("Hello,", name)    # cuerpo de la función


name = input("Ingresa tu nombre: ")

hello(name)    # invocación de la función


 */
/**Funciones parametrizadas
El potencial completo de una función se revela cuando puede ser equipada con una interface que es capaz de aceptar datos provenientes de la invocación. Dichos datos pueden modificar el comportamiento de la función, haciéndola más flexible y adaptable a condiciones cambiantes.
Un parámetro es una variable, pero existen dos factores que hacen a un parámetro diferente:
    los parámetros solo existen dentro de las funciones en donde han sido definidos, y el único lugar donde un parámetro puede ser definido es entre los paréntesis después del nombre de la función, donde se encuentra la palabra clave reservada def;
    la asignación de un valor a un parámetro de una función se hace en el momento en que la función se manda llamar o se invoca, especificando el argumento correspondiente.
Recuerda que:
    los parámetros solo existen dentro de las funciones (este es su entorno natural)
    los argumentos existen fuera de las funciones, y son los que pasan los valores a los parámetros correspondientes.

    def message(number):
    print("Ingresa un número:", number)
message(1)

Un valor para el parámetro llegará del entorno de la función.
Recuerda: especificar uno o más parámetros en la definición de la función es un requerimiento, y se debe de cumplir durante la invocación de la misma. Se debe proveer el mismo número de argumentos como haya parámetros definidos.

Existe una circunstancia importante que se debe mencionar.
Es posible tener una variable con el mismo nombre del parámetro de la función.
el parámetro x sombrea cualquier variable con el mismo nombre, pero...
... solo dentro de la función que define el parámetro.

Una función puede tener tantos parámetros como se desee, pero entre más parámetros, es más difícil memorizar su rol y propósito.

**Paso de parámetros posicionales
La técnica que asigna cada argumento al parámetro correspondiente, es llamada paso de parámetros posicionales, los argumentos pasados de esta manera son llamados argumentos posicionales.
def introduction(first_name, last_name):
    print("Hola, mi nombre es", first_name, last_name)

introduction("Skywalker", "Luke")
introduction("Quick", "Jesse")
introduction("Kent", "Clark")


**Paso de argumentos de palabra clave
Python ofrece otra manera de pasar argumentos, donde el significado del argumento está definido por su nombre, no su posición - a esto se le denomina paso de argumentos con palabra clave.
def introduction(first_name, last_name):
    print("Hola, mi nombre es", first_name, last_name)

introduction(first_name = "James", last_name = "Bond")
introduction(last_name = "Skywalker", first_name = "Luke")

**Mezclando argumentos posicionales y de palabras clave
Es posible combinar ambos tipos si se desea - solo hay una regla inquebrantable: se deben colocar primero los argumentos posicionales y después los de palabra clave.

**Funciones parametrizadas - más detalles
El valor por predeterminada para el parámetro se asigna de la siguiente manera:
def introduction(first_name, last_name="Smith"):
     print("Hola, mi nombre es", first_name, last_name)

Solo se tiene que colocar el nombre del parámetro seguido del signo de = y el valor por predeterminada.

**ejemplo
def add_numbers(a, b=2, c):
    print(a + b + c)

add_numbers(a=1, c=3)

El código que escribiste genera un error porque los argumentos con valor por defecto en Python deben ir al final de la lista de parámetros de la función. Es decir, todos los parámetros que tienen valores por defecto deben estar después de los parámetros que no los tienen.
En tu función, el argumento b tiene un valor por defecto (b=2), pero está antes del argumento c, que no tiene un valor por defecto. Esto provoca un error de sintaxis.

*/
/** Devolviendo el resultado de una función */
/**
Efectos y resultados: la instrucción return
Todas las funciones presentadas anteriormente tienen algún tipo de efecto - producen un texto y lo envían a la consola.
Por supuesto, las funciones - al igual que las funciones matemáticas - pueden tener resultados.
Para lograr que las funciones devuelvan un valor (pero no solo para ese propósito) se utiliza la instrucción return (regresar o retornar).
Esta palabra nos da una idea completa de sus capacidades. Nota: es una palabra clave reservada de Python.
La instrucción return tiene dos variantes diferentes - considerémoslas por separado.

**return sin una expresión
def happy_new_year(wishes = True):
    print("Tres...")
    print("Dos...")
    print("Uno...")
    if not wishes:
        return

    print("¡Feliz año nuevo!")

happy_new_year()

output
Tres...
Dos...
Uno...
¡Feliz año nuevo!

Al proporcionar False como argumento:
happy_new_year(False)

Se modificará el comportamiento de la función - la instrucción return provocará su terminación justo antes de los deseos - esta es la salida actualizada:
output
Tres...
Dos...
Uno... 

**return con una expresión
def function():
    return expression

Existen dos consecuencias de usarla:
    provoca la terminación inmediata de la ejecución de la función (nada nuevo en comparación con la primer variante)
    además, la función evaluará el valor de la expresión y lo devolverá (de ahí el nombre una vez más) como el resultado de la función.

def boring_function():
    return 123

x = boring_function()

print("La función boring_function ha devuelto su resultado. Es:", x)

**Unas pocas palabras sobre None
Permítenos presentarte un valor muy curioso (para ser honestos, un valor que es ninguno) llamado None.
Sus datos no representan valor razonable alguno - en realidad, no es un valor en lo absoluto; por lo tanto, no debe participar en ninguna expresión.

Solo existen dos tipos de circunstancias en las que None se puede usar de manera segura:
    cuando se le asigna a una variable (o se devuelve como el resultado de una función)
    cuando se compara con una variable para diagnosticar su estado interno.
value = None
if value is None:
    print("Lo siento, no contienes ningún valor")

**Efectos y resultados: listas y funciones
¿Se puede enviar una lista a una función como un argumento?
def list_sum(lst):
    s = 0

    for elem in lst:
        s += elem

    return s
print(list_sum([5, 4, 3]))

retornará 12 como resultado

Explicación paso a paso:

    Definición de la función:
        La función se llama strange_list_fun y toma un argumento n.
        Dentro de la función, se inicializa una lista vacía llamada strange_list para almacenar los resultados.

    Bucle for:
        El bucle for itera desde i = 0 hasta i = n-1.
        Para cada valor de i, la función realiza la operación strange_list.insert(0, i), que inserta el valor de i al principio de la lista strange_list.

    Método insert(0, i):
        El método insert(0, i) inserta el valor de i en la posición 0 de la lista, lo que significa que cada nuevo valor de i se coloca al inicio de la lista, desplazando los elementos ya presentes hacia la derecha.
        El valor de i empieza en 0 y se detiene antes de llegar a n. Esto se debe a que range(start, stop) genera una secuencia de números que incluye el valor de start (en este caso 0), pero excluye el valor de stop (en este caso n).

    Devolución del resultado:
        Después de completar el bucle, la función retorna la lista strange_list, que contiene los números insertados en orden inverso.

Ejemplo con n = 5:

    Cuando llamas a strange_list_fun(5), el bucle recorre los valores de i desde 0 hasta 4.

Iteraciones:

    Primera iteración (i = 0):
        La lista está vacía: [].
        Se inserta 0 en la posición 0: [0].

    Segunda iteración (i = 1):
        La lista actual es [0].
        Se inserta 1 en la posición 0: [1, 0].

    Tercera iteración (i = 2):
        La lista actual es [1, 0].
        Se inserta 2 en la posición 0: [2, 1, 0].

    Cuarta iteración (i = 3):
        La lista actual es [2, 1, 0].
        Se inserta 3 en la posición 0: [3, 2, 1, 0].

    Quinta iteración (i = 4):
        La lista actual es [3, 2, 1, 0].
        Se inserta 4 en la posición 0: [4, 3, 2, 1, 0].


**ejemplo año bisiesto
def is_year_leap(year):
    if year % 4 != 0:
        return False
    elif year % 100 != 0:
        return True
    elif year % 400 != 0:
        return False
    else:
        return True

test_data = [1900, 2000, 2016, 1987]
test_results = [False, True, True, False]
for i in range(len(test_data)):
    yr = test_data[i]
    print(yr,"-> ",end="")
    result = is_year_leap(yr)
    if result == test_results[i]:
        print("OK")
    else:
        print("Fallido")

console
1900 -> OK
2000 -> OK
2016 -> OK
1987 -> O


 */
/**
 **ejemplo 2
 def is_year_leap(year):
    if year % 4 != 0:
        return False
    elif year % 100 != 0:
        return True
    elif year % 400 != 0:
        return False
    else:
        return True

def days_in_month(year,month):
    if year < 1582 or month < 1 or month > 12:
        return None
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    res  = days[month - 1] xq el array empieza en 0 x eso - 1
    if month == 2 and is_year_leap(year): si es febrero y es bisiesto
        res = 29
    return res

test_years = [1900, 2000, 2016, 1987]
test_months = [ 2, 2, 1, 11]
test_results = [28, 29, 31, 30]
for i in range(len(test_years)):
    yr = test_years[i]
    mo = test_months[i]
    print(yr,mo,"-> ",end="")
    result = days_in_month(yr, mo)
    if result == test_results[i]:
        print("OK")
    else:
        print("Fallido")
        

 */
/**
 **ejemplo 3
 def is_year_leap(year):
    if year % 4 != 0:
        return False
    elif year % 100 != 0:
        return True
    elif year % 400 != 0:
        return False
    else:
        return True

def days_in_month(year, month):
    if year < 1582 or month < 1 or month > 12:
        return None
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    res  = days[month - 1]
    if month == 2 and is_year_leap(year):
        res = 29
    return res

def day_of_year(year, month, day):
    days = 0
    for m in range(1, month)://desde enero hasta mes - 1 debido a que range el stop no esta dentro del rango
        md = days_in_month(year, m)
        if md == None:
            return None
        days += md
    md = days_in_month(year, month)
    if day >= 1 and day <= md:
        return days + day
    else:
        return None

print(day_of_year(2000, 12, 31))

**explicacion
La función day_of_year calcula qué día del año es una fecha dada, considerando el año, mes y día proporcionados. El cálculo toma en cuenta si el año es bisiesto o no (usando la función is_year_leap) y valida que el día sea válido para el mes dado (utilizando la función days_in_month).
Inicialización de la variable days: La variable days se inicia en 0. Esta variable va a acumular el total de días transcurridos hasta el inicio del mes que se pasa como parámetro.
Bucle for: El bucle for itera desde el mes 1 (enero) hasta el mes anterior al proporcionado por el usuario (month-1). Para cada mes m, la función days_in_month(year, m) devuelve el número de días en ese mes. Estos días se suman a la variable days.
    Si days_in_month retorna None, significa que el mes o el año es inválido, por lo que la función también retorna None.
Cálculo de los días acumulados: Al finalizar el bucle, la variable days contendrá el número de días totales desde el inicio del año hasta el final del mes anterior al proporcionado.
Validación del día del mes actual: Una vez que se han sumado los días de los meses anteriores, la función obtiene el número de días del mes proporcionado (md = days_in_month(year, month)).
Luego, se verifica que el día proporcionado (day) sea válido para ese mes, es decir, que esté dentro del rango permitido (entre 1 y md, el número de días del mes). Si es válido, la función retorna el número total de días, sumando el valor de days con el day.
    Resultado final: Si el día es válido, la función retorna la suma de los días acumulados (days) y el día específico proporcionado (day). Si no es válido, la función retorna None.
Ejemplo de ejecución:
Supongamos que ejecutamos print(day_of_year(2001, 12, 31)):
    Inicialmente, days = 0.
    El bucle for suma los días de los meses de enero a noviembre (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 = 335 días).
    Luego, se suma el valor del día 31 de diciembre, ya que el día es válido.
    El resultado final es 335 + 31 = 366, es decir, el 31 de diciembre de 2001 es el día 366 del año.


    */
   /**
**ejemplo
def is_prime(num):
    for i in range(2, int(1 + num ** 0.5)):
        if num % i == 0:
            return False
    return True

for i in range(1, 20):
    if is_prime(i + 1):
        print(i + 1, end=" ")
print()
Explicación:

    Esta función determina si un número num es primo o no.
    ¿Qué es un número primo? Un número primo es un número mayor que 1 que solo tiene dos divisores: 1 y él mismo.
    Lógica del código:

       El bucle for itera desde i = 2 hasta int(1 + num ** 0.5). Esto significa que revisa los posibles divisores del número num solo hasta la raíz cuadrada del número, porque un número no puede tener divisores mayores que su raíz cuadrada.
        En cada iteración, verifica si num es divisible por i. Si num % i == 0, significa que num es divisible por algún número menor a él mismo (aparte de 1), y por lo tanto no es primo, devolviendo False.
        Si no se encuentra ningún divisor, la función retorna True, indicando que el número es primo.

Ejemplo de ejecución de is_prime(5):

    Calcula la raíz cuadrada de 5: num ** 0.5 es aproximadamente 2.236.
    El rango del bucle for es desde 2 hasta int(1 + 2.236) que es int(3.236), es decir, el bucle revisa si 5 es divisible por 2.
    Como no lo es, la función retorna True indicando que 5 es un número primo.

    2. El bucle for principal
Explicación:

    Este bucle recorre los números del 1 al 19.
    En cada iteración, se evalúa el número i + 1 (esto es, los números del 2 al 20).
    Se utiliza la función is_prime(i + 1) para verificar si el número es primo.
    Si el número es primo, lo imprime seguido de un espacio.

Ejecución del bucle:

    Para i = 1, se evalúa is_prime(2) → True, imprime 2.
    Para i = 2, se evalúa is_prime(3) → True, imprime 3.
    Para i = 3, se evalúa is_prime(4) → False, no imprime nada.
    Para i = 4, se evalúa is_prime(5) → True, imprime 5.
    El proceso continúa hasta que i alcanza 19.

Resultado:
El código imprimirá los números primos entre 2 y 20: 2 3 5 7 11 13 17 19.
*/
/**
 * # Ejemplo 1
def wishes():
    print("Mis deseos")
    return "Felíz Cumpleaños"

wishes()    # salida: Mis deseos


# Ejemplo 2
def wishes():
    print("Mis deseos")
    return "Felíz Cumpleaños"

print(wishes())

# salida: Mis deseos
#          Felíz Cumpleaños


Resumen de las diferencias:
    Ejemplo 1 solo imprime "Mis deseos" porque el valor retornado no se utiliza.
    Ejemplo 2 imprime tanto "Mis deseos" como "Felíz Cumpleaños", ya que el valor retornado es capturado y mostrado con print().

 */
/**Alcances en Python */
/**
 El alcance de un nombre (por ejemplo, el nombre de una variable) es la parte del código donde el nombre es reconocido correctamente.
Por ejemplo, el alcance del parámetro de una función es la función en sí. El parámetro es inaccesible fuera de la función.
Una variable que existe fuera de una función tiene un alcance dentro del cuerpo de la función, excluyendo a aquellas que tienen el mismo nombre.
También significa que el alcance de una variable existente fuera de una función solo se puede implementar dentro de una función cuando su valor es leído. El asignar un valor hace que la función cree su propia variable.

**Funciones y alcances: la palabra clave global
Existe un método especial en Python el cual puede extender el alcance de una variable incluyendo el cuerpo de las funciones (para poder no solo leer los valores de las variables sino también modificarlos).
En otras palabras, este nombre se convierte en global (tiene un alcance global, y no importa si se esta leyendo o asignando un valor).
def my_function():
    global var
    var = 2
    print("¿Conozco a aquella variable?", var)


var = 1
my_function()
print(var)

output
¿Conozco a aquella variable? 2
2

**Cómo interactúa la función con sus argumentos
def my_function(n):
    print("Yo recibí", n)
    n += 1
    print("Ahora tengo", n)

var = 1
my_function(var)
print(var)

output
Yo recibí 1
Ahora tengo 2
1
*/
/**
 **ejemplo
 def my_function(my_list_1):
    print("Print #1:", my_list_1)
    print("Print #2:", my_list_2)
    del my_list_1[0]  # Presta atención a esta línea.
    print("Print #3:", my_list_1)
    print("Print #4:", my_list_2)


my_list_2 = [2, 3]
my_function(my_list_2)
print("Print #5:", my_list_2)

output
Print #1: [2, 3]
Print #2: [2, 3]
Print #3: [3]
Print #4: [3]
Print #5: [3]
 
¿Lo puedes explicar?
Intentémoslo:
    si el argumento es una lista, el cambiar el valor del parámetro correspondiente no afecta la lista (recuerda: las variables que contienen listas son almacenadas de manera diferente que las escalares)
    pero si se modifica la lista identificada por el parámetro (nota: ¡la lista, no el parámetro!), la lista reflejará el cambio.

 */
/**
 **ejemplo scope
 def adding(x):
    var = 7
    return x + var


print(adding(4))    # salida: 11
print(var)    # NameError

 */
/**Creación de funciones multiparámetro */
/**
Cálculo del IMC
*funcion pies y pulgadas a metros
def ft_and_inch_to_m(ft, inch = 0.0):
    return ft * 0.3048 + inch * 0.0254

*funcion de libras a kilos
def lb_to_kg(lb):
    return lb * 0.4535923

*funcion de indice de masa corporal
def bmi(weight, height):
    if height < 1.0 or height > 2.5 or weight < 20 or weight > 200:
        return None

    return weight / height ** 2


print(bmi(weight = lb_to_kg(176), height = ft_and_inch_to_m(5, 7)))


 */
/**
 Ejemplos de funciones: Triángulos

 la suma arbitraria de dos lados tiene que ser mayor que la longitud del tercer lado.

def is_a_triangle(a, b, c):
    return a + b > c and b + c > a and c + a > b
***El return en la función is_a_triangle(a, b, c) devuelve True o False porque está evaluando una expresión lógica que involucra varias comparaciones usando operadores relacionales. La expresión completa se resuelve como un valor booleano (True o False) dependiendo de si las condiciones son verdaderas o falsas.
***Si todas las condiciones son verdaderas, entonces la expresión completa es verdadera y la función devolverá True.
***Si alguna de las condiciones es falsa, la expresión completa es falsa y la función devolverá False.

a = float(input('Ingresa la longitud del primer lado: '))
b = float(input('Ingresa la longitud del segundo lado: '))
c = float(input('Ingresa la longitud del tercer lado: '))

if is_a_triangle(a, b, c):
    print('Si, si puede ser un triángulo.')
else:
    print('No, no puede ser un triángulo.')

 */
/**Teorema de Pitágoras:
c2 = a2 + b2
¿Cómo saber cual de los tres lados es la hipotenusa?
La hipotenusa es el lado más largo.

def is_a_triangle(a, b, c):
    return a + b > c and b + c > a and c + a > b

def is_a_right_triangle(a, b, c):
    if not is_a_triangle(a, b, c):
        return False
    if c > a and c > b:
        return c ** 2 == a ** 2 + b ** 2
    if a > b and a > c:
        return a ** 2 == b ** 2 + c ** 2
    if b > a and b > c:
        return b ** 2 == a ** 2 + c ** 2

print(is_a_right_triangle(5, 3, 4))  # True
print(is_a_right_triangle(1, 3, 4))  # False
*/

/**Evaluando el área de un triángulo */
/**
 También es posible evaluar el área de un triángulo. La Formula de Heron será útil aquí:
 def is_a_triangle(a, b, c):
    return a + b > c and b + c > a and c + a > b


def heron(a, b, c):
    p = (a + b + c) / 2
    return (p * (p - a) * (p - b) * (p - c)) ** 0.5


def area_of_triangle(a, b, c):
    if not is_a_triangle(a, b, c):
        return None
    return heron(a, b, c)


print(area_of_triangle(1., 1., 2. ** .5))

 */
/**
 **Factorial
def factorial_function(n):
    if n < 0:
        return None
    if n < 2:
        return 1

    product = 1
    for i in range(2, n + 1):
        product *= i
    return product


for n in range(1, 6):  # probando
    print(n, factorial_function(n))

Este código define una función llamada factorial_function(n) que calcula el factorial de un número entero n, y luego la prueba para los valores de n de 1 a 5.
Explicación del código:

    Función factorial_function(n):
        Esta función calcula el factorial de un número dado n.
        El factorial de un número entero positivo n (denotado como n!) es el producto de todos los números enteros positivos desde 1 hasta n.
            Ejemplo: 5!=5×4×3×2×1=1205!=5×4×3×2×1=120.

Detalles clave:

    Condiciones especiales:
        Si n es negativo (n < 0), el factorial no está definido, por lo que devuelve None.
        Si n es 0 o 1, el factorial es 1 por definición, así que devuelve 1 directamente.
    Bucle for:
        El bucle comienza desde i = 2 hasta i = n y multiplica todos los valores sucesivos para calcular el factorial. Cada vez que pasa por el bucle, se multiplica el valor actual de i con la variable product.

    Prueba de la función:
        El bucle for en la parte final del código prueba la función con los valores de n entre 1 y 5, e imprime el valor del factorial de cada uno de ellos.
 Este código define una función llamada factorial_function(n) que calcula el factorial de un número entero n, y luego la prueba para los valores de n de 1 a 5.
Explicación del código:

    Función factorial_function(n):
        Esta función calcula el factorial de un número dado n.
        El factorial de un número entero positivo n (denotado como n!) es el producto de todos los números enteros positivos desde 1 hasta n.
            Ejemplo: 5!=5×4×3×2×1=1205!=5×4×3×2×1=120.

Estructura de la función:

python

def factorial_function(n):
    if n < 0:
        return None  # Si el número es negativo, retorna None porque no existe el factorial para números negativos.
    
    if n < 2:
        return 1  # El factorial de 0 y 1 es 1, por lo que si n es 0 o 1, retorna 1.

    product = 1  # Inicializa el producto como 1.
    for i in range(2, n + 1):  # Bucle que multiplica todos los números desde 2 hasta n.
        product *= i  # Multiplica product por el valor actual de i en cada iteración.
    return product  # Devuelve el producto final, que es el factorial de n.

Detalles clave:

    Condiciones especiales:
        Si n es negativo (n < 0), el factorial no está definido, por lo que devuelve None.
        Si n es 0 o 1, el factorial es 1 por definición, así que devuelve 1 directamente.
    Bucle for:
        El bucle comienza desde i = 2 hasta i = n y multiplica todos los valores sucesivos para calcular el factorial. Cada vez que pasa por el bucle, se multiplica el valor actual de i con la variable product.

    Prueba de la función:
        El bucle for en la parte final del código prueba la función con los valores de n entre 1 y 5, e imprime el valor del factorial de cada uno de ellos.

python

for n in range(1, 6):  # Prueba los valores de 1 a 5.
    print(n, factorial_function(n))

Ejemplo del flujo de ejecución:

    n = 1:
        factorial_function(1):
            Como n es menor que 2, la función devuelve 1 directamente.
            Salida: 1 1
    n = 2:
        factorial_function(2):
            Comienza el bucle for i in range(2, 3) y multiplica product por 2.
            Resultado final: 2.
            Salida: 2 2
    n = 3:
        factorial_function(3):
            El bucle multiplica product por 2 y luego por 3.
            Resultado final: 6.
            Salida: 3 6
    n = 4:
        factorial_function(4):
            El bucle multiplica product por 2, luego por 3, y luego por 4.
            Resultado final: 24.
            Salida: 4 24
    n = 5:
        factorial_function(5):
            El bucle multiplica product por 2, luego por 3, luego por 4, y finalmente por 5.
            Resultado final: 120.
            Salida: 5 120
        */

/**FIBONACCI */
/**
def fib(n):
    if n < 1:
        return None
    if n < 3:
        return 1

    elem_1 = elem_2 = 1
    the_sum = 0
    for i in range(3, n + 1):
        the_sum = elem_1 + elem_2
        elem_1, elem_2 = elem_2, the_sum
    return the_sum


for n in range(1, 10):  # probando
    print(n, "->", fib(n))

 
 */
/**
    el primer elemento de la secuencia es igual a uno (Fib1 = 1)
    el segundo elemento también es igual a uno (Fib2 = 1)
    cada número después de ellos son la suman de los dos números anteriores (Fibi = Fibi-1 + Fibi-2)
 */
/**recursividad */
/**
 Este termino puede describir muchos conceptos distintos, pero uno de ellos, hace referencia a la programación computacional.
 Aquí, la recursividad es una técnica donde una función se invoca a si misma.
Tanto el factorial como la serie Fibonacci, son las mejores opciones para ilustrar este fenómeno.

*/
/**def fib(n):
    if n < 1:
         return None
    if n < 3:
        return 1

    elem_1 = elem_2 = 1
    the_sum = 0
    for i in range(3, n + 1):
        the_sum = elem_1 + elem_2
        elem_1, elem_2 = elem_2, the_sum
    return the_sum


for n in range(1, 10):
    print(n, "->", fib(n)) */
/**
 La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos números anteriores. Comienza con 1, 1, 2, 3, 5, 8, 13, 21, etc.

    Fórmula: F(n)=F(n−1)+F(n−2)F(n)=F(n−1)+F(n−2)
    Ejemplo:
        F(1)=1F(1)=1
        F(2)=1F(2)=1
        F(3)=F(2)+F(1)=1+1=2F(3)=F(2)+F(1)=1+1=2
        F(4)=F(3)+F(2)=2+1=3F(4)=F(3)+F(2)=2+1=3

Detalles clave:

    Casos especiales:
        Si n es menor que 1, la función devuelve None, ya que la secuencia de Fibonacci no se define para esos valores.
        Si n es 1 o 2, devuelve 1 directamente, ya que los primeros dos números de la secuencia de Fibonacci son ambos 1.

    Bucle for:
        El bucle comienza en i = 3 y continúa hasta i = n.
        En cada iteración:
            Se suma el valor de elem_1 y elem_2 para obtener el nuevo número de Fibonacci, y lo guarda en the_sum.
            Luego, se actualizan las variables elem_1 y elem_2, de manera que elem_1 toma el valor de elem_2 y elem_2 toma el valor de the_sum.
 */
/**Tuplas y diccionaros */
/**
 Bienvenido a la sección seis, donde aprenderás sobre los tipos de secuencias y el concepto de mutabilidad. Aprenderás sobre las tuplas y los diccionarios, y cómo puedes usarlos para almacenar y procesar valores de datos. ¡Vamos!
Tipos de secuencia y mutabilidad
Un tipo de secuencia es un tipo de dato en Python el cual es capaz de almacenar más de un valor (o ninguno si la secuencia esta vacía), los cuales pueden ser secuencialmente (de ahí el nombre) examinados, elemento por elemento.
Debido a que el bucle for es una herramienta especialmente diseñada para iterar a través de las secuencias, podemos definirlas de la siguiente manera: una secuencia es un tipo de dato que puede ser escaneado por el bucle for.
La segunda noción - la mutabilidad - es una propiedad de cualquier tipo de dato en Python que describe su disponibilidad para poder cambiar libremente durante la ejecución de un programa. Existen dos tipos de datos en Python: mutables e inmutables.
Los datos mutables pueden ser actualizados libremente en cualquier momento - a esta operación se le denomina "in situ".
In situ es una expresión en Latín que se traduce literalmente como en posición, en el lugar o momento. Por ejemplo, la siguiente instrucción modifica los datos "in situ":
list.append(1)
Los datos inmutables no pueden ser modificados de esta manera.

Una tupla es una secuencia inmutable. Se puede comportar como una lista pero no puede ser modificada en el momento.

 */
/**tuplas */
/**
Lo primero que distingue una lista de una tupla es la sintaxis empleada para crearlas - las tuplas utilizan paréntesis, mientras que las listas usan corchetes, aunque también es posible crear una tupla tan solo separando los valores por comas.
 tuple_1 = (1, 2, 4, 8)
tuple_2 = 1., .5, .25, .125

¿Es posible crear una tupla vacía? Si, solo se necesitan unos paréntesis:
empty_tuple = ()

Si se desea crear una tupla de un solo elemento, se debe de considerar el hecho de que, debido a la sintaxis (una tupla debe de poder distinguirse de un valor entero ordinario), se debe de colocar una coma al final:
 one_element_tuple_1 = (1, )
one_element_tuple_2 = 1., 

**ejemplo
my_tuple = (1, 10, 100, 1000)

print(my_tuple[0])
print(my_tuple[-1])
print(my_tuple[1:])
print(my_tuple[:-2])

for elem in my_tuple:
    print(elem)

    output
1
1000
(10, 100, 1000)
(1, 10)
1
10
100
1000

Las similitudes pueden ser engañosas - no intentes modificar el contenido de la tupla ¡No es una lista!

¿Qué más pueden hacer las tuplas?

    la función len() acepta tuplas, y regresa el número de elementos contenidos dentro;
    el operador + puede unir tuplas (ya se ha mostrado esto antes)
    el operador * puede multiplicar las tuplas, así como las listas;
    los operadores in y not in funcionan de la misma manera que en las listas.
**ejemplo
my_tuple = (1, 10, 100)

t1 = my_tuple + (1000, 10000)
t2 = my_tuple * 3

print(len(t2))
print(t1)
print(t2)
print(10 in my_tuple)
print(-10 not in my_tuple)

output
9
(1, 10, 100, 1000, 10000)
(1, 10, 100, 1, 10, 100, 1, 10, 100)
True
True

Una de las propiedades de las tuplas más útiles es que pueden aparecer en el lado izquierdo del operador de asignación. Este fenómeno ya se vio con anterioridad, cuando fue necesario encontrar una manera de intercambiar los valores entre dos variables.
var = 123

t1 = (1, )
t2 = (2, )
t3 = (3, var)

t1, t2, t3 = t2, t3, t1

print(t1, t2, t3)

*/
/**
 tup = 1, 2, 3, 2, 4, 5, 6, 2, 7, 2, 8, 9
duplicates = tup.count(2)

print(duplicates)    # salida: 4
 */
/**DICCIONARIOS */
/**
 El diccionario es otro tipo de estructura de datos de Python. No es una secuencia (pero puede adaptarse fácilmente a un procesamiento secuencial) y además es mutable.
 dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
phone_numbers = {'jefe': 5551234567, 'Suzy': 22657854310}
empty_dictionary = {}

print(dictionary)
print(phone_numbers)
print(empty_dictionary)
print(dictionary['cat'])
print(phone_numbers['Suzy'])


En el mundo de Python, la palabra que se esta buscando se denomina key. La palabra que se obtiene del diccionario es denominada value.
Esto significa que un diccionario es un conjunto de pares de key y value. Nota:
    cada clave debe de ser única - no es posible tener una clave duplicada;
    una clave puede ser un de dato de cualquier tipo - puede ser un número (entero o flotante), incluso una cadena, pero no una lista;
    un diccionario no es una lista - una lista contiene un conjunto de valores numerados, mientras que un diccionario almacena pares de valores;
    la función len() aplica también para los diccionarios - regresa la cantidad de pares (clave-valor) en el diccionario;
    un diccionario es una herramienta de un solo sentido - si fuese un diccionario español-francés, podríamos buscar en español para encontrar su contraparte en francés más no viceversa.
    las claves son sensibles a las mayúsculas y minúsculas: 'Suzy' sería diferente a 'suzy'.


dictionary = {"cat": "gato", "perro": "chien", "caballo": "cheval"}
words = ['gato', 'león', 'caballo']
 
for word in words:
    if word in dictionary:
        print(word, "->", dictionary[word])
    else:
        print(word, "no está en el diccionario")
output
gato -> chat
león no está en el diccionario
caballo -> cheval
 */
/**Métodos y funciones de los diccionarios */
/**
 El método keys()
 El método retorna o regresa una lista de todas las claves dentro del diccionario. Al tener una lista de claves se puede acceder a todo el diccionario de una manera fácil y útil.

 dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}

for key in dictionary.keys():
    print(key, "->", dictionary[key])

** Otra manera de hacerlo es utilizar el método items(). Este método retorna una lista de tuplas (este es el primer ejemplo en el que las tuplas son mas que un ejemplo de si mismas) donde cada tupla es un par de cada clave con su valor.
Si deseas examinar los elementos (claves y valores) del diccionario, puedes emplear el método items(), por ejemplo:

dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}

for spanish, french in dictionary.items():
    print(spanish, "->", french)
**OTRO EJEMPLO

pol_esp_dictionary = {
    "zamek": "castillo",
    "woda": "agua",
    "gleba": "tierra"
    }
 
for key, value in pol_esp_dictionary.items():
    print("Pol/Esp ->", key, ":", value)
 

 */
/**Modificar, agregar y eliminar valores */
/**
 El asignar un nuevo valor a una clave existente es sencillo - debido a que los diccionarios son completamente mutables, no existen obstáculos para modificarlos.
 dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}

dictionary['gato'] = 'minou'
print(dictionary)
*/
/**La función sorted() */
/**
 ¿Deseas que la salida este ordenada? Solo hay que agregar al bucle for lo siguiente:
 for key in sorted(dictionary.keys()):
 */
/**
 También existe un método denominado values(), funciona de manera muy similar al de keys(), pero regresa una lista de valores.
 dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}

for french in dictionary.values():
    print(french)


 */
/**Agregando nuevas claves
 El agregar una nueva clave con su valor a un diccionario es tan simple como cambiar un valor. Solo se tiene que asignar un valor a una nueva clave que no haya existido antes.
 Nota: este es un comportamiento muy diferente comparado a las listas, las cuales no permiten asignar valores a índices no existentes.
 dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}

dictionary['cisne'] = 'cygne'
print(dictionary)

dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}

dictionary.update({"pato": "canard"})
print(dictionary)

 */
/**
 Eliminado una clave
 Nota: al eliminar la clave también se removerá el valor asociado. Los valores no pueden existir sin sus claves.
Esto se logra con la instrucción del.
A continuación un ejemplo:
dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}

del dictionary['perro']
print(dictionary)

Para eliminar el ultimo elemento de la lista, se puede emplear el método popitem():
dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}

dictionary.popitem()
print(dictionary)    # salida: {'gato': 'chat', 'perro': 'chien'}

*/
/**Las tuplas y los diccionarios pueden trabajar juntos */
/**
 school_class = {}

while True:
    name = input("Ingresa el nombre del estudiante: ")
    if name == '':
        break
    
    score = int(input("Ingresa la calificación del estudiante (0-10): "))
    if score not in range(0, 11):
	    break
    
    if name in school_class:
        school_class[name] += (score,)
    else:
        school_class[name] = (score,)
        
for name in sorted(school_class.keys()):
    adding = 0
    counter = 0
    for score in school_class[name]:
        adding += score
        counter += 1
    print(name, ":", adding / counter)


 */
/**UNIR DOS DICCIONARIOS */
/**
 d1 = {'Adam Smith': 'A', 'Judy Paxton': 'B+'}
d2 = {'Mary Louis': 'A', 'Patrick White': 'C'}
d3 = {}

for item in (d1, d2):
    d3.update(item)

print(d3)
 */
/**TRANSFORMAR UNA LISTA EN UNA TUPLA */
/**
 my_list = ["car", "Ford", "flower", "Tulip"]

t = tuple(my_list)
print(t)
 */
/**TRANSFORMAR TUPLA EN DICCIONARIO */
/**
 colors = (("green", "#008000"), ("blue", "#0000FF"))

colors_dictionary = dict(colors)
print(colors_dictionary)
 */
/**8. Se puede emplear la palabra reservada del para eliminar un elemento, o un diccionario entero. Para eliminar todos los elementos de un diccionario se debe emplear el método clear():
 * 
 pol_esp_dictionary = {
    "zamek": "castillo",
    "woda": "agua",
    "gleba": "tierra"
    }

print(len(pol_esp_dictionary))    # salida: 3
del pol_esp_dictionary["zamek"]    # eliminar un elemento
print(len(pol_esp_dictionary))    # salida: 2

pol_esp_dictionary.clear()   # eliminar todos los elementos
print(len(pol_esp_dictionary))    # salida: 0

del pol_esp_dictionary    # elimina el diccionario

9. Para copiar un diccionario, emplea el método copy():
pol_esp_dictionary = {
    "zamek": "castillo",
    "woda": "agua",
    "gleba": "tierra"
    }

copy_dictionary = pol_esp_dictionary.copy()

 
*/
/**EXCEPCIONES */
/**
 ¿Cómo lo afrontas? ¿Cómo proteges tu código de la terminación abrupta, al usuario de la decepción y a ti mismo de la insatisfacción del usuario?

La primera idea que se te puede ocurrir es verificar si los datos proporcionados por el usuario son válidos y negarte a cooperar si los datos son incorrectos. En este caso, la verificación puede basarse en el hecho de que esperamos que la cadena de entrada contenga solo dígitos. 
Ya deberías poder implementar esta verificación y escribirla tu mismo, ¿no es así? También es posible comprobar si la variable value es de tipo int (Python tiene un medio especial para este tipo de comprobaciones - es un operador llamado is. La revisión en sí puede verse de la siguiente manera:
type(value) is int

Su resultado es true si el valor actual de la variable es del tipo int.

** La rama try-except
En el mundo de Python, hay una regla que dice: "Es mejor pedir perdón que pedir permiso".
En realidad, la regla dice: "es mejor manejar un error cuando ocurre que tratar de evitarlo
try:
	# Es un lugar donde
	# tu puedes hacer algo 
    # sin pedir permiso.
except:
	# Es un espacio dedicado  
    # exclusivamente para pedir perdón.

    la palabra clave reservada try marca el lugar donde intentas hacer algo sin permiso;
    la palabra clave reservada except comienza un lugar donde puedes mostrar tu talento para disculparte o pedir perdón.

    cualquier fragmento de código colocado entre try y except se ejecuta de una manera muy especial: cualquier error que ocurra aquí dentro no terminará la ejecución del programa. En cambio, el control saltará inmediatamente a la primera línea situada después de la palabra clave reservada except, y no se ejecutará ninguna otra línea del bloque try;
    el código en el bloque except se activa solo cuando se ha encontrado una excepción dentro del bloque try. No hay forma de llegar por ningún otro medio;
    cuando el bloque try o except se ejecutan con éxito, el control vuelve al proceso normal de ejecución y cualquier código ubicado más allá en el archivo fuente se ejecuta como si no hubiera pasado nada.

**Dos excepciones después de un try
try:
    value = int(input('Ingresa un número natural: '))
    print('El recíproco de', value, 'es', 1/value)        
except ValueError:
    print('No se que hacer con', value)    
except ZeroDivisionError:
    print('La división entre cero no está permitida en nuestro Universo.') 

    Además, la cantidad de except no está limitada - puedes especificar tantas o tan pocas como necesites, pero no se te olvide que ninguna de las excepciones se puede especificar más de una vez.

**EXCEPT PRETERMINADA
try:
    value = int(input('Ingresa un número natural: '))
    print('El recíproco de', value, 'es', 1/value)        
except ValueError:
    ('No se que hacer con.')    
except ZeroDivisionError:
    print('La división entre cero no está permitida en nuestro Universo.')    
except:
    print('Ha sucedido algo extraño, ¡lo siento!')

Hemos agregado un tercer except, pero esta vez no tiene un nombre de excepción específico – podemos decir que es anónimo o (lo que está más cerca de su función real) es el por defecto. Puedes esperar que cuando se genere una excepción y no haya un except dedicado a esa excepción, esta será manejada por la excepción por defecto.
¡el except por defecto debe ser el último except! ¡Siempre!

Error frente a depuración (Bug vs. debug)
La medida básica que un desarrollador puede utilizar contra los errores es - como era de esperarse - un depurador, mientras que el proceso durante el cual se eliminan los errores del código se llama depuración. Según un viejo chiste, la depuración es un complicado juego de misterio en el que eres simultáneamente el asesino, el detective y - la parte más dolorosa de la intriga - la víctima. ¿Estás listo para interpretar todos estos roles? Entonces debes armarte con un depurador.
Un depurador es un software especializado que puede controlar cómo se ejecuta tu programa. Con el depurador, puedes ejecutar tu código línea por línea, inspeccionar todos los estados de las variables y cambiar sus valores en cualquier momento sin modificar el código fuente, detener la ejecución del programa cuando se cumplen o no ciertas condiciones, y hacer muchas otras tareas útiles.



 */
/**TA-TE-TI */
/**
 from random import randrange


def display_board(board):
	print("+-------" * 3,"+", sep="")
	for row in range(3):
		print("|       " * 3,"|", sep="")
		for col in range(3):
			print("|   " + str(board[row][col]) + "   ", end="")
		print("|")
		print("|       " * 3,"|",sep="")
		print("+-------" * 3,"+",sep="")


def enter_move(board):
	ok = False	# suposición falsa - la necesitamos para entrar en el bucle
	while not ok:
		move = input("Ingresa tu movimiento: ") 
		ok = len(move) == 1 and move >= '1' and move <= '9' # ¿es valido lo que ingreso el usuario?
		if not ok:
			print("Movimiento erróneo, ingrésalo nuevamente") # no, no lo es. ingrésalo nuevamente
			continue
		move = int(move) - 1 	# numero de la celda, del 0 al 8
		row = move // 3 	# fila de la celda
		col = move % 3		# columna de la celda
		sign = board[row][col]	# marca el cuadro elegido
		ok = sign not in ['O','X'] 
		if not ok:	# esta ocupado, ingresa una posición nuevamente
			print("¡Cuadro ocupado, ingresa nuevamente!")
			continue
	board[row][col] = 'O' 	# colocar '0' al cuadro seleccionado


def make_list_of_free_fields(board):
	free = []	# la lista esta vacía inicialmente
	for row in range(3): # itera a través de las filas
		for col in range(3): # iitera a través de las columnas
			if board[row][col] not in ['O','X']: # ¿Está la celda libre?
				free.append((row,col)) # si, agrega una nueva tupla a la lista
	return free


def victory_for(board,sgn):
	if sgn == "X":	# ¿Estamos buscando X?
		who = 'me'	# Si, es la maquina
	elif sgn == "O": # ... ¿o estamos buscando O?
		who = 'you'	# Si, es el usuario
	else:
		who = None	# ¡No debemos de caer aquí!
	cross1 = cross2 = True  # para las diagonales
	for rc in range(3):
		if board[rc][0] == sgn and board[rc][1] == sgn and board[rc][2] == sgn:	# check row rc
			return who
		if board[0][rc] == sgn and board[1][rc] == sgn and board[2][rc] == sgn: # check column rc
			return who
		if board[rc][rc] != sgn: # revisar la primer diagonal
			cross1 = False
		if board[2 - rc][2 - rc] != sgn: # revisar la segunda diagonal
			cross2 = False
	if cross1 or cross2:
		return who
	return None


def draw_move(board):
	free = make_list_of_free_fields(board) # crea una lista de los cuadros vacios o libres
	cnt = len(free)
	if cnt > 0:	# si la lista no esta vacía, elegir un lugar para 'X' y colocarla
		this = randrange(cnt)
		row, col = free[this]
		board[row][col] = 'X'


board = [ [3 * j + i + 1 for i in range(3)] for j in range(3) ] # crear un tablero vacío
board[1][1] = 'X' # colocar la primer 'X' en el centro
free = make_list_of_free_fields(board)
human_turn = True # ¿De quien es turno ahora?
while len(free):
	display_board(board)
	if human_turn:
		enter_move(board)
		victor = victory_for(board,'O')
	else:	
		draw_move(board)
		victor = victory_for(board,'X')
	if victor != None:
		break
	human_turn = not human_turn		
	free = make_list_of_free_fields(board)

display_board(board)
if victor == 'you':
	print("¡Has ganado!")
elif victor == 'me':
	print("¡He ganado!")
else:
	print("¡Empate!")
 */