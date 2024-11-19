# Ders 6: Lists, Tuples, Sets, Dictionaries

Bu derste, Python'daki liste, tuple, set ve dictionary veri tipleri ele alınacaktır. Her bir veri tipinin özellikleri, kullanım amacı, ve yaygın metotları örneklerle açıklanacaktır.

## 1. Giriş
Python'da veri tipleri oldukça önemlidir ve çeşitli veri yapıları üzerinde işlem yapmamızı sağlar. Bu derste, daha önce öğrendiğimiz veri tiplerine ek olarak liste, tuple, set ve dictionary veri tiplerini detaylandıracağız.

## 2. Lists

### 2.1 Lists Introduction
Listeler, birden fazla öğeyi bir arada tutmamıza olanak sağlayan esnek veri yapılarıdır. Listeler, farklı veri tiplerinden öğeler içerebilir ve sıralanabilirler.


```python
meyveler = ['elma', 'armut', 'muz', 'çilek']
meyveler
```
### 2.2 Indexing and Slicing
Listeler üzerinde indexleme ve slicing işlemleri oldukça yaygındır. İç içe listeler ile bu işlemler daha da karmaşık hale gelebilir.


```python
ilk_meyve = meyveler[0]
son_meyve = meyveler[-1]
orta_meyveler = meyveler[1:3]
ilk_meyve, son_meyve, orta_meyveler
```

### 2.3 List and Split Functions
`list()` fonksiyonu ile liste oluşturabilir, `split()` fonksiyonu ile string ifadeleri listeye dönüştürebiliriz.


```python
cumle = 'Elma Armut Muz Çilek'
meyve_listesi = cumle.split()
meyve_listesi
```
### 2.4 Liste elemanlarının döngüde kullanımı
`for` döngüsü kullanarak listelerde gezinme işlemi gerçekleştirilebilir.


```python
for meyve in meyveler:
    print(meyve)
```
### 2.5 Listelerde kullanılan metotlar

`Append, insert, extend, remove, pop, clear` gibi metotlar listeler üzerinde değişiklik yapmamızı sağlar.

<font color="Orange"> apped() </font> <font color="black">metodu ile listeye yeni bir eleman ekleyebiliriz. </font> 

```python
meyveler.append('kavun')
meyveler
```
<font color="Orange">insert() </font> <font color="black">metodu ile belirli bir index'e eleman ekleyebilir. </font> 

```python
meyveler.insert(1, 'portakal')
meyveler
```
<font color="Orange">extend() </font> <font color="black"> metodu ile listeye başka bir listeyi ekleyebiliriz. </font> 

```python
meyveler.extend(['üzüm', 'karpuz'])
meyveler
```
<font color="Orange">remove() </font> <font color="black"> metodu ile belirli bir elemanı listeden çıkarabiliriz. </font> 

```python
meyveler.remove('armut')
meyveler
```
<font color="Orange"> pop() </font> <font color="black"> metodu ile belirli bir index'teki elemanı çıkarabiliriz. </font> 

```python
meyveler.pop(2)
meyveler
```
<font color="Orange"> clear() </font> <font color="black">metodu ile listeyi temizleyebiliriz.</font>  

```python
meyveler.clear()
meyveler
```
## 3. Tuples

### 3.1 Tuples Introduction
Tuple'lar, sabit veri yapılarıdır. Oluşturulduktan sonra içerdikleri öğeler değiştirilemez. Bu nedenle, daha sabit veri yapılarına ihtiyaç duyulan durumlarda kullanılırlar.


```python
meyveler_tuple = ('elma', 'armut', 'muz', 'çilek')
meyveler_tuple
```
### 3.2 Indexing and Slicing
Tuple'lar üzerinde indexleme ve slicing işlemleri yapılabilir.


```python
ilk_meyve = meyveler_tuple[0]
son_meyve = meyveler_tuple[-1]
orta_meyveler = meyveler_tuple[1:3]
ilk_meyve, son_meyve, orta_meyveler
```

### 3.3 Tuple ile çoklu değer atama
Tuple'lar, birden fazla değişkeni aynı anda atamak için kullanılabilir.

```python	
meyve1, meyve2, meyve3, meyve4 = meyveler_tuple
print(meyve1)
print(meyve2)
print(meyve3)
print(meyve4)
```

## 4. Sets

### 4.1 Sets Introduction
Set'ler, matematiksel kümelerle aynı özelliklere sahiptir. Sıralanamaz, indexlenemez ve aynı öğeyi birden fazla kez içermezler.


```python
meyveler_set = {'elma', 'armut', 'muz', 'çilek'}
meyveler_set
```

### 4.3 Set Methods
Set'ler üzerinde çeşitli matematiksel işlemler gerçekleştirilebilir.


```python
yeni_meyveler = {'kavun', 'karpuz', 'muz'}
fark = meyveler_set.difference(yeni_meyveler)
fark
```
```python
kesisim = meyveler_set.intersection(yeni_meyveler)
kesisim
```
```python
birlesim = meyveler_set.union(yeni_meyveler)
birlesim
```
## 5. Dictionaries

### 5.1 Dictionaries Introduction
Sözlükler, anahtar-değer çiftlerinden oluşan esnek veri yapılarıdır. Her anahtar bir değere karşılık gelir ve anahtarlar benzersiz olmalıdır.


```python
sozluk = {'elma': 'apple', 'armut': 'pear', 'muz': 'banana'}
sozluk
```
### 5.2 Accessing Dictionary Items
Sözlük öğelerine anahtarlar kullanılarak erişilebilir.


```python
elma_ingilizce = sozluk['elma']
elma_ingilizce
```
### 5.6 Dictionary Methods
Sözlükler üzerinde çeşitli işlemler gerçekleştirilebilir.


```python
anahtarlar = sozluk.keys()
degerler = sozluk.values()
ciftler = sozluk.items()
anahtarlar, degerler, ciftler
```
```python
deger = sozluk.get('muz')
deger
```