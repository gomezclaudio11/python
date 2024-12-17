/**MODULO 2 */
/**
FUNCIONES
 Una función (en este contexto) es una parte separada del 
 código de computadora el cual es capaz de:
 causar algún efecto 
 evaluar un valor  y devolverlo como el resultado de la función; 
 esto es lo que hace que las funciones de Python sean parientes 
 de los conceptos matemáticos.

 una función puede tener:

    Un efecto;
    Un resultado.
También existe un tercer componente de la función, muy 
importante - el o los argumento(s). 

¿Qué efecto tiene la función print()?

El efecto es muy útil y muy espectacular. La función:

    toma sus argumentos (puede aceptar más de un argumento y
     también puede aceptar menos de un argumento)
    los convierte a un formato legible si es necesario 
    (como puedes sospechar, las cadenas no requieren esta 
    acción, ya que la cadena ya es legible)
    y envía los datos resultantes al dispositivo de salida 
    (normalmente la consola); en otras palabras, todo lo que 
    pongas en la función print() se aparecerá en tu pantalla.

3. ¿Qué valor devuelve la función print()?

Ninguno. Su efecto es suficiente.

Instrucciones
Una línea puede estar vacía (por ejemplo, puede no contener 
ninguna instrucción) pero no debe contener dos, tres o más 
instrucciones. Esto está estrictamente prohibido.

1. La función print() es una función integrada imprime/envía un 
mensaje específico a la pantalla/ventana de consola.

2. Las funciones integradas, al contrario de las funciones 
definidas por el usuario, están siempre disponibles y no tienen
que ser importadas

6. En las cadenas de Python la barra diagonal inversa (\) es un 
carácter especial que anuncia que el siguiente carácter tiene 
un significado diferente, por ejemplo, \n (el carácter de 
nuevalínea) comienza una nuevalínea de salida.

9. Los parámetros end y sep se pueden usar para dar formato la 
salida de la función print(). El parámetro sep especifica el 
separador entre los argumentos emitidos. 
Por ejemplo, print("H", "E", "L", "L", "O", sep="-"),
mientras que el parámetro end especifica que imprimir al final
de la declaración de impresión.
*/
/*
2.2.1 Literales - los datos en sí mismos
Un literal se refiere a datos cuyos valores están determinados 
por el literal mismo.
Se utilizan literales para codificar datos y ponerlos dentro 
del código. Ahora mostraremos algunas convenciones que se deben
seguir al utilizar Python.

*ENTEROS

se puede afirmar que todos los números manejados por las computadoras modernas son de dos tipos:
enteros, es decir, aquellos que no tienen una parte fraccionaria,
y números punto-flotantes (o simplemente flotantes), los cuales contienen (o son capaces de contener) una parte fraccionaría.
 ¿Qué es lo que Python permite?. 
 El uso de guion bajo en los literales numéricos.*
Por lo tanto, el número se puede escribir ya sea así: 11111111, o como sigue: 11_111_111.

¿Cómo se codifican los números negativos en Python? 
Como normalmente se hace, agregando un signo de menos. Se puede escribir: -11111111, o -11_111_111.


Números octales y hexadecimales
Existen dos convenciones adicionales en Python que no son conocidas en el mundo de las matemáticas. El primero nos permite utilizar un número en su representación octal.
Si un número entero esta precedido por un código 0O o 0o (cero-o), el número será tratado como un valor octal. Esto significa que el número debe contener dígitos en el rango del [0..7] únicamente.
print(0o123)//83


La segunda convención nos permite utilizar números en hexadecimal. Dichos números deben ser precedidos por el prefijo 0x o 0X (cero-x).
print(0o123)//291

/**
 1. Sistema Binario (Base 2)

El sistema binario usa solo los números 0 y 1. Cada dígito representa una potencia de 2, empezando por el 0 de derecha a izquierda.

Ejemplo: El número binario 1010.

Para convertirlo a decimal:

    El dígito más a la derecha es 0, lo que significa 0 x 2^0 = 0.
    El siguiente es 1, lo que significa 1 x 2^1 = 2.
    El siguiente es 0, lo que significa 0 x 2^2 = 0.
    El siguiente es 1, lo que significa 1 x 2^3 = 8.

Sumamos: 8 + 0 + 2 + 0 = 10 en decimal.

Entonces, el número binario 1010 es igual a 10 en decimal.
2. Sistema Octal (Base 8)

El sistema octal usa los números del 0 al 7. Cada dígito representa una potencia de 8.

Ejemplo: El número octal 12.

Para convertirlo a decimal:

    El dígito más a la derecha es 2, lo que significa 2 x 8^0 = 2.
    El siguiente es 1, lo que significa 1 x 8^1 = 8.

Sumamos: 8 + 2 = 10 en decimal.

Entonces, el número octal 12 es igual a 10 en decimal.
3. Sistema Hexadecimal (Base 16)

El sistema hexadecimal usa los números del 0 al 9, pero también usa las letras A a F, donde:

    A = 10
    B = 11
    C = 12
    D = 13
    E = 14
    F = 15

Ejemplo: El número hexadecimal A.

Para convertirlo a decimal:

    A en hexadecimal es igual a 10 en decimal.

Ejemplo 2: El número hexadecimal 1A.

Para convertirlo a decimal:

    El dígito más a la derecha es A, lo que significa A = 10 x 16^0 = 10.
    El siguiente es 1, lo que significa 1 x 16^1 = 16.

Sumamos: 16 + 10 = 26 en decimal.

Entonces, el número hexadecimal 1A es igual a 26 en decimal.
 */
/*
*FLOTANTES
numeros que tienen una parte decimal no  vacia
Son números que tienen (o pueden tener) una parte fraccionaria después del punto decimal, y aunque esta definición es muy pobre, es suficiente para lo que se desea discutir.
 se debe asegurar que el número no contenga comas.
Por otro lado, no solo el punto hace que un número sea flotante. Se puede utilizar la letra e.
300000000
3 x 108
En Python, el mismo efecto puede ser logrado de una manera similar - observa lo siguiente:
3E8
La letra E (también se puede utilizar la letra minúscula e - proviene de la palabra exponente) la cual significa por diez a la n potencia.
Nota:

    El exponente (el valor después de la E) debe ser un valor entero;
    La base (el valor antes de la E) puede ser un valor entero o flotante.


*CADENAS
Las cadenas se emplean cuando se requiere procesar texto (como nombres de cualquier tipo, direcciones, novelas, etc.), no números.

*VALORES BOOLEANOS
se emplean para representar un valor muy abstracto - la veracidad.
El nombre proviene de George Boole (1815-1864), el autor de Las Leyes del Pensamiento, las cuales definen el Álgebra Booleana - una parte del álgebra que hace uso de dos valores: True y False, denotados como 1 y 0.
Afortunadamente, las computadoras solo conocen dos tipos de respuestas:

    Si, esto es verdad.
    No, esto es falso.
print(True>False)//true
print(True<False)//false

Extra  

Existe un literal especial más utilizado en Python: el literal None. Este literal es llamado un objeto de NoneType, y puede ser utilizado para representar la ausencia de un valor. Pronto se hablará más acerca de ello.


 */
/**Operadores - herramientas de manipulación de datos */
/**
 Exponenciación
 print(2 ** 3)//8
 print(2 ** 3.)//8.0
print(2. ** 3)//8.0
print(2. ** 3.)//8.0

    Cuando ambos ** argumentos son enteros, el resultado es entero, también;
    Cuando al menos un ** argumento es flotante, el resultado también es flotante.

División entera

Un símbolo de // (doble diagonal) es un operador de división entera. Difiere del operador estándar / en dos detalles:

    El resultado carece de la parte fraccionaria, está ausente (para los enteros), o siempre es igual a cero (para los flotantes); esto significa que los resultados siempre son redondeados;
    Se ajusta a la regla entero vs flotante.
print(6 // 3)
print(6 // 3.)
print(6. // 3)
print(6. // 3.)
2
2.0
2.0
2.0
El resultado de la división entera siempre se redondea al valor entero inferior mas cercano del resultado de la división no redondeada.
Esto es muy importante: el redondeo siempre va hacia abajo.
 Note  

La division entera también se le suele llamar en inglés floor division. Más adelante te cruzarás con este término.
Nota: el operador en ocasiones también es denominado módulo en otros lenguajes de programación.



*RESIDUO 
El siguiente operador es uno muy peculiar, porque no tiene un equivalente dentro de los operadores aritméticos tradicionales.
El resultado de la operación es el residuo que queda de la división entera.
En otras palabras, es el valor que sobra después de dividir un valor entre otro para producir un resultado enterO
print(14 % 4)//2
Como puedes observar, el resultado es dos. Esta es la razón:

    14 // 4 da como resultado un 3 → esta es la parte entera, es decir el cociente;
    3 * 4 da como resultado 12 → como resultado de la multiplicación entre el cociente y el divisor;
    14 - 12 da como resultado 2 → este es el residuo.

print(12 % 4.5)

3.0 – no 3 pero 3.0. La regla aun funciona:

    12 // 4.5 da 2.0,
    2.0 * 4.5 da 9.0,
    12 - 9.0 da 3.0. 
*/
/**
 6. Algunos operadores actúan antes que otros, a esto se le llama - jerarquía de prioridades:

    El operador ** (exponencial) tiene la prioridad más alta;
    Posteriormente los operadores unarios + y - (nota: los operadores unarios a la derecha del operador exponencial enlazan con mayor fuerza, por ejemplo 4 ** -1 es igual a 0.25)
    Después *, /, //, y %,
    Finalmente, la prioridad más baja: los operadores binarios + y -.

 */

/**VARIABLES */
/**
 
    Los nombres de las variables deben estar en minúsculas, con palabras separadas por guiones bajos para mejorar la legibilidad (por ejemplo, var, my_variable)
    Los nombres de las funciones siguen la misma convención que los nombres de las variables (por ejemplo, fun, my_function)
    También es posible usar letras mixtas (por ejemplo, myVariable), pero solo en contextos donde ese ya es el estilo predominante, para mantener la compatibilidad retroactiva con la convención adoptada.
Palabras Clave

Observa las palabras que juegan un papel muy importante en cada programa de Python.

['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

En Python, no se utiliza explícitamente una palabra clave como let o var para declarar variables, ya que el lenguaje maneja esto de manera implícita. Simplemente asignas un valor a una variable escribiendo el nombre de la variable seguido del valor.
Ejemplo en Python:

x = 10
nombre = "Tobías"

Python es un lenguaje de tipado dinámico, lo que significa que no es necesario especificar el tipo de la variable (entero, cadena, etc.) al declararla. Python deduce automáticamente el tipo del valor que se le asigna.
Diferencias clave:

    En JavaScript, se usan let, var, y const para declarar variables, donde let y const son más modernos y preferidos para declarar variables con bloque de alcance (scope).
    En Python, simplemente se asignan las variables sin palabras clave especiales, y el ámbito de las variables se determina por el contexto (funciones, clases, etc.).
 */
/**
 Operadores Abreviado
x = x * 2 //x *= 2
sheep = sheep + 1 //sheep += 1





 */
/**COMENTARIOS */
/**
 ejecución, es denominado un comentario.
 En Python, un comentario es un texto que comienza con el símbolo # y se extiende hasta el final de la línea.
 Si se desea colocar un comentario que abarca varias líneas, se debe colocar este símbolo en cada línea. Justo como en el siguiente código:

 # Este programa evalúa la hipotenusa c.
# a y b son las longitudes de los cátetos.
a = 3.0
b = 4.0
c = (a ** 2 + b ** 2) ** 0.5  # Se emplea ** en lugar de una raíz cuadrada.
print("c =", c)


 */

/**INTERACCION CON EL USUARIO */
/**la funcion INPUT() */
/**
 Ahora se introducirá una nueva función, la cual pareciese ser un reflejo de la función print().
¿Por qué? Bueno, print() envía datos a la consola.
Esta nueva función obtiene datos de ella.
print() no tiene un resultado utilizable. La importancia de esta nueva función es que regresa un valor muy utilizable.
La función se llama input(). El nombre de la función lo dice todo.
La función input() es capaz de leer datos que fueron introducidos por el usuario y pasar esos datos al programa en ejecución.
El programa entonces puede manipular los datos, haciendo que el código sea verdaderamente interactivo.
Todos los programas leen y procesan datos. Un programa que no obtiene datos de entrada del usuario es un programa sordo.

print("dime lo que sea ")
anything = input()
print("mmm", anything, "ok")

IMPORTANTEEEE Se ha dicho antes, pero hay que decirlo sin ambigüedades una vez más: el resultado de la función input() es una cadena.

CONVERSIONES
Python ofrece dos simples funciones para especificar un tipo de dato y resolver este problema, aquí están: int() y float().
Sus nombres indican cual es su función:

    La función int() toma un argumento (por ejemplo, una cadena: int(string)) e intenta convertirlo a un valor entero; si llegase a fallar, el programa entero fallará también (existe una manera de solucionar esto, se explicará mas adelante);
    La función float() toma un argumento (por ejemplo, una cadena: float(string)) e intenta convertirlo a flotante (el resto es lo mismo).
ejemplo
anything = float(input("Ingresa un número: "))
something = anything ** 2.0
print(anything, "a la potencia de 2 es", something)
//Ingresa un número: 2
//2.0 a la potencia de 2 es 4.0

EJEMPLO
leg_a = float(input("Ingresa la longitud del primer cateto: "))
leg_b = float(input("Ingresa la longitud del segundo cateto: "))
hypo = (leg_a**2 + leg_b**2) ** .5
print("La longitud de la hipotenusa es:", hypo)
//Ingresa la longitud del primer cateto: 3
Ingresa la longitud del segundo cateto: 2
La longitud de la hipotenusa es: 3.605551275463989
 */

/**OPERADORES CADENA */
/**
 El signo de + (más), al ser aplicado a dos cadenas, se convierte en un operador de concatenación:
 string + string
No olvides, si se desea que el signo + sea un concatenador, no un sumador, solo se debe asegurar que ambos argumentos sean cadenas.

fnam = input("¿Me puedes dar tu nombre por favor? ")
lnam = input("¿Me puedes dar tu apellido por favor? ")
print("Gracias. ")
print("\nTu nombre es " + fnam + " " + lnam + ".")

 */
/**REPLICACION */
/**
 El signo de * (asterisco), cuando es aplicado a una cadena y a un número (o a un número y cadena) se convierte en un operador de replicación:
 string * number
number * string


    "James" * 3 produce "JamesJamesJames"
    3 * "an" produce "ananan"
    5 * "2" (o "2" * 5) produce "22222" (no 10!) 

Un número menor o igual a cero produce una cadena vacía.

 */
/**Conversiones de tipos una vez más */
/**
 str()

A estas alturas ya sabes como emplear las funciones int() y float() para convertir una cadena a un número.
Este tipo de conversión no es en un solo sentido. También se puede convertir un numero a una cadena, lo cual es más fácil y seguro - esta operación es posible hacerla siempre.
str(number)


 */
/**EJEMPLO */
/*
El resultado de print(x * "5") es 55 porque en Python, cuando multiplicas una cadena por un número entero, se repite la cadena esa cantidad de veces. No estás realizando una operación matemática, sino una operación de repetición de cadenas.
Explicación paso a paso:

    Entrada del usuario:
        El usuario ingresa el número 2, y con la función int(input(...)), este valor se convierte en un entero. Entonces, x = 2.

    Multiplicación de una cadena por un número entero:
        En Python, la expresión "5" * 2 significa que la cadena "5" se repite dos veces.
        Así que, el resultado es "55" (no es un número, es una cadena).

Ejemplo:

python

x = 2
print(x * "5")  # Salida: 55

En lugar de multiplicar el número 5, Python repite la cadena "5" dos veces, lo que da como resultado la cadena "55".
Si quieres multiplicar numéricamente el valor, debes convertir "5" a entero o flotante:

python

x = int(input("Ingresa un número: "))  # El usuario ingresa 2
print(x * int("5"))  # Esto ahora dará 10, porque multiplica 2 * 5

Entonces, en tu código original, "5" no es tratada como un número, sino como una cadena que se repite.
*/
