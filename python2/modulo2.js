/**Sección 1 – Caracteres y Cadenas versus las Computadoras */
/**
 Cómo las computadoras entienden los caracteres individuales
 Las computadoras almacenan los caracteres como números. Cada carácter utilizado por una computadora corresponde a un número único, y viceversa. Esta asignación debe incluir más caracteres de los que podrías esperar. Muchos de ellos son invisibles para los humanos, pero esenciales para las computadoras.
 Algunos de estos caracteres se llaman espacios en blanco, mientras que otros se nombran caracteres de control, porque su propósito es controlar dispositivos de entrada y salida.
 El denominado ASCII (por sus siglas en inglés American Standard Code for Information Interchange). El Código Estándar Americano para Intercambio de Información es el más utilizado, y es posible suponer que casi todos los dispositivos modernos (como computadoras, impresoras, teléfonos móviles, tabletas, etc.) usan este código.
 El código proporciona espacio para 256 caracteres diferentes, pero solo nos interesan los primeros 128. Si deseas ver como se construye el código, mira la tabla a continuación. Haz clic en la tabla para ampliarla. Mírala cuidadosamente: hay algunos datos interesantes. Observa el código del carácter más común: el espacio. El cual es el 32
 
 */
 /**I18N*/
 /**
Ahora, el alfabeto latino no es suficiente para toda la humanidad. Los usuarios de ese alfabeto son minoría. Era necesario idear algo más flexible y capaz que ASCII, algo capaz de hacer que todo el software del mundo sea susceptible de internacionalización, porque diferentes idiomas usan alfabetos completamente diferentes, y a veces estos alfabetos no son tan simples como el latino.
La palabra internacionalización se acorta comúnmente a I18N
¿Por qué? Observa con cuidado, hay una I al inicio de la palabra, a continuación hay 18 letras diferentes, y una N al final.
El software I18N es un estándar en los tiempos actuales. Cada programa tiene que ser escrito de una manera que permita su uso en todo el mundo, entre diferentes culturas, idiomas y alfabetos.
El código ASCII emplea ocho bits para cada signo. Ocho bits significan 256 caracteres diferentes. Los primeros 128 se usan para el alfabeto latino estándar (tanto en mayúsculas como en minúsculas). ¿Es posible colocar todos los otros caracteres utilizados en todo el mundo a los 128 lugares restantes?
No, no lo es.

  */
 /**Puntos de código y páginas de código
Necesitamos un nuevo término: un punto de código.
Un punto de código es un numero que compone un caracter. Por ejemplo, el 32 es un punto de código que compone un espacio en codificación ASCII. Podemos decir que el código ASCII estándar consta de 128 puntos de código.
Como el ASCII estándar ocupa 128 de 256 puntos de código posibles, solo puedes hacer uso de los 128 restantes.
No es suficiente para todos los idiomas posibles, pero puede ser suficiente para un idioma o para un pequeño grupo de idiomas similares.
¿Se puede establecer la mitad superior de los puntos de código de manera diferente para diferentes idiomas? Si, por supuesto. A tal concepto se le denomina una página de códigos.
Una página de códigos es un estándar para usar los 128 puntos de código superiores para almacenar caracteres específicos. Por ejemplo, hay diferentes páginas de códigos para Europa Occidental y Europa del Este, alfabetos cirílicos y griegos, idiomas árabe y hebreo, etc.
para determinar el significado de un punto de código específico, debes conocer la página de códigos de destino.
En otras palabras, los puntos de código derivados del código de páginas son ambiguos.

Unicode
Las páginas de códigos ayudaron a la industria informática a resolver problemas de I18N durante algún tiempo, pero pronto resultó que no serían una solución permanente.
El concepto que resolvió el problema a largo plazo fue el Unicode.
Unicode asigna caracteres únicos (letras, guiones, ideogramas, etc.) a más de un millón de puntos de código.
Los primeros 128 puntos de código Unicode son idénticos a ASCII, y los primeros 256 puntos de código Unicode son idénticos a la página de códigos ISO/IEC 8859-1 (una página de códigos diseñada para idiomas de Europa occidental).

UCS-4
El estándar Unicode no dice nada sobre como codificar y almacenar los caracteres en la memoria y los archivos. Solo nombra todos los caracteres disponibles y los asigna a planos (un grupo de caracteres de origen, aplicación o naturaleza similares).
Existe más de un estándar que describe las técnicas utilizadas para implementar Unicode en computadoras y sistemas de almacenamiento informáticos reales. El más general de ellos es UCS-4.
El nombre proviene de Universal Character Set (Conjunto de Caracteres Universales).
UCS-4 emplea 32 bits (cuatro bytes) para almacenar cada carácter, y el código es solo el número único de los puntos de código Unicode. Un archivo que contiene texto codificado UCS-4 puede comenzar con un BOM (byte order mark - marca de orden de bytes), una combinación no imprimible de bits que anuncia la naturaleza del contenido del archivo. Algunas utilidades pueden requerirlo.
Como puedes ver, UCS-4 es un estándar bastante derrochador: aumenta el tamaño de un texto cuatro veces en comparación con el estándar ASCII. Afortunadamente, hay formas más inteligentes de codificar textos Unicode.

UTF-8
El nombre se deriva de Unicode Transformation Format (Formato de Transformación Unicode).
El concepto es muy inteligente. UTF-8 emplea tantos bits para cada uno de los puntos de código como realmente necesita para representarlos. 

    Todos los caracteres latinos (y todos los caracteres ASCII estándar) ocupan ocho bits.
    Los caracteres no latinos ocupan 16 bits.
    Las ideografías CJK (China-Japón-Corea) ocupan 24 bits.
Debido a las características del método utilizado por UTF-8 para almacenar los puntos de código, no es necesario usar el BOM, pero algunas de las herramientas lo buscan al leer el archivo, y muchos editores lo configuran durante el guardado.

Python 3 es totalmente compatible con Unicode y UTF-8:

    Puedes usar caracteres codificados Unicode/UTF-8 para nombrar variables y otras entidades.
    Puedes usarlos durante todas las entradas y salidas.

Esto significa que Python3 está completamente Internacionalizado.
*/
/** La naturaleza de las cadenas en Python */
/**
Las cadenas son secuencias inmutables
Cadenas multilínea

multiline = '''Línea #1
Línea #2'''

print(len(multiline))

Como puedes ver, la cadena comienza con tres apóstrofes, no uno. El mismo apóstrofe triplicado se usa para terminar la cadena.
El número de líneas de texto dentro de una cadena de este tipo es arbitrario.
La salida del código es 17.
Cuenta los caracteres con cuidado. ¿Es este resultado correcto o no? Se ve bien a primera vista, pero cuando cuentas los caracteres, no lo es.
Línea #1 contiene ocho caracteres. Las dos líneas juntas contienen 16 caracteres. ¿Perdimos un carácter? ¿Dónde? ¿Cómo?
No, no lo hicimos.
El carácter que falta es simplemente invisible: es un espacio en blanco. Se encuentra entre las dos líneas de texto.
Se denota como: \n.

 */
/**OPERACIONES CON CADENA */
/**
Al igual que otros tipos de datos, las cadenas tienen su propio conjunto de operaciones permitidas, aunque son bastante limitadas en comparación con los números.
En general, las cadenas pueden ser:

    Concatenadas (unidas).
    Replicadas.
La primera operación la realiza el operador + (toma en cuenta que no es una adición o suma) mientras que la segunda por el operador * (toma en cuenta de nuevo que no es una multiplicación).
La capacidad de usar el mismo operador en tipos de datos completamente diferentes (como números o cadenas) se llama sobrecarga (debido a que el operador está sobrecargado con diferentes tareas).
str1 = 'a'
str2 = 'b'

print(str1 + str2)
print(str2 + str1)
print(5 * 'a')
print('b' * 4)
ab
Ba
aaaaa
bbbb

/**ord()*/
/**
Si deseas saber el valor del punto de código ASCII/UNICODE de un carácter específico, puedes usar la función ord() (proveniente de ordinal).
La función necesita una cadena de un carácter como argumento - incumplir este requisito provoca una excepción TypeError, y devuelve un número que representa el punto de código del argumento.
# Demostración de la función ord().

char_1 = 'a'
char_2 = ' '  # space

print(ord(char_1))
print(ord(char_2))
97
32
 */
/**chr() */
/**
 Si conoces el punto de código (número) y deseas obtener el carácter correspondiente, puedes usar la función llamada chr().
La función toma un punto de código y devuelve su carácter.
 # Demostración de la función chr().

print(chr(97))
print(chr(945))
a
α
 */
/**Cadenas como secuencias */
/**
Indexación
Ya dijimos antes que las cadenas de Python son secuencias. Es hora de mostrarte lo que significa realmente.
Las cadenas no son listas, pero pueden ser tratadas como tal en muchos casos.Las cadenas no son listas, pero pueden ser tratadas como tal en muchos casos.
Por ejemplo, si deseas acceder a cualquiera de los caracteres de una cadena, puedes hacerlo usando indexación. 

# Indexando cadenas.

the_string = 'silly walks'

for ix in range(len(the_string)):
    print(the_string[ix], end=' ')

print()

CONSOLE
s i l l y   w a l k s 

 */
/**Iteración */
/**
El iterar a través de las cadenas funciona también.
# Iterando a través de una cadena.

the_string = 'silly walks'

for character in the_string:
    print(character, end=' ')

print()

console
s i l l y   w a l k s 

 */
/**Rebanadas */
/**
 Rebanadas

alpha = "abdefg"

print(alpha[1:3]) bd
print(alpha[3:]) efg
print(alpha[:3]) abd
print(alpha[3:-2]) e
print(alpha[-3:4]) e
print(alpha[::2]) adf
print(alpha[1::2]) beg

 */
/** Los operadores in y not in*/
/**El operador in*/
/**
l operador in no debería sorprenderte cuando se aplica a cadenas, simplemente comprueba si el argumento izquierdo (una cadena) se puede encontrar en cualquier lugar dentro del argumento derecho (otra cadena).
El resultado es simplemente True (Verdadero) o False (Falso).
alphabet = "abcdefghijklmnopqrstuvwxyz"

print("f" in alphabet)
print("F" in alphabet)
print("1" in alphabet)
print("ghi" in alphabet)
print("Xyz" in alphabet)

True
False
False
True
False

El operador not in
alphabet = "abcdefghijklmnopqrstuvwxyz"

print("f" not in alphabet)
print("F" not in alphabet)
print("1" not in alphabet)
print("ghi" not in alphabet)
print("Xyz" not in alphabet)

 */
/**Las cadenas en Python son inmutables */
/**
 Las cadenas en Python son inmutables
 Lo único que puedes hacer con del y una cadena es eliminar la cadena como un todo. Intenta hacerlo.
 Las cadenas de Python no tienen el método append() - no se pueden expander de ninguna manera.
 Con la ausencia del método append(), el método insert() también es ilegal
alphabet = "bcdefghijklmnopqrstuvwxy"

alphabet = "a" + alphabet
alphabet = alphabet + "z"

print(alphabet)

 */
/**Operaciones con cadenas: continuación */
/** min()*/
/**
Esta función encuentra el elemento mínimo de la secuencia pasada como argumento. Existe una condición - la secuencia (cadena o lista) no puede estar vacía, de lo contrario obtendrás una excepción ValueError.
# Demonstración de min() - Ejemplo 1:
print(min("aAbByYzZ"))


# Demonstración de min() - Ejemplos 2 y 3:
t = 'Los Caballeros Que Dicen "Ni!"'
print('[' + min(t) + ']')

t = [0, 1, 2]
print(min(t))

console
A  Es una A mayúscula. ¿Por qué? Recuerdas la tabla ASCII, ¿qué letras ocupan las primeras posiciones, mayúsculas o minúsculas?
[] 
0
 */
/**max() */
/**
 # Demostración de max() - Ejemplo 1:
print(max("aAbByYzZ"))


# Demostración de max() - Ejemplo 2 y 3:
t = 'Los Caballeros Que Dicen "Ni!"'
print('[' + max(t) + ']')

t = [0, 1, 2]
print(max(t))


 */
/**El método index() */
/**
 (es un método, no una función) busca la secuencia desde el principio, para encontrar el primer elemento del valor especificado en su argumento.
El método devuelve el índice de la primera aparición del argumento (lo que significa que el resultado más bajo posible es 0, mientras que el más alto es la longitud del argumento decrementado en 1).
 # Demonstración del método index() method:
print("aAbByYzZaA".index("b"))
print("aAbByYzZaA".index("Z"))
print("aAbByYzZaA".index("A"))

2
7
1

 */
/**La función list() */
/**
 La función list() toma su argumento (una cadena) y crea una nueva lista que contiene todos los caracteres de la cadena, uno por elemento de la lista.
# Demostración de la función list():
print(list("abcabc"))

console
['a', 'b', 'c', 'a', 'b', 'c']

 */
/**El método count() */
/**
El método count() cuenta todas las apariciones del elemento dentro de la secuencia. La ausencia de tal elemento no causa ningún problema.
# Demostración del método count():
print("abcabc".count("b")) 2
print('abcabc'.count("d")) 0


 */

/**SECCION 3 */
/**metodos de cadena */
/**
 metodo capitalize()
 El método capitalize() hace exactamente lo que dice, crea una nueva cadena con los caracteres tomados de la cadena fuente, pero intenta modificarlos de la siguiente manera:

    Si el primer carácter dentro de la cadena es una letra (nota: el primer carácter es el elemento con un índice igual a 0, no es el primer carácter visible), se convertirá a mayúsculas.
    Todas las letras restantes de la cadena se convertirán a minúsculas.
Nota: los métodos no tienen que invocarse solo dentro de las variables. Se pueden invocar directamente desde dentro de literales de cadena. Usaremos esa convención regularmente: simplificará los ejemplos, ya que los aspectos más importantes no desaparecerán entre asignaciones innecesarias.

# Demostración del método capitalize():
print('aBcD'.capitalize())
 Console 
Abcd

print("Alpha".capitalize())
print('ALPHA'.capitalize())
print(' Alpha'.capitalize())
print('123'.capitalize())
print("αβγδ".capitalize())
Alpha
Alpha
 alpha
123
Αβγδ

*/
/**El método center() */
/**
 La variante de un parámetro del método center() genera una copia de la cadena original, tratando de centrarla dentro de un campo de un ancho especificado.
El centrado se realiza realmente al agregar algunos espacios antes y después de la cadena.
No esperes que este método demuestre habilidades sofisticadas. Es bastante simple.
# Demostración del método center():
print('[' + 'alpha'.center(10) + ']')

[  alpha   ]

Si la longitud del campo de destino es demasiado pequeña para ajustarse a la cadena, se devuelve la cadena original.
La variante de dos parámetros de center() hace uso del carácter del segundo argumento, en lugar de un espacio. Analiza el siguiente ejemplo:
print('[' + 'gamma'.center(20, '*') + ']')

[*******gamma********]

*/
/**El método endswith() */
/**
 El método endswith() comprueba si la cadena dada termina con el argumento especificado y devuelve True(verdadero) o False(falso), dependiendo del resultado.
 t = "zeta"
print(t.endswith("a"))
print(t.endswith("A"))
print(t.endswith("et"))
print(t.endswith("eta"))
True
False
False
True

 */
/** El método find()*/
/**
El método find() es similar al método index(), el cual ya conoces, busca una subcadena y devuelve el índice de la primera aparición de esta subcadena, pero:

    Es más seguro, no genera un error para un argumento que contiene una subcadena inexistente (devuelve -1 en dicho caso).
    Funciona solo con cadenas, no intentes aplicarlo a ninguna otra secuencia.
# Demostración del método find():
print("Eta".find("ta"))
print("Eta".find("mma"))

 Console 
1
-1

Nota: no se debe de emplear find() si deseas verificar si un solo carácter aparece dentro de una cadena, el operador in será significativamente más rápido.

Si deseas realizar la búsqueda, no desde el principio de la cadena, sino desde cualquier posición, puedes usar una variante de dos parámetros del método find().
El segundo argumento especifica el índice en el que se iniciará la búsqueda (no tiene que estar dentro de la cadena).
De las dos letras a, solo se encontrará la segunda. Ejecuta el código y verifica.

EJEMPLO
the_text = """A variation of the ordinary lorem ipsum
text has been used in typesetting since the 1960s 
or earlier, when it was popularized by advertisements 
for Letraset transfer sheets. It was introduced to 
the Information Age in the mid-1980s by the Aldus Corporation, 
which employed it in graphics and word-processing templates
for its desktop publishing program PageMaker (from Wikipedia)"""

fnd = the_text.find('the')
while fnd != -1:
    print(fnd)
    fnd = the_text.find('the', fnd + 1)

 Console 
15
80
198
221
238

existe también una mutación de tres parámetros del método find(), el tercer argumento apunta al primer índice que no se tendrá en cuenta durante la búsqueda (en realidad es el límite superior de la búsqueda).
print('kappa'.find('a', 1, 4))
print('kappa'.find('a', 2, 4))

1
-1
    */
/**El método isalnum() */
/**
 El método sin parámetros llamado isalnum() comprueba si la cadena contiene solo dígitos o caracteres alfabéticos (letras) y devuelve True (verdadero) o False (falso) de acuerdo al resultado.
 Nota: cualquier elemento de cadena que no sea un dígito o una letra hace que el método regrese False (falso). Una cadena vacía también lo hace.
 # Demostración del método isalnum():
print('lambda30'.isalnum())
print('lambda'.isalnum())
print('30'.isalnum())
print('@'.isalnum())
print('lambda_30'.isalnum())
print(''.isalnum())

True
True
True
False
False
False 
 */
/** El método isalpha()*/
/**
 El método isalpha() es más especializado, se interesa en letras solamente.
 # Ejemplo: Demostración del método isalpha():
print("Moooo".isalpha())
print('Mu40'.isalpha())
    
True
False

 */
/**El método isdigit() */
/**
 Al contrario, el método isdigit() busca solo dígitos, cualquier otra cosa produce False (falso) como resultado.
 # Ejemplo: Demostración del método isdigit():
print('2018'.isdigit())
print("Year2019".isdigit())

True
False

 */
/**El método islower() */
/** El método islower() es una variante de isalpha(), solo acepta letras minúsculas.
 # Ejemplo: Demostración del método islower():
print("Moooo".islower())
print('moooo'.islower())
    
False
True

*/
/**El método isspace() */
/**
 El método isspace() identifica espacios en blanco solamente, no tiene en cuenta ningún otro carácter (el resultado es entonces False).
 # Ejemplo: Demostración del método isspace():
print(' \n '.isspace())
print(" ".isspace())
print("mooo mooo mooo".isspace())

True
True
False

 */
/**El método isupper() */
/**
El método isupper() es la versión en mayúscula de islower(), se concentra solo en letras mayúsculas.
# Ejemplo: Demostración del método isupper():
print("Moooo".isupper())
print('moooo'.isupper())
print('MOOOO'.isupper())
  
False
False
True 
 */
/**El método join() */
/**
 El método join() es algo complicado, así que déjanos guiarte paso a paso:

    Como su nombre lo indica, el método realiza una unión y espera un argumento del tipo lista; se debe asegurar que todos los elementos de la lista sean cadenas: de lo contrario, el método generará una excepción TypeError.
    Todos los elementos de la lista serán unidos en una sola cadena pero...
    ... la cadena desde la que se ha invocado el método será utilizada como separador, puesta entre las cadenas.
    La cadena recién creada se devuelve como resultado.
# Demostración del método join():
print(",".join(["omicron", "pi", "rho"]))

omicron,pi,rho
 */
/** El método lower()*/
/**El método lower() genera una copia de una cadena, reemplaza todas las letras mayúsculas con sus equivalentes en minúsculas, y devuelve la cadena como resultado. Nuevamente, la cadena original permanece intacta.
 Si la cadena no contiene caracteres en mayúscula, el método devuelve la cadena original.
Nota: El método lower() no toma ningún parámetro.
  # Demostración del método lower():
print("SiGmA=60".lower())
sigma=60
 
 */
/**El método lstrip() */
/**
 El método sin parámetros lstrip() devuelve una cadena recién creada formada a partir de la original eliminando todos los espacios en blanco iniciales.
 # Demostración del método lstrip():
print("[" + " tau ".lstrip() + "]")
[tau ]

El método con un parámetro lstrip() hace lo mismo que su versión sin parámetros, pero elimina todos los caracteres incluidos en el argumento (una cadena), no solo espacios en blanco:
print("www.cisco.com".lstrip("w."))
cisco.com

 */
/** El método replace() */
/**
 El método replace() con dos parámetros devuelve una copia de la cadena original en la que todas las apariciones del primer argumento han sido reemplazadas por el segundo argumento.
 # Demostración del método replace():
print("www.netacad.com".replace("netacad.com", "pythoninstitute.org"))
print("This is it!".replace("is", "are"))
print("Apple juice".replace("juice", ""))

www.pythoninstitute.org
Thare are it!
Apple 

La variante del método replace() con tres parámetros emplea un tercer argumento (un número) para limitar el número de reemplazos.

print("This is it!".replace("is", "are", 1))
print("This is it!".replace("is", "are", 2))

Thare is it!
Thare are it!

 */
/**El método rfind() */
/**
 Los métodos de uno, dos y tres parámetros denominados rfind() hacen casi lo mismo que sus contrapartes (las que carecen del prefijo r), pero comienzan sus búsquedas desde el final de la cadena, no el principio (de ahí el prefijo r, de reversa).
 # Demostración del método rfind():
print("tau tau tau".rfind("ta"))
print("tau tau tau".rfind("ta", 9))
print("tau tau tau".rfind("ta", 3, 9))
    
8
-1
4

 */
/**El método rstrip() */
/**
 Dos variantes del método rstrip() hacen casi lo mismo que el método lstrip, pero afecta el lado opuesto de la cadena.
 # Demostración del método rstrip():
print("[" + " upsilon ".rstrip() + "]")
print("cisco.com".rstrip(".com"))
    
[ upsilon]
cis

 */
/**El método split() */
/**
 * El método split() divide la cadena y crea una lista de todas las subcadenas detectadas.
El método asume que las subcadenas están delimitadas por espacios en blanco, los espacios no participan en la operación y no se copian en la lista resultante.
Si la cadena está vacía, la lista resultante también está vacía

# Demostración del método split():
print("phi       chi\npsi".split())

['phi', 'chi', 'psi']

*/
/**El método startswith() */
/**
 El método startswith() es un espejo del método endswith(), comprueba si una cadena dada comienza con la subcadena especificada.
 # Demostración del método startswith():
print("omega".startswith("meg"))
print("omega".startswith("om"))

print()
False
True

 */
/** El método strip()*/
/**
 El método strip() combina los efectos causados por rstrip() y lstrip(), crea una nueva cadena que carece de todos los espacios en blanco iniciales y finales.
 # Demostración del método strip():
print("[" + "   aleph   ".strip() + "]")
[aleph]
 */
/**  El método swapcase()*/
/**
 El método swapcase() crea una nueva cadena intercambiando todas las letras por mayúsculas o minúsculas dentro de la cadena original: los caracteres en mayúscula se convierten en minúsculas y viceversa.
 # Demostración del método swapcase():
print("Yo solo sé que no sé nada".swapcase())

print()
yO SOLO SÉ QUE NO SÉ NADA

 */
/**El método title() */
/**
 El método title() realiza una función algo similar cambia la primera letra de cada palabra a mayúsculas, convirtiendo todas las demás a minúsculas.
 # Demostración del método title():
print("Yo solo sé que no sé nada. Parte 1.".title())

print()
Yo Solo Sé Que No Sé Nada. Parte 1.
 */
/**El método upper()*/
/**
 el método upper() hace una copia de la cadena de origen, reemplaza todas las letras minúsculas con sus equivalentes en mayúsculas, y devuelve la cadena como resultado.
 # Demostración del método upper():
print("Yo solo sé que no sé nada. Parte 2.".upper())
YO SOLO SÉ QUE NO SÉ NADA. PARTE 2.

 */
/**ejemplos */
/**
 for ch in "abc123XYX":
    if ch.isupper():
        print(ch.lower(), end='')
    elif ch.islower():
        print(ch.upper(), end='')
    else:
        print(ch, end='') 

ABC123xyx
 */
/**
 Tu tarea es escribir tu propia función, que se comporte casi como el método original split(), por ejemplo:

    Debe aceptar únicamente un argumento: una cadena.
    Debe devolver una lista de palabras creadas a partir de la cadena, dividida en los lugares donde la cadena contiene espacios en blanco.
    Si la cadena está vacía, la función debería devolver una lista vacía.
    Su nombre debe ser mysplit().


 def mysplit(strng):
    # devolver [] si la cadena está vacía o solo contiene espacios en blanco
    if strng == '' or strng.isspace():
        return [ ]
    # preparar una lista a devolver
    lst = []
    # preparar una palabra para construir palabras subsecuentes
    word = ''
    # verificar si actualmente estamos dentro de una palabra (es decir, si la cadena comienza con una palabra)
    inword = not strng[0].isspace()
    # iterar a través de todos los caracteres en cadena
    for x in strng:
        # si actualmente estamos dentro de una cadena...
        if inword:
            # ... y el carácter actual no es un espacio...
            if not x.isspace():
                # ... actualizar palabra actual
                word = word + x
            else:
                # ... de lo contrario, llegamos al final de la palabra, por lo que debemos agregarla a la lista...
                lst.append(word)
                # ... y señalar que estamos ahora fuera de la palabra
                inword = False
        else:
            # si estamos fuera de la palabra y llegamos a un carácter no que no es un espacio en blanco...
            if not x.isspace():
                # ... significa que ha comenzado una nueva palabra, por lo que debemos recordarla y...
                inword = True
                # ... almacenar la primera letra de la nueva palabra
                word = x
            else:
                pass
    # si hemos dejado la cadena y hay una cadena no vacía en la variable word, necesitamos actualizar la lista
    if inword:
        lst.append(word)
    # devolver la lista al invocador
    return lst


print(mysplit("Ser o no ser, esa es la cuestión"))
print(mysplit("Ser o no ser, esa es la cuestión"))
print(mysplit("   "))
print(mysplit(" abc "))
print(mysplit(""))
 */
/**console */
/**
 ['Ser', 'o', 'no', 'ser,', 'esa', 'es', 'la', 'cuestión']
['Ser', 'o', 'no', 'ser,', 'esa', 'es', 'la', 'cuestión']
[]
['abc']
[]

 */

/***********************************/
/**SECCION 4 */
/**Cadenas en acción */
/**Comparando cadenas
 Las cadenas en Python pueden ser comparadas usando el mismo conjunto de operadores que se emplean con los números.
Observa estos operadores, también sirven para comparar cadenas:

    ==
    !=
    >
    >=
    <
    <=
Existe un "pero": los resultados de tales comparaciones a veces pueden ser un poco sorprendentes. No olvides que Python no es consciente (no puede serlo de ninguna manera) de problemas lingüísticos sutiles, simplemente compara valores de puntos de código, carácter por carácter.
Dos cadenas son iguales cuando consisten de los mismos caracteres en el mismo orden. Del mismo modo, dos cadenas no son iguales cuando no consisten de los mismos caracteres en el mismo orden.
Ambas comparaciones dan True (verdadero) como resultado:
    'alpha' == 'alpha'
    'alpha' != 'Alpha'
    'alpha' < 'alphabet'

La comparación de cadenas siempre distingue entre mayúsculas y minúsculas (las letras mayúsculas se consideran menores en comparación con las minúsculas).
La expresión es True (verdadera)
    'beta' > 'Beta'

'10' == '010' FALSE 
'10' > '010' TRUE
'10' > '8' FALSE
'20' < '8' TRUE
'20' < '80 TRUE

en una comparación de cadenas, Python compara lexicográficamente (como en un diccionario) de izquierda a derecha. En este caso, '1' en '10' es mayor que '0' en '010', lo que hace que '10' sea mayor.
*/
/**Ordenamiento */
/**
 La comparación está estrechamente relacionada con el ordenamiento (o más bien, el ordenamiento es, de hecho, un caso muy sofisticado de comparación).
Esta es una buena oportunidad para mostrar dos formas posibles de ordenar listas que contienen cadenas. Dicha operación es muy común en el mundo real: cada vez que ves una lista de nombres, productos, títulos o ciudades, esperas que este ordenada.

En general, Python ofrece dos formas diferentes de ordenar las listas.
El primero se implementa con una función llamada sorted().
La función toma un argumento (una lista) y retorna una nueva lista, con los elementos ordenados del argumento. (Nota: esta descripción está un poco simplificada en comparación con la implementación real; lo discutiremos más adelante).

# Demostración de la función sorted():
first_greek = ['omega', 'alpha', 'pi', 'gamma']
first_greek_2 = sorted(first_greek)

print(first_greek)
print(first_greek_2)

print()

['omega', 'alpha', 'pi', 'gamma']
['alpha', 'gamma', 'omega', 'pi']

El segundo método afecta a la lista misma, no se crea una nueva lista. El ordenamiento se realiza por el método denominado sort().
# Demostración del método sort():
second_greek = ['omega', 'alpha', 'pi', 'gamma']
print(second_greek)

second_greek.sort()
print(second_greek)
    
['omega', 'alpha', 'pi', 'gamma']
['alpha', 'gamma', 'omega', 'pi']

 */
/**Cadenas versus números */
/**
 ¿Cómo convertir un número (un entero o un flotante) en una cadena, y viceversa? Puede ser necesario realizar tal transformación. Además, es una forma rutinaria de procesar datos de entrada o salida.
 La conversión de cadena a número es simple, ya que siempre es posible. Se realiza mediante una función llamada str().

 De numero a cadena
 itg = 13
flt = 1.3
si = str(itg)
sf = str(flt)

print(si + ' ' + sf)

La transformación inversa solo es posible cuando la cadena representa un número válido. Si no se cumple la condición, espera una excepción ValueError.
Emplea la función int() si deseas obtener un entero, y float() si necesitas un valor punto flotante.

si = '13'
sf = '1.3'
itg = int(si)
flt = float(sf)

print(itg + flt) //14.3

*/
/**
 ******EJEMPLO
 digits = [ '1111110',  	# 0
	   '0110000',	# 1
	   '1101101',	# 2
	   '1111001',	# 3
	   '0110011',	# 4
	   '1011011',	# 5
	   '1011111',	# 6
	   '1110000',	# 7
	   '1111111',	# 8
	   '1111011',	# 9
	   ]


def print_number(num):
	global digits
	digs = str(num)
	lines = [ '' for lin in range(5) ]
	for d in digs:
		segs = [ [' ',' ',' '] for lin in range(5) ]
		ptrn = digits[ord(d) - ord('0')]
		if ptrn[0] == '1':
			segs[0][0] = segs[0][1] = segs[0][2] = '#'
		if ptrn[1] == '1':
			segs[0][2] = segs[1][2] = segs[2][2] = '#'
		if ptrn[2] == '1':
			segs[2][2] = segs[3][2] = segs[4][2] = '#'
		if ptrn[3] == '1':
			segs[4][0] = segs[4][1] = segs[4][2] = '#'
		if ptrn[4] == '1':
			segs[2][0] = segs[3][0] = segs[4][0] = '#'
		if ptrn[5] == '1':
			segs[0][0] = segs[1][0] = segs[2][0] = '#'
		if ptrn[6] == '1':
			segs[2][0] = segs[2][1] = segs[2][2] = '#'
		for lin in range(5):
			lines[lin] += ''.join(segs[lin]) + ' '
	for lin in lines:
		print(lin)


print_number(int(input("Ingresa el número que deseas mostrar: ")))
    
 */
/*** *****************/
/**SECCION 5 */
/**EL SIFRADO CESAR encriptando un mensaje */
/**
 Este cifrado fue (probablemente) inventado y utilizado por Cayo Julio César y sus tropas durante las Guerras Galas. La idea es bastante simple: cada letra del mensaje se reemplaza por su consecuente más cercano (A se convierte en B, B se convierte en C, y así sucesivamente). La única excepción es la Z, la cual se convierte en A.

# Cifrado César.
text = input("Ingresa tu mensaje: ")
cipher = ''
for char in text:
    if not char.isalpha():
        continue
    char = char.upper()
    code = ord(char) + 1
    if code > ord('Z'):
        code = ord('A')
    cipher += chr(code)

print(cipher)
   console
   Ingresa tu mensaje: abc
BCD 
 */
/**El Cifrado César: descifrando un mensaje */
/**
 # Cifrado César - descifrando un mensaje.
cipher = input('Ingresa tu criptograma: ')
text = ''
for char in cipher:
    if not char.isalpha():
        continue
    char = char.upper()
    code = ord(char) - 1
    if code < ord('A'):
        code = ord('Z')
    text += chr(code)

print(text)

Ingresa tu criptograma: abc
ZAB
 */
/** El Procesador de Números*/
/**
 El tercer programa muestra un método simple que permite ingresar una línea llena de números y sumarlos fácilmente. Nota: la función input(), combinada junto con las funciones int() o float(), no es lo adecuado para este propósito.
 #Procesador de Números.

line = input("Ingresa una línea de números, sepáralos con espacios: ")
strings = line.split()
total = 0
try:
    for substr in strings:
        total += float(substr)
    print("El total es:", total)
except:
    print(substr, "no es un numero.")

 Ingresa una línea de números, sepáralos con espacios: 1 2 3 4 5
El total es: 15.0   
 */
/**
 * *****EJEMPLO
 text = input("Ingresa un texto: ")

# Quitar todos los espacios...
text = text.replace(' ','')

# ... y revisar si la palabra es igual en ambos sentidos
if len(text) > 1 and text.upper() == text[::-1].upper():
	print("Es un palíndromo")
else:
	print("No es un palíndromo")

Ingresa un texto: kayak
Es un palíndromo
    */
/**
 * ********EJEMPLE
 str_1 = input("Ingresa la primera cadena: ")
str_2 = input("Ingresa la segunda cadena: ")

strx_1 = ''.join(sorted(list(str_1.upper().replace(' ',''))))
strx_2 = ''.join(sorted(list(str_2.upper().replace(' ',''))))
if len(strx_1) > 0 and strx_1 == strx_2:
	print("Anagramas")
else:
	print("No son anagramas")
	
 */
/**
 ******EJEMPLO
 date = input("Ingresa tu fecha de cumpleaños (en el siguiente formato: AAAAMMDD o AAAADDMM, 8 dígitos): ")
if len(date) != 8 or not date.isdigit():
    print("Formato de fecha inválida.")
else:
    while len(date) > 1:
        the_sum = 0
        for dig in date:
            the_sum += int(dig)
        print(date)
        date = str(the_sum)
    print("Tu Dígito de la Vida es: " + date)

Ingresa tu fecha de cumpleaños (en el siguiente formato: AAAAMMDD o AAAADDMM, 8 dígitos): 19891106
19891106
35
Tu Dígito de la Vida es: 8
 */
/**
 * *****EJEMPLO
word = input("Ingresa la palabra que deseas encontrar: ").upper()
strn = input("Ingresa la cadena en donde deseas buscar: ").upper()

found = True
start = 0

for ch in word:
	pos = strn.find(ch, start) 
	if pos < 0:
		found = False
		break
	start = pos + 1
if found:
	print("Si")
else:
    print("No")
	   
    Ingresa la palabra que deseas encontrar: ALE
Ingresa la cadena en donde deseas buscar: MALENA
Si
 */
/**
 * *****SECCION 6
 */
/**ERRORES */
/**
 Errores, fallas y otras plagas
 Cualquier cosa que pueda salir mal, saldrá mal.

Esta es la ley de Murphy, y funciona en todo y siempre. Si la ejecución del código puede salir mal, lo hará.

import math
x = float(input("Ingresa x: "))
y = math.sqrt(x)
print("La raíz cuadrada de", x, "es igual a", y)


    Como el usuario puede ingresar una cadena de caracteres completamente arbitraria, no hay garantía de que la cadena se pueda convertir en un valor flotante: esta es la primera vulnerabilidad del código.
    La segunda es que la función sqrt() fallará si se le ingresa un valor negativo.

 */
/**EXCEPCIONES */
/**
 Cada vez que su código intenta hacer algo incorrecto/tonto/irresponsable/loco/no ejecutable, Python hace dos cosas:

    Detiene tu programa.
    Crea un tipo especial de dato, llamado excepción.
Podemos decir que Python siempre genera una excepción (o que una excepción ha sido generada) cuando no tiene idea de qué hacer con el código.
¿Qué ocurre después?

    La excepción generada espera que alguien o algo lo note y haga algo al respecto.
    Si la excepción no es resuelta, el programa será terminado abruptamente, y verás un mensaje de error enviado a la consola por Python.
    De otra manera, si se atiende la excepción y es manejada apropiadamente, el programa puede reanudarse y su ejecución puede continuar.
Python proporciona herramientas efectivas que permiten observar, identificar y manejar las excepciones eficientemente. Esto es posible debido a que todas las excepciones potenciales tienen un nombre específico, por lo que se pueden clasificar y reaccionar a ellas adecuadamente.

* ValueError
* ZeroDivisionError
* Este es el IndexError (Error de Índice).

¿Cómo se manejan las excepciones? La palabra try es clave para la solución.

Además, también es una palabra clave reservada.

La receta para el éxito es la siguiente:

    Primero, se debe intentar (try) hacer algo.
    Después, tienes que comprobar si todo salió bien

    ****ejemplo

first_number = int(input("Ingresa el primer número: "))
second_number = int(input("Ingresa el segundo número: "))

if second_number != 0:
    print(first_number / second_number)
else:
    print("Esta operación no puede ser realizada.")

print("FIN.")

Ingresa el primer número: 6
Ingresa el segundo número: 2
3.0
FIN.

****ejemplo
first_number = int(input("Ingresa el primer número: "))
second_number = int(input("Ingresa el segundo numero: "))

try:
    print(first_number / second_number)
except:
    print("Esta operación no puede ser realizada.")

print("FIN.")
    
Ingresa el primer número: 6
Ingresa el segundo numero: 0
Esta operación no puede ser realizada.
FIN.
 */
/**
 
    La palabra reservada try comienza con un bloque de código el cual puede o no estar funcionando correctamente.
    Después, Python intenta realizar la acción arriesgada: si falla, se genera una excepción y Python comienza a buscar una solución.
    La palabra reservada except comienza con un bloque de código que será ejecutado si algo dentro del bloque try sale mal: si se genera una excepción dentro del bloque anterior try, fallará aquí, entonces el código ubicado después de la palabra clave reservada except debería proporcionar una reacción adecuada a la excepción generada.
    Por ultimo, se regresa al nivel de anidación anterior, es decir, se termina la sección try-except.
try:
    print("1")
    x = 1 / 0
    print("2")
except:
    print("Oh cielos, algo salió mal...")

print("3")

1
Oh cielos, algo salió mal...
3

 */
/**
 * ejemplo
 try:
    x = int(input("Ingresa un número: "))
    y = 1 / x
    print(y)
except ZeroDivisionError:
    print("No puedes dividir entre cero, lo siento.")
except ValueError:
    print("Debes ingresar un valor entero..")
except:
    print("Oh cielos, algo salió mal...")

print("FIN.")

Ingresa un número: f
Debes ingresar un valor entero..
FIN.
 */
/**
 No olvides que:

    Los bloques except son analizados en el mismo orden en que aparecen en el código.
    No debes usar más de un bloque de excepción con el mismo nombre.
    El número de diferentes bloques except es arbitrario, la única condición es que si se emplea el try, debes poner al menos un except (nombrado o no) después de el.
    La palabra clave reservada except no debe ser empleada sin que le preceda un try.
    Si uno de los bloques except es ejecutado, ningún otro lo será.
    Si ninguno de los bloques except especificados coincide con la excepción planteada, la excepción permanece sin manejar (lo discutiremos pronto).
    Si un except sin nombre existe, tiene que especificarse como el último.

 */
/*****SECCION 7 */
/**lA ANATOMIA DE LAS EXCEPCIONES */
/**
 Python 3 define 63 excepciones integradas, y todas ellas forman una jerarquía en forma de árbol, aunque el árbol es un poco extraño ya que su raíz se encuentra en la parte superior.
 Algunas de las excepciones integradas son más generales (incluyen otras excepciones) mientras que otras son completamente concretas (solo se representan a sí mismas). Podemos decir que cuanto más cerca de la raíz se encuentra una excepción, más general (abstracta) es. A su vez, las excepciones ubicadas en los extremos del árbol (podemos llamarlas hojas) son concretas.
 
    ZeroDivisionError es un caso especial de una clase de excepción más general llamada ArithmeticError.
    ArithmeticError es un caso especial de una clase de excepción más general llamada solo Exception.
    Exception es un caso especial de una clase más general llamada BaseException.

Cada excepción generada cae dentro de la primer coincidencia.
La coincidencia correspondiente no tiene que especificar exactamente la misma excepción, es suficiente que la excepción sea más general (más abstracta) que la generada
try:
    y = 1 / 0
except ZeroDivisionError:
    print("¡División entre cero!")
except ArithmeticError:
    print("¡Problema Aritmético!")

print("FIN.")
 
¡División entre cero!
FIN.
   
Recuerda:

    ¡El orden de las excepciones importa!
    No coloques excepciones más generales antes que otras más concretas.
    Esto hará que el último sea inalcanzable e inútil.
    Además, hará que el código sea desordenado e inconsistente.
    Python no generará ningún mensaje de error con respecto a este problema.

También es posible dejar que la excepción se propague fuera de la función. Probémoslo ahora.
def bad_fun(n):
    return 1 / n

try:
    bad_fun(0)
except ArithmeticError:
    print("¿Que ocurrió? ¡Se generó una excepción!")

print("FIN.")


¿Que ocurrió? ¡Se generó una excepción!
FIN.

raise
 La sentencia de Python raise NombreDeExcepción puede generar una excepción bajo demanda. La misma sentencia pero sin NombreDeExcepción, se puede usar solamente dentro del bloque except, y genera la misma excepción que se está manejando actualmente.
La instrucción te permite:

    Simular excepciones reales (por ejemplo, para probar tu estrategia de manejo de excepciones).
    Parcialmente manejar una excepción y hacer que otra parte del código sea responsable de completar el manejo.
def bad_fun(n):
    raise ZeroDivisionError


try:
    bad_fun(0)
except ArithmeticError:
    print("¿Qué pasó? ¿Un error?")

print("FIN.")

¿Qué pasó? ¿Un error?
FIN.
 
**************
assert (afirmar)

    Se evalúa la expresión.
    Si la expresión se evalúa como True (Verdadera), o un valor numérico distinto de cero, o una cadena no vacía, o cualquier otro valor diferente de None, no hará nada más.
    De lo contrario, automáticamente e inmediatamente se genera una excepción llamada AssertionError (en este caso, decimos que la afirmación ha fallado).
Puedes ponerlo en la parte del código donde quieras estar absolutamente a salvo de datos incorrectos, y donde no estés absolutamente seguro de que los datos hayan sido examinados cuidadosamente antes (por ejemplo, dentro de una función utilizada por otra persona).
El generar una excepción AssertionError asegura que tu código no produzca resultados no válidos y muestra claramente la naturaleza de la falla.
Las aserciones no reemplazan las excepciones ni validan los datos, son suplementos.
import math

x = float(input("Ingresa un número: "))
assert x >= 0.0

x = math.sqrt(x)

print(x)
Ingresa un número: 2
1.4142135623730951

Ingresa un número: -1
Traceback (most recent call last):
  File "main.py", line 4, in 
    assert x >= 0.0
AssertionError


 */

/**EXCEPCIONES INTEGRADAS */
/**
 Las excepciones son tan rutinarias y normales como cualquier otro aspecto de la vida de un programador.

Para cada excepción, te mostraremos:

    Su nombre.
    Su ubicación en el árbol de excepciones.
    Una breve descripción.
    Un fragmento de código conciso que muestre las circunstancias en las que se puede generar la excepción.

ArithmeticError
Ubicación: BaseException ← Exception ← ArithmeticError
Descripción: una excepción abstracta que incluye todas las excepciones causadas por operaciones aritméticas como división cero o dominio inválido de un argumento.

AssertionError
Ubicación: BaseException ← Exception ← AssertionError
Descripción: una excepción concreta generada por la instrucción assert cuando su argumento se evalúa a False (falso), None (ninguno), 0, o una cadena vacía.

BaseException
Ubicación: BaseException
Descripción: la excepción más general (abstracta) de todas las excepciones de Python: todas las demás excepciones se incluyen en esta; se puede decir que las siguientes dos excepciones son equivalentes: except: y except BaseException:.

IndexError
Ubicación: BaseException ← Exception ← LookupError ← IndexError
Descripción: una excepción concreta que surge cuando se intenta acceder al elemento de una secuencia inexistente (por ejemplo, el elemento de una lista).

KeyboardInterrupt
Ubicación: BaseException ← KeyboardInterrupt
Descripción: una excepción concreta que surge cuando el usuario usa un atajo de teclado diseñado para terminar la ejecución de un programa (Ctrl-C en la mayoría de los Sistemas Operativos); si manejar esta excepción no conduce a la terminación del programa, el programa continúa su ejecución.
Nota: esta excepción no se deriva de la clase Exception

LookupError
Ubicación: BaseException ← Exception ← LookupError
Descripción: una excepción abstracta que incluye todas las excepciones causadas por errores resultantes de referencias no válidas a diferentes colecciones (listas, diccionarios, tuplas, etc.).

MemoryError
Ubicación: BaseException ← Exception ← MemoryError
Descripción: se genera una excepción concreta cuando no se puede completar una operación debido a la falta de memoria libre. 

OverflowError
Ubicación: BaseException ← Exception ← ArithmeticError ← OverflowError
Descripción: una excepción concreta que surge cuando una operación produce un número demasiado grande para ser almacenado con éxito.

ImportError
Ubicación: BaseException ← Exception ← StandardError ← ImportError
Descripción: se genera una excepción concreta cuando falla una operación de importación.

KeyError
bicación: BaseException ← Exception ← LookupError ← KeyError
Descripción: una excepción concreta que se genera cuando intentas acceder al elemento inexistente de una colección (por ejemplo, el elemento de un diccionario).


*/
/**ejemplo */
/**
 def read_int(prompt, min, max):
    ok = False
    while not ok:
        try:
            value = int(input(prompt))
            ok = True
        except ValueError:
            print("Error: entrada incorrecta")
        if ok:
            ok = value >= min and value <= max
        if not ok:
            print("Error: el valor no está dentro del rango permitido (" + str(min) + ".." + str(max) + ")")
    return value;


v = read_int("Ingresa un número entre -10 a 10: ", -10, 10)

print("El número es:", v)
Ingresa un número entre -10 a 10: 5
El número es: 5

Ingresa un número entre -10 a 10: 100
Error: el valor no está dentro del rango permitido (-10..10)

*/