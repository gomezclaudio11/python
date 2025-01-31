### >Expresiones regulares

import re   

###match
my_string = "Esta es la leccion numero 7: Leccion llamada Expresiones Regulares"
my_other_string = "Esta no es la leccion numero 6: Manejo de ficheros"

print(re.match("Esta es la leccion", my_string))
print(re.match("numero 7", my_string))# none xq empieza a buscar desde el principio

match = re.match("Esta es la leccion", my_string, re.I)#re.I es un ignore case ignora mayusculas y minusculas
print(match) #es una tupla
start, end = match.span()
print(my_string[start:end] )

match = re.match("Esta no es la leccion", my_other_string)
if match != None:
    print(match)
    start, end = match.span()
    print(my_other_string[start:end])

###Search
#solo muestra la primer coincidencia
search = re.search("leccion", my_string, re.I)
print(search)
start, end = search.span()
print(my_string[start:end])

### findall
#muestra todas las coincidencias
findall = re.findall("leccion", my_string, re.I)
print(findall)

#split
print(re.split(":", my_string))

#sub
print(re.sub("Expresiones", "expresiones", my_string))

###Patterns

pattern = r"[a-z]"
print(re.findall(pattern, my_string))

pattern = r"[0-9]"
print(re.findall(pattern, my_string))
print(re.search(pattern, my_string))

pattern = r"\d"
print(re.findall(pattern, my_string))


pattern = r"[l]."
print(re.findall(pattern, my_string))

email = "mouredev@mouredev.com"
pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$"
print(re.match(pattern, email))
print(re.search(pattern, email))
print(re.findall(pattern, email))

email = "mouredev@mouredev.com.mx"
print(re.findall(pattern, email))