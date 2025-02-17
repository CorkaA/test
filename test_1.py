def func(num):

  n10 = num % 10 
  n100 = num % 100 
  ere = n100 // 10 

  nul = [1] 
  a = [2, 3, 4] 
  ov = [0, 5, 6, 7, 8, 9] 


  if n10 in nul: 
    if n100 == 11: 
      flag = 3
    else:
      flag = 1


  if n10 in a: 
    if ere == 1: 
      flag = 3
    else:
      flag = 2


  if n10 in ov: 
    flag = 3


  if flag == 1:
    finish = 'компьютер'

  if flag == 2:
    finish = 'компьютера'

  if flag == 3:
    finish = 'компьютеров'

  number = str(num)
  text = number + ' ' + finish
  return text

print(func(num = int(input())))