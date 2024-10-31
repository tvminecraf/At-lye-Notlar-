
# Python Temel Kavramlar Notu
Bu not, atölyede kullanmak üzere temel Python veri tipleri, operatörler ve fonksiyonlar hakkında bilgiler içerir.

## Veri Tipleri Tanımı
- **String**: Metin tabanlı veri tipidir. Tek veya çift tırnak içerisine alınarak tanımlanır. Örneğin: `'Merhaba'`, `'Python'`.
- **Integer**: Tam sayı veri tipidir. Örneğin: `5`, `-3`, `100`.
- **Float**: Ondalıklı sayı veri tipidir. Örneğin: `3.14`, `-0.001`.
- **Boolean**: İki değer alabilen (True/False) veri tipidir. Örneğin: `True`, `False`.

- **Veri Tipi Bilgisine Ulaşmak**: `type()` fonksiyonu kullanılır. Örnek:
```python
x = 10
print(type(x))  # <class 'int'>
```

## Veri Tipleri Arasındaki Dönüşüm
Veri tipleri arasında dönüşüm yapılabilir. Örneğin, bir string ifadeyi sayıya çevirebiliriz:
- `int('5')` → `5`
- `float('3.14')` → `3.14`
- `str(10)` → `'10'`

Dönüşüm yaparken dikkat edilmesi gereken nokta, örneğin `'abc'` gibi bir metni sayıya çeviremeyeceğimizdir.

## Değişken Adları
Değişken isimleri:
- Büyük harf veya sayı ile başlayamaz.
- Boşluk içeremez, `_` alt çizgi kullanılabilir.
- Özel anlamı olan Python anahtar kelimeleri değişken adı olarak kullanılamaz (örneğin, `class`, `for`, `if`).
  
## Operatörler
Operatörler, programlamada işlemler yapmak için kullanılır. Farklı türde operatörler mevcuttur:
- **Matematiksel Operatörler**: Toplama (+), çıkarma (-), çarpma (*), bölme (/), mod alma (%), üs alma (**), tam bölme (//). Örnekler:
```python
a = 10
b = 3
print(a + b)  # 13
print(a * b)  # 30
print(a // b) # 3
```
  - **Stringlerde Toplama ve Çarpma**: 
    - `+` operatörü string ifadeleri birleştirmek için kullanılır: `'Python' + 'Ders'` → `'PythonDers'`.
    - `*` operatörü stringi çoğaltır: `'Python' * 3` → `'PythonPythonPython'`.

- **Atama Operatörleri**: `=` operatörü ile değişkenlere değer atarız. `+=` ve `-=` gibi operatörler mevcut değeri arttırmak veya azaltmak için kullanılır:
```python
x = 5
x += 3  # x = 8
```

- **Karşılaştırma Operatörleri**: `==`, `!=`, `>`, `>=`, `<`, `<=` gibi operatörler iki değeri karşılaştırır ve Boolean sonuç döner:
```python
a = 10
b = 5
print(a == b)  # False
print(a > b)   # True
```

- **Mantıksal Operatörler**: `and`, `or`, `not` gibi operatörlerle mantıksal karşılaştırmalar yaparız. Örnek:
```python
x = True
y = False
print(x and y)  # False
print(x or y)   # True
```

- **Üyelik Operatörleri**: `in` ve `not in` bir değerin bir koleksiyonda olup olmadığını kontrol eder. Örnek:
```python
s = 'Python'
print('P' in s)    # True
print('x' not in s) # True
```

## Len Fonksiyonu
Bir string'in uzunluğunu bulmak için `len()` fonksiyonu kullanılır:
```python
text = 'Merhaba'
print(len(text))  # 7
```

## Split Fonksiyonu
`split()` fonksiyonu, bir string’i belirli bir karaktere göre parçalara ayırır:
```python
text = 'Python öğreniyorum'
print(text.split())  # ['Python', 'öğreniyorum']
```

## Indexing ve Slicing
- **Indexing**: String içinde belirli bir karaktere ulaşmak için index kullanılır. Python'da index 0'dan başlar.
```python
text = 'Python'
print(text[0])  # P
```
- **Slicing**: String'in belli bir bölümünü almak için kullanılır. Örnek:
```python
text = 'Python'
print(text[0:3])  # Pyt
```

## Input Fonksiyonu
Kullanıcıdan veri almak için `input()` fonksiyonu kullanılır. Alınan veri her zaman string olarak gelir:
```python
name = input('Adınız nedir? ')
print('Merhaba ' + name)
```