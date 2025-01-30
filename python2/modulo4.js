/**MODULO 4 */
/******************* */
/**SECCION 1 */
/**GENERADORES ITERADORES Y CIERRES */
/**
 Generadores: donde encontrarlos
 Un generador de Python es un fragmento de código especializado capaz de producir una serie de valores y controlar el proceso de iteración. Esta es la razón por la cual los generadores a menudo se llaman iteradores, y aunque hay quienes pueden encontrar una diferencia entre estos dos, aquí los trataremos como uno mismo.
for i in range(5):
print(i)

La función range() es un generador, la cual también es un iterador.
Cuál es la diferencia?
Una función devuelve un valor bien definido, el cual, puede ser el resultado de una evaluación compleja, por ejemplo, de un polinomio, y se invoca una vez, solo una vez.
Un generador devuelve una serie de valores, y en general, se invoca (implícitamente) más de una vez.
En el ejemplo, el generador range() se invoca seis veces, proporcionando cinco valores de cero a cuatro, y finalmente señaliza que la serie está completa.

El protocolo iterador es una forma en que un objeto debe comportarse para ajustarse a las reglas impuestas por el contexto de las sentencias for e in. Un objeto conforme a estas reglas se llama iterador.
Un iterador debe proporcionar dos métodos:
    __iter__() el cual debe devolver el objeto en sí y que se invoca una vez (es necesario para que Python inicie con éxito la iteración).
    __next__() el cual debe devolver el siguiente valor (primero, segundo, etc). de la serie deseada: será invocado por las sentencias for/in para pasar a la siguiente iteración; si no hay más valores a proporcionar, el método deberá generar la excepción StopIteration.
class Fib:
    def __init__(self, nn):
        print("__init__")
        self.__n = nn
        self.__i = 0
        self.__p1 = self.__p2 = 1

    def __iter__(self):
        print("__iter__")
        return self

    def __next__(self):
        print("__next__")		
        self.__i += 1
        if self.__i > self.__n:
            raise StopIteration
        if self.__i in [1, 2]:
            return 1
        ret = self.__p1 + self.__p2
        self.__p1, self.__p2 = self.__p2, ret
        return ret


for i in Fib(10):
    print(i)
 Console 
__init__
__iter__
__next__
1
__next__
1
__next__
2
__next__
3
__next__
5
__next__
8
__next__
13
__next__
21
__next__
34
__next__
55
__next__

*/
/**LA SENTENCIA YIELD */
/**
 El protocolo iterador no es difícil de entender y usar, pero también es indiscutible que el protocolo es bastante inconveniente.
La principal molestia que tiene es que necesita guardar el estado de la iteración en las invocaciones subsecuentes de __iter__.
Es por eso que Python ofrece una forma mucho más efectiva, conveniente y elegante de escribir iteradores.
El concepto se basa fundamentalmente en un mecanismo muy específico proporcionado por la palabra clave reservada yield.
Se puede ver a la palabra clave reservada yield como un hermano más inteligente de la sentencia return, con una diferencia esencial.
def fun(n):
    for i in range(n):
        return i

Se ve extraño, ¿no? Está claro que el bucle for no tiene posibilidad de terminar su primera ejecución, ya que el return lo romperá irrevocablemente.
Además, invocar la función no cambiará nada: el bucle for comenzará desde cero y se romperá inmediatamente.
podemos decir que dicha función no puede guardar y restaurar su estado en invocaciones posteriores.
Esto también significa que una función como esta no se puede usar como generador.
def fun(n):
      for i in range(n):
         yield i 

Hemos puesto yield en lugar de return. Esta pequeña enmienda convierte la función en un generador, y el ejecutar la sentencia yield tiene algunos efectos muy interesantes.
Primeramente, proporciona el valor de la expresión especificada después de la palabra clave reservada yield, al igual que return, pero no pierde el estado de la función.
Todos los valores de las variables están congelados y esperan la próxima invocación, cuando se reanuda la ejecución (no desde cero, como ocurre después de un return).
Hay una limitación importante: dicha función no debe invocarse explícitamente ya que no es una función; es un objeto generador.
La invocación devolverá el identificador del objeto, no la serie que esperamos del generador.

*/
/**COMO CONSTRUIR UN GENERADOR */
/**
 def fun(n):
    for i in range(n):
        yield i


for v in fun(5):
    print(v)
0
1
2
3
4

¿Qué pasa si necesitas un generador para producir las primeras n potencias de 2?

def powers_of_2(n):
    power = 1
    for i in range(n):
        yield power
        power *= 2
 
 
for v in powers_of_2(8):
    print(v)
 
Listas por comprensión

Los generadores también se pueden usar con listas por comprensión, justo como aquí:
def powers_of_2(n):
    power = 1
    for i in range(n):
        yield power
        power *= 2
 
 
t = [x for x in powers_of_2(5)]
print(t) 

La función list()
La función list() puede transformar una serie de invocaciones de generador subsequentes en una lista real:
def powers_of_2(n):
    power = 1
    for i in range(n):
        yield power
        power *= 2
 
 
t = list(powers_of_2(3))
print(t) 

El operador in
Además, el contexto creado por el operador in también te permite usar un generador.
El ejemplo muestra cómo hacerlo:
def powers_of_2(n):
    power = 1
    for i in range(n):
        yield power
        power *= 2
 
 
for i in range(20):
    if i in powers_of_2(4):
        print(i) 

El generador de números Fibonacci
Ahora veamos un generador de números de la serie Fibonacci, asegurandonos que se vea mucho mejor que la versión orientada a objetos basada en la implementación directa del protocolo iterador.
def fibonacci(n):
    p = pp = 1
    for i in range(n):
        if i in [0, 1]:
            yield 1
        else:
            n = p + pp
            pp, p = p, n
            yield n

fibs = list(fibonacci(10))
print(fibs)


*/
/** Más acerca de listas por comprensión*/
/**
 Debes poder recordar las reglas que rigen la creación y el uso de un fenómeno de Python llamado listas por comprensión: una forma simple de crear listas y sus contenidos.
 list_1 = []

for ex in range(6):
    list_1.append(10 ** ex)

list_2 = [10 ** ex for ex in range(6)]

print(list_1)
print(list_2)
  [1, 10, 100, 1000, 10000, 100000]

[1, 10, 100, 1000, 10000, 100000]
La primer parte utiliza una forma rutinaria del bucle for, mientras que la segunda hace uso de listas por comprensión y construye la lista en el momento, sin necesidad de un bucle o cualquier otro código.

Una expresión condicional: una forma de seleccionar uno de dos valores diferentes en función del resultado de una expresión Booleana.
Observa:
expression_one if condition else expression_two

Puede parecer un poco sorprendente a primera vista, pero hay que tener en cuenta que no es una instrucción condicional. Además, no es una instrucción en lo absoluto. Es un operador.

the_list = []

for x in range(10):
    the_list.append(1 if x % 2 == 0 else 0)

print(the_list)
Console 
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
El código llena una lista con 1s y 0s, si el índice de un elemento particular es impar, el elemento se establece a 0, y a 1 de lo contrario.

the_list = [1 if x % 2 == 0 else 0 for x in range(10)]

print(the_list)
  Console 
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0]

Listas por comprensión versus generadores

Ahora observa el código a continuación y ve si puedes encontrar el detalle que convierte una comprensión de lista en un generador:
the_list = [1 if x % 2 == 0 else 0 for x in range(10)]
the_generator = (1 if x % 2 == 0 else 0 for x in range(10))

for v in the_list:
    print(v, end=" ")
print()

for v in the_generator:
    print(v, end=" ")
print()

1 0 1 0 1 0 1 0 1 0
1 0 1 0 1 0 1 0 1 0 

len(the_list) dará como resultado 10. Claro y predecible. len(the_generator) generará una excepción, y verás el siguiente mensaje:
TypeError: object of type 'generator' has no len()

*/
/**La función lambda */
/**
 La función lambda es un concepto tomado de las matemáticas, más específicamente, de una parte llamada el Cálculo Lambda, pero estos dos fenómenos no son iguales.
Los matemáticos usan el Cálculo Lambda en sistemas formales conectados con: la lógica, la recursividad o la demostrabilidad de teoremas. Los programadores usan la función lambda para simplificar el código, hacerlo más claro y fácil de entender.
Una función lambda es una función sin nombre (también puedes llamarla una función anónima). Por supuesto, tal afirmación plantea inmediatamente la pregunta: ¿cómo se usa algo que no se puede identificar?
lambda parameters: expression

Tal cláusula devuelve el valor de la expresión al tomar en cuenta el valor del argumento lambda actual.
two = lambda: 2
sqr = lambda x: x * x
pwr = lambda x, y: x ** y

for a in range(-2, 3):
    print(sqr(a), end=" ")
    print(pwr(a, two()))
4 4
1 1
0 0
1 1
4 4 

Vamos a analizarlo:
    La primer lambda es una función anónima sin parámetros que siempre devuelve un 2. Como se ha asignado a una variable llamada two, podemos decir que la función ya no es anónima, y se puede usar su nombre para invocarla.
    La segunda es una función anónima de un parámetro que devuelve el valor de su argumento al cuadrado. Se ha nombrado sqr.
    La tercer lambda toma dos parámetros y devuelve el valor del primero elevado al segundo. El nombre de la variable que lleva la lambda habla por si mismo. No se utiliza pow para evitar confusiones con la función incorporada del mismo nombre y el mismo propósito.
 */
/** ¿Cómo usar lambdas y para qué?*/
/**
 La parte más interesante de usar lambdas aparece cuando puedes usarlas en su forma pura: como partes anónimas de código destinadas a evaluar un resultado.
def print_function(args, fun):
    for x in args:
        print('f(', x,')=', fun(x), sep='')

def poly(x):
    return 2 * x**2 - 4 * x + 2

print_function([x for x in range(-2, 3)], poly)

Console 
f(-2)=18
f(-1)=8
f(0)=2
f(1)=0
f(2)=2

Analicémoslo. La función print_function() toma dos parámetros:
    El primero, una lista de argumentos para los que queremos imprimir los resultados.
    El segundo, una función que debe invocarse tantas veces como el número de valores que se recopilan dentro del primer parámetro.
Nota: También hemos definido una función llamada poly(), esta es la función cuyos valores vamos a imprimir. El cálculo que realiza la función no es muy sofisticado: es el polinomio (de ahí su nombre) de la forma:
f(x) = 2x2 - 4x + 2
El nombre de la función se pasa a print_function() junto con un conjunto de cinco argumentos diferentes, el conjunto está construido con una cláusula de comprensión de la lista.
¿Podemos evitar definir la función poly(), ya que no la vamos a usar más de una vez? Si, podemos: este es el beneficio que puede aportar una función lambda.

def print_function(args, fun):
    for x in args:
        print('f(', x,')=', fun(x), sep='')
 
print_function([x for x in range(-2, 3)], lambda x: 2 * x**2 - 4 * x + 2)
 La función print_function() se ha mantenido exactamente igual, pero no hay una función poly(). Ya no la necesitamos, ya que el polinomio ahora está directamente dentro de la invocación de la función print_function() en forma de una lambda 


 */
/**Lambdas y la función map() */
/**
 En el más simple de todos los casos posibles, la función map():
 map(function, list)

Toma dos argumentos:
    Una función.
    Una lista.
La descripción anterior está extremadamente simplificada, ya que:
    El segundo argumento map() puede ser cualquier entidad que se pueda iterar (por ejemplo, una tupla o un generador).
    map() puede aceptar más de dos argumentos.
La función map() aplica la función pasada por su primer argumento a todos los elementos de su segundo argumento y devuelve un iterador que entrega todos los resultados de funciones subsequentes.
Puedes usar el iterador resultante en un bucle o convertirlo en una lista usando la función list().

list_1 = [x for x in range(5)]
list_2 = list(map(lambda x: 2 ** x, list_1))
print(list_2)

for x in map(lambda x: x * x, list_2):
    print(x, end=' ')
print()
 Console 
[1, 2, 4, 8, 16]
1 4 16 64 256 

Esta es la explicación:
    Se construye la list_1 con valores del 0 al 4.
    Después, se utiliza map junto con la primer lambda para crear una nueva lista en la que todos los elementos han sido evaluados como 2 elevado a la potencia tomada del elemento correspondiente de list_1.
    list_2 se imprime.
    En el siguiente paso, se usa nuevamente la función map() para hacer uso del generador que devuelve, e imprimir directamente todos los valores que entrega; como puedes ver, hemos usado la segunda lambda aquí - solo eleva al cuadrado cada elemento de list_2.


 */
/**Lambdas y la función filter() */
/**
 Otra función de Python que se puede embellecer significativamente mediante la aplicación de una lambda es filter().
Espera el mismo tipo de argumentos que map(), pero hace algo diferente: filtra su segundo argumento mientras es guiado por direcciones que fluyen desde la función especificada en el primer argumento (la función se invoca para cada elemento de la lista, al igual que en map()).
Los elementos que devuelven True de la función pasan el filtro, los otros son rechazados.

from random import seed, randint

seed()
data = [randint(-10,10) for x in range(5)]
filtered = list(filter(lambda x: x > 0 and x % 2 == 0, data))

print(data)
print(filtered)
 
 Console 
[3, 7, -3, -3, 9]
[]

Nota: hemos hecho uso del módulo random para inicializar el generador de números aleatorios (que no debe confundirse con los generadores de los que acabamos de hablar) con la función seed(), para producir cinco valores enteros aleatorios de -10 a 10 usando la función randint().
Luego se filtra la lista y solo se aceptan los números que son pares y mayores que cero.

*/
/**Una breve explicación de cierres */
/**
cierres es una técnica que permite almacenar valores a pesar de que el contexto en el que se crearon ya no existe. ¿Complicado? Un poco.
def outer(par):
    loc = par
 
 
var = 1
outer(var)
 
print(par)
print(loc) 
El ejemplo es obviamente erróneo.
Las dos últimas líneas provocarán una excepción NameError - ni par ni loc son accesibles fuera de la función. Ambas variables existen cuando y solo cuando la función exterior() esta siendo ejecutada.

def outer(par):
    loc = par

    def inner():
        return loc
    return inner


var = 1
fun = outer(var)
print(fun())
 Console 
1

Hay un elemento completamente nuevo - una función (llamada inner) dentro de otra función (llamada outer).
¿Cómo funciona? Como cualquier otra función excepto por el hecho de que inner() solo se puede invocar desde dentro de outer(). Podemos decir que inner() es una herramienta privada de outer(), ninguna otra parte del código la puede acceder.
Observa cuidadosamente:
    La función inner() devuelve el valor de la variable accesible dentro de su alcance, ya que interior() puede utilizar cualquiera de las entidades a disposición de outer().
    La función outer() devuelve la función inner() por si misma; mejor dicho, devuelve una copia de la función inner() al momento de la invocación de la función outer(); la función congelada contiene su entorno completo, incluido el estado de todas las variables locales, lo que también significa que el valor de loc se retiene con éxito, aunque outer() ya ha dejado de existir.
La función devuelta durante la invocación de outer() es un cierre.
Un cierre se debe invocar exactamente de la misma manera en que se ha declarado.

def make_closure(par):
    loc = par

    def power(p):
        return p ** loc
    return power


fsqr = make_closure(2)
fcub = make_closure(3)

for i in range(5):
    print(i, fsqr(i), fcub(i))
    
0 0 0
1 1 1
2 4 8
3 9 27
4 16 64 

Esto significa que el cierre no solo utiliza el ambiente congelado, sino que también puede modificar su comportamiento utilizando valores tomados del exterior.
Este ejemplo muestra una circunstancia más interesante: puedes crear tantos cierres como quieras usando el mismo código. Esto se hace con una función llamada make_closure(). Nota:
    El primer cierre obtenido de make_closure() define una herramienta que eleva al cuadrado su argumento.
    El segundo está diseñado para elevar el argumento al cubo.

Esta función utiliza cierres (closures), un concepto fundamental en programación funcional. Un cierre es una función definida dentro de otra que recuerda las variables locales del entorno donde se creó, incluso después de que ese entorno haya finalizado.
make_closure genera funciones personalizadas (power) que recuerdan el valor de loc.
Estas funciones personalizadas se utilizan luego para realizar cálculos específicos con diferentes valores de loc.
Este es un ejemplo típico del uso de cierres para crear funciones dinámicas.
La conversión de i del bucle for en p de la función power ocurre cuando se llama a la función fsqr o fcub dentro del cuerpo del bucle


*/
/**
  NOTA  
PEP 8, la Guía de Estilo para Código Python, recomienda que las funciones lambdas no deben asignarse a variables, sino que deben definirse como funciones.
Esto significa que es mejor utilizar una sentencia def, y evita usar una sentencia de asignación que vincule una expresión lambda a un identificador. Analiza el código a continuación:
# Recomendado:
def f(x): return 3*x

# No recomendado:
f = lambda x: 3*x

La vinculación de lambdas a identificadores generalmente duplica la funcionalidad de la declaración def. El uso de sentencias def, por otro lado, genera más líneas de código.

Es importante comprender que a la realidad a menudo le gusta dibujar sus propios escenarios, que no necesariamente siguen las convenciones o recomendaciones formales. Si decides seguirlos o no, dependerá de muchas cosas: tus preferencias, otras convenciones adoptadas, las pautas internas de la empresa, la compatibilidad con el código existente, etc. Toma en cuenta esto.

*/
/****************************** */
/**SECCION 2 */
/**ARCHIVOS */
/**
  Accediendo archivos desde código en Python
  Uno de los problemas más comunes en el trabajo del desarrollador es procesar datos almacenados en archivos que generalmente se almacenan físicamente utilizando dispositivos de almacenamiento: discos duros, ópticos, de red o de estado sólido.
la forma en que Python accede y procesa los archivos se implementa utilizando un conjunto consistente de objetos. No hay mejor momento para hablar de esto.

Nombre de archivos
os nombres de archivo de sistemas Unix/Linux distinguen entre mayúsculas y minúsculas. Los sistemas Windows almacenan mayúsculas y minúsculas en el nombre del archivo, pero no distinguen entre ellas.
Esto significa que estas dos cadenas: EsteEsElNombreDelArchivo y esteeselnombredelarchivo describen dos archivos diferentes en sistemas Unix/Linux, pero tienen el mismo nombre para un solo archivo en sistemas Windows.
La diferencia principal y más llamativa es que debes usar dos separadores diferentes para los nombres de directorio: \ en Windows, y / en Unix/Linux.
Esta diferencia no es muy importante para el usuario normal, pero es muy importante al escribir programas en Python.
Para entender por qué, intenta recordar el papel muy específico que desempeña \ dentro de las cadenas en Python.
los nombres de archivo de Windows deben escribirse de la siguiente manera:
    name = "\\dir\\file"
Afortunadamente, también hay una solución más. Python es lo suficientemente inteligente como para poder convertir diagonales en diagonales invertidas cada vez que descubre que el sistema operativo lo requiere.
name = "/dir/file"
name = "c:/dir/file"
  Funcionará también con Windows.
Cualquier programa escrito en Python (y no solo en Python, porque esa convención se aplica a prácticamente todos los lenguajes de programación) no se comunica con los archivos directamente, sino a través de algunas entidades abstractas que se nombran de manera diferente en los distintos lenguajes o entornos, los términos más utilizados son handles o manejadores (un tipo de puntero inteligente) o streams o flujos (una especie de canal), los usaremos como sinónimos aquí.
El programador, que tiene un conjunto de funciones y métodos, puede realizar ciertas operaciones en el flujo o stream, que afectan los archivos reales utilizando mecanismos contenidos en el núcleo del sistema operativo.
De esta forma, puedes implementar el proceso de acceso a cualquier archivo, incluso cuando el nombre del archivo es desconocido al momento de escribir el programa.
Las operaciones realizadas con el flujo o stream abstracto reflejan las actividades relacionadas con el archivo físico.
Para conectar (vincular) el stream con el archivo, es necesario realizar una operación explícita.

La operación de conectar un stream con un archivo es llamada abrir el archivo, mientras que desconectar el enlace se denomina cerrar el archivo.
Por lo tanto, la conclusión es que la primera operación realizada en el flujo o stream es siempre open (abrir) y la ultima es close (cerrar). El programa, en efecto, es libre de manipular el stream entre estos dos eventos y manejar el archivo asociado.
Digamos nuevamente que la apertura del stream puede fallar, y puede ocurrir debido a varias razones: la más común es la falta de un archivo con un nombre específico.
También puede suceder que el archivo físico exista, pero el programa no puede abrirlo. También existe el riesgo de que el programa haya abierto demasiados streams, y el sistema operativo específico puede no permitir la apertura simultánea de más de n archivos (por ejemplo, 200).
Un programa bien escrito debe detectar estas aperturas fallidas y reaccionar en consecuencia.

 */
/**Flujos de archivos (streams) */
/**
 La apertura del stream no solo está asociada con el archivo, sino que también se debe declarar la manera en que se procesará el stream. Esta declaración se llama open mode (modo de apertura).
Hay dos operaciones básicas a realizar con el stream:
    Lectura del stream: las porciones de los datos se recuperan del archivo y se colocan en un área de memoria administrada por el programa (por ejemplo, una variable).
    Escritura del stream: Las porciones de los datos de la memoria (por ejemplo, una variable) se transfieren al archivo.
Existen tres modos básicos utilizados para abrir un stream:
    Modo Lectura: un stream abierto en este modo permite solo operaciones de lectura; intentar escribir en la transmisión provocará una excepción (la excepción se llama UnsupportedOperation, la cual hereda el OSError y el ValueError, y proviene del módulo io).
    Modo Escritura: un stream abierto en este modo permite solo operaciones de escritura; intentar leer el stream provocará la excepción mencionada anteriormente.
    Modo Actualizar: un stream abierto en este modo permite tanto lectura como escritura.
 El stream se comporta casi como una grabadora.
Cuando lees algo de un stream, un cabezal virtual se mueve sobre la transmisión de acuerdo con el número de bytes transferidos desde el stream.
Cuando escribes algo en el stream el mismo cabezal se mueve a lo largo del stream registrando los datos de la memoria.
Siempre que hablemos de leer y escribir en el stream, trata de imaginar esta analogía. Los libros de programación se refieren a este mecanismo como la posición actual del archivo, aquí también usaremos este término.

*/
/** Manejo de archivos*/
/**
 Python supone que cada archivo está oculto detrás de un objeto de una clase adecuada.
 Los archivos se pueden procesar de muchas maneras diferentes: algunos dependen del contenido del archivo, otros de las intenciones del programador.
 Un objeto de una clase adecuada es creado cuando abres el archivo y lo aniquilas al momento de cerrarlo.
 Entre estos dos eventos, puedes usar el objeto para especificar que operaciones se deben realizar en un stream en particular. Las operaciones que puedes usar están impuestas por la forma en que abriste el archivo.
 Nota: nunca se utiliza el constructor para dar vida a estos objetos. La unica forma de obtenerlos es invocar la función llamada open().
 La función analiza los argumentos proporcionados y crea automáticamente el objeto requerido.
Si deseas deshacerte del objeto, invoca el método denominado close().
La invocación cortará la conexión con el objeto y el archivo, y eliminará el objeto.
Para nuestros propósitos, solo nos ocuparemos de los streams representados por los objetos BufferIOBase y TextIOBase. 
Debido al tipo de contenido de los flujos o streams, se dividen en tipo texto y binario.

Los streams de texto están estructurados en líneas; es decir, contienen caracteres tipográficos (letras, dígitos, signos de puntuación, etc). dispuestos en filas (líneas), como se ve a simple vista cuando se mira el contenido del archivo en el editor.
Este tipo de archivo es escrito (o leído) principalmente carácter por carácter, o línea por línea.
Los streams binarios no contienen texto, sino una secuencia de bytes de cualquier valor. Esta secuencia puede ser, por ejemplo, un programa ejecutable, una imagen, un audio o un videoclip, un archivo de base de datos, etc.
Debido a que estos archivos no contienen líneas, las lecturas y escrituras se relacionan con porciones de datos de cualquier tamaño. Por lo tanto, los datos se leen y escriben byte a byte, o bloque a bloque, donde el tamaño del bloque generalmente varía de uno a un valor elegido arbitrariamente.
Ahora viene un problema pequeño. En los sistemas Unix/Linux, los extremos de la línea están marcados por un solo carácter llamado LF (código ASCII 10) designado en los programas de Python como \n.
Si creas un programa responsable de procesar un archivo de texto y está escrito para Windows, puedes reconocer los extremos de las líneas al encontrar los caracteres \r\n, pero si el mismo programa se ejecuta en un entorno Unix/Linux será completamente inútil, y viceversa: el programa escrito para sistemas Unix/Linux podría ser inútil en Windows.
PORTABILIDAD
Estas características indeseables del programa, que impiden o dificultan el uso del programa en diferentes entornos, se denomina falta de portabilidad.
Del mismo modo, el rasgo del programa que permite la ejecución en diferentes entornos se llama portabilidad. Un programa dotado de tal rasgo se llama programa portable.
Dado que los problemas de portabilidad eran (y siguen siendo) muy graves, se tomó la decisión de resolver definitivamente el problema de una manera que no atraiga mucho la atención del desarrollador.
Se realizó a nivel de clases, que son responsables de leer y escribir caracteres hacia y desde el stream. Funciona de la siguiente manera:
    Cuando el stream está abierto y se recomienda que los datos en el archivo asociado se procesen como texto (o no existe tal aviso), se cambia al modo texto.
    Durante la lectura y escritura de líneas desde y hacia el archivo asociado, no ocurre nada especial en el entorno Unix, pero cuando se realizan las mismas operaciones en el entorno Windows, un proceso llamado traducción de caracteres de nueva línea ocurre: cuando lees una línea del archivo, cada par de caracteres \r\n se reemplaza con un solo carácter \n, y viceversa; durante las operaciones de escritura, cada carácter \n se reemplaza con un par de caracteres \r\n.
    El mecanismo es completamente transparente para el programa, el cual puede escribirse como si estuviera destinado a procesar archivos de texto Unix/Linux solamente; el código fuente ejecutado en un entorno Windows también funcionará correctamente.
    Cuando el stream está abierto, su contenido se toma tal cual es, sin ninguna conversión, no se agregan ni se omiten bytes.
*/
/**Abriendo los flujos o streams */
/**
 El abrir un stream se realiza mediante una función que se puede invocar de la siguiente manera:
    stream = open(file, mode = 'r', encoding = None)
Vamos a analizarlo:
    El nombre de la función (open) habla por si mismo; si la apertura es exitosa, la función devuelve un objeto stream; de lo contrario, se genera una excepción (por ejemplo, FileNotFoundError si el archivo que vas a leer no existe);
    El primer parámetro de la función (file) especifica el nombre del archivo que se asociará al stream.
    El segundo parámetro (mode) especifica el modo de apertura utilizado para el stream; es una cadena llena de una secuencia de caracteres, y cada uno de ellos tiene su propio significado especial (más detalles pronto).
    El tercer parámetro (encoding) especifica el tipo de codificación (por ejemplo, UTF-8 cuando se trabaja con archivos de texto).
    La apertura debe ser la primera operación realizada en el stream.
Nota: el modo y los argumentos de codificación pueden omitirse; en dado caso, se tomarán sus valores predeterminados. El modo de apertura predeterminado es leer en modo de texto, mientras que la codificación predeterminada depende de la plataforma utilizada.
Modos para abrir los flujos o streams:

r modo de apertura: lectura

    El stream será abierto en modo lectura.
    El archivo asociado con el stream debe existir y tiene que ser legible, de lo contrario la función open() generará una excepción.

w modo de apertura: escritura

    El stream será abierto en modo escritura.
    El archivo asociado con el stream no necesita existir. Si no existe, se creará; si existe, se truncará a la longitud de cero (se borra); si la creación no es posible (por ejemplo, debido a permisos del sistema) la función open() generará una excepción.

a modo de apertura: adjuntar

    la transmisión se abrirá en modo de adición;
    El archivo asociado con el stream no necesita existir; si no existe, se creará; si existe, el cabezal de grabación virtual se establecerá al final del archivo (el contenido anterior del archivo permanece intacto).

r+ modo de apertura: lectura y actualización

    El stream será abierto en modo lectura y actualización.
    El archivo asociado con el stream debe existir y tiene que permitir escritura, de lo contrario la función open() generará una excepción.
    Se permiten operaciones de lectura y escritura en el stream.

w+ modo de apertura: escritura y actualización

    El stream será abierto en modo escritura y actualización.
    El archivo asociado con el stream no necesita existir; si no existe, se creará; el contenido anterior del archivo permanece intacto.
    Se permiten operaciones de lectura y escritura en el stream.
 */
/** Selección de los modos de texto y binario*/
/**
 Si hay una letra b al final de la cadena del modo significa que el stream se debe abrir en el modo binario.
 Si la cadena del modo termina con una letra t el stream es abierto en modo texto.
 El modo texto es el comportamiento predeterminado que se utiliza cuando no se especifica ya sea modo binario o texto.
 Finalmente, la apertura exitosa del archivo establecerá la posición actual del archivo (el cabezal virtual de lectura/escritura) antes del primer byte del archivo si el modo no es a y después del último byte del archivo si el modo es a.

 */
/**Abriendo el flujo (stream) por primera vez */
/**
 Imagina que queremos desarrollar un programa que lea el contenido del archivo de texto llamado: C:\Users\User\Desktop\file.txt.
 try:
    stream = open("C:\Users\User\Desktopile.txt", "rt")
    # El procesamiento va aquí.
    stream.close()
except Exception as exc:
    print("No se puede abrir el archivo:", exc)

 */
/** Flujos o streams pre-abiertos*/
/**
 Dijimos anteriormente que cualquier operación del stream debe estar precedida por la invocación de la función open(). Hay tres excepciones bien definidas a esta regla.
 Cuando comienza nuestro programa, los tres streams ya están abiertos y no requieren ninguna preparación adicional. Además, tu programa puede usar estos streams explícitamente si tienes cuidado de importar el módulo sys:
 import sys

Porque ahí es donde se coloca la declaración de estos streams.
Los nombres de los streams son: sys.stdin, sys.stdout, y sys.stderr.
Vamos a analizarlos:

    sys.stdin
        stdin (significa entrada estándar).
        El stream stdin normalmente se asocia con el teclado, se abre previamente para la lectura y se considera como la fuente de datos principal para los programas en ejecución.
        La función bien conocida input() lee datos de stdin por default.

    sys.stdout
    stdout (significa salida estándar)
    El stream stdout normalmente está asociado con la pantalla, preabierta para escritura, considerada como el objetivo principal para la salida de datos por el programa en ejecución.
    La función bien conocida print() envía los datos al stream stdout.

    sys.stderr
    stderr (significa salida de error estándar)
    El stream stderr normalmente está asociado con la pantalla, preabierta para escribir, considerada como el lugar principal donde el programa en ejecución debe enviar información sobre los errores encontrados durante su trabajo.
    No hemos presentado ningún método para enviar datos a este stream (lo haremos pronto, lo prometemos).
    La separación de stdout (resultados útiles producidos por el programa) de stderr (mensajes de error, indudablemente útiles pero no proporcionan resultados) ofrece la posibilidad de redirigir estos dos tipos de información a los diferentes objetivos. Una discusión más extensa sobre este tema está más allá del alcance de nuestro curso. El manual del sistema operativo proporcionará más información sobre estos temas.
   
*/
/** Cerrando los flujos (streams) */
/**
 La última operación realizada en un stream (esto no incluye a los streams stdin, stdout, y stderr pues no lo requieren) debe ser cerrarlo.
 Esa acción se realiza mediante un método invocado desde dentro del objeto del stream: stream.close().
 El nombre de la función es fácil de entender close(), es decir cerrar.
La función no espera argumentos; el stream no necesita estar abierto.
La función no devuelve nada pero genera una excepción IOError en caso de un error.
La mayoría de los desarrolladores creen que la función close() siempre tiene éxito y, por lo tanto, no hay necesidad de verificar si ha realizado su tarea correctamente. 
Dado que el cierre del stream obliga a los bufers a descargarse, es posible que dichas descargas fallen y, por lo tanto, close() falle también.

*/
/**Diagnosticando problemas con los flujos (streams) */
/**
 El objeto IOError está equipado con una propiedad llamada errno (el nombre viene de la frase error number, número de error) y puedes accederla de la siguiente manera:
 try:
    # Algunas operaciones con streams.
except IOError as exc:
    print(exc.errno)

El valor del atributo errno se puede comparar con una de las constantes simbólicas predefinidas en módulo errno.
Echemos un vistazo a algunas constantes seleccionadas útiles para detectar errores en los streams:
    errno.EACCES → Permiso denegado
    El error se produce cuando intentas, por ejemplo, abrir un archivo con atributos de solo lectura para escritura.

    errno.EBADF → Número de archivo incorrecto
    El error se produce cuando intentas, por ejemplo, operar un stream sin abrirlo.

    errno.EEXIST → Archivo existente
    El error se produce cuando intentas, por ejemplo, cambiar el nombre de un archivo con su nombre anterior.

    errno.EFBIG → Archivo demasiado grande
    El error ocurre cuando intentas crear un archivo que es más grande que el máximo permitido por el sistema operativo.

    errno.EISDIR → Es un directorio
    El error se produce cuando intentas tratar un nombre de directorio como el nombre de un archivo ordinario.

    errno.EMFILE → Demasiados archivos abiertos
    El error se produce cuando intentas abrir simultáneamente más streams de los aceptables para el sistema operativo.

    errno.ENOENT → El archivo o directorio no existe
    El error se produce cuando intentas acceder a un archivo o directorio inexistente.

    errno.ENOSPC → No queda espacio en el dispositivo
    El error ocurre cuando no hay espacio libre en el dispositivo.

La lista completa es mucho más larga (incluye también algunos códigos de error no relacionados con el procesamiento del los streams).

import errno

try:
    s = open("c:/users/user/Desktop/file.txt", "rt")
    # El procesamiento va aquí.
    s.close()
except Exception as exc:
    if exc.errno == errno.ENOENT:
        print("El archivo no existe.")
    elif exc.errno == errno.EMFILE:
        print("Demasiados archivos abiertos.")
    else:
        print("El numero del error es:", exc.errno)
 Console 
El archivo no existe.

Afortunadamente, existe una función que puede simplificar el código de manejo de errores.
Su nombre es strerror(), y proviene del módulo os y espera solo un argumento: un número de error.
Su función es simple: proporciona un número de error y una cadena que describe el significado del error.
from os import strerror

try:
    s = open("c:/users/user/Desktop/file.txt", "rt")
    # El procesamiento va aquí.
    s.close()
except Exception as exc:
    print("El archivo no pudo ser abierto:", strerror(exc.errno))
     Console 

El archivo no pudo ser abierto: No such file or directory
*/
/********************************************* */
/**SECCION 3 */
/***TRABAJANDO CON ARCHIVOS REALES */
/**
 Procesamiento de archivos de texto
 Te mostraremos algunas técnicas básicas que puedes utilizar para leer el contenido del archivo y poder procesarlo.
El procesamiento será muy simple: vas a copiar el contenido del archivo a la consola y contarás todos los caracteres que el programa ha leído.
Pero recuerda: nuestra comprensión de un archivo de texto es muy estricta. Es un archivo de texto sin formato: puede contener solo texto, sin decoraciones adicionales (formato, diferentes fuentes, etc.).
Si tus archivos de texto contienen algunos caracteres nacionales no cubiertos por el juego de caracteres ASCII estándar, es posible que necesites un paso adicional. La invocación de tu función open() puede requerir un argumento que denote una codificación específica del texto.
stream = open('file.txt', 'rt', encoding='utf-8')

La lectura del contenido de un archivo de texto se puede realizar utilizando diferentes métodos; ninguno de ellos es mejor o peor que otro. Depende de ti cual de ellos prefieres y te gusta.
El más básico de estos métodos es el que ofrece la función read(),
Si se aplica a un archivo de texto, la función es capaz de:
    Leer un número determinado de caracteres (incluso solo uno) del archivo y devolverlos como una cadena.
    Leer todo el contenido del archivo y devolverlo como una cadena.
    Si no hay nada más que leer (el cabezal de lectura virtual llega al final del archivo), la función devuelve una cadena vacía.
from os import strerror

try:
    counter = 0
    stream = open('text.txt', "rt")
    char = stream.read(1)
    while char != '':
        print(char, end='')
        counter += 1
        char = stream.read(1)
    stream.close()
    print("\n\nCaracteres en el archivo:", counter)
except IOError as e:
    print("Se produjo un error de E/S: ", strerror(e.errno))
  Console 
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Caracteres en el archivo: 131

La rutina es bastante simple:
    Se usa el mecanismo try-except y se abre el archivo con el nombre (text.txt en este caso).
    Intenta leer el primer carácter del archivo (char = stream.read(1)).
    Si tienes éxito (esto se demuestra por el resultado positivo de la condición while), se muestra el carácter (nota el argumento end=, ¡es importante! ¡No querrás saltar a una nueva línea después de cada carácter!).
    Tambien, se actualiza el contador (counter).
    Intenta leer el siguiente carácter y el proceso se repite.

 */
/**readline() */
/**
 Si deseas manejar el contenido del archivo como un conjunto de líneas, no como un montón de caracteres, el método readline() te ayudará con eso.
 El método intenta leer una línea completa de texto del archivo, y la devuelve como una cadena en caso de éxito. De lo contrario, devuelve una cadena vacía.
 from os import strerror

try:
    character_counter = line_counter = 0
    stream = open('text.txt', 'rt')
    line = stream.readline()
    while line != '':
        line_counter += 1
        for char in line:
            print(char, end='')
            character_counter += 1
        line = stream.readline()
    stream.close()
    print("\n\nCaracteres en el archivo:", character_counter)
    print("Líneas en el archivo:     ", line_counter)
except IOError as e:
    print("Se produjo un error de E/S:", strerror(e.errno))
    
 Console 
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Caracteres en el archivo: 131
Líneas en el archivo:      4

 */
/**
 *readlines()
 Cuando el método readlines(), se invoca sin argumentos, intenta leer todo el contenido del archivo y devuelve una lista de cadenas, un elemento por línea del archivo.
Si no estás seguro de si el tamaño del archivo es lo suficientemente pequeño y no deseas probar el sistema operativo, puedes convencer al método readlines() de leer no más de un número especificado de bytes a la vez (el valor de retorno sigue siendo el mismo, es una lista de una cadena)
El tamaño máximo del búfer de entrada aceptado se pasa al método como argumento.
Puedes esperar que readlines() procese el contenido del archivo de manera más efectiva que readline(), ya que puede ser invocado menos veces. 
from os import strerror

try:
    ccnt = lcnt = 0
    s = open('text.txt', 'rt')
    lines = s.readlines(20)
    while len(lines) != 0:
        for line in lines:
            lcnt += 1
            for ch in line:
                print(ch, end='')
                ccnt += 1
        lines = s.readlines(10)
    s.close()
    print("\n\nCaracteres en el archivo:", ccnt)
    print("Líneas en archivo:     ", lcnt)
except IOError as e:
    print("Se produjo un error de E/S:", strerror(e.errno))
    
 Console 
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Caracteres en el archivo: 131
Líneas en archivo: 4

El último ejemplo que queremos presentar muestra un rasgo muy interesante del objeto devuelto por la función open() en modo de texto.
from os import strerror

try:
	ccnt = lcnt = 0
	for line in open('text.txt', 'rt'):
		lcnt += 1
		for ch in line:
			print(ch, end='')
			ccnt += 1
	print("\n\nCaracteres en el archivo:", ccnt)
	print("Líneas en el archivo:     ", lcnt)
except IOError as e:
	print("Se produjo un error de E/S: ", strerror(e.errno))
    
 Console 
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Caracteres en el archivo: 131
Líneas en archivo: 4
 */
/**Manejo de archivos de texto: write() */
/**
 El método se llama write() y espera solo un argumento: una cadena que se transferirá a un archivo abierto (no lo olvides), el modo de apertura debe reflejar la forma en que se transfieren los datos, escribir en un archivo abierto en modo de lectura no tendrá éxito).
 No se agrega carácter de nueva línea al argumento de write(), por lo que debes agregarlo tu mismo si deseas que el archivo se complete con varias líneas.
 El ejemplo en el editor muestra un código muy simple que crea un archivo llamado newtext.txt (nota: el modo de apertura w asegura que el archivo se creará desde cero, incluso si existe y contiene datos) y luego coloca diez líneas en él.
 from os import strerror

try:
	file = open('newtext.txt', 'wt') # Un nuevo archivo (newtext.txt) es creado.
	for i in range(10):
		s = "línea #" + str(i+1) + "\n"
		for char in s:
			file.write(char)
	file.close()
except IOError as e:
	print("Se produjo un error de E/S: ", strerror(e.errno))
    

    Mira el ejemplo en el editor. Hemos modificado el código anterior para escribir líneas enteras en el archivo de texto.
from os import strerror

try:
    file = open('newtext.txt', 'wt')
    for i in range(10):
        file.write("línea #" + str(i+1) + "\n")
    file.close()
except IOError as e:
    print("Se produjo un error de E/S: ", strerror(e.errno))
    
**********New Component Title
Por ejemplo, si deseas enviar un mensaje de tipo cadena a stderr para distinguirlo de la salida normal del programa, puede verse así:
import sys
sys.stderr.write("Mensaje de Error")

 */
/**
 *¿Qué es un bytearray?
Antes de comenzar a hablar sobre archivos binarios, tenemos que informarte sobre una de las clases especializadas que Python usa para almacenar datos amorfos.
Los datos amorfos son datos que no tienen forma específica, son solo una serie de bytes.
Esto no significa que estos bytes no puedan tener su propio significado o que no puedan representar ningún objeto útil, por ejemplo, gráficos de mapa de bits.
Lo más importante de esto es que en el lugar donde tenemos contacto con los datos, no podemos, o simplemente no queremos, saber nada al respecto.
Los datos amorfos no pueden almacenarse utilizando ninguno de los medios presentados anteriormente: no son cadenas ni listas.
Debe haber un contenedor especial capaz de manejar dichos datos.
Python tiene más de un contenedor, uno de ellos es una clase especializada llamada bytearray, como su nombre indica, es un arreglo que contiene bytes (amorfos).
Si deseas tener dicho contenedor, por ejemplo, para leer una imagen de mapa de bits y procesarla de alguna manera, debes crearlo explícitamente, utilizando uno de los constructores disponibles.

data = bytearray(10)

Tal invocación crea un objeto bytearray capaz de almacenar diez bytes.
Nota: dicho constructor llena todo el arreglo con ceros.
Bytearrays se asemejan a listas en muchos aspectos. Por ejemplo, son mutables, son susceptibles a la función len(), y puedes acceder a cualquiera de sus elementos usando indexación convencional.
Existe una limitación importante: no debes establecer ningún elemento del arreglo de bytes con un valor que no sea un entero (violar esta regla causará una excepción TypeError) y tampoco está permitido asignar un valor fuera del rango de 0 a 255 (a menos que quieras provocar una excepción ValueError).
data = bytearray(10)

for i in range(len(data)):
    data[i] = 10 - i

for b in data:
    print(hex(b))

 Console 
0xa
0x9
0x8
0x7
0x6
0x5
0x4
0x3
0x2
0x1

nota: hemos utilizado dos métodos para iterar el arreglo de bytes, y hemos utilizado la función hex() para ver los elementos impresos como valores hexadecimales.
Ahora te vamos a mostrar como escribir un arreglo de bytes en un archivo binario, como no queremos guardar su representación legible, queremos escribir una copia uno a uno del contenido de la memoria física, byte a byte.
from os import strerror

data = bytearray(10)

for i in range(len(data)):
    data[i] = 10 + i

try:
    bf = open('file.bin', 'wb')
    bf.write(data)
    bf.close()
except IOError as e:
    print("Se produjo un error de E/S:", strerror(e.errno))

# Ingresa aquí el código que lee los bytes del stream.
    
Analicémoslo:
    Primero, inicializamos bytearray con valores a partir de 10; si deseas que el contenido del archivo sea claramente legible, reemplaza el 10con algo como ord('a'), esto producirá bytes que contienen valores correspondientes a la parte alfabética del código ASCII (no pienses que harás que el archivo sea un archivo de texto; sigue siendo binario, ya que se creó con un indicador: wb).
    Después, creamos el archivo usando la función open(), la única diferencia en comparación con las variantes anteriores es que el modo de apertura contiene el indicador b.
    El método write() toma su argumento (bytearray) y lo envía (como un todo) al archivo.
    El stream se cierra de forma rutinaria.
El método write() devuelve la cantidad de bytes escritos correctamente.
Si los valores difieren de la longitud de los argumentos del método, puede significar que hay algunos errores de escritura.
En este caso, no hemos utilizado el resultado; esto puede no ser apropiado en todos los casos.

*/
/** 
 Cómo leer bytes de un flujo (stream)
 La lectura de un archivo binario requiere el uso de un método especializado llamado readinto(), ya que el método no crea un nuevo objeto del arreglo de bytes, sino que llena uno creado previamente con los valores tomados del archivo binario.
 Nota:
    El método devuelve el número de bytes leídos con éxito.
    El método intenta llenar todo el espacio disponible dentro de su argumento; si existen más datos en el archivo que espacio en el argumento, la operación de lectura se detendrá antes del final del archivo; el resultado del método puede indicar que el arreglo de bytes solo se ha llenado de manera fragmentaria (el resultado también lo mostrará y la parte del arreglo que no está siendo utilizada por los contenidos recién leídos permanece intacta).
from os import strerror

data = bytearray(10)

try:
    binary_file = open('file.bin', 'rb')
    binary_file.readinto(data)
    binary_file.close()

    for b in data:
        print(hex(b), end=' ')
except IOError as e:
    print("Se produjo un error de E/S:", strerror(e.errno))

Analicémoslo:
    Primero, abrimos el archivo (el que se creó usando el código anterior) con el modo descrito como rb.
    Luego, leemos su contenido en el arreglo de bytes llamado data, con un tamaño de diez bytes.
    Finalmente, imprimimos el contenido del arreglo de bytes: ¿Son los mismos que esperabas?
  Se ofrece una forma alternativa de leer el contenido de un archivo binario mediante el método denominado read().
Invocado sin argumentos, intenta leer todo el contenido del archivo en la memoria, haciéndolo parte de un objeto recién creado de la clase bytes.
Esta clase tiene algunas similitudes con bytearray, con la excepción de una diferencia significativa: es immutable.
Afortunadamente, no hay obstáculos para crear un arreglo de bytes tomando su valor inicial directamente del objeto de bytes, como aquí:  

from os import strerror

try:
    binary_file = open('file.bin', 'rb')
    data = bytearray(binary_file.read())
    binary_file.close()

    for b in data:
        print(hex(b), end=' ')

except IOError as e:
    print("Se produjo un error de E/S:", strerror(e.errno))
    
Si el método read() se invoca con un argumento, se especifica el número máximo de bytes a leer.
El método intenta leer la cantidad deseada de bytes del archivo, y la longitud del objeto devuelto puede usarse para determinar la cantidad de bytes realmente leídos.

from os import strerror

try:
    binary_file = open('file.bin', 'rb')
    data = bytearray(binary_file.read(5))
    binary_file.close()

    for b in data:
        print(hex(b), end=' ')

except IOError as e:
    print("Se produjo un error de E/S:", strerror(e.errno))
    

Nota: los primeros cinco bytes del archivo han sido leídos por el código; los siguientes cinco todavía están esperando ser procesados.

*/
/** Copiando archivos: una herramienta simple y funcional*/
/**
 Ahora vas a juntar todo este nuevo conocimiento, agregarle algunos elementos nuevos y usarlo para escribir un código real que pueda copiar el contenido de un archivo.
Por supuesto, el propósito no es crear un reemplazo para los comandos como copy de (MS Windows) o cp de (Unix/Linux) pero para ver una forma posible de crear una herramienta de trabajo, incluso si nadie quiere usarla.
from os import strerror

srcname = input("Ingresa el nombre del archivo fuente: ")
try:
    src = open(srcname, 'rb')
except IOError as e:
    print("No se puede abrir archivo fuente: ", strerror(e.errno))
    exit(e.errno)	

dstname = input("Ingresa el nombre del archivo destino: ")
try:
    dst = open(dstname, 'wb')
except Exception as e:
    print("No se puede crear el archivo de destino: ", strerror(e.errno))
    src.close()
    exit(e.errno)	

buffer = bytearray(65536)
total  = 0
try:
    readin = src.readinto(buffer)
    while readin > 0:
        written = dst.write(buffer[:readin])
        total += written
        readin = src.readinto(buffer)
except IOError as e:
    print("No se puede crear el archivo de destino: ", strerror(e.errno))
    exit(e.errno)	
    
print(total,'byte(s) escritos con éxito')
src.close()
dst.close()
    
*/
/************************************ */
/**EJEMPLO */
/**
 from os import strerror

# Inicializa 26 contadores para cada letra latina.
# Nota: hemos usado una comprensión para esto.
counters = {chr(ch): 0 for ch in range(ord('a'), ord('z') + 1)}
file_name = input("Ingresa el nombre del archivo a analizar: ")
try:
    file = open(file_name, "rt")
    for line in file:
        for char in line:
            # Si es una letra...
            if char.isalpha():
                # ... lo trataremos en minúsculas y actualizaremos el contador apropiado.
                counters[char.lower()] += 1
    file.close()
    # Imprimamos los contadores.
    for char in counters.keys():
        c = counters[char]
        if c > 0:
            print(char, '->', c)
except IOError as e:
    print("Se produjo un error de E/S: ", strerror(e.errno))
    
 */
/******************************** */
/**EJEMPLO  */
/**
 from os import strerror

counters = {chr(ch): 0 for ch in range(ord('a'), ord('z') + 1)}
file_name = input("Ingresa el nombre del archivo a analizar: ")
try:
    file = open(file_name, "rt")
    for line in file:
        for char in line:
            if char.isalpha():
                counters[char.lower()] += 1
    file.close()
    file = open(file_name + '.hist', 'wt')
    # Nota: hemos utilizado una lambda para acceder a los elementos del directorio y se ha establecido reverse a True para obtener un orden válido.
    for char in sorted(counters.keys(), key=lambda x: counters[x], reverse=True):
        c = counters[char]
        if c > 0:
            file.write(char + ' -> ' + str(c) + '\n')
    file.close()
except IOError as e:
    print("Se produjo un error de E/S: ", strerror(e.errno))
    
 */
/******************************* */
/** Evaluando los resultados de los estudiantes*/
/**
 # Una clase de la excepción base para nuestro código:
class StudentsDataException(Exception):
    pass


# Una excepción para líneas erróneas:
class WrongLine(StudentsDataException):
    def __init__(self, line_number, line_string):
        super().__init__(self)
        self.line_number = line_number
        self.line_string = line_string


# Una excepción para un archivo vacío.
class FileEmpty(StudentsDataException):
    def __init__(self):
        super().__init__(self)


from os import strerror

# Un diccionario para los datos de los estudiantes:
data = { }

file_name = input("Ingresa el nombre del archivo de datos del estudiante: ")
line_number = 1
try:
    f = open(file_name, "rt")
    # Leer el archivo completo en la lista.
    lines = f.readlines()
    f.close()
    # ¿El archivo está vacío?
    if len(lines) == 0:
        raise FileEmpty()
    # Escanee el archivo línea por línea.
    for i in range(len(lines)):
        # Obtener la línea n.
        line = lines[i]
        # Divídirlo en columnas.
        columns = line.split()
        # Debe haber 3 columnas, ¿están ahí?
        if len(columns) != 3:
            raise WrongLine(i + 1, line)
        # Construye una clave a partir del nombre y apellido del estudiante.
        student = columns[0] + ' ' + columns[1]
        # Obtener puntos.
        try:
            points = float(columns[2])
        except ValueError:
            raise WrongLine(i + 1, line)
        # Actualizar el diccionario.
        try:
            data[student] += points
        except KeyError:
            data[student] = points
    # Imprimir resultados.
    for student in sorted(data.keys()):
        print(student,'\t', data[student])

except IOError as e:
    print("Se produjo un error de E/S: ", strerror(e.errno))
except WrongLine as e:
    print("Línea incorrecta #" + str(e.line_number) + " en el archivo fuente:" + e.line_string)
except FileEmpty:
    print("Archivo fuente vacío")
    
 */
/************************************** */
/**SECCION 4 */
/**EL MODULO OS */
/** Introducción al módulo os*/
/**
 En esta sección, aprenderás sobre un módulo llamado os, que te permite interactuar con tu sistema operativo usando Python.

Proporciona funciones que están disponibles en sistemas Unix y/o Windows. Si estás familiarizado con la consola de comandos, verás que algunas funciones dan los mismos resultados que los comandos disponibles en los sistemas operativos.
Un buen ejemplo de esto es la función mkdir, que te permite crear un directorio como el comando mkdir en Unix y Windows. Si no conoces este comando, no te preocupes.
Además de las operaciones de archivos y directorios, el módulo os te permite:
    Obtener información sobre el sistema operativo.
    Manejar procesos.
    Operar en streams de E/S usando descriptor
En un momento, verás cómo obtener información básica sobre tu sistema operativo, aunque la administración de procesos y el trabajo con descriptores de archivos no se discutirán aquí, porque estos son temas más avanzados que requieren conocimiento de los mecanismos del sistema operativo.

    */
/**Obteniendo información sobre el sistema operativo */
/**
 Antes de crear tu primera estructura de directorios, verás cómo puedes obtener información sobre el sistema operativo actual. Esto es realmente fácil porque el módulo os proporciona una función llamada uname, que devuelve un objeto que contiene los siguientes atributos:

    systemname - almacena el nombre del sistema operativo.
    nodename - almacena el nombre de la máquina en la red.
    release - almacena el release o actualización del sistema operativo.
    version - almacena la versión del sistema operativo.
    machine - almacena el identificador de hardware, por ejemplo, x86_64.
import os
print(os.uname())

El módulo os te permite distinguir rápidamente el sistema operativo mediante el atributo name, que soporta uno de los siguientes nombres:

    posix - obtendrás este nombre si usas Unix.
    nt - obtendrás este nombre si usas Windows.
    java - obtendrás este nombre si tu código está escrito en Jython.
 */
/** Creando directorios en Python*/
/**
 El módulo os proporciona una función llamada mkdir, la cual, como el comando mkdir en Unix y Windows, te permite crear un directorio. La función mkdir requiere una ruta que puede ser relativa o absoluta. Recordemos cómo se ven ambas rutas en la práctica:

    my_first_directory - esta es una ruta relativa que creará el directorio my_first_directory en el directorio de trabajo actual.
    ./my_first_directory - esta es una ruta relativa que apunta explícitamente al directorio de trabajo actual. Tiene el mismo efecto que la ruta anterior.
    ../my_first_directory - esta es una ruta relativa que creará el directorio my_first_directory en el directorio superior del directorio de trabajo actual.
    /python/my_first_directory - esta es una ruta absoluta que creará el directorio my_first_directory, que a su vez está en el directorio raíz de python.

import os

os.mkdir("my_first_directory")
print(os.listdir())

La función mkdir crea un directorio en la ruta especificada. Ten en cuenta que ejecutar el programa dos veces generará un FileExistsError.
Esto significa que no podemos crear un directorio si ya existe. Además del argumento de la ruta, la función mkdir puede tomar opcionalmente el argumento mode, que especifica los permisos del directorio. Sin embargo, en algunos sistemas, el argumento mode se ignora.
En el ejemplo anterior, se usa otra función proporcionada por el módulo os llamada listdir. La función listdir devuelve una lista que contiene los nombres de los archivos y directorios que se encuentran en la ruta pasada como argumento.
Si no se le pasa ningún argumento, se utilizará el directorio de trabajo actual (como en el ejemplo anterior). Es importante que el resultado de la función listdir omita las entradas '.' y '..',

*/
/** Creación recursiva de directorios*/
/**
 La función mkdir es muy útil, pero ¿qué sucede si necesitas crear otro directorio dentro del directorio que acabas de crear? Por supuesto, puedes ir al directorio creado y crear otro directorio dentro de él, pero afortunadamente el módulo os proporciona una función llamada makedirs, que facilita esta tarea.
 La función makedirs permite la creación recursiva de directorios, lo que significa que se crearán todos los directorios de la ruta. Veamos el código en el editor y veamos cómo es en la práctica.
 import os

os.makedirs("my_first_directory/my_second_directory")
os.chdir("my_first_directory")
print(os.listdir())

Para moverte entre directorios, puedes usar una función llamada chdir, que cambia el directorio de trabajo actual a la ruta especificada. Como argumento, toma cualquier ruta relativa o absoluta. En nuestro ejemplo, le pasamos el nombre del primer directorio.
 */
/** ¿Dónde estoy ahora?*/
/**
  el módulo os proporciona una función que devuelve información sobre el directorio de trabajo actual. Se llama getcwd.
  import os

os.makedirs("my_first_directory/my_second_directory")
os.chdir("my_first_directory")
print(os.getcwd())
os.chdir("my_second_directory")
print(os.getcwd())
consola
.../my_first_directory
.../my_first_directory/my_second_directory 

En el ejemplo, creamos el directorio my_first_directory y el directorio my_second_directory dentro de él. En el siguiente paso, cambiamos el directorio de trabajo actual al directorio my_first_directory y luego mostramos el directorio de trabajo actual (primera línea del resultado).
A continuación, vamos al directorio my_second_directory y nuevamente mostramos el directorio de trabajo actual (segunda línea del resultado). Como puedes ver, la función getcwd devuelve la ruta absoluta a los directorios.
 */
/**ELIMINANDO DIRECTORIOS EN PYTHON */
/**
 El módulo os también te permite eliminar directorios. Te da la opción de borrar un solo directorio o un directorio con sus subdirectorios. Para eliminar un solo directorio, puedes usar una función llamada rmdir, que toma la ruta como argumento. Mira el código en el editor.
 import os

os.mkdir("my_first_directory")
print(os.listdir())
os.rmdir("my_first_directory")
print(os.listdir())
 
Al eliminar un directorio, asegúrate de que exista y esté vacío; de lo contrario, se generará una excepción.
Para eliminar un directorio y sus subdirectorios, puedes utilizar la función removedirs, que requiere que se especifique una ruta que contenga todos los directorios que deben eliminarse:
import os

os.makedirs("my_first_directory/my_second_directory")
os.removedirs("my_first_directory/my_second_directory")
print(os.listdir())
 */
/**LA FUNCION SYSTEM() */
/**
 Todas las funciones presentadas en esta parte del curso pueden ser reemplazadas por una función llamada system, que ejecuta un comando que se le pasa como una cadena.
 En Windows, devuelve el valor devuelto por el shell después de ejecutar el comando dado, mientras que en Unix, devuelve el estado de salida del proceso.
 import os

returned_value = os.system("mkdir my_first_directory")
print(returned_value)
CONSOLE
0

El ejemplo anterior funcionará tanto en Windows como en Unix. En nuestro caso, recibimos el estado de salida 0, que indica éxito en los sistemas Unix.
Esto significa que se ha creado el directorio my_first_directory. Como parte del Pregunta , intenta enumerar el contenido del directorio donde se creó el directorio my_first_directory.

 */
/***EJEMPLO */
/**
 import os

class DirectorySearcher:
    def find(self, path, dir):
        try:
            os.chdir(path)
        except OSError:
            # No procesa un archivo que no es un directorio.
            return

        current_dir = os.getcwd()
        for entry in os.listdir("."):
            if entry == dir:
                print(os.getcwd() + "/" + dir)
            self.find(current_dir + "/" + entry, dir)


directory_searcher = DirectorySearcher()
directory_searcher.find("./tree", "python")
    
 */
/*********************************************** */
/**SECCION 5 */
/**MODULO DATETIME */
/**
 Introducción al módulo datetime
 La fecha y la hora tienen innumerables usos y probablemente sea difícil encontrar una aplicación de producción que no los utilice. A continuación, se muestran algunos ejemplos:
    Registro de eventos - gracias al conocimiento de la fecha y la hora, podemos determinar cuándo ocurre exactamente un error crítico en nuestra aplicación. Al crear registros, puedes especificar el formato de fecha y hora.
    Seguimiento de cambios en la base de datos - a veces es necesario almacenar información sobre cuándo se creó o modificó un registro. El módulo datetime será perfecto para este caso.
    Validación de datos - pronto aprenderás a leer la fecha y hora actuales en Python. Conociendo la fecha y hora actuales, podrás validar varios tipos de datos, por ejemplo, si un cupón de descuento ingresado por un usuario en nuestra aplicación sigue siendo válido.  
    Almacenamiento de información importante - ¿te imaginas las transferencias bancarias sin almacenar la información de cuándo se realizaron? La fecha y la hora de ciertas acciones deben conservarse y debemos ocuparnos de ello.
 */
/** Obtener la fecha local y crear objetos del tipo fecha
 Una de las clases proporcionadas por el módulo datetime es una clase llamada date. Los objetos de esta clase representan una fecha que consta de año, mes y día. Mira el código en el editor para ver cómo se ve en la práctica y como obtener la fecha local actual usando el método today.
 from datetime import date

today = date.today()

print("Hoy:", today)
print("Año:", today.year)
print("Mes:", today.month)
print("Día:", today.day)
   Console 
Hoy: 2024-12-05
Año: 2024
Mes: 12
Día: 5

 Ten cuidado, porque estos atributos son de solo lectura. Para crear un objeto date, debes pasar los parámetros año, mes y día de la siguiente manera:
  from datetime import date

my_date = date(2019, 11, 4)
print(my_date)
   Console 
2019-11-04

Creación de un objeto de fecha a partir de una marca de tiempo
  La clase date nos da la capacidad de crear un objeto del tipo fecha a partir de una marca de tiempo.
En Unix, la marca de tiempo expresa el número de segundos desde el 1 de Enero de 1970 a las 00:00:00 (UTC). Esta fecha se llama la época Unix, porque es cuando comenzó el conteo del tiempo en los sistemas Unix.
La marca de tiempo es en realidad la diferencia entre una fecha en particular (incluida la hora) y el 1 de enero de 1970, 00:00:00 (UTC), expresada en segundos.
Para crear un objeto de fecha a partir de una marca de tiempo, debemos pasar una marca de tiempo Unix al método fromtimestamp.
Para este propósito, podemos usar el módulo time, que proporciona funciones relacionadas con el tiempo. Uno de ellos es una función llamada time(), que devuelve el número de segundos desde el 1 de enero de 1970 hasta el momento actual en forma de número flotante. Echa un vistazo al ejemplo en el editor.

from datetime import date
import time

timestamp = time.time()
print("Marca de tiempo:", timestamp)

d = date.fromtimestamp(timestamp)
print("Fecha:", d)

 Console 
Marca de tiempo: 1733436583.1659923
Fecha: 2024-12-05
*/
/** 
 **Creación de un objeto de fecha usando el formato ISO
 El módulo datetime proporciona varios métodos para crear un objeto date. Uno de ellos es el método fromisoformat, que toma una fecha en el formato AAAA-MM-DD compatible con el estándar ISO 8601.

**El método replace()
A veces, es posible que debas reemplazar el año, el mes o el día con un valor diferente. No puedes hacer esto con los atributos de año, mes y día porque son de solo lectura. En este caso, puedes utilizar el método llamado replace.
from datetime import date

d = date(1991, 2, 5)
print(d)

d = d.replace(year=1992, month=1, day=16)
print(d)
    
 Console 
1991-02-05
1992-01-16

El método replace devuelve un objeto date modificado, por lo que debes recordar asignarlo a alguna variable.

**¿Que dia de la semana es?
Uno de los métodos más útiles que facilita el trabajo con fechas es el método llamado weekday. Devuelve el día de la semana como un número entero, donde 0 es el lunes y 6 es el domingo. Ejecuta el código en el editor.
from datetime import date

d = date(2019, 11, 4)
print(d.weekday())

 Console 
0

La clase date tiene un método similar llamado isoweekday, que también devuelve el día de la semana como un número entero, pero 1 es lunes y 7 es domingo:
from datetime import date

d = date(2019, 11, 4)
print(d.isoweekday())

CONSOLE 1

**Creando objetos time
Ya sabes cómo presetime(hour, minute, second, microsecond, tzinfo, fold)
  time(hour, minute, second, microsecond, tzinfo, fold)
  
El párametro tzinfo está asociado con las zonas horarias, mientras que fold está asociado con el tiempo de pared. No los usaremos durante este curso, pero te recomendamos que te familiarices con ellos.
from datetime import time

t = time(14, 53, 20, 1)

print("Tiempo:", t)
print("Hora:", t.hour)
print("Minutos:", t.minute)
print("Segundos:", t.second)
print("Microsegundo:", t.microsecond)
    
 Console 
Tiempo: 14:53:20.000001
Hora: 14
Minutos: 53
Segundos: 20
Microsegundo: 1

** El módulo time
Además de la clase time, la biblioteca estándar de Python ofrece un módulo llamado time, que proporciona una función relacionada con el tiempo. Ya se tuvo la oportunidad de aprender la función llamada time cuando se habló de la clase date. Ahora veremos otra función útil disponible en este módulo.
import time

class Student:
    def take_nap(self, seconds):
        print("Estoy muy cansado. Tengo que tomar una siesta. Hasta luego.")
        time.sleep(seconds)
        print("¡Dormí bien! ¡Me siento genial!")

student = Student()
student.take_nap(5)

 Console 
Estoy muy cansado. Tengo que tomar una siesta. Hasta luego.
¡Dormí bien! ¡Me siento genial!

La parte más importante del código de muestra es el uso de la función sleep (sí, puedes recordarla de una de las prácticas de laboratorio anteriores en el curso), que suspende la ejecución del programa por el determinado número de segundos.

**La función ctime()
El módulo time proporciona una función llamada ctime, que convierte el tiempo en segundos desde el 1 de enero de 1970 (época Unix) en una cadena.
import time

timestamp = 1572879180
print(time.ctime(timestamp))
 Console 
Mon Nov  4 14:53:00 2019

La función ctime devuelve una cadena para la marca de tiempo pasada. 

**Las funciones gmtime() y localtime()
Algunas de las funciones disponibles en el módulo time requieren conocimiento de la clase struct_time, pero antes de conocerlas, veamos cómo se ve la clase:
time.struct_time:
    tm_year   # Especifica el año.
    tm_mon    # Especifica el mes (valor de 1 a 12)
    tm_mday   # Especifica el día del mes (value from 1 to 31)
    tm_hour   # Especifica la hora (valor de 0 a 23)
    tm_min    # Especifica el minuto (valor de 0 a 59)
    tm_sec    # Especifica el segundo (valor de 0 a 61)
    tm_wday    # Especifica el día de la semana (valor de 0 a 6)
    tm_yday   # Especifica el día del año (valor de 1 a 366)
    tm_isdst  # Especifica si se aplica el horario de verano (1: sí, 0: no, -1: no se sabe)
    tm_zone   # Especifica el nombre de la zona horaria (valor en forma abreviada)
    tm_gmtoff # Especifica el desplazamiento al este del UTC (valor en segundos)

La clase struct_time también permite el acceso a valores usando índices. El índice 0 devuelve el valor en tm_year, mientras que 8 devuelve el valor en tm_isdst.
import time

timestamp = 1572879180
print(time.gmtime(timestamp))
print(time.localtime(timestamp))

 Console 
time.struct_time(tm_year=2019, tm_mon=11, tm_mday=4, tm_hour=14, tm_min=53, tm_sec=0, tm_wday=0, tm_yday=308, tm_isdst=0)
time.struct_time(tm_year=2019, tm_mon=11, tm_mday=4, tm_hour=14, tm_min=53, tm_sec=0, tm_wday=0, tm_yday=308, tm_isdst=0

El ejemplo muestra dos funciones que convierten el tiempo transcurrido desde la época Unix al objeto struct_time. La diferencia entre ellos es que la función gmtime devuelve el objeto struct_time en UTC, mientras que la función localtime devuelve la hora local. Para la función gmtime, el atributo tm_isdst es siempre 0.

**Las funciones asctime() y mktime()
El módulo time tiene funciones que esperan un objeto struct_time o una tupla que almacena valores de acuerdo con los índices presentados cuando se habla de la clase struct_time. Ejecuta el ejemplo en el editor.
import time

timestamp = 1572879180
st = time.gmtime(timestamp)

print(time.asctime(st))
print(time.mktime((2019, 11, 4, 14, 53, 0, 0, 308, 0)))
    
 Console 
Mon Nov  4 14:53:00 2019
1572879180.0

La primera de las funciones, llamada asctime, convierte un objeto struct_time o una tupla en una cadena. Toma en cuenta que la conocida función gmtime se usa para obtener el objeto struct_time. Si no se proporciona un argumento a la función asctime, se utilizará el tiempo devuelto por la función localtime.
La segunda función llamada mktime convierte un objeto struct_time o una tupla que expresa la hora local al número de segundos desde la época de Unix

**Creando objetos datetime
En el módulo datetime, la fecha y la hora se pueden representar como objetos separados o como un solo objeto. La clase que combina fecha y hora se llama datetime.
datetime(year, month, day, hour, minute, second, microsecond, tzinfo, fold)

**Métodos que devuelven la fecha y hora actual
La clase datetime tiene varios métodos que devuelven la fecha y hora actuales. Estos métodos son:

    today(): devuelve la fecha y hora local actual con el atributo tzinfo establecido a None.
    now(): devuelve la fecha y hora local actual igual que el método today, a menos que le pasemos el argumento opcional tz. El argumento de este método debe ser un objeto de la subclase tzinfo.
    utcnow(): devuelve la fecha y hora UTC actual con el atributo tzinfo establecido a None

from datetime import datetime

print("hoy:", datetime.today())
print("ahora:", datetime.now())
print("utc_ahora:", datetime.utcnow())
    
 Console 
hoy: 2024-12-05 22:37:23.285676
ahora: 2024-12-05 22:37:23.286733
utc_ahora: 2024-12-05 22:37:23.286939

**Obteniendo una marca de tiempo
from datetime import datetime

dt = datetime(2020, 10, 4, 14, 55)
print("Timestamp:", dt.timestamp())
  Console 
Timestamp: 1601823300.0

 El método timestamp devuelve un valor flotante que expresa el número de segundos transcurridos entre la fecha y la hora indicadas por el objeto datetime y el 1 de enero de 1970, 00:00:00 (UTC).

**Dando formato a la fecha y hora
Todas las clases del módulo datetime presentadas hasta ahora tienen un método llamado strftime. Este es un método muy importante, porque nos permite devolver la fecha y la hora en el formato que especificamos.
El método strftime toma solo un argumento en forma de cadena que especifica un formato que puede constar de directivas.
Una directiva es una cadena que consta del carácter % (porcentaje) y una letra minúscula o mayúscula. Por ejemplo, la directiva %Y significa el año con el siglo como número decimal. Veámoslo en un ejemplo. Ejecuta el código en el editor.
from datetime import date

d = date(2020, 1, 4)
print(d.strftime('%Y/%m/%d'))
 Console 
2020/01/04

Puedes poner cualquier carácter en el formato, pero solo las directivas reconocibles se reemplazarán con los valores apropiados. En nuestro formato, hemos utilizado las siguientes directivas:

    %Y: devuelve el año con el siglo como número decimal. En nuestro ejemplo, esto es 2020.
    %m: devuelve el mes como un número decimal con relleno de ceros. En nuestro ejemplo, es 01.
    %d: devuelve el día como un número decimal con relleno de ceros. En nuestro ejemplo, es 04.
 
    from datetime import time
from datetime import datetime

t = time(14, 53)
print(t.strftime("%H:%M:%S"))

dt = datetime(2020, 11, 4, 14, 53)
print(dt.strftime("%y/%B/%d %H:%M:%S"))
 
Console 
14:53:00
20/November/04 14:53:00

**La función strftime() en el módulo time
Probablemente no te sorprendas al saber que la función strftime está disponible en el módulo time. Se diferencia ligeramente de los métodos strftime en las clases proporcionadas por el módulo datetime porque, además del argumento de formato, también puede tomar (opcionalmente) un objeto tuple o struct_time.
Si no se pasa una tupla o un objeto struct_time, el formateo se realizará utilizando la hora local actual
import time

timestamp = 1572879180
st = time.gmtime(timestamp)

print(time.strftime("%Y/%m/%d %H:%M:%S", st))
print(time.strftime("%Y/%m/%d %H:%M:%S"))
 
 Console 
2019/11/04 14:53:00
2024/12/05 22:47:27

En la primera llamada a la función, formateamos el objeto struct_time, mientras que en la segunda llamada (sin el argumento opcional), formateamos la hora local.

**El método strptime()
Saber cómo crear un formato puede ser útil cuando se usa un método llamado strptime en la clase datetime. A diferencia del método strftime, crea un objeto datetime a partir de una cadena que representa una fecha y una hora.
El método strptime requiere que especifiques el formato en el que guardaste la fecha y la hora. Veámoslo en un ejemplo. Echa un vistazo al código en el editor.

from datetime import datetime
print(datetime.strptime("2019/11/04 14:53:00", "%Y/%m/%d %H:%M:%S"))
  Console 
2019-11-04 14:53:00

 **Operaciones con la fecha y hora
Tarde o temprano tendrás que realizar algunos cálculos sobre la fecha y la hora. Afortunadamente, existe una clase llamada timedelta en el módulo datetime que se creó con tal propósito.
 Para crear un objeto timedelta, simplemente realiza una resta en los objetos date o datetime, tal como hicimos en el ejemplo en el editor. Ejecútalo.

 from datetime import date
from datetime import datetime

d1 = date(2020, 11, 4)
d2 = date(2019, 11, 4)

print(d1 - d2)

dt1 = datetime(2020, 11, 4, 0, 0, 0)
dt2 = datetime(2019, 11, 4, 14, 53, 0)

print(dt1 - dt2)

 Console 
366 days, 0:00:00
365 days, 9:07:00

**Creando objetos timedelta
Ya has aprendido que un objeto timedelta puede devolverse como resultado de restar dos objetos date o datetime.
Por supuesto, también puedes crear un objeto tu mismo. Para ello, vamos a familiarizarnos con los argumentos aceptados por el constructor de la clase, que son:days, seconds, microseconds, milliseconds, minutes, hours, y weeks. Cada uno de ellos es opcional y el valor predeterminado es 0.
Los argumentos deben ser números enteros o de punto flotante, y pueden ser positivos o negativos. Veamos un ejemplo sencillo en el editor.
from datetime import timedelta

delta = timedelta(weeks=2, days=2, hours=3)
print(delta)
    
Console 
16 days, 3:00:00

El resultado de 16 días se obtiene convirtiendo el argumento weeks en días (2 semanas = 14 días) y agregando el argumento days (2 días). Este es un comportamiento normal, porque el objeto timedelta solo almacena días, segundos y microsegundos internamente. De manera similar, el argumento hora se convierte en minutos

Observa algunas operaciones admitidas por las clases del módulo datetime. 

from datetime import timedelta
from datetime import date
from datetime import datetime

delta = timedelta(weeks=2, days=2, hours=2)
print(delta)

delta2 = delta * 2
print(delta2)

d = date(2019, 10, 4) + delta2
print(d)

dt = datetime(2019, 10, 4, 14, 53) + delta2
print(dt)
    
 Console 
16 days, 2:00:00
32 days, 4:00:00
2019-11-05
2019-11-05 18:53:00

El objeto timedelta se puede multiplicar por un número entero. En nuestro ejemplo, multiplicamos el objeto que representa 16 días y 2 horas por 2. Como resultado, recibimos un objeto timedelta que representa 32 días y 4 horas.
toma en cuenta que tanto los días como las horas se han multiplicado por 2. Otra operación interesante usando el objeto timedelta es la suma. En el ejemplo, hemos sumado el objeto timedelta a los objetos date y datetime.
Como resultado de estas operaciones, recibimos objetos date y datetime incrementados en días y horas almacenados en el objeto timedelta.
La operación de multiplicación presentada te permite aumentar rápidamente el valor del objeto timedelta, mientras que la multiplicación también puede ayudar a obtener una fecha en el futuro.
Por supuesto, las clases timedelta, date y datetime admiten muchas más operaciones. Te recomendamos que te familiarices con ellos en la documentación.


*/   
/**EJEMPLO */
/**
 from datetime import datetime

my_date = datetime(2020, 11, 4, 14, 53)

print(my_date.strftime("%Y/%m/%d %H:%M:%S"))
print(my_date.strftime("%y/%B/%d %H:%M:%S %p"))
print(my_date.strftime("%a, %Y %b %d"))
print(my_date.strftime("%A, %Y %B %d"))
print(my_date.strftime("Día de la semana: %w"))
print(my_date.strftime("Día del año: %j"))
print(my_date.strftime("Número de semana en el año: %W"))
    
 Console 
2020/11/04 14:53:00
20/November/04 14:53:00 PM
Wed, 2020 Nov 04
Wednesday, 2020 November 04
Día de la semana: 3
Día del año: 309
Número de semana en el año: 44


 */
/************************************************** */
/**SECCION 6 */
/**MODULO CALENDAR */
/**
 Además de los módulos datetime y time, la biblioteca estándar de Python proporciona un módulo llamado calendar que, como su nombre indica, ofrece funciones relacionadas con el calendario.
 Uno de ellos es, por supuesto, mostrar el calendario. Es importante que los días de la semana se muestren de lunes a domingo, y cada día de la semana tiene su representación en forma de número entero:
La tabla de arriba muestra la representación de los días de la semana en el módulo calendar. El primer día de la semana (lunes) está representado por el valor 0 y la constante calendar.MONDAY, mientras que el último día de la semana (domingo) está representado por el valor 6 y la constante calendar.SUNDAY.

Tu primer calendario
import calendar
print(calendar.calendar(2020))
console 

                                  2020



      January                   February                   March

Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
       1  2  3  4  5                      1  2                         1
 6  7  8  9 10 11 12       3  4  5  6  7  8  9       2  3  4  5  6  7  8
13 14 15 16 17 18 19      10 11 12 13 14 15 16       9 10 11 12 13 14 15
20 21 22 23 24 25 26      17 18 19 20 21 22 23      16 17 18 19 20 21 22
27 28 29 30 31            24 25 26 27 28 29         23 24 25 26 27 28 29
                                                    30 31

       April                      May                       June

Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
       1  2  3  4  5                   1  2  3       1  2  3  4  5  6  7
 6  7  8  9 10 11 12       4  5  6  7  8  9 10       8  9 10 11 12 13 14
13 14 15 16 17 18 19      11 12 13 14 15 16 17      15 16 17 18 19 20 21
20 21 22 23 24 25 26      18 19 20 21 22 23 24      22 23 24 25 26 27 28
27 28 29 30               25 26 27 28 29 30 31      29 30

        July                     August                  September

Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
       1  2  3  4  5                      1  2          1  2  3  4  5  6
 6  7  8  9 10 11 12       3  4  5  6  7  8  9       7  8  9 10 11 12 13
13 14 15 16 17 18 19      10 11 12 13 14 15 16      14 15 16 17 18 19 20
20 21 22 23 24 25 26      17 18 19 20 21 22 23      21 22 23 24 25 26 27
27 28 29 30 31            24 25 26 27 28 29 30      28 29 30
                          31

      October                   November                  December

Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
          1  2  3  4                         1          1  2  3  4  5  6
 5  6  7  8  9 10 11       2  3  4  5  6  7  8       7  8  9 10 11 12 13
12 13 14 15 16 17 18       9 10 11 12 13 14 15      14 15 16 17 18 19 20
19 20 21 22 23 24 25      16 17 18 19 20 21 22      21 22 23 24 25 26 27
26 27 28 29 30 31         23 24 25 26 27 28 29      28 29 30 31
                          30

El resultado mostrado es similar al resultado del comando cal disponible en Unix. Si deseas cambiar el formato de calendario predeterminado, puedes utilizar los siguientes parámetros:

    w: ancho de la columna de fecha (por defecto 2).
    l: número de líneas por semana (por defecto 1).
    c: número de espacios entre las columnas del mes (por defecto 6).
    m: número de columnas (por defecto 3).

Una buena alternativa a la función anterior es la función llamada prcal, que también toma los mismos parámetros que la función calendar, pero no requiere el uso de la función print para mostrar el calendario. Su uso se ve así:
import calendar
calendar.prcal(2020)

**El calendario para un mes específico
 import calendar
print(calendar.month(2020, 11))
 Console 

   November 2020

Mo Tu We Th Fr Sa Su
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30

La función setfirstweekday()
Como ya sabes, por defecto en el módulo calendar, el primer día de la semana es el lunes. Sin embargo, puedes cambiar este comportamiento usando una función llamada setfirstweekday.
import calendar

calendar.setfirstweekday(calendar.SUNDAY)
calendar.prmonth(2020, 12)

La función weekday()
Otra función útil proporcionada por el módulo calendar es la función llamada weekday, que devuelve el día de la semana como un valor entero para el año, mes y día. Veámoslo en la práctica.
import calendar
print(calendar.weekday(2020, 12, 24))
 
Console 
 3

La función weekday devuelve 3, lo que significa que el 24 de diciembre del 2020 es jueves.

**La función weekheader()
Probablemente hayas notado que el calendario contiene encabezados semanales en forma abreviada. Si es necesario, puedes obtener nombres cortos de días de la semana utilizando el método weekheader.
El método weekheader requiere que se especifique el ancho en caracteres para un día de la semana. Si el ancho que se proporciona es mayor que 3, aún obtendrás los nombres abreviados de los días de la semana que constan de tres caracteres.
import calendar
print(calendar.weekheader(2))
    
**¿Cómo comprobamos si un año es bisiesto?
El módulo calendar proporciona dos funciones útiles para comprobar si los años son bisiestos.
La primera, llamada isleap, devuelve True si el año pasado es bisiesto, o False de lo contrario. El segundo, llamado leapdays, devuelve el número de años bisiestos en el rango de años dado
import calendar

print(calendar.isleap(2020))
print(calendar.leapdays(2010, 2021))  # Hasta 2021, pero sin incluirlo.
    
 Console 
True
3

**Clases para la creación de calendarios
Las funciones que hemos mostrado hasta ahora no son todo lo que ofrece el módulo calendar. Además de ellos, podemos utilizar las siguientes clases:

    calendar.Calendar - proporciona métodos para preparar datos de calendario y dar formato.
    calendar.TextCalendar - se utiliza para crear calendarios de texto regulares.
    calendar.HTMLCalendar: se utiliza para crear calendarios HTML.
    calendar.LocalTextCalendar - es una subclase de la clase calendar.TextCalendar. El constructor de esta clase toma el parámetro locale, el cual se utiliza para devolver los nombres apropiados de los meses y días de la semana.
    calendar.LocalHTMLCalendar - es una subclase de la clase calendar.HTMLCalendar. El constructor de esta clase toma el parámetro locale, que se usa para devolver los nombres apropiados de los meses y días de la semana.

**Creando un objeto Calendar
El constructor de la clase Calendar toma un parámetro opcional llamado firstweekday, por defecto es igual a 0 (lunes).
El parámetro firstweekday debe ser un valor entero entre 0-6. Para este propósito, podemos usar las constantes ya conocidas: mira el código en el editor.
import calendar  

c = calendar.Calendar(calendar.SUNDAY)

for weekday in c.iterweekdays():
    print(weekday, end=" ")
    
 Console 
6 0 1 2 3 4 5 
El ejemplo de código usa el método de la clase Calendar llamado iterweekdays, que devuelve un iterador para los números de los días de la semana.

**El método itermonthdates()
La clase Calendar tiene varios métodos que devuelven un iterador. Uno de ellos es el método itermonthdates, que requiere especificar el año y el mes.
Como resultado, se devuelven todos los días del mes y año especificados, así como todos los días antes del comienzo del mes o del final del mes que son necesarios para obtener una semana completa.
Cada día está representado por un objeto datetime.date. Echa un vistazo al ejemplo en el editor.
import calendar  

c = calendar.Calendar()

for date in c.itermonthdates(2019, 11):
    print(date, end=" ")
    
El código muestra todos los días de noviembre de 2019. Debido a que el primer día de noviembre de 2019 fue viernes, los siguientes días también se devuelven para obtener la semana completa: 10/28/2019 (lunes) 10/29/2019 (martes) 10/30/2019 (miércoles) 31/10/2019 (jueves).
El último día de noviembre de 2019 fue sábado, por lo que para mantener la semana completa, se devuelve un día más el 12/01/2019 (domingo).

**Otros métodos que retornan o devuelven iteradores
Otro método útil en la clase Calendar es el método llamado itermonthdates, que toma año y mes como parámetros, y luego devuelve el iterador a los días de la semana representados por números.
import calendar  

c = calendar.Calendar()

for iter in c.itermonthdays(2019, 11):
    print(iter, end=" ")
    
 Console 
0 0 0 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 0 

Sin duda habrás notado la gran cantidad de ceros devueltos como resultado del código de ejemplo. Estos son días fuera del intervalo de meses especificado que se agregan para mantener la semana completa.

*/
/*********EJEMPLO */
/**
 import calendar


class MyCalendar(calendar.Calendar):
    def count_weekday_in_year(self, year, weekday):
        current_month = 1
        number_of_days = 0
        while (current_month <= 12):
            for data in self.monthdays2calendar(year, current_month):
                if data[weekday][0] != 0:
                    number_of_days = number_of_days + 1

            current_month = current_month + 1
        return number_of_days

my_calendar = MyCalendar()
number_of_days = my_calendar.count_weekday_in_year(2019, calendar.MONDAY)

print(number_of_days)
 Console 
52


 */