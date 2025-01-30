/**MODULOS */
/**
 Que es un modulo?
un archivo que contiene definiciones y sentencias de Python, que se pueden importar más tarde y utilizar cuando sea necesario.
Cada módulo consta de entidades (como un libro consta de capítulos). Estas entidades pueden ser funciones, variables, constantes, clases y objetos. Si se sabe como acceder a un módulo en particular, se puede utilizar cualquiera de las entidades que almacena.
Comencemos la discusión con uno de los módulos más utilizados, el que lleva por nombre math. Su nombre habla por sí mismo - el módulo contiene una rica colección de entidades (no solo funciones) que permiten a un programador implementar efectivamente cálculos que exigen el uso de funciones matemáticas, como sen() o log().
 
Importando un módulo
Para que un módulo sea utilizable, hay que importarlo (piensa en ello como sacar un libro del estante). La importación de un módulo se realiza mediante una instrucción llamada import. Nota: import es también una palabra clave reservada (con todas sus implicaciones).
import math

Namespace
Un namespace es un espacio (entendido en un contexto no físico) en el que existen algunos nombres y los nombres no entran en conflicto entre sí (es decir, no hay dos objetos diferentes con el mismo nombre)
Dentro de un determinado namespace, cada nombre debe permanecer único.
ejemplo
import math
print(math.sin(math.pi/2))
consola 1.0

Hemos definido nuestros propios pi y sin aquí.
import math

def sin(x):
    if 2 * x == pi:
        return 0.99999999
    else:
        return None

pi = 3.14

print(sin(pi/2))
print(math.sin(math.pi/2))

consola 
0.99999999
1.0
Como puedes ver, las entidades no se afectan entre sí.


from math import pi
La instrucción consta de los siguientes elementos:

    La palabra clave reservada from.
    El nombre del módulo a ser (selectivamente) importado.
    La palabra clave reservada import.
    El nombre o lista de nombres de la entidad o entidades las cuales estan siendo importadas al namespace.
La instrucción tiene este efecto:

    Las entidades listadas son las únicas que son importadas del módulo indicado.
    Los nombres de las entidades importadas pueden ser accedidas dentro del código sin especificar el nombre del módulo de origen.
    
from math import sin, pi

print(sin(pi/2))

mismo ejemplo
from math import sin, pi

print(sin(pi / 2))

pi = 3.14

def sin(x):
    if 2 * x == pi:
        return 0.99999999
    else:
        return None

print(sin(pi / 2))

console
1.0
0.99999999

 */
/**
 Importando un módulo: *
En el tercer método, la sintaxis del import es una forma más agresiva que la presentada anteriormente:
from module import *

Como puedes ver, el nombre de una entidad (o la lista de nombres de entidades) se reemplaza con un solo asterisco (*).
Tal instrucción importa todas las entidades del módulo indicado.
¿Es conveniente? Sí, lo es, ya que libera del deber de enumerar todos los nombres que se necesiten.
¿Es inseguro? Sí, a menos que conozcas todos los nombres proporcionados por el módulo, es posible que no puedas evitar conflictos de nombres. Trata esto como una solución temporal e intenta no usarlo en un código regular.

La palabra clave as
Si se importa un módulo y no se esta conforme con el nombre del módulo en particular (por ejemplo, si es el mismo que el de una de sus entidades ya definidas) puede dársele otro nombre: esto se llama aliasing o renombrado.
Aliasing (renombrado) hace que el módulo se identifique con un nombre diferente al original. Esto también puede acortar los nombres originales.
La creación de un alias se realiza junto con la importación del módulo, y exige la siguiente forma de la instrucción import:
import module as alias

ejemplo
import math as m
    
print(m.sin(m.pi/2))

ejemplo
from math import pi as PI, sin as sine
  
print(sine(PI/2))
  

 */
/**SECCION 2 */
/**Modulos selectos de python(math, random, platform) */
/**
dir()
La función devuelve una lista ordenada alfabéticamente la cual contiene todos los nombres de las entidades disponibles en el módulo:
dir(module)
  
Por ejemplo, se puede ejecutar el siguiente código para imprimir los nombres de todas las entidades dentro del módulo math:
import math
  
for name in dir(math):
  print(name, end="∖t")


/**   **Funciones selectas del módulo math*/
/**
El primer grupo de funciones de módulo math están relacionadas con trigonometría:

    sin(x) → el seno de x.
    cos(x) → el coseno de x.
    tan(x) → la tangente de x.
Todas estas funciones toman un argumento (una medida de ángulo expresada en radianes) y devuelven el resultado apropiado (ten cuidado con tan() - no todos los argumentos son aceptados).

Por supuesto, también están sus versiones inversas:

    asin(x) → el arcoseno de x.
    acos(x) → el arcocoseno de x.
    atan(x) → el arcotangente de x.

Estas funciones toman un argumento (verifican que sea correcto) y devuelven una medida de un ángulo en radianes.

Para trabajar eficazmente con mediciones de ángulos, el módulo math proporciona las siguientes entidades:

    pi → una constante con un valor que es una aproximación de π.
    radians(x) → una función que convierte x de grados a radianes.
    degrees(x) → una función que convierte x de radianes a grados.


Además de las funciones circulares (enumeradas anteriormente), el módulo math también contiene un conjunto de sus análogos hiperbólicos:

    sinh(x) → el seno hiperbólico.
    cosh(x) → el coseno hiperbólico.
    tanh(x) → la tangente hiperbólica.
    asinh(x) → el arcoseno hiperbólico.
    acosh(x) → el arcocoseno hiperbólico.
    atanh(x) → el arcotangente hiperbólico.



Existe otro grupo de las funciones math relacionadas con la exponenciación:

    e → una constante con un valor que es una aproximación del número de Euler (e)
    exp(x) → encontrar el valor de ex.
    log(x) → el logaritmo natural de x.
    log(x, b) → el logaritmo de x con base b.
    log10(x) → el logaritmo decimal de x (más preciso que log(x, 10))
    log2(x) → el logaritmo binario de x (más preciso que log(x, 2))

Nota: la función pow():

    pow(x, y) → fencuentra el valor de xy (toma en cuenta los dominios).

Esta es una función incorporada y no se tiene que importar.

El último grupo consta de algunas funciones de propósito general como:

    ceil(x) → devuelve el entero más pequeño mayor o igual que x.
    floor(x) → el entero más grande menor o igual que x.
    trunc(x) → el valor de x truncado a un entero (ten cuidado, no es equivalente a ceil o floor).
    factorial(x) → devuelve x! (x tiene que ser un valor entero y no negativo).
    hypot(x, y) → devuelve la longitud de la hipotenusa de un triángulo rectángulo con las longitudes de los catetos iguales a (x) y (y) (lo mismo que sqrt(pow(x, 2) + pow(y, 2)) pero más preciso).

 */
/**MODULO RANDOM */
/**
 Los algoritmos no son aleatorios, son deterministas y predecibles. Solo aquellos procesos físicos que se salgan completamente de nuestro control (como la intensidad de la radiación cósmica) pueden usarse como fuente de datos aleatorios reales. Los datos producidos por computadoras deterministas no pueden ser aleatorios de ninguna manera.
 La función general llamada random() (no debe confundirse con el nombre del módulo) produce un número flotante x entre el rango (0.0, 1.0) - en otras palabras: (0.0 <= x < 1.0).

 from random import random

for i in range(5):
    print(random())

   CONSOLE
   0.9535768927411208
0.5312710096244534
0.8737691983477731
0.5896799172452125
0.02116716297022092 

**La función seed
La función seed() es capaz de directamente establecer la semilla del generador. Te mostramos dos de sus variantes:

    seed() - establece la semilla con la hora actual.
    seed(int_value) - establece la semilla con el valor entero int_value.
Hemos modificado el programa anterior; de hecho, hemos eliminado cualquier rastro de aleatoriedad del código:
from random import random, seed

seed(0)

for i in range(5):
    print(random())

console
0.844421851525
0.75795440294
0.420571580831
0.258916750293
0.511274721369 
Debido al hecho de que la semilla siempre se establece con el mismo valor, la secuencia de valores generados siempre se ve igual.

**Las funciones randrange y randint
Si deseas valores aleatorios enteros, una de las siguientes funciones encajaría mejor:

    randrange(fin)
    randrange(inicio, fin)
    randrange(inicio, fin, incremento)
    randint(izquiera, derecha)
Las primeras tres invocaciones generarán un valor entero tomado (pseudoaleatoriamente) del rango:

    range(fin)
    range(inicio, fin)
    range(inicio, fin, incremento)
Toma en cuenta la exclusión implícita del lado derecho.

La última función es equivalente a randrange(izquierda, derecha+1) - genera el valor entero i, el cual cae en el rango [izquierda, derecha] (sin exclusión en el lado derecho).
 
EJEMPLO
from random import randrange, randint

print(randrange(1), end=' ')
print(randrange(0, 1), end=' ')
print(randrange(0, 1, 1), end=' ')
print(randint(0, 1))

CONSOLE
0 0 0 1

**Las funciones choice y sample
Como puedes ver, esta no es una buena herramienta para generar números para la lotería. Afortunadamente, existe una mejor solución que escribir tu propio código para verificar la singularidad de los números "sorteados".
Es una función con el nombre de choice:

    choice(secuencia)
    sample(secuencia, elementos_a_elegir=1)
La primera variante elige un elemento "aleatorio" de la secuencia de entrada y lo devuelve.
El segundo crea una lista (una muestra) que consta del elemento elementos_a_elegir (que por defecto es 1) «sorteado» de la secuencia de entrada.
EJEMPLO
from random import choice, sample

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(choice(my_list))
print(sample(my_list, 5))
print(sample(my_list, 10))
EJEMPLO
6
[7, 5, 10, 9, 3]
[6, 9, 5, 7, 2, 8, 1, 4, 3, 10]

*/
/**funcion plataform */
/**
 El módulo platform permite acceder a los datos de la plataforma subyacente, es decir, hardware, sistema operativo e información sobre la versión del intérprete.
 Existe también una función que puede mostrar todas las capas subyacentes en un solo vistazo, llamada platform. Simplemente devuelve una cadena que describe el entorno; por lo tanto, su salida está más dirigida a los humanos que al procesamiento automatizado (lo verás pronto).
 platform(aliased = False, terse = False)

Y ahora:

    aliased → cuando se establece a True (o cualquier valor distinto a cero) puede hacer que la función presente los nombres de capa subyacentes alternativos en lugar de los comunes.
    terse → cuando se establece a True (o cualquier valor distinto a cero) puede convencer a la función de presentar una forma más breve del resultado (si lo fuera posible).

    from platform import platform

print(platform())
print(platform(1))
print(platform(0, 1))
**console
Windows-Vista-6.0.6002-SP2
Windows-Vista-6.0.6002-SP2
Windows-Vista 

 */
/**La funcion machine */
/**
 En ocasiones, es posible que solo se desee conocer el nombre genérico del procesador que ejecuta el sistema operativo junto con Python y el código, una función llamada machine() te lo dirá. Como anteriormente, la función devuelve una cadena.
 from platform import machine

print(machine())
console
x86
 */
/**La funcion processor */
/**
 La función processor() devuelve una cadena con el nombre real del procesador (si lo fuese posible).
 from platform import processor

print(processor())

 */
/**La funcion system */
/**
 Una función llamada system() devuelve el nombre genérico del sistema operativo en una cadena.
 from platform import system

print(system())

 */
/**La funcion version */
/**
 La versión del sistema operativo se proporciona como una cadena por la función version().
 from platform import version

print(version())

 */
/**Las funciones python_implementation y python_version_tuple */
/**
 Si necesitas saber que versión de Python está ejecutando tu código, puedes verificarlo utilizando una serie de funciones dedicadas, aquí hay dos de ellas:
 
    python_implementation() → devuelve una cadena que denota la implementación de Python (espera CPython aquí, a menos que decidas utilizar cualquier rama de Python no canónica).
    python_version_tuple() → devuelve una tupla de tres elementos la cual contiene:
        La parte mayor de la versión de Python.
        La parte menor.
        El número del nivel de parche.

 */
/**seccion 3 MODULOS Y PAQUETES */
/**
 ¿Qué es un paquete?
 Un módulo es un contenedor lleno de funciones - puedes empaquetar tantas funciones como desees en un módulo y distribuirlo por todo el mundo.
 Crear muchos módulos puede causar desorden: tarde que temprano querrás agrupar tus módulos de la misma manera que previamente has agrupado funciones: ¿Existe un contenedor más general que un módulo?
 Sí lo hay, es un paquete: en el mundo de los módulos, un paquete juega un papel similar al de una carpeta o directorio en el mundo de los archivos.

 Si deseas decirle al usuario del módulo que una entidad en particular debe tratarse como privada (es decir, no debe usarse explícitamente fuera del módulo), puedes marcar su nombre con el prefijo _ o __. No olvides que esto es solo una recomendación, no una orden.

4. Los nombres shabang, shebang, hasbang, poundbang y hashpling describen el dígrafo escrito como #!, se utiliza para instruir a los sistemas operativos similares a Unix sobre cómo se debe iniciar el archivo fuente de Python. Esta convención no tiene efecto en MS Windows.
5. Si deseas convencer a Python de que debe tomar en cuenta el directorio de un paquete no estándar, su nombre debe insertarse/agregarse en/a la lista de directorios de importación almacenada en la variable path contenida en el módulo sys.

Tu primer módulo

 */
/**Tu primer paquete */
/**
 Python espera que haya un archivo con un nombre muy exclusivo dentro de la carpeta del paquete: __init__.py.
 El contenido del archivo se ejecuta cuando se importa cualquiera de los módulos del paquete. Si no deseas ninguna inicialización especial, puedes dejar el archivo vacío, pero no debes omitirlo.
 no solo la carpeta raiz puede contener el archivo __init.py__, también puedes ponerlo dentro de cualquiera de sus subcarpetas (subpaquetes). Puede ser útil si algunos de los subpaquetes requieren tratamiento individual o un tipo especial de inicialización.
 
 IMPORTACION DENTRO DE PAQUETES
 Puedes hacer tu vida más fácil usando un alias:
from sys import path

path.append('..∖∖packages')


import extra.good.best.sigma as sig
import extra.good.alpha as alp

print(sig.funS())
print(alp.funA())
 */
/**EJEMPLO */
/**
 Pregunta 2: Algunos paquetes adicionales y necesarios se almacenan dentro del directorio D:\Python\Project\Modules directory. Escribe un código asegurándote de que Python recorra el directorio para encontrar todos los módulos solicitados.
 import sys
# ¡Toma en cuenta las diagonales invertidas dobles!
sys.path.append("D:\\Python\\Project\\Modules")
 */


/**SECCION 4 */
/** El Ecosistema de Paquetes de Python y cómo usarlo*/
/**
 Para hacer girar este mundo, se deben establecer y mantener en movimiento dos entidades básicas: un repositorio centralizado de todos los paquetes de software disponibles; y una herramienta que permite a los usuarios acceder al repositorio. Ambas entidades ya existen y se pueden utilizar en cualquier momento.
El repositorio (o repo para abreviar) que mencionamos se llama PyPI (es la abreviatura de Python Package Index) y lo mantiene un grupo de trabajo llamado Packaging Working Group, una parte de la Python Software Foundation, cuya tarea principal es apoyar a los desarrolladores de Python en la diseminación de código eficiente.
 
El Repositorio de PyPI: la Tienda de Quesos
PyPI es completamente gratuito, puedes tomar un código y usarlo; no encontrarás cajero ni guardia de seguridad. Por supuesto, esto no te exime de ser cortés y honesto. Debes obedecer todos los términos de la licencia, así que no olvides leerlos.
PyPI es una tienda muy específica, no solo porque ofrece todos sus productos de forma gratuita. También requiere una herramienta especial para hacer uso de ella.
Afortunadamente, esta herramienta también es gratuita, por lo que si deseas hacer tu propia hamburguesa con queso digital utilizando los productos que ofrece PyPI Shop, necesitarás una herramienta gratuita llamada pip.
Es otro acrónimo, claro, pero su naturaleza es más compleja que el PyPI mencionado anteriormente, ya que es un ejemplo de acrónimo recursivo, lo que significa que el acrónimo se refiere a sí mismo, lo que significa que explicarlo es un proceso infinito.
Por qué? Porque pip significa "pip instala paquetes", y el pip dentro de "pip instala paquetes" significa "pip instala paquetes" y 

Cómo instalar pip
pip en MS Windows
El instalador de Python para MS Windows ya contiene pip, por lo que no es necesario seguir ningún otro paso para instalarlo. Desafortunadamente, si la variable PATH está mal configurada, es posible que pip no esté disponible.

Dependencias
podemos decir que la dependencia es un fenómeno que aparece cada vez que vas a utilizar un software que depende de otro software. Ten en cuenta que la dependencia puede incluir (y generalmente incluye) más de un nivel de desarrollo de software.´
infierno de dependencias.
Afortunadamente no - pip puede hacer todo esto por ti. Puede descubrir, identificar y resolver todas las dependencias. Además, puede hacerlo de la manera más inteligente, evitando descargas y reinstalaciones innecesarias.

Cómo usar pip
4. La lista de las actividades principales de pip tiene el siguiente aspecto:

    pip help operación_o_comando – muestra una breve descripción de pip.
    pip list – muestra una lista de los paquetes instalados actualmente.
    pip show nombre_del_paquete – muestra información que incluyen las dependencias del paquete.
    pip search cadena – busca en los directorios de PyPI para encontrar paquetes cuyos nombres contengan cadena.
    pip install nombre – instala el paquete nombre en todo el sistema (espera problemas cuando no tengas privilegios de administrador).
    pip install --user nombre – instala nombre solo para ti; ningún otro usuario de la plataforma podrá utilizarlo.
    pip install -U nombre – actualiza un paquete previamente instalado.
    pip uninstall nombre – desinstala un paquete previamente instalado.

*/