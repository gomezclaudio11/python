### funciones

def my_functions ():
    print("esto es una funcion")

my_functions ()

def sum_two_num (first_num, second_num):
    print(first_num + second_num)

sum_two_num ( 5 , 5 )
sum_two_num( "5" , "5")
sum_two_num(1.2, 1.3)

def sum_with_return(first_value, second_value):
    return first_value + second_value

my_result = sum_with_return(100, 150)
print(my_result)

def sum_with_return2(first_value, second_value):
    my_sum = first_value + second_value
    return my_sum  

def print_name(name, surname):
    print(f"{name} {surname}")

print_name(surname= "moure", name="brais")

def print_name_default(name, surname, alias = "sin alias"):
    print(f"{name} {surname} {alias}")

print_name_default("brais", "moure", "moureDevs")

def print_text (*texts):
    for text in texts:
        print(text.upper())

print_text("hola", "phyton", "claudio")
