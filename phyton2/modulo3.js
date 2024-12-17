/***SECCION 1 */
/**LOS FUNDAMENTOS DE LA POO */
/**
 Este tipo de programación en un proyecto facilita muchas tareas importantes, por ejemplo, dividir el proyecto en partes pequeñas e independientes y el desarrollo independiente de diferentes elementos del proyecto.
 Python es una herramienta universal para la programación procedimental y orientada a objetos. Se puede utilizar con éxito en ambos enfoques.

 */
/**Enfoque procedimental versus el enfoque orientado a objetos */
/**
 En el enfoque procedimental, es posible distinguir dos mundos diferentes y completamente separados: el mundo de los datos y el mundo del código. El mundo de los datos está poblado con variables de diferentes tipos, mientras que el mundo del código está habitado por códigos agrupados en módulos y funciones.
 Las funciones pueden usar datos, pero no al revés. Además, las funciones pueden abusar de los datos, es decir, usar el valor de manera no autorizada (por ejemplo, cuando la función seno recibe el saldo de una cuenta bancaria como parámetro).
 Los datos no pueden usar funciones. ¿Pero es esto completamente cierto? ¿Hay algunos tipos especiales de datos que puedan usar funciones?
Sí, los hay, los llamados métodos. Estas son funciones que se invocan desde dentro de los datos, no junto con ellos. Si puedes ver esta distinción, has dado el primer paso en la programación de objetos.
El enfoque orientado a objetos sugiere una forma de pensar completamente diferente. Los datos y el código están encapsulados juntos en el mismo mundo, divididos en clases.
Cada clase es como una receta que se puede usar cuando quieres crear un objeto útil. Puedes producir tantos objetos como necesites para resolver tu problema.
Cada objeto tiene un conjunto de rasgos (se denominan propiedades o atributos; usaremos ambas palabras como sinónimos) y es capaz de realizar un conjunto de actividades (que se denominan métodos).
Los objetos son encarnaciones de las ideas expresadas en clases
Los objetos interactúan entre sí, intercambian datos o activan sus métodos. Una clase construida adecuadamente (y, por lo tanto, sus objetos) puede proteger los datos sensibles y ocultarlos de modificaciones no autorizadas.
No existe un límite claro entre los datos y el código: viven como uno solo dentro de los objetos.

 */
/**JERARQUIA DE CLASES */
/**
 La clase que nos concierne es como una categoría, como resultado de similitudes definidas con precisión.
 La clase Vehículos es muy amplia. Tenemos que definir clases especializadas. Las clases especializadas son las subclases. La clase Vehículos será una superclase para todas ellas.
 La jerarquía crece de arriba hacia abajo, como raíces de árboles, no ramas. La clase más general y más amplia siempre está en la parte superior (la superclase) mientras que sus descendientes se encuentran abajo (las subclases).

 */
/**¿Qué es un objeto? */
/**
 Una clase (entre otras definiciones) es un conjunto de objetos. Un objeto es un ser perteneciente a una clase.
 Un objeto es una encarnación de los requisitos, rasgos y cualidades asignados a una clase específica. Esto puede sonar simple, pero ten en cuenta las siguientes circunstancias importantes. Las clases forman una jerarquía.
 Cada subclase es más especializada (o más específica) que su superclase. Por el contrario, cada superclase es más general (más abstracta) que cualquiera de sus subclases.

 */
/**HERENCIA */
/**
 Definamos uno de los conceptos fundamentales de la programación de objetos, llamado herencia. Cualquier objeto vinculado a un nivel específico de una jerarquía de clases hereda todos los rasgos (así como los requisitos y cualidades) definidos dentro de cualquiera de las superclases.

 */
/**QUE CONTIENE UN OBJETO? */
/**
 La programación orientada a objetos supone que cada objeto existente puede estar equipado con tres grupos de atributos:
     Un objeto tiene un nombre que lo identifica de forma exclusiva dentro de su namespace (aunque también puede haber algunos objetos anónimos).
    Un objeto tiene un conjunto de propiedades individuales que lo hacen original, único o sobresaliente (aunque es posible que algunos objetos no tengan propiedades).
    Un objeto tiene un conjunto de habilidades para realizar actividades específicas, capaz de cambiar el objeto en sí, o algunos de los otros objetos.
Existe una pista (aunque esto no siempre funciona) que te puede ayudar a identificar cualquiera de las tres esferas anteriores. Cada vez que se describe un objeto y se usa:
    Un sustantivo: probablemente se está definiendo el nombre del objeto.
    Un adjetivo: probablemente se está definiendo una propiedad del objeto.
    Un verbo: probablemente se está definiendo una actividad del objeto.

 */
/**TU PRIMER CLASE */
/**
 La programación orientada a objetos es el arte de definir y expandir clases. Una clase es un modelo de una parte muy específica de la realidad, que refleja las propiedades y actividades que se encuentran en el mundo real.
 La clase que se define no tiene nada que ver con el objeto: la existencia de una clase no significa que ninguno de los objetos compatibles se creará automáticamente. La clase en sí misma no puede crear un objeto: debes crearlo tu mismo y Python te permite hacerlo.
        class TheSimplestClass:
            pass
La definición comienza con la palabra clave reservada class. La palabra clave reservada es seguida por un identificador que le dará nombre a la clase (nota: no lo confundas con el nombre del objeto: estas son dos cosas diferentes).
La palabra clave reservada pass llena la clase con nada. No contiene ningún método ni propiedades.

TU PRIMER OBJETO
debes asignar una variable para almacenar el objeto recién creado de esa clase y crear un objeto al mismo tiempo.
    my_first_object = TheSimplestClass()

El acto de crear un objeto de la clase seleccionada también se llama instanciación (ya que el objeto se convierte en una instancia de la clase).

 */
/***************** */
/**SECCION 2 */
/**QUE ES UNA PILA */
/***
 Una pila es una estructura desarrollada para almacenar datos de una manera muy específica. Imagina una pila de monedas. No puedes poner una moneda en ningún otro lugar sino en la parte superior de la pila.
 Del mismo modo, no puedes sacar una moneda de la pila desde ningún lugar que no sea la parte superior de la pila. Si deseas obtener la moneda que se encuentra en la parte inferior, debes eliminar todas las monedas de los niveles superiores.
 El nombre alternativo para una pila (pero solo en la terminología de TI) es UEPS (LIFO son sus siglas en inglés).
Es una abreviatura para una descripción muy clara del comportamiento de la pila: Último en Entrar - Primero en Salir (Last In - First Out). La moneda que quedó en último lugar en la pila saldrá primero.. La moneda que llegó en último lugar a la pila se irá primero.
Una pila es un objeto con dos operaciones elementales, denominadas convencionalmente push (cuando un nuevo elemento se coloca en la parte superior) y pop (cuando un elemento existente se retira de la parte superior).

 */
/**La pila: el enfoque procedimental */
/**
 Primero, debes decidir como almacenar los valores que llegarán a la pila. Sugerimos utilizar el método más simple, y emplear una lista para esta tarea. Supongamos que el tamaño de la pila no está limitado de ninguna manera. Supongamos también que el último elemento de la lista almacena el elemento superior.
 La pila en sí ya está creada:
stack = []

Estamos listos para definir una función que coloca un valor en la pila. Aquí están las presuposiciones para ello:
    El nombre para la función es push.
    La función obtiene un parámetro (este es el valor que se debe colocar en la pila).
    La función no retorna nada.
    La función agrega el valor del parámetro al final de la pila.
        def push(val):
            stack.append(val)

Ahora es tiempo de que una función quite un valor de la pila. Así es como puedes hacerlo:
    El nombre de la función es pop.
    La función no obtiene ningún parámetro.
    La función devuelve el valor tomado de la pila.
    La función lee el valor de la parte superior de la pila y lo elimina.
        def pop():
           val = stack[-1]
           del stack[-1]
           return val

Armemos todas las piezas juntas para poner la pila en movimiento. El programa completo empuja (push) tres números a la pila, los saca e imprime sus valores en pantalla. Puedes verlo en la ventana del editor.
stack = []

def push(val):
    stack.append(val)

def pop():
    val = stack[-1]
    del stack[-1]
    return val

push(3)
push(2)
push(1)

print(pop())
print(pop())
print(pop())

1
2
3 
*/
/**La pila: el enfoque procedimental versus el enfoque orientado a objetos*/
/**
 Pero cuanto más la uses, más desventajas encontrarás. Éstas son algunas de ellas:
 La variable esencial (la lista de la pila) es altamente vulnerable; cualquiera puede modificarla de forma incontrolable, destruyendo la pila; esto no significa que se haya hecho de manera maliciosa; por el contrario, puede ocurrir como resultado de un descuido, por ejemplo, cuando alguien confunde nombres de variables;
El enfoque orientado a objetos ofrece soluciones para cada uno de los problemas anteriores. Vamos a nombrarlos primero:
     La capacidad de ocultar (proteger) los valores seleccionados contra el acceso no autorizado se llama encapsulamiento; no se puede acceder a los valores encapsulados ni modificarlos si deseas utilizarlos exclusivamente.
    Cuando tienes una clase que implementa todos los comportamientos de pila necesarios, puedes producir tantas pilas como desees; no necesitas copiar ni replicar ninguna parte del código.
    La capacidad de enriquecer la pila con nuevas funciones proviene de la herencia; puedes crear una nueva clase (una subclase) que herede todos los rasgos existentes de la superclase y agregar algunos nuevos.

Ahora escribamos una nueva implementación de pila desde cero. Esta vez, utilizaremos el enfoque orientado a objetos, que te guiará paso a paso en el mundo de la programación de objetos.

 */
/** La pila: el enfoque orientado a objetos*/
/**
    Queremos que la clase tenga una propiedad como el almacenamiento de la pila, tenemos que "instalar" una lista dentro de cada objeto de la clase (nota: cada objeto debe tener su propia lista; la lista no debe compartirse entre diferentes pilas).
    Despues, queremos que la lista esté oculta de la vista de los usuarios de la clase. de la vista de los usuarios' de la clase.
A diferencia de otros lenguajes de programación, Python no tiene medios para permitirte declarar una propiedad como esa.
En su lugar, debes agregar una instrucción específica. Las propiedades deben agregarse a la clase manualmente.
Existe una manera simple de hacerlo, tienes que equipar a la clase con una función específica:
    Tiene que ser nombrada de forma estricta.
    Se invoca implícitamente cuando se crea el nuevo objeto.
Dicha función es llamada el constructor, ya que su propósito general es construir un nuevo objeto. El constructor debe saber todo acerca de la estructura del objeto y debe realizar todas las inicializaciones necesarias.

class Stack:
    def __init__ (self):
        print("¡Hola!")
 
 stack_object = Stack() 
 
 CONSOLE
 ¡Hola!

    El nombre del constructor es siempre __init__.
    Tiene que tener al menos un parámetro (discutiremos esto más adelante); el parámetro se usa para representar el objeto recién creado: puedes usar el parámetro para manipular el objeto y enriquecerlo con las propiedades necesarias; harás uso de esto pronto.
    Nota: el parámetro obligatorio generalmente se denomina self, es solo una sugerencía, pero deberías seguirla, simplifica el proceso de lectura y comprensión de tu código.

Cualquier cambio que realices dentro del constructor que modifique el estado del parámetro self se verá reflejado en el objeto recien creado.
Ahora agreguemos solo una propiedad al nuevo objeto, una lista para la pila. La nombraremos stack_list.
class Stack:
    def __init__(self):
        self.stack_list = []


stack_object = Stack()
print(len(stack_object.stack_list))
    CONSOLE 0
 
    Hemos usado la notación punteada, al igual que cuando se invocan métodos. Esta es la manera general para acceder a las propiedades de un objeto: debes nombrar el objeto, poner un punto (.) después de el, y especificar el nombre de la propiedad deseada, ¡no uses paréntesis! No deseas invocar un método, deseas acceder a una propiedad.
    Si estableces el valor de una propiedad por primera vez (como en el constructor), lo estás creando; a partir de ese momento, el objeto tiene la propiedad y está listo para usar su valor.

Esto no es lo que queremos de la pila. Nosotros queremos que stack_list este escondida del mundo exterior. ¿Es eso posible?
Si, y es simple, pero no muy intuitivo.
Echa un vistazo: hemos agregado dos guiones bajos antes del nombre stack_list, nada mas:
class Stack:
    def __init__(self):
        self.__stack_list = []


stack_object = Stack()
print(len(stack_object.__stack_list))


El cambio invalida el programa.

¿Por qué?
Cuando cualquier componente de la clase tiene un nombre que comienza con dos guiones bajos (__), se vuelve privado, esto significa que solo se puede acceder desde dentro de la clase.
No puedes verlo desde el mundo exterior. Así es como Python implementa el concepto de encapsulación.
Ejecuta el programa para probar nuestras suposiciones: una excepción AttributeError debe ser generada.

*/
/**El enfoque orientado a objetos: una pila desde cero*/
/**
 Ahora es el momento de que las dos funciones (métodos) implementen las operaciones push y pop. Python supone que una función de este tipo debería estar inmersa dentro del cuerpo de la clase, como el constructor.
 Queremos invocar estas funciones para agregar(push) y quitar(pop) valores de la pila. Esto significa que ambos deben ser accesibles para el usuario de la clase (en contraste con la lista previamente construida, que está oculta para los usuarios de la clase ordinaria).
 Tal componente es llamado público, por ello no puede comenzar su nombre con dos (o más) guiones bajos. Hay un requisito más el nombre no debe tener más de un guión bajo. Dado que ningún guion bajo final cumple completamente con el requisito, puedes suponer que el nombre es aceptable.

 class Stack:
    def __init__(self):
        self.__stack_list = []


    def push(self, val):
        self.__stack_list.append(val)


    def pop(self):
        val = self.__stack_list[-1]
        del self.__stack_list[-1]
        return val


stack_object = Stack()

stack_object.push(3)
stack_object.push(2)
stack_object.push(1)

print(stack_object.pop())
print(stack_object.pop())
print(stack_object.pop())
 */
/**EXPLICACION DE LA CLASE */
/**
 Sin embargo, hay algo realmente extraño en el código. Las funciones parecen familiares, pero tienen más parámetros que sus contrapartes procedimentales.
Aquí, ambas funciones tienen un parámetro llamado self en la primera posición de la lista de parámetros.
¿Es necesario? Si, lo es.
Todos los métodos deben tener este parámetro. Desempeña el mismo papel que el primer parámetro constructor.
Permite que el método acceda a entidades (propiedades y actividades / métodos) del objeto. No puedes omitirlo. Cada vez que Python invoca un método, envía implícitamente el objeto actual como el primer argumento.
Esto significa que el método está obligado a tener al menos un parámetro, que Python mismo utiliza, no tienes ninguna influencia sobre el.
Si tu método no necesita ningún parámetro, este debe especificarse de todos modos. Si está diseñado para procesar solo un parámetro, debes especificar dos, ya que la función del primero sigue siendo la misma.
Hay una cosa más que requiere explicación: la forma en que se invocan los métodos desde la variable __stack_list.
Afortunadamente, es mucho más simple de lo que parece:
    La primera etapa entrega el objeto como un todo → self.
    A continuación, debes llegar a la lista __stack_list → self.__stack_list.
    Con __stack_list lista para ser usada, puedes realizar el tercer y último paso → self.__stack_list.append(val).
La declaración de la clase está completa y se han enumerado todos sus componentes. La clase está lista para usarse.
Tener tal clase abre nuevas posibilidades. Por ejemplo, ahora puedes hacer que más de una pila se comporte de la misma manera. Cada pila tendrá su propia copia de datos privados, pero utilizará el mismo conjunto de métodos.
class Stack:
    def __init__(self):
        self.__stack_list = []

    def push(self, val):
        self.__stack_list.append(val)

    def pop(self):
        val = self.__stack_list[-1]
        del self.__stack_list[-1]
        return val


stack_object_1 = Stack()
stack_object_2 = Stack()

stack_object_1.push(3)
stack_object_2.push(stack_object_1.pop())

print(stack_object_2.pop())
CONSOLE 
3
*/
/**
 
Ahora vamos un poco mas lejos. Vamos a agregar una nueva clase para manejar pilas.
La nueva clase debería poder evaluar la suma de todos los elementos almacenados actualmente en la pila.
No queremos modificar la pila previamente definida. Ya es lo suficientemente buena en sus aplicaciones, y no queremos que cambie de ninguna manera. Queremos una nueva pila con nuevas capacidades. En otras palabras, queremos construir una subclase de la ya existente clase Stack.
El primer paso es fácil: solo define una nueva subclase que apunte a la clase que se usará como superclase.
class AddingStack(Stack):
    pass

La clase aún no define ningún componente nuevo, pero eso no significa que esté vacía. Obtiene (hereda) todos los componentes definidos por su superclase, el nombre de la superclase se escribe después de los dos puntos, después del nombre de la nueva clase.

    Queremos que el método push no solo inserte el valor en la pila, sino que también sume el valor a la variable sum.
    Queremos que la función pop no solo extraiga el valor de la pila, sino que también reste el valor de la variable sum.
En primer lugar, agreguemos una nueva variable a la clase. Será una variable privada, al igual que la lista de pila. No queremos que nadie manipule el valor de la variable sum.
Como ya sabes, el constructor agrega una nueva propiedad a la clase. Ya sabes como hacerlo, pero hay algo realmente intrigante dentro del constructor. Echa un vistazo:
class AddingStack(Stack):
    def __init__(self):
        Stack.__init__(self)
        self.__sum = 0

La segunda línea del cuerpo del constructor crea una propiedad llamada __sum, almacenará el total de todos los valores de la pila.
Pero la línea anterior se ve diferente. ¿Qué hace? ¿Es realmente necesaria? Sí lo es.
Al contrario de muchos otros lenguajes, Python te obliga a invocar explícitamente el constructor de una superclase. Omitir este punto tendrá efectos nocivos: el objeto se verá privado de la lista __stack_list. Tal pila no funcionará correctamente.
Esta es la única vez que puedes invocar a cualquiera de los constructores disponibles explícitamente; se puede hacer dentro del constructor de la superclase.

class Stack:
    def __init__(self):
        self.__stack_list = []

    def push(self, val):
        self.__stack_list.append(val)

    def pop(self):
        val = self.__stack_list[-1]
        del self.__stack_list[-1]
        return val


class AddingStack(Stack):
    def __init__(self):
        Stack.__init__(self)
        self.__sum = 0
*/
/**
 def push(self, val):
    self.__sum += val
    Stack.push(self, val)
Toma en cuenta la forma en que hemos invocado la implementación anterior del método push (el disponible en la superclase):
    Tenemos que especificar el nombre de la superclase; esto es necesario para indicar claramente la clase que contiene el método, para evitar confundirlo con cualquier otra función del mismo nombre.
    Tenemos que especificar el objeto de destino y pasarlo como primer argumento (no se agrega implícitamente a la invocación en este contexto).
Se dice que el método push ha sido anulado, el mismo nombre que en la superclase ahora representa una funcionalidad diferente.
 */
/**
 Esta es la nueva función pop:
 def pop(self):
    val = Stack.pop(self)
    self.__sum -= val
    return val

Hasta ahora, hemos definido la variable __sum, pero no hemos proporcionado un método para obtener su valor. Parece estar escondido. ¿Cómo podemos mostrarlo y que al mismo tiempo se proteja de modificaciones?
Tenemos que definir un nuevo método. Lo nombraremos get_sum. Su única tarea será devolver el valor de __sum.

def get_sum(self):
    return self.__sum

*/
/**
 class Stack:
    def __init__(self):
        self.__stack_list = []

    def push(self, val):
        self.__stack_list.append(val)

    def pop(self):
        val = self.__stack_list[-1]
        del self.__stack_list[-1]
        return val


class AddingStack(Stack):
    def __init__(self):
        Stack.__init__(self)
        self.__sum = 0

    def get_sum(self):
        return self.__sum

    def push(self, val):
        self.__sum += val
        Stack.push(self, val)

    def pop(self):
        val = Stack.pop(self)
        self.__sum -= val
        return val


stack_object = AddingStack()

for i in range(5):
    stack_object.push(i)
print(stack_object.get_sum())

for i in range(5):
    print(stack_object.pop())

CONSOLE
10
5
4
3
2
1
0
 */
/**
 EJEMPLO
 class Stack:
    def __init__(self):
        self.__stk = []

    def push(self, val):
        self.__stk.append(val)

    def pop(self):
        val = self.__stk[-1]
        del self.__stk[-1]
        return val


class CountingStack(Stack):
    def __init__(self):
        Stack.__init__(self)
        self.__counter = 0

    def get_counter(self):
        return self.__counter

    def pop(self):
        self.__counter += 1
        return Stack.pop(self)


stk = CountingStack()
for i in range(100):
    stk.push(i)
    stk.pop()
print(stk.get_counter())
CONSOLE
100
 */
/**
EJEMPLO COLA
Como ya sabes, una pila es una estructura de datos que realiza el modelo LIFO (último en entrar, primero en salir). Es fácil y ya te has acostumbrado a ello perfectamente.
Probemos algo nuevo ahora. Una cola (queue) es un modelo de datos caracterizado por el término FIFO: primero en entrar, primero en salir. Nota: una cola (fila) regular que conozcas de las tiendas u oficinas de correos funciona exactamente de la misma manera: un cliente que llegó primero también es el primero en ser atendido.
 
class QueueError(IndexError):
    pass


class Queue:
    def __init__(self):
        self.queue = []

    def put(self, elem):
        self.queue.insert(0, elem)

    def get(self):
        if len(self.queue) > 0:
            elem = self.queue[-1]
            del self.queue[-1]
            return elem
        else:
            raise QueueError


que = Queue()
que.put(1)
que.put("perro")
que.put(False)
try:
    for i in range(4):
        print(que.get())
except:
    print("Queue error")

    CONSOLE
1
perro
False
Queue error

    */
   /**
class QueueError(IndexError):
    pass


class Queue:
    def __init__(self):
        self.queue = []
    def put(self,elem):
        self.queue.insert(0,elem)
    def get(self):
        if len(self.queue) > 0:
            elem = self.queue[-1]
            del self.queue[-1]
            return elem
        else:
            raise QueueError


class SuperQueue(Queue):
    def isempty(self):
        return len(self.queue) == 0


que = SuperQueue()
que.put(1)
que.put("perro")
que.put(False)
for i in range(4):
    if not que.isempty():
        print(que.get())
    else:
        print("Cola vacía")

 Console 
1
perro
False
Cola vacía

*/
/********************************* */
/**SECCION 3 */
/**PROPIEDADES */
/**
 Variables de instancia
 En general, una clase puede equiparse con dos tipos diferentes de datos para formar las propiedades de una clase. Ya viste uno de ellos cuando estábamos estudiando pilas.
Este tipo de propiedad existe solo cuando se crea explícitamente y se agrega a un objeto. Como ya sabes, esto se puede hacer durante la inicialización del objeto, realizada por el constructor.
Además, se puede hacer en cualquier momento de la vida del objeto. Es importante mencionar también que cualquier propiedad existente se puede eliminar en cualquier momento.
Tal enfoque tiene algunas consecuencias importantes:
    Diferentes objetos de la misma clase pueden poseer diferentes conjuntos de propiedades.
    Debe haber una manera de verificar con seguridad si un objeto específico posee la propiedad que deseas utilizar (a menos que quieras generar una excepción, siempre vale la pena considerarlo).
    Cada objeto lleva su propio conjunto de propiedades, no interfieren entre sí de ninguna manera.

Tales variables (propiedades) se llaman variables de instancia.
La palabra instancia sugiere que están estrechamente conectadas a los objetos (que son instancias de clase), no a las clases mismas. Echemos un vistazo más de cerca.

Se necesita una explicación adicional antes de entrar en más detalles. Echa un vistazo a las últimas tres líneas del código.
Los objetos de Python, cuando se crean, están dotados de un pequeño conjunto de propiedades y métodos predefinidos. Cada objeto los tiene, los quieras o no. Uno de ellos es una variable llamada __dict__ (es un diccionario).

class ExampleClass:
    def __init__(self, val = 1):
        self.first = val

    def set_second(self, val):
        self.second = val


example_object_1 = ExampleClass()
example_object_2 = ExampleClass(2)

example_object_2.set_second(3)

example_object_3 = ExampleClass(4)
example_object_3.third = 5

print(example_object_1.__dict__)
print(example_object_2.__dict__)
print(example_object_3.__dict__)
{'first': 1}
{'second': 3, 'first': 2}
{'third': 5, 'first': 4}

Vamos a sumergirnos en el código ahora:
    La clase llamada ExampleClass tiene un constructor, el cual crea incondicionalmente una variable de instancia llamada first, y le asigna el valor pasado a través del primer argumento (desde la perspectiva del usuario de la clase) o el segundo argumento (desde la perspectiva del constructor); ten en cuenta el valor predeterminado del parámetro: cualquier cosa que puedas hacer con un parámetro de función regular también se puede aplicar a los métodos.
    La clase también tiene un método que crea otra variable de instancia, llamada second.
    Hemos creado tres objetos de la clase ExampleClass, pero todas estas instancias difieren:
        example_object_1 solo tiene una propiedad llamada first.
        example_object_2 tiene dos propiedades: first y second.
        example_object_3 ha sido enriquecido sobre la marcha con una propiedad llamada third fuera del código de la clase: esto es posible y totalmente permisible.
Hay una conclusión adicional que debería mencionarse aquí: el modificar una variable de instancia de cualquier objeto no tiene impacto en todos los objetos restantes. Las variables de instancia están perfectamente aisladas unas de otras.


*/
/** Variables de clase*/
/**
 Una variable de clase es una propiedad que existe en una sola copia y se almacena fuera de cualquier objeto.
 Nota: no existe una variable de instancia si no hay ningún objeto de la clase; solo existe una variable de clase en una copia, incluso si no hay objetos en la clase.
 Las variables de clase se crean de manera diferente. El ejemplo te dirá más:

 class ExampleClass:
    counter = 0
    def __init__(self, val = 1):
        self.__first = val
        ExampleClass.counter += 1


example_object_1 = ExampleClass()
example_object_2 = ExampleClass(2)
example_object_3 = ExampleClass(4)

print(example_object_1.__dict__, example_object_1.counter)
print(example_object_2.__dict__, example_object_2.counter)
print(example_object_3.__dict__, example_object_3.counter)
{'_ExampleClass__first': 1} 3
{'_ExampleClass__first': 2} 3
{'_ExampleClass__first': 4} 3 

Observa:
    Hay una asignación en la primera linea de la definición de clase: establece la variable denominada counter a 0; inicializando la variable dentro de la clase pero fuera de cualquiera de sus métodos hace que la variable sea una variable de clase.
    El acceder a dicha variable tiene el mismo aspecto que acceder a cualquier atributo de instancia; está en el cuerpo del constructor; como puedes ver, el constructor incrementa la variable en uno; en efecto, la variable cuenta todos los objetos creados.
    El atributo counter siempre muestra el valor 3 porque es compartido entre todas las instancias y refleja el número total de objetos creados hasta ese momento.
    __dict__ muestra los valores individuales de __first que están encapsulados en cada instancia.
Así que el atributo de clase counter es responsable de contar las instancias totales.

*/
/** Comprobando la existencia de un atributo*/
/**
 La actitud de Python hacia la instanciación de objetos plantea una cuestión importante: en contraste con otros lenguajes de programación, es posible que no esperes que todos los objetos de la misma clase tengan los mismos conjuntos de propiedades.
class ExampleClass:
    def __init__(self, val):
        if val % 2 != 0:
            self.a = 1
        else:
            self.b = 1


example_object = ExampleClass(1)

print(example_object.a)
print(example_object.b)
 1
Traceback (most recent call last):
  File ".main.py", line 11, in
    print(example_object.b)
AttributeError: 'ExampleClass' object has no attribute

El objeto creado por el constructor solo puede tener uno de los dos atributos posibles: a o b.
Como puedes ver, acceder a un atributo de objeto (clase) no existente genera una excepción AttributeError.
La instrucción try-except te brinda la oportunidad de evitar problemas con propiedades inexistentes.

class ExampleClass:
    def __init__(self, val):
        if val % 2 != 0:
            self.a = 1
        else:
            self.b = 1


example_object = ExampleClass(1)
print(example_object.a)

try:
    print(example_object.b)
except AttributeError:
    pass
    
console
1


Python proporciona una función que puede verificar con seguridad si algún objeto / clase contiene una propiedad específica. La función se llama hasattr, y espera que le pasen dos argumentos:
    La clase o el objeto que se verifica.
    El nombre de la propiedad cuya existencia se debe informar (Nota: debe ser una cadena que contenga el nombre del atributo).
La función retorna True o False.
class ExampleClass:
    def __init__(self, val):
        if val % 2 != 0:
            self.a = 1
        else:
            self.b = 1
 
 
example_object = ExampleClass(1)
print(example_object.a)
 
if hasattr(example_object, 'b'):
    print(example_object.b) 

No olvides que la función hasattr() también puede operar en clases. Puedes usarla para averiguar si una variable de clase está disponible, como en el ejemplo en el editor
class ExampleClass:
    attr = 1


print(hasattr(ExampleClass, 'attr'))
print(hasattr(ExampleClass, 'prop'))
    true
    false

 */
/***************************** */
/**SECCION 4 */
/**METODOS */
/**
  Métodos a detalle
  un método es una función que está dentro de una clase.
  (no existen métodos sin parámetros; un método puede invocarse sin un argumento, pero no puede declararse sin parámetros).
  El primer (o único) parámetro generalmente se denomina self. Te sugerimos que lo sigas nombrando de esta manera, darle otros nombres puede causar sorpresas inesperadas.
  El nombre self sugiere el propósito del parámetro: identifica el objeto para el cual se invoca el método.
  Si vas a invocar un método, no debes pasar el argumento para el parámetro self, Python lo configurará por ti.
  Si deseas que el método acepte parámetros distintos a self, debes:
    Colocarlos después de self en la definición del método.
    Pasarlos como argumentos durante la invocación sin especificar self.

class Classy:
    def method(self, par):
        print("método:", par)


obj = Classy()
obj.method(1)
obj.method(2)
obj.method(3)

método: 1
método: 2
método: 3

El parámetro self es usado para obtener acceso a la instancia del objeto y las variables de clase.
class Classy:
    varia = 2
    def method(self):
        print(self.varia, self.var)


obj = Classy()
obj.var = 3
obj.method()
CONSOLE
2 3

El parámetro self también se usa para invocar otros métodos desde dentro de la clase.
class Classy:
    def other(self):
        print("otro")

    def method(self):
        print("método")
        self.other()


obj = Classy()
obj.method()

class Classy:
    def other(self):
        print("otro")

    def method(self):
        print("método")
        self.other()


obj = Classy()
obj.method()

CONSOLE
metodo
otro

Si se nombra un método de esta manera: __init__, no será un método regular, será un constructor.
Si una clase tiene un constructor, este se invoca automática e implícitamente cuando se instancia el objeto de la clase.
El constructor:
    Esta obligado a tener el parámetro self (se configura automáticamente).
    Pudiera (pero no necesariamente) tener mas parámetros que solo self; si esto sucede, la forma en que se usa el nombre de la clase para crear el objeto debe tener la definición __init__.
    Se puede utilizar para configurar el objeto, es decir, inicializa adecuadamente su estado interno, crea variables de instancia, crea instancias de cualquier otro objeto si es necesario, etc.

  class Classy:
    def __init__(self, value):
        self.var = value


obj_1 = Classy("objeto")

print(obj_1.var)
CONSOLE
objeto

Toma en cuenta que el constructor:
    No puede retornar un valor, ya que está diseñado para devolver un objeto recién creado y nada más.
    No se puede invocar directamente desde el objeto o desde dentro de la clase (puedes invocar un constructor desde cualquiera de las superclases del objeto, pero discutiremos esto más adelante).
Como __init__ es un método, y un método es una función, puedes hacer los mismos trucos con constructores y métodos que con las funciones ordinarias.
class Classy:
    def __init__(self, value = None):
        self.var = value


obj_1 = Classy("objeto")
obj_2 = Classy()

print(obj_1.var)
print(obj_2.var)
   Console 
objeto
None

Todo lo que hemos dicho sobre el manejo de los nombres también se aplica a los nombres de métodos, un método cuyo nombre comienza con __ está (parcialmente) oculto.

class Classy:
    def visible(self):
        print("visible")

    def __hidden(self):
        print("oculto")


obj = Classy()
obj.visible()

try:
    obj.__hidden()
except:
    print("fallido")

obj._Classy__hidden()


visible
fallido
oculto
  

 */
/**
 La vida al interior de las clases y objetos
 Cada clase de Python y cada objeto de Python está pre-equipado con un conjunto de atributos útiles que pueden usarse para examinar sus capacidades.
Ya conoces uno de estos: es la propiedad __dict__.
__dict__ es un diccionario. Otra propiedad incorporada que vale la pena mencionar es una cadena llamada __name__.
La propiedad contiene el nombre de la clase. No es nada emocionante, es solo una cadena.
Nota: el atributo __name__ está ausente del objeto, existe solo dentro de las clases.
Si deseas encontrar la clase de un objeto en particular, puedes usar una función llamada type(), la cual es capaz (entre otras cosas) de encontrar una clase que se haya utilizado para crear instancias de cualquier objeto.
class Classy:
    pass


print(Classy.__name__)
obj = Classy()
print(type(obj).__name__)
  Console 
Classy
Classy

__module__ es una cadena, también almacena el nombre del módulo que contiene la definición de la clase.
class Classy:
    pass


print(Classy.__module__)
obj = Classy()
print(obj.__module__)
  Console 
__main__
__main__

Como sabes, cualquier módulo llamado __main__ en realidad no es un módulo, sino es el archivo actualmente en ejecución.

___bases__ es una tupla. La tupla contiene clases (no nombres de clases) que son superclases directas de la clase.
El orden es el mismo que el utilizado dentro de la definición de clase.      
solo las clases tienen este atributo, los objetos no.
class SuperOne:
    pass


class SuperTwo:
    pass


class Sub(SuperOne, SuperTwo):
    pass


def printBases(cls):
    print('( ', end='')

    for x in cls.__bases__:
        print(x.__name__, end=' ')
    print(')')


printBases(SuperOne)
printBases(SuperTwo)
printBases(Sub)

Console 
( object )
( object )
( SuperOne SuperTwo )

 Nota: una clase sin superclases explícitas apunta a object (una clase de Python predefinida) como su antecesor directo.

*/
/**Reflexión e introspección */
/**
 Todo esto permite que el programador de Python realice dos actividades importantes específicas para muchos lenguajes objetivos. Las cuales son:
    Introspección, que es la capacidad de un programa para examinar el tipo o las propiedades de un objeto en tiempo de ejecución.
    Reflexión, que va un paso más allá, y es la capacidad de un programa para manipular los valores, propiedades y/o funciones de un objeto en tiempo de ejecución.
En otras palabras, no tienes que conocer la definición completa de clase/objeto para manipular el objeto, ya que el objeto y/o su clase contienen los metadatos que te permiten reconocer sus características durante la ejecución del programa.

 */
/**Investigando Clases */
/**
 Tanto la reflexión como la introspección permiten al programador hacer cualquier cosa con cada objeto, sin importar de dónde provenga.
 class MyClass:
    pass


obj = MyClass()
obj.a = 1
obj.b = 2
obj.i = 3
obj.ireal = 3.5
obj.integer = 4
obj.z = 5


def incIntsI(obj):
    for name in obj.__dict__.keys():
        if name.startswith('i'):
            val = getattr(obj, name)
            if isinstance(val, int):
                setattr(obj, name, val + 1)


print(obj.__dict__)
incIntsI(obj)
print(obj.__dict__)
CONSOLE
 {'a': 1, 'integer': 4, 'b': 2, 'i': 3, 'z': 5, 'ireal': 3.5}
{'a': 1, 'integer': 5, 'b': 2, 'i': 4, 'z': 5, 'ireal': 3.5} 

 */
/**
 def two_digits(val):
    s = str(val)
    if len(s) == 1:
        s = '0' + s
    return s


class Timer:
    def __init__(self, hours=0, minutes=0, seconds=0):
        self.__hours = hours
        self.__minutes = minutes
        self.__seconds = seconds

    def __str__(self):
        return two_digits(self.__hours) + ":" + \
               two_digits(self.__minutes) + ":" + \
               two_digits(self.__seconds)

    def next_second(self):
        self.__seconds += 1
        if self.__seconds > 59:
            self.__seconds = 0
            self.__minutes += 1
            if self.__minutes > 59:
                self.__minutes = 0
                self.__hours += 1
                if self.__hours > 23:
                    self.__hours = 0

    def prev_second(self):
        self.__seconds -= 1
        if self.__seconds < 0:
            self.__seconds = 59
            self.__minutes -= 1
            if self.__minutes < 0:
                self.__minutes = 59
                self.__hours -= 1
                if self.__hours < 0:
                    self.__hours = 23


timer = Timer(23, 59, 59)
print(timer)
timer.next_second()
print(timer)
timer.prev_second()
print(timer)
 Console 
23:59:59
00:00:00
23:59:59

    

 */
/**
 *DIAS DE LA SEMANA
 class WeekDayError(Exception):
    pass


class Weeker:
    __names = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']

    def __init__(self, day):
        try:
            self.__current = Weeker.__names.index(day)
        except ValueError:
            raise WeekDayError

    def __str__(self):
        return Weeker.__names[self.__current]

    def add_days(self, n):
        self.__current = (self.__current + n) % 7

    def subtract_days(self, n):
        self.__current = (self.__current - n) % 7


try:
    weekday = Weeker('Lun')
    print(weekday)
    weekday.add_days(15)
    print(weekday)
    weekday.subtract_days(23)
    print(weekday)
    weekday = Weeker('Lunes')
except WeekDayError:
    print("Lo siento, no puedo atender tu solicitud.")
  Console 
Lun
Mar
Dom
Lo siento, no puedo atender tu solicitud.

   
 */
/**
 *PUNTOS EN UN PLANO
import math


class Point:
    def __init__(self, x=0.0, y=0.0):
        self.__x = x
        self.__y = y

    def getx(self):
        return self.__x

    def gety(self):
        return self.__y

    def distance_from_xy(self, x, y):
        return math.hypot(abs(self.__x - x), abs(self.__y - y))

    def distance_from_point(self, point):
        return self.distance_from_xy(point.getx(), point.gety())


point1 = Point(0, 0)
point2 = Point(1, 1)
print(point1.distance_from_point(point2))
print(point2.distance_from_xy(2, 0))
 Console 
1.4142135623730951
1.4142135623730951

    

 */
/**TRIANGULO */
/**
 import math


class Point:
    def __init__(self, x=0.0, y=0.0):
        self.__x = x
        self.__y = y

    def getx(self):
        return self.__x

    def gety(self):
        return self.__y

    def distance_from_xy(self, x, y):
        return math.hypot(abs(self.__x - x), abs(self.__y - y))

    def distance_from_point(self, point):
        return self.distance_from_xy(point.getx(), point.gety())


class Triangle:
    def __init__(self, vertice1, vertice2, vertice3):
        self.__vertices = [vertice1, vertice2, vertice3]

    def perimeter(self):
        per = 0
        for i in range(3):
            per += self.__vertices[i].distance_from_point(self.__vertices[(i + 1) % 3])
        return per


triangle = Triangle(Point(0, 0), Point(1, 0), Point(0, 1))
print(triangle.perimeter())
  Console 
3.414213562373095

   
 */
/************************************** */
/**SECCION 5 */
/**HERRENCIA */
/**
 Explorar otras tecnologías. Además de React o Node, hay mucha demanda en áreas como Salesforce, Golang, PHP, Ruby on Rails, SAP, machine learning, análisis de datos, entre otras.

class Star:
    def __init__(self, name, galaxy):
        self.name = name
        self.galaxy = galaxy

    def __str__(self):
        return self.name + ' en ' + self.galaxy


sun = Star("Sol", "Vía Láctea")
print(sun)
Sol en Vía Láctea
 
El método nuevo __str__() genera una cadena que consiste en los nombres de la estrella y la galaxia, nada especial, pero los resultados de impresión se ven mejor ahora, ¿no?
La herencia es una práctica común (en la programación de objetos) de pasar atributos y métodos de la superclase (definida y existente) a una clase recién creada, llamada subclase.
a herencia es una forma de construir una nueva clase, no desde cero, sino utilizando un repertorio de rasgos ya definido. La nueva clase hereda (y esta es la clave) todo el equipamiento ya existente, pero puedes agregar algo nuevo si es necesario.
Gracias a eso, es posible construir clases más especializadas (más concretas) utilizando algunos conjuntos de reglas y comportamientos generales predefinidos.
El factor más importante del proceso es la relación entre la superclase y todas sus subclases (nota: si B es una subclase de A y C es una subclase de B, esto también significa que C es una subclase de A, ya que la relación es totalmente transitiva).

issubclass()
Python ofrece una función que es capaz de identificar una relación entre dos clases, y aunque su diagnóstico no es complejo, puede verificar si una clase particular es una subclase de cualquier otra clase. 

issubclass(ClassOne, ClassTwo)
La función devuelve True si ClassOne es una subclase de ClassTwo, y False de lo contrario.
class Vehicle:
    pass


class LandVehicle(Vehicle):
    pass


class TrackedVehicle(LandVehicle):
    pass


for cls1 in [Vehicle, LandVehicle, TrackedVehicle]:
    for cls2 in [Vehicle, LandVehicle, TrackedVehicle]:
        print(issubclass(cls1, cls2), end="\t")
    print()
  Console 

True	False	False	
True	True	False	
True	True	True	

 Hay dos bucles anidados. Su propósito es verificar todos los pares de clases ordenadas posibles y que imprima los resultados de la verificación para determinar si el par coincide con la relación subclase-superclase.
 Existe una observación importante que hacer: cada clase se considera una subclase de sí misma.

*/
/**
 isinstance()
 Como ya sabes, un objeto es la encarnación de una clase. Esto significa que el objeto es como un pastel horneado usando una receta que se incluye dentro de la clase.

 isinstance(objectName, ClassName)
La función devuelve True si el objeto es una instancia de la clase, o False de lo contrario.
Ser una instancia de una clase significa que el objeto (el pastel) se ha preparado utilizando una receta contenida en la clase o en una de sus superclases.
No lo olvides: si una subclase contiene al menos las mismas características que cualquiera de sus superclases, significa que los objetos de la subclase pueden hacer lo mismo que los objetos derivados de la superclase, por lo tanto, es una instancia de su clase de inicio y cualquiera de sus superclases.

class Vehicle:
    pass


class LandVehicle(Vehicle):
    pass


class TrackedVehicle(LandVehicle):
    pass


my_vehicle = Vehicle()
my_land_vehicle = LandVehicle()
my_tracked_vehicle = TrackedVehicle()

for obj in [my_vehicle, my_land_vehicle, my_tracked_vehicle]:
    for cls in [Vehicle, LandVehicle, TrackedVehicle]:
        print(isinstance(obj, cls), end="\t")
    print()
 Console 

True	False	False	
True	True	False	
True	True	True	

Hemos creado tres objetos, uno para cada una de las clases. Luego, usando dos bucles anidados, verificamos todos los pares posibles de clase de objeto para averiguar si los objetos son instancias de las clases.


 */
/**
 El operador is
 También existe un operador de Python que vale la pena mencionar, ya que se refiere directamente a los objetos - aquí está:
 object_one is object_two
 El operador is verifica si dos variables, en este caso (object_one y object_two) se refieren al mismo objeto.
 No olvides que las variables no almacenan los objetos en sí, sino solo los identificadores que apuntan a la memoria interna de Python.
 Asignar un valor de una variable de objeto a otra variable no copia el objeto, sino solo su identificador. Es por ello que un operador como is puede ser muy útil en ciertas circunstancias.

class SampleClass:
    def __init__(self, val):
        self.val = val


object_1 = SampleClass(0)
object_2 = SampleClass(2)
object_3 = object_1
object_3.val += 1

print(object_1 is object_2)
print(object_2 is object_3)
print(object_3 is object_1)
print(object_1.val, object_2.val, object_3.val)

string_1 = "Mary tenía un "
string_2 = "Mary tenía un corderito"
string_1 += "corderito"

print(string_1 == string_2, string_1 is string_2)
  Console 
False
False
True
1 2 1
True False

 
Los resultados prueban que object_1 y object_3 son en realidad los mismos objetos, mientras que string_1 y string_2 no lo son, a pesar de que su contenido sea el mismo.

 */
/**Cómo Python encuentra propiedades y métodos */
/**
 Ahora veremos como Python trata con los métodos de herencia
 class Super:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return "Mi nombre es " + self.name + "."


class Sub(Super):
    def __init__(self, name):
        Super.__init__(self, name)


obj = Sub("Andy")

print(obj)
 Console 
Mi nombre es Andy.

VAMos a analizarlo:
    Existe una clase llamada Super, que define su propio constructor utilizado para asignar la propiedad del objeto, llamada name.
    La clase también define el método __str__(), lo que permite que la clase pueda presentar su identidad en forma de texto.
    La clase se usa luego como base para crear una subclase llamadaSub. La clase Sub define su propio constructor, que invoca el de la superclase. Toma nota de como lo hemos hecho: Super.__init__(self, name).
    Hemos nombrado explícitamente la superclase y hemos apuntado al método para invocar a __init__(), proporcionando todos los argumentos necesarios.
    Hemos instanciado un objeto de la clase Sub y lo hemos impreso.

En el ejemplo anterior, nombramos explícitamente la superclase. En este ejemplo, hacemos uso de la función super(), la cual accede a la superclase sin necesidad de conocer su nombre:
class Super:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return "Mi nombre es " + self.name + "."


class Sub(Super):
    def __init__(self, name):
        super().__init__(name)


obj = Sub("Andy")

print(obj)
 Console 
Mi nombre es Andy.

 La función super() crea un contexto en el que no tiene que (además, no debe) pasar el argumento propio al método que se invoca; es por eso que es posible activar el constructor de la superclase utilizando solo un argumento.
Nota: puedes usar este mecanismo no solo para invocar al constructor de la superclase, pero también para obtener acceso a cualquiera de los recursos disponibles dentro de la superclase.   

Intentemos hacer algo similar, pero con propiedades (más precisamente con: variables de clase).
# Probando propiedades: variables de clase.
class Super:
    supVar = 1


class Sub(Super):
    subVar = 2


obj = Sub()

print(obj.subVar)
print(obj.supVar)
 Console 
2
1

Como puedes observar, la clase Super define una variable de clase llamada supVar, y la clase Sub define una variable llamada subVar.
Ambas variables son visibles dentro del objeto de clase Sub

El mismo efecto se puede observar con variables de instancia, observa el segundo ejemplo en el editor.
# Probando propiedades: variables de instancia.
class Super:
    def __init__(self):
        self.supVar = 11


class Sub(Super):
    def __init__(self):
        super().__init__()
        self.subVar = 12


obj = Sub()

print(obj.subVar)
print(obj.supVar)

Console 
12
11

Ahora es posible formular una declaración general que describa el comportamiento de Python.
Cuando intentes acceder a una entidad de cualquier objeto, Python intentará (en este orden):
    Encontrarla dentro del objeto mismo.
    Encontrarla en todas las clases involucradas en la línea de herencia del objeto de abajo hacia arriba.
Si ambos intentos fallan, una excepción (AttributeError) será generada.
class Level1:
    variable_1 = 100
    def __init__(self):
        self.var_1 = 101

    def fun_1(self):
        return 102


class Level2(Level1):
    variable_2 = 200
    def __init__(self):
        super().__init__()
        self.var_2 = 201
    
    def fun_2(self):
        return 202


class Level3(Level2):
    variable_3 = 300
    def __init__(self):
        super().__init__()
        self.var_3 = 301

    def fun_3(self):
        return 302


obj = Level3()

print(obj.variable_1, obj.var_1, obj.fun_1())
print(obj.variable_2, obj.var_2, obj.fun_2())
print(obj.variable_3, obj.var_3, obj.fun_3())
 Console 
100 101 102
200 201 202
300 301 302


herencia múltiple.
La herencia múltiple ocurre cuando una clase tiene más de una superclase. Sintácticamente, dicha herencia se presenta como una lista de superclases separadas por comas entre paréntesis después del nombre de la nueva clase, al igual que aquí:
class SuperA:
    var_a = 10
    def fun_a(self):
        return 11
 
 
class SuperB:
    var_b = 20
    def fun_b(self):
        return 21
 
 
class Sub(SuperA, SuperB):
    pass 

obj = Sub()
 
print(obj.var_a, obj.fun_a())
print(obj.var_b, obj.fun_b()) 
console
10 11
20 21 
    */
/**overriding (anulación). */
/**
 class Level1:
    var = 100
    def fun(self):
        return 101


class Level2(Level1):
    var = 200
    def fun(self):
        return 201


class Level3(Level2):
    pass


obj = Level3()

print(obj.var, obj.fun())
  Console 
200 201

Tanto la clase, Level1 y Level2 definen un método llamado fun() y una propiedad llamada var. ¿Significará esto el objeto de la claseLevel3 podrá acceder a dos copias de cada entidad? De ningún modo.
La entidad definida después (en el sentido de herencia) anula la misma entidad definida anteriormente.
Como puedes ver, la variable de clase var y el método fun() de la clase Level2 anula las entidades de los mismos nombres derivados de la clase Level1.
También podemos decir que Python busca una entidad de abajo hacia arriba y está completamente satisfecho con la primera entidad del nombre deseado que encuentra.

¿Qué ocurre cuando una clase tiene dos ancestros que ofrecen la misma entidad y se encuentran en el mismo nivel? En otras palabras, ¿Qué se debe esperar cuando surge una clase usando herencia múltiple? Miremos lo siguiente.
class Left:
    var = "L"
    var_left = "LL"
    def fun(self):
        return "Left"


class Right:
    var = "R"
    var_right = "RR"
    def fun(self):
        return "Right"


class Sub(Left, Right):
    pass


obj = Sub()

print(obj.var, obj.var_left, obj.var_right, obj.fun())
 Console 

L LL RR Left

Esto prueba que ambos casos poco claros tienen una solución dentro de la clase Left. ¿Es esta una premisa suficiente para formular una regla general? Sí lo es.
Podemos decir que Python busca componentes de objetos en el siguiente orden:
    Dentro del objeto mismo.
    En sus superclases, de abajo hacia arriba.
    Si hay más de una clase en una ruta de herencia, Python las escanea de izquierda a derecha.
    

 */
/**Cómo construir una jerarquía de clases */
/**
 class One:
    def do_it(self):
        print("do_it de One")

    def doanything(self):
        self.do_it()


class Two(One):
    def do_it(self):
        print("do_it de Two")

one = One()
two = Two()

one.doanything()
two.doanything()
    
 Console 
do_it de One
do_it de Two

Analicémoslo:
    Existen dos clases llamadas One y Two, se entiende que Two es derivada de One. Nada especial. Sin embargo, algo es notable: el método do_it().
    El método do_it() está definido dos veces: originalmente dentro de One posteriormente dentro de Two. La esencia del ejemplo radica en el hecho de que es invocado solo una vez dentro de One.
La pregunta es: ¿cuál de los dos métodos será invocado por las dos últimas líneas del código?
La primera invocación parece ser simple, el invocar el método doanything() del objeto llamado one obviamente activará el primero de los métodos.
La segunda invocación necesita algo de atención. También es simple si tienes en cuenta cómo Python encuentra los componentes de la clase. La segunda invocación ejecutará el método do_it() en la forma existente dentro de la clase Two, independientemente del hecho de que la invocación se lleva a cabo dentro de la clase One.
Nota: la situación en la cual la subclase puede modificar el comportamiento de su superclase (como en el ejemplo) se llama poliformismo. La palabra proviene del griego (polys: "muchos, mucho" y morphe, "formas, forma"), lo que significa que una misma clase puede tomar varias formas dependiendo de las redefiniciones realizadas por cualquiera de sus subclases.
El método, redefinido en cualquiera de las superclases, que cambia el comportamiento de la superclase, se llama virtual.
En otras palabras, ninguna clase se da por hecho. El comportamiento de cada clase puede ser modificado en cualquier momento por cualquiera de sus subclases.
Te mostraremos como usar el poliformismo para extender la flexibilidad de la clase.

import time

class Vehicle:
    def change_direction(left, on):
        pass

    def turn(left):
        change_direction(left, True)
        time.sleep(0.25)
        change_direction(left, False)


class TrackedVehicle(Vehicle):
    def control_track(left, stop):
        pass

    def change_direction(left, on):
        control_track(left, on)


class WheeledVehicle(Vehicle):
    def turn_front_wheels(left, on):
        pass

    def change_direction(left, on):
        turn_front_wheels(left, on)

Esto es lo que hemos hecho:

    Definimos una superclase llamada Vehicle, la cual utiliza el método turn() para implementar un esquema para poder girar, mientras que el giro en si es realizado por change_direction(); nota: dicho método está vacío, ya que vamos a poner todos los detalles en la subclase (dicho método a menudo se denomina método abstracto, ya que solo demuestra alguna posibilidad que será instanciada más tarde).
    Definimos una subclase llamada TrackedVehicle (nota: es derivada de la clase Vehicle) la cual instancia el método change_direction() utilizando el método denominado control_track().
    Respectivamente, la subclase llamada WheeledVehicle hace lo mismo, pero usa el método turn_front_wheels() para obligar al vehículo a girar.
La ventaja más importante (omitiendo los problemas de legibilidad) es que esta forma de código te permite implementar un nuevo algoritmo de giro simplemente modificando el método turn(), lo cual se puede hacer en un solo lugar, ya que todos los vehículos lo obedecerán.
Así es como el el poliformismo ayuda al desarrollador a mantener el código limpio y consistente.
La herencia no es la única forma de construir clases adaptables. Puedes lograr los mismos objetivos (no siempre, pero muy a menudo) utilizando una técnica llamada composición.
La composición es el proceso de componer un objeto usando otros objetos diferentes. Los objetos utilizados en la composición entregan un conjunto de rasgos deseados (propiedades y/o métodos), podemos decir que actúan como bloques utilizados para construir una estructura más complicada.
Puede decirse que:

    La herencia extiende las capacidades de una clase agregando nuevos componentes y modificando los existentes; en otras palabras, la receta completa está contenida dentro de la clase misma y todos sus ancestros; el objeto toma todas las pertenencias de la clase y las usa.
    La composición proyecta una clase como contenedor capaz de almacenar y usar otros objetos (derivados de otras clases) donde cada uno de los objetos implementa una parte del comportamiento de una clase.

    import time

class Tracks:
    def change_direction(self, left, on):
        print("pistas: ", left, on)


class Wheels:
    def change_direction(self, left, on):
        print("ruedas: ", left, on)


class Vehicle:
    def __init__(self, controller):
        self.controller = controller

    def turn(self, left):
        self.controller.change_direction(left, True)
        time.sleep(0.25)
        self.controller.change_direction(left, False)


wheeled = Vehicle(Wheels())
tracked = Vehicle(Tracks())

wheeled.turn(True)
tracked.turn(False)
 Console 
ruedas:  True True
ruedas:  True False
pistas:  False True
pistas:  False False


Existen dos clases llamadas Tracks y Wheels, ellas saben como controlar la dirección del vehículo. También hay una clase llamada Vehicle que puede usar cualquiera de los controladores disponibles (los dos ya definidos o cualquier otro definido en el futuro): el controlador se pasa a la clase durante la inicialización.
De esta manera, la capacidad de giro del vehículo se compone de un objeto externo, no implementado dentro de la clase Vehicle.
En otras palabras, tenemos un vehículo universal y podemos instalar pistas o ruedas en él.

*/
/**Herencia simple versus herencia múltiple */
/**
No olvides que:
    Una sola clase de herencia siempre es más simple, segura y fácil de entender y mantener.
    La herencia múltiple siempre es arriesgada, ya que tienes muchas más oportunidades de cometer un error al identificar estas partes de las superclases que influirán efectivamente en la nueva clase.
    La herencia múltiple puede hacer que la anulación sea extremadamente difícil; además, el emplear la función super() se vuelve ambiguo.
Sugerimos encarecidamente la herencia múltiple como la última de todas las posibles soluciones: si realmente necesitas las diferentes funcionalidades que ofrecen las diferentes clases, la composición puede ser una mejor alternativa.

    */
/** ¿Qué es el Orden de Resolución de Métodos (MRO) y por qué no todas las herencias tienen sentido?*/
/**
 MRO, en general, es una forma (puedes llamarlo una estrategia) en la que un lenguaje de programación en particular escanea la parte superior de la jerarquía de una clase para encontrar el método que necesita actualmente. Vale la pena enfatizar que los diferentes lenguajes usan MROs levemente (o incluso completamente) diferentes. Python es único en este aspecto y sus costumbres son un poco específicas.

 */
/***************************************** */
/**SECCION 6 */
/**
 La primera característica que queremos analizar aquí es un bloque adicional que se puede colocar dentro (o más bien, directamente detrás) del bloque try-except: es la parte del código que comienza con else, justo como el ejemplo en el editor.
 def reciprocal(n):
    try:
        n = 1 / n
    except ZeroDivisionError:
        print("División fallida")
        return None
    else:
        print("Todo salió bien")
        return n


print(reciprocal(2))
print(reciprocal(0))
Todo salió bien
0.5
División fallida
None

Un código etiquetado de esta manera se ejecuta cuando (y solo cuando) no se ha generado ninguna excepción dentro de la parte del try:. Podemos decir que este bloque se ejecuta después del try:, ya sea el que comienza con except (no olvides que puede haber más de un bloque de este tipo) o la que comienza con else.
Nota: el bloque else: debe ubicarse después del último bloque except.
El try-except se puede extender de una manera más - agregando una parte encabezada por la palabra clave reservada finally (debe ser el último bloque del código diseñado para manejar excepciones).
Nota: estas dos variantes (else y finally) no son dependientes entre si, y pueden coexistir u ocurrir de manera independiente.
El bloque finally siempre se ejecuta (finaliza la ejecución del bloque try-except, de ahí su nombre), sin importar lo que sucedió antes, incluso cuando se genera una excepción, sin importar si esta se ha manejado o no.

def reciprocal(n):
    try:
        n = 1 / n
    except ZeroDivisionError:
        print("División fallida")
        n = None
    else:
        print("Todo salió bien")
    finally:
        print("Es momento de decir adiós")
        return n


print(reciprocal(2))
print(reciprocal(0))
 Console 
Todo salió bien
Es momento de decir adiós
0.5
División fallida
Es momento de decir adiós
None
*/
/**Las excepciones son clases */
/**
 Comencemos desde la raíz del árbol: la raíz de las clases de excepciones de Python es la clase BaseException (es una superclase de todas las demás excepciones).
 */
/**Cómo crear tu propia excepción */
/**
 La jerarquía de excepciones no está cerrada ni terminada, y siempre puedes ampliarla si deseas o necesitas crear tu propio mundo poblado con tus propias excepciones.
 Nota: si deseas crear una excepción que se utilizará como un caso especializado de cualquier excepción incorporada, derivala solo de esta. Si deseas construir tu propia jerarquía, y no quieres que esté estrechamente conectada al árbol de excepciones de Python, derivala de cualquiera de las clases de excepción principales, tal como: Exception.
 class PizzaError(Exception):
    def __init__(self, pizza, message):
        Exception.__init__(self, message)
        self.pizza = pizza


class TooMuchCheeseError(PizzaError):
    def __init__(self, pizza, cheese, message):
        PizzaError.__init__(self, pizza, message)
        self.cheese = cheese


def make_pizza(pizza, cheese):
    if pizza not in ['margherita', 'capricciosa', 'calzone']:
        raise PizzaError(pizza, "no existe tal pizza en el menú")
    if cheese > 100:
        raise TooMuchCheeseError(pizza, cheese, "demasiado queso")
    print("¡Pizza lista!")

for (pz, ch) in [('calzone', 0), ('margherita', 110), ('mafia', 20)]:
    try:
        make_pizza(pz, ch)
    except TooMuchCheeseError as tmce:
        print(tmce, ':', tmce.cheese)
    except PizzaError as pe:
        print(pe, ':', pe.pizza)
        
 Console 
¡Pizza lista!
demasiado queso : 110
no existe tal pizza en el menú : mafia

 */