
# Pandas Atölye Notları

## Pandas Nedir?
- Pandas, Python tabanlı, veri analizi ve manipülasyonu için geliştirilmiş bir kütüphanedir. 
- Tablolar, zaman serileri ve yapılandırılmış verilerle çalışmayı kolaylaştırır.

---

## Pandas Ne İşe Yarar?
- CSV, Excel, SQL, JSON gibi formatlarda veri okuma/yazma.
- Eksik veri temizleme, dönüştürme ve filtreleme.
- İstatistiksel analiz ve görselleştirme için veri hazırlığı.

---

## Pandas Nasıl Kurulur?

```bash
pip install pandas
```


---

## Pandas Nasıl Kullanılır?
Pandas kütüphanesini kullanmak için öncelikle projemize dahil etmemiz gerekmektedir. Bunu için `import pandas as pd` şeklinde kullanabiliriz.

```python
import pandas as pd

```

---

## Seri Tanımlama
Seriler pandas içerisinde bulunan bir boyutlu veri yapısıdır.
Tanımlamak için `pd.Series()` fonksiyonunu kullanıyoruz.
```python
s = pd.Series([10, 20, 30, 40])

```

---

## `type` ile Seri Kontrolü
Seri tipini kontrol etmek için `type()` fonksiyonunu kullanırsanız sizelere `pandas.core.series.Series` döndürecektir.
```python
print(type(s))  # <class 'pandas.core.series.Series'>
```

---

## `.values`
` .valuse` fonksiyonu bizeler serinin değerlerini döndürür.

```python
print(s.values)  # [10 20 30 40]
```

---

## `.index`
` .index` fonksiyonu bizelere serinin index bilgilerini döndürür.
```python
print(s.index)  # RangeIndex(start=0, stop=4, step=1)
```

---

## `.ndim`, `.size`, `.shape`
- **`ndim`:** Serinin boyutunu verir.
- **`size`:** Toplam eleman sayısını döndürür.
- **`shape`:** Boyut bilgilerini tuple olarak döndürür.
```python
print(s.ndim)   # 1
print(s.size)   # 4
print(s.shape)  # (4,)
```

---

## `.dtype`
` .dtype` fonksiyonu serinin veri tipini döndürür.
bu veri tipleri `int64`, `float64`, `object`, `bool` olabilir.
- `int64` ve `float64` veri tipleri sayısal verileri temsil ederken, 
- `object` veri tipi ise string verileri temsil eder.
```python
print(s.dtype)  # int64
```

---

## `.head()` ve `.tail()`
- **`head(n)`:** İlk n elemanı gösterir. 
- **`tail(n)`:** Son n elemanı gösterir.
n değeri belirtilmezse varsayılan olarak 5 elemanı gösterir.
```python
print(s.head(2))  # İlk 2 eleman
print(s.tail(2))  # Son 2 eleman
```

---

## Slice İşlemleri
slicing işlemleri ile serinin belirli bir aralığını alabiliriz.
pandas seriside klasik python slicing işlemlerini destekler.
```python
print(s[1:3])  # 20, 30
```
---

## Gelişmiş Seri Tanımlama
serileri tanımlamanın bir başka yolu da tanımlama esnasında kendilerine index isimleri vererek tanımlamktır.
```python
s = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
print(s)
```

---

## Dictionary'den Seri Tanımlama
Başka bir tanımlama yöntemi de dictionary yapısını kullanmaktır.
Burada dictionary'nin key'leri index isimlerini, value'ları ise serinin değerlerini temsil eder.
```python
data = {'a': 10, 'b': 20, 'c': 30}
s = pd.Series(data)
print(s)
```

---

## Index İsimlendirme
eğer index isimlerini daha sonra değiştirmek istersek bunu `index` fonksiyonu ile yapabiliriz.
```python
s.index = ['x', 'y', 'z']
print(s)
```

---

## DataFrame Tanımlama
Dataframe, pandas kütüphanesinde bulunan en az iki boyutlu bir veri yapısıdır.
Genellikle kullanacağımız yapı budur.
Bir dataframe tanımlamak için `pd.DataFrame()` fonksiyonunu kullanırız.
```python
df = pd.DataFrame([1, 2, 3, 4, 5])
print(df)
```

---

## DataFrame Index İsimlendirme
`.index` fonksiyonu ile index isimlerini öğrenebilir ve değiştirebiliriz.
```python
# Index isimlerini öğrenme
print(df.index) # RangeIndex(start=0, stop=5, step=1)

# Index isimlerini değiştirme
df.index = ["a", "b", "c", "d", "e"]
print(df)
```

---
## `.axes`
`.axes` fonksiyonu ile sütun ve satır isimlerini öğrenebiliriz.
Burda bize bir liste dönüyor. Buradaki index numaraları aşağıdaki drop fonksiyonunda kullanılıyor.
```python
print(df.axes)  # [Index(['a', 'b', 'c', 'd', 'e'], dtype='object'),Index(['column_name'], dtype='object')]
```

---

## `.drop()`
`drop()` fonksiyonu ile sütun veya satır silme işlemi yapabiliriz.
burada ihtiyacımız olan parametreler:
- `labels`: Sütun veya satır isimleri
- `axis`: bunu `.axes` fonksiyonu ile öğrenebiliriz.
```python
df = df.drop('0', axis=0)  # '0' Satırı siler
print(df)
```

---

## `inplace`
`inplace=True` ile değişiklikleri kalıcı hale getirebilirsiniz:
Eğer `inplace` ifadesini kullanmadan kalıcı halde getirmek istiyorsanız listenizin üzerinde yazmanız gerekmektedir.
```python
df.drop('Age', axis=1, inplace=True)
print(df)

#listenin üzerine yazma
df = df.drop('Age', axis=1)
print(df)
```

---

## `.concat()`
`concat()` fonksiyonu ile iki dataframe'i birleştirebiliriz.
Buradaki birleştirme işleminde dikkat etmemiz gerekenler eğer sütun isimleri aynı ise birleştirme işlemi başarılı bir şekilde yapılır. Ama eğer sütun isimleri farklı ise birleştirme işlemi yapıldıktan sonra NaN değerler ile doldurulur. ve bu durumda ilerideki işlemlerimizde hata alamamıza sebep olabilir.
```python
df1 = pd.DataFrame({'A': [1, 2]})
df2 = pd.DataFrame({'A': [3, 4]})
result = pd.concat([df1, df2], ignore_index=True)
print(result)
```
---

## Join İşlemleri
- **Inner Join:** Ortak değerleri alır.
```python
result = df1.merge(df2, how='inner')
```
- **Outer Join:** Tüm değerleri alır.
```python
result = df1.merge(df2, how='outer')
```

---

## `ignore_index = True` ve `ignore_index = False`
- `ignore_index=True`: Satır indekslerini sıfırlayarak yeni bir indeks oluşturur.
- `ignore_index=False`: Orijinal indeks değerlerini korur.
```python
df = pd.concat([df1, df2], ignore_index=True)
print(df)
```
---