print("Me gusta ser un módulo.")

print(__name__)

#!/usr/bin/env python3 

""" module.py - an example of a Python module """

__counter = 0


def suml(the_list):
  global __counter
  __counter += 1
  the_sum = 0
  for element in the_list:
   the_sum += element
  return the_sum


def prodl(the_list):
  global __counter
  __counter += 1
  prod = 1
  for element in the_list:
   prod *= element
  return prod



if __name__ == "__main__":
  print("Prefiero ser un módulo, pero puedo hacer algunas pruebas para usted.")
  my_list = [i+1 for i in range(5)]
  print(suml(my_list) == 15)
  print(prodl(my_list) == 120)
  

"""

    La línea que comienza con #! tiene muchos nombres - puede ser llamada shabang, shebang, hashbang, poundbang o incluso hashpling (no nos preguntes por qué). El nombre en sí no significa nada aquí, su papel es más importante. Desde el punto de vista de Python, es solo un comentario debido a que comienza con #. Para sistemas operativos Unix y similares a Unix (incluido MacOS), dicha línea indica al sistema operativo como ejecutar el contenido del archivo (en otras palabras, que programa debe ejecutarse para interpretar el texto). En algunos entornos (especialmente aquellos conectados con servidores web) la ausencia de esa línea causará problemas.
    Una cadena (quizás una multilínea) colocada antes de las instrucciones de cualquier módulo (incluidas las importaciones) se denomina doc-string, y debe explicar brevemente el propósito y el contenido del módulo.
    Las funciones definidas dentro del módulo (suml() y prodl()) están disponibles para ser importadas.
    Se ha utilizado la variable __name__ para detectar cuando se ejecuta el archivo de forma independiente, y se aprovechó esta oportunidad para realizar algunas pruebas sencillas.

"""