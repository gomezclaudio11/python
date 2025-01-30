### Funciones de orden superior

def sum_one (value):
    return value + 1
def sum_five (value):
    return value + 5

def sum_two_values_and_add_value (a, b, f_sum):
    return f_sum( a + b)

print(sum_two_values_and_add_value(2, 2, sum_five)) 

### Closures
### Podemos returnar una funcion

def sum_ten():
    def add(value):
        return value + 10
    return add

add_closure = sum_ten()
print(add_closure(6))

def sum_ten2(original_value):
    def add(value):
        return value + 10 + original_value
    return add


add_closure2 = sum_ten2(10)
print(add_closure2(5))

### Built-in higher order function

numbers = [2, 5, 10, 21]

#Map
def multiply_two(number):
    return number * 2

print(list (map(multiply_two, numbers)))
print(list (map(lambda number: number * 5, numbers)))

#Filter

def filter_greater_ten(number):
    if number > 10:
        return True
    return False

print(list (filter(filter_greater_ten, numbers)))
print(list (filter(lambda number: number > 5, numbers)))


# Reduce
### Opera con un valor + el acumulado
from functools import reduce

def sum_two_values(first_value, second_value):
    return first_value + second_value


print(reduce(sum_two_values, numbers))