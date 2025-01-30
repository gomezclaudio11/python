### clases

class Person: 
    def __init__(self, name, surname, alias = "sin alias"):
        self.__name = name ###Es privado con los dos guiones bajos
        self.surname = surname
        self.fullname = f"{name} {surname} {alias}"
    
    def walk(self):
        print(f"{self.name} Esta caminando")

my_person = Person("pepito", "pistolero")
print(my_person.name)
print(my_person.surname)
print(f"nombre: {my_person.name} apellido:{my_person.surname}")
print(my_person.fullname)
caminar = my_person.walk()
print(caminar)

my_other_person = Person("clau", "gomez")
print(my_other_person.fullname)