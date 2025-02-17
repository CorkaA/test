def func_2(array):

  min = array[0]
  for el in array: #поиск минимального числа в массиве
    if el < min:
      min = el

  common = [] #список общих делителей
  for i in range(2, min+1): #числа от 2х до минимального числа
    if all(el % i == 0 for el in array): #проверка на делимость каждого элемента массива на число
      common.append(i) #добавление в список

  return common

print(func_2(array = list(map(int, input().split()))))