def func_3(array):

  if array[0]>array[1]: #если первое число больше второго, то для меняем их местами, так как диапазон от меньшего к большему
    max = array[0]
    min = array[1]
    array[0] = min
    array[1] = max

  a = array[0] #начало диапазона
  b = array[1] #конец диапазона
  prime = [] #простые числа диапазона

  for num in range(a, b+1): #числа диапазона
    start = 2
    while num % start != 0: #пока не делится только само на себя, добавляем к делителю
      start +=1

    if start == num: #добавление в массив чисел
      prime.append(num)

  return prime

print(func_3(array = [int(input()) for i in range(2)]))