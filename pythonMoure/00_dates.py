### Dates

from datetime import datetime
now = datetime.now()

def print_date (date):
    print(date.year )
    print(date.month)
    print(date.day)
    print(date.hour)
    print(date.minute)
    print(date.second)
    print(date.timestamp())

print_date(now)

year_2023 = datetime(2023, 1, 1)

print_date(year_2023)

### Time

from datetime import time

current_time = time(hour=22, minute=22, second=22)

print(current_time)

### Date
from datetime import date

current_date = date.today()

print(current_date.year)
print(current_date.month)
print(current_date.day)

current_date = date(current_date.year, current_date.month + 1, current_date.day)

print(current_date.month)

### Operaciones con fechas

diff = year_2023 - now
print(diff)

# Timedelta
from datetime import timedelta

start_timedelta = timedelta(200, 100, 100, weeks=10)
end_timedelta = timedelta(300, 100, 100, weeks=13)

print(end_timedelta - start_timedelta)
print(end_timedelta + start_timedelta)