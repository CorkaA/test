class Calc:

  def func_4(len):

    tab = ''
    for i in range(1, len+1):
      tab += f'\t{i}'
    for j in range(1, len+1):
      tab += f'\n{j}\t'
      for i in range(1, len+1):
        tab += f'{i*j}\t'

    return tab

print(Calc.func_4(len = int(input())))