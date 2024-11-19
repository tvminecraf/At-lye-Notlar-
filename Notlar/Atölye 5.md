# NumPy'ye Giriş

**Neden NumPy?**

- Hızlı ve verimli veri işlemleri
- Çok boyutlu diziler (ndarray)
- NumPy'nin avantajları ve veri biliminde önemi

**NumPy Kurulumu**

Python ortamında NumPy kurulumu:

```bash
pip install numpy
```

NumPy kütüphanesinin projeye dahil edilmesi:
```python
import numpy as np
```


## NumPy Dizileri (ndarray)

**NumPy Dizisi Oluşturma**

NumPy ile oluşturduğumuz dizilerin Python ile oluşturulan listelerden birkaç temel farkı ve benzerlikleri var bunları şu şekilde inceleyebiliriz.

Benzerlikleri:
- İkisi de birden fazla veri saklar.
- Sıfırdan başlayan indeksleme ve dilimleme yapılabilir.
  
Farklılıkları:
- Python Listesi: Farklı türde verileri bir arada tutabilir, daha -yavaş çalışır.
- NumPy Dizisi: Tek bir türde veri içerir, daha hızlı ve verimli, 
matematiksel işlemler kolayca yapılabilir.


Kütüphanenin projeye dahil edilmesi
- Burada kullandığımız import anahtar kelimesi kutuphanemizi projemize eklememizi sağlar
- Ardından gelen as ifadesi proje içerisinde kütüphanemize erişirken kullanacağımız ifadeyi belirler


```python

import numpy as np
```

np.array()
- içerisine verdiğizmiz listeleri NumPy arraylerine çeviren fonksiyondu


```python

a = np.array([1, 2, 3])
print('Array a:', a)
```

np.zeros()
- Sıfırlardan oluşan bir dizi oluşturmak için zeros fonksiyonunu kullanıyoruz  
- Burada 2x2 boyutunda bir dizi oluşturuyoruz  
- ilk parametre satır sayısını, ikinci parametre sütun sayısını belirtiyor  


```python
zeros = np.zeros((2, 2))
print('Zeros:\n', zeros)
```


np.ones()
- Birlerden oluşan bir dizi  
- 3x3 boyutunda bir dizi oluşturuyoruz  
- ilk parametre satır sayısını, ikinci parametre sütun sayısını belirtiyor  


```python
ones = np.ones((3, 3))
print('Ones:\n', ones)
```

np.full()
- Sabit bir değerden oluşan bir dizi oluşturmak için kullanırız
- 2x2 boyutunda bir dizi oluşturuyoruz
- ilk parametre olarak verdiğimiz tuple, dizinin boyutunu belirtir
- tuple içerisindeki ilk parametre satır sayısını, ikinci parametre sütun sayısını belirtir
- ikinci parametre ise dizinin içerisindeki sabit değeri belirtir


```python
full = np.full((2, 2), 7)
print('Full:\n', full)
```

np.eye()
- Birim matris oluşturmak için kullandığımız komut
- içerisine yalnızca birim matrisin köşegen uzunluğunu alır


```python
eye = np.eye(3)
print('Eye:\n', eye)
```

np.arange(x,y,z)
- x sayısından y sayısına kadar istediğimiz adım aralığı ile değerler oluşturmamızı sağlar.
- x başlangıç sayımız
- y bitiş sayımız (y'e kadar olduğundan y dahil değil)
- z adım aralığımız


```python
arange = np.arange(0, 10, 2)
print('Arange:', arange)
```

np.linspace(x, y, z)

- x sayısından y sayısına kadar z sayısında eşit aralıklı değerler oluşturmamızı sağlar.
- x başlangıç sayımız
- y bitiş sayımız (y'e kadar olan değerler, y dahil)
- z oluşturulacak değer sayısı


```python
linspace = np.linspace(0, 1, 11)
print('Linspace:', linspace)

```
## Dizi Özellikleri

Dizi boyutları (shape), veri tipi (dtype), boyut sayısı (ndim), dizi boyutu (size)

- **a.shape**: Dizinin boyutlarını verir. Kaç satır ve sütundan oluştuğunu gösterir.
    - Örneğin: `(2, 3)` -> 2. satır, 3. sütun.
  
- **a.dtype**: Dizideki elemanların veri tipini döner. NumPy dizileri tek bir veri türünden elemanlar içerir.
    - Örneğin: `int32`, `float64` gibi veri tipleri olabilir.
  
- **a.ndim**: Dizinin boyut sayısını döner. Tek boyutlu, iki boyutlu veya daha yüksek boyutlu bir dizi olup olmadığını gösterir.
    - Örneğin: 2D diziler için `2`, 3D diziler için `3`.
  
- **a.size**: Dizinin toplam kaç elemandan oluştuğunu gösterir.
    - Örneğin: `(2, 3)` boyutlu bir dizi için 6 eleman olacaktır.


```python
a = np.array([[1, 2, 3], [4, 5, 6]])
print('Shape:', a.shape)
print('Data type:', a.dtype)
print('Number of dimensions:', a.ndim)
print('Size:', a.size)
```
**np.reshape()**

- x.reshape() fonksiyonu, `x` dizisini yeniden şekillendirerek, dizinin elemanlarının sırasını değiştirmeden 3 satır ve 2 sütundan oluşan yeni bir dizi oluşturur.



```python
reshaped = a.reshape(3, 2)
print('Reshaped array:\n', reshaped)

```
## Dizilerde Elemanlara Erişim

**Dizinin Elemanlarına Erişim**

Bir NumPy dizisinin belirli bir elemanına indeksleyerek erişebiliriz. İndeksleme, tıpkı Python listelerinde olduğu gibi sıfırdan başlar. Ayrıca, negatif indeksleme kullanarak dizinin sonundan başlayarak elemanlara erişebilirsiniz.


```python
a = np.array([1, 2, 3, 4, 5])
print('İlk eleman:', a[0])
print('Son eleman:', a[-1])
```

### Çok Boyutlu Dizilerde Elemanlara Erişim

NumPy, çok boyutlu dizilerle çalışmayı kolaylaştırır. İki boyutlu dizilerde, elemanlara, satırlara ve sütunlara kolayca erişebilirsiniz.

- b[x, y]: Dizinin (x, y) pozisyonundaki elemanına erişir (ilk satır, ikinci sütun).
- b[x, :]: Dizinin x. satırındaki tüm elemanlara erişir.
- b[:, y]: Dizinin y. sütunundaki tüm elemanlara erişir.


```python
b = np.array([[1, 2, 3], [4, 5, 6]])
print('Element at position (0, 1):', b[0, 1])
print('Row 1:', b[1, :])
print('Column 0:', b[:, 0])
```

**Slicing(Dilimleme)**

- c[1:4]: Dizinin 1. indeksinden başlayarak 4. indekse kadar olan (4 dahil değil) elemanları alır.
- Dilimleme işlemi, [başlangıç,bitiş] formatında yapılır. Bitiş indeksi dahil edilmez.


```python
# Dizi dilimleme ve indeksleme
c = np.array([10, 20, 30, 40, 50])
print('Slice of array:', c[1:4])

```

## NumPy ile Matematiksel İşlemler


```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
```

**Elemanlar Üzerinde Matematiksel İşlemler**

**Toplama (a + b):**
- Dizinin her bir elemanı sırayla toplanır. Örneğin:
  - İlk elemanlar (1 + 4 = 5), ikinci elemanlar (2 + 5 = 7), üçüncü elemanlar (3 + 6 = 9) olarak hesaplanır.  
     Sonuç: [5, 7, 9]


```python
print('a + b:', a + b)
```
**Çıkarma (a - b):**
- Aynı konumdaki elemanlar sırayla çıkarılır. Örneğin:
  - İlk elemanlar (1 - 4 = -3), ikinci elemanlar (2 - 5 = -3), üçüncü elemanlar (3 - 6 = -3).
    -Sonuç: [-3, -3, -3]


```python
print('a - b:', a - b)
```

**Çarpma (a * b):**
- Dizilerin elemanları sırayla çarpılır. Örneğin:
  - İlk elemanlar (1 * 4 = 4), ikinci elemanlar (2 * 5 = 10), üçüncü elemanlar (3 * 6 = 18).
    - Sonuç: [4, 10, 18]


```python
print('a * b:', a * b)
```

**Bölme (a / b):**
- Dizilerin elemanları sırayla bölünür. Örneğin:
  - İlk elemanlar (1 / 4 = 0.25), ikinci elemanlar (2 / 5 = 0.4), üçüncü elemanlar (3 / 6 = 0.5).
    - Sonuç: [0.25, 0.4, 0.5]


```python
print('a / b:', a / b)
```

**Üs alma (a ** 2):**
- Dizinin her bir elemanının karesi alınır. Örneğin:
  - İlk eleman (1 ** 2 = 1), ikinci eleman (2 ** 2 = 4), üçüncü eleman (3 ** 2 = 9).
    - Sonuç: [1, 4, 9]



```python
print('a ** 2:', a ** 2)
```

**Karekök (np.sqrt(a)):**
- Dizinin her bir elemanının karekökü alınır. Örneğin:
  - İlk eleman √1 = 1.0, ikinci eleman √2 ≈ 1.41, üçüncü eleman √3 ≈ 1.73.
    - Sonuç: [1.0, 1.41, 1.73]

```python
print('sqrt(a):', np.sqrt(a))
```

**Logaritma (np.log(a)):**
- Dizinin her bir elemanının doğal logaritması alınır. Örneğin:
  - İlk eleman log(1) = 0, ikinci eleman log(2) ≈ 0.69, üçüncü eleman log(3) ≈ 1.10.


```python
print('log(a):', np.log(a))
```

**Matris İşlemleri**


```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
```

1. **Matris Çarpımı (np.dot(A, B))**:
    - İki matrisin çarpımını verir. Matris çarpımı, iki matrisin elemanlarının belirli bir düzenle çarpılıp toplanması ile yapılır.
    
    - Sonuç:
    $$
    A \cdot B = \begin{bmatrix} 1*5 + 2*7 & 1*6 + 2*8 \\ 3*5 + 4*7 & 3*6 + 4*8 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}
    $$


```python
# Matris çarpımı
print('A dot B:\n', np.dot(A, B))
```

1. **Transpoz (A.T)**:
    - Matrisin satır ve sütunlarının yer değiştirmesi anlamına gelir.
    
    - Örneğin, \(\text{A}^T\) şu şekilde olur:
    
    $$
    A^T = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}^T = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}
    $$


```python
# Transpoz
print('Transpose of A:\n', A.T)
```

1. **Ters Matris (np.linalg.inv(A))**:
    - Bir kare X matrisi ile çarpımı birim matris olan matrise X matrisinin ters matrisi denir
    
    - A matrisinin tersi şu şekilde hesaplanır:
    
    $$
    A^{-1} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}^{-1} = \frac{1}{(1*4 - 2*3)} \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix} = \begin{bmatrix} -2 & 1 \\ 1.5 & -0.5 \end{bmatrix}
    $$


```python
# Ters matris
print('Inverse of A:\n', np.linalg.inv(A))
```
## NumPy ile Veri Manipülasyonu

**Dizi Birleştirme ve Ayırma**


```python
a = np.array([1, 2])
b = np.array([3, 4])
```

### Yatay Birleştirme (np.hstack):

`np.hstack()` fonksiyonu, dizileri yatay olarak birleştirir. Bu işlemde diziler yanyana eklenir.  
Örneğin: `[1, 2]` ve `[3, 4]` dizileri birleştirildiğinde sonuç `[1, 2, 3, 4]` olacaktır.





```python
# Yatay birleştirme
hstack = np.hstack((a, b))
print('Horizontal stack:', hstack)
```

    Horizontal stack: [1 2 3 4]


### Dikey Birleştirme (np.vstack):

`np.vstack()` fonksiyonu, dizileri dikey olarak birleştirir. Bu işlemde diziler alt alta eklenir.  
Örneğin: `[1, 2]` ve `[3, 4]` dizileri birleştirildiğinde sonuç şu şekilde olur:

$$
\begin{bmatrix} 
1 & 2 \\
3 & 4 
\end{bmatrix}
$$



```python
# Dikey birleştirme
vstack = np.vstack((a, b))
print('Vertical stack:\n', vstack)
```
### Dizi Ayırma (np.array_split):

`np.array_split()` fonksiyonu, diziyi belirli bir sayıda alt dizilere ayırır.  
Örneğin, `[1, 2, 3, 4]` dizisini 2 parçaya böldüğümüzde sonuç `[[1, 2], [3, 4]]` olacaktır.


```python
# Dizi ayırma
split = np.array_split(hstack, 2)
print('Split arrays:', split)
```
**Dizilerde Filtreleme**


```python
a = np.array([1, 2, 3, 4, 5])
```

Filtreleme işlemi dizilerin içerisinden belirli aralıklar ile değer almaktan fazlasını yamamızı sağlayan yöntemdir.  

Bir filtre belirlemenin birkaç yolu vardır bunlardan bir tanesi bir diziye göre belirli bir kontrol ifadesi kullanmaktır.  


```python
# Koşullu filtreleme ile dizi elemanlarını seçme
filtered = a[a > 3]
print('filter is :', a>3)
print('Filtered array:', filtered)
```
```python
# Boolean filtreleme ile dizi elemanlarını seçme
a_filter = (a % 2 == 0) # filter ifadesini yazmama sebebim onun fir fonjksiyon olması
print('Boolean array:', a_filter)
print('Even elements:', a[a_filter])
```
Diğer bir yöntem de **filter** fonksiyonu ile bu işlemi yapmaktır.  
filter fonsiyonu iki parametre alır bunlardan 1.si bir fonksiyon 2.ise dizimizdir.  
Bu 2 değeri verdiğimiz filter fonksiyonu dizimizdeki değerleri bir bir fonksiyona gönderip kontrol eder.
Ardından bir filterlenmiş dizi verir.  
Ama burada elemanlara erişebilmek için ya bu filtreli içeriği for döngüsü ile işlemeliyiz ya da tip değiştirme ile `list` tipine çevirmeliyiz


```python
def myfunc(x):
    if x % 2 == 0:
        return True
    else:
        return False
    
filtered = filter(myfunc, a)
print('Filtered array:', list(filtered))
```
**Dizilerde İşlemler**


```python
a = np.array([5, 2, 9, 1, 5, 6])
```

Sıralama (np.sort()):

np.sort() fonksiyonu, diziyi küçükten büyüğe doğru sıralar.  
Örneğin: [5, 2, 9, 1, 5, 6] dizisini sıraladığınızda sonuç [1, 2, 5, 5, 6, 9] olacaktır.


```python


# Sıralama
print('Sorted array:', np.sort(a))
```

Benzersiz Elemanlar (np.unique()):

np.unique() fonksiyonu, dizideki tekrar eden elemanları kaldırarak yalnızca benzersiz elemanları döner.  
Örneğin: [5, 2, 9, 1, 5, 6] dizisinde tekrar eden 5 elemanı bir kez gösterilir ve sonuç [1, 2, 5, 6, 9] olacaktır.


```python
# Unique elemanlar
print('Unique elements:', np.unique(a))
```

Benzersiz Elemanlar (np.unique()):

np.unique() fonksiyonu, dizideki tekrar eden elemanları kaldırarak yalnızca benzersiz elemanları döner.  
Örneğin: [5, 2, 9, 1, 5, 6] dizisinde tekrar eden 5 elemanı bir kez gösterilir ve sonuç [1, 2, 5, 6, 9] olacaktır.


```python
# Arama
print('Indices of 5:', np.where(a == 5))
```

## NumPy'de İleri Seviye Konular

##### Broadcasting 

a ve b NumPy dizileri olarak tanımlanmış.

a = np.array([1, 2, 3]): Bu, tek boyutlu bir dizi (vektör).
b = np.array([[1], [2], [3]]): Bu ise 3x1 boyutunda bir iki boyutlu dizi.
Broadcasting işlemi sayesinde, iki dizi farklı boyutlara sahip olmasına rağmen element bazlı toplama işlemi yapılabiliyor.

broadcasted = a + b: Burada her iki dizi, şekil farklılıklarına rağmen toplama işlemi yapılarak yayılma (broadcasting) uygulanıyor.
Sonuçta, iki boyutlu bir dizi elde ediliyor ve bu sonuç ekrana yazdırılıyor.


#### Peki brodcasting nasıl çalışır?
Elimizdeki örnek için ilk dizimiz 1,2,3 elemanlarını içeren 1 satır ve 3 sütundan oluşurken ikinci dizimiz 3 satır ve 1 sütundan oluşuyor

normalde bizim yaptığımız işlemlerde ilk dizideki x'inci sütun ve y'inci satıradaki değer ile ikinci dizideki x'inci sütun ve y'inci satırdaki eleman işleme tabi tutuluyordu ama bu örnekte ilk sütunda 1.satır 2 sütun varken ikinci dizide bu yok. bu nedenden ötürü numpy bizim ilk dizimizi
$$
\begin{bmatrix} 
1 & 2 & 3 \\
1 & 2 & 3 \\
1 & 2 & 3 \\ 
\end{bmatrix}
$$
şeklinde bir listeye dönüştürüyor  
aynı sebepten dolayı ikinci listemizi de
$$
\begin{bmatrix} 
1 & 1 & 1 \\
2 & 2 & 2 \\
3 & 3 & 3 \\ 
\end{bmatrix}
$$
şeklinde bir listeye çevirir ve toplama işlemleri yapar


```python
a = np.array([1, 2, 3])
b = np.array([[1], [2], [3]])

# Broadcasting örneği
broadcasted = a + b
print('Broadcasted array:\n', broadcasted)

```
**Fancy Indexing**

- Fancy indexing, NumPy dizilerinde özel indeksler kullanarak belirli elemanları seçmenin bir yoludur.
- a[indices] ifadesi ile, a dizisindeki 0, 2 ve 4 indekslerine sahip elemanlar seçilir ve yeni bir dizi oluşturulur.
- Bu teknik, çok büyük diziler üzerinde belirli elemanları veya alt dizileri seçerken oldukça kullanışlıdır.


```python
a = np.array([10, 20, 30, 40, 50])
indices = [0, 2, 4, 4]

# Fancy indexing
fancy_indexed = a[indices]
print('Fancy indexed array:', fancy_indexed)

```

**NumPy ile Random Sayılar**

np.random.random() fonksiyonu, (0, 1) aralığında (0 dahil, 1 hariç) rastgele float tipinde değerler üretir. Yani burada, 3 satır ve 3 sütundan oluşan rastgele bir matris elde ederiz.


```python
# Rastgele sayı üretimi
random_arr = np.random.random((3, 3))
print('Random array:\n', random_arr)
```

np.random.randint fonksiyonu, verilen iki sayı arasında rastgele tam sayılar üretir (0 dahil, 10 hariç).Yani burada, 4 satır ve 3 sütundan oluşan rastgele bir matris elde ederiz.


```python
# Rastegele sayı üretimi 2. metod
random_arr2 = np.random.randint(0, 10, (4, 3))
print('Random array2:\n', random_arr2)
```
Bu kod, a dizisinden 3 tane rastgele eleman seçer. np.random.choice fonksiyonu, bir diziden rastgele elemanlar seçmeyi sağlar. Burada replace=False olduğu için aynı eleman birden fazla kez seçilemez, yani tekrar etmeyen örnekler seçilir. Eğer replace=True olsaydı, aynı eleman birden fazla kez seçilebilirdi.


```python
# Rastgele örnekleme
sampled = np.random.choice(a, 3, replace=False)
print('Randomly sampled elements:', sampled)
```
## NumPy Neden önemli 

### Neden NumPy Daha Hızlıdır?
- **C ile yazılmıştır**: NumPy, arka planda C dilinde optimize edilmiş fonksiyonlar kullanır. Bu nedenle, Python'un yerleşik fonksiyonlarına göre çok daha hızlıdır.
- **Vektörleştirme**: NumPy, işlemleri vektörleştirir ve böylece tüm dizi üzerinde tek seferde işlem yapar, Python ise döngü kullanarak eleman eleman işlem yapar, bu da daha yavaştır.
- **Düşük Seviye Optimizasyonlar**: NumPy, donanım kaynaklarını (örneğin işlemci, bellek) daha verimli kullanır, bu da büyük veri işlemlerinde büyük bir avantaj sağlar.

Bu satır, 1 milyon elemandan oluşan rastgele tam sayılar içeren bir NumPy dizisi oluşturur. Elemanlar 0 ile 100 arasında rastgele seçilir. Bu büyük dizi, zamanlama karşılaştırması yapmak için kullanılacak.


```python
import time

# Büyük bir dizi oluşturma
large_array = np.random.randint(0,100,1000000)
```

Bu kısım, NumPy'nin np.sum() fonksiyonunun hızını ölçer. NumPy'nin sum() fonksiyonu, dizideki tüm elemanların toplamını hesaplar ve başlangıç (start) ile bitiş (end) zamanları arasındaki fark hesaplanarak işlem süresi yazdırılır.


```python
# NumPy işlemlerinin zamanlaması
start = time.time()
np.sum(large_array)
end = time.time()
print('Time taken by NumPy sum:', end - start)
```
Burada ise Python'un yerleşik sum() fonksiyonu aynı işlem için kullanılır, ancak bu fonksiyon saf Python ile çalıştığından NumPy'ye kıyasla daha yavaş çalışır. Yine işlem süresi başlangıç ve bitiş zamanları arasındaki fark olarak yazdırılır.

```python
# Python yerleşik fonksiyonu ile zamanlama
start = time.time()
sum(large_array)
end = time.time()
print('Time taken by Python sum:', end - start)
```
Sonuç olarak:  
NumPy, büyük veri setleri ve yoğun hesaplamalarla çalışırken Python'un yerleşik fonksiyonlarına kıyasla çok daha hızlıdır. Bu yüzden veri bilimi, makine öğrenimi ve diğer bilimsel hesaplamalar için vazgeçilmez bir araçtır.
