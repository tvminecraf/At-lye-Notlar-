
# Koşullar ve Döngüler

## 1. Koşulların Kullanım Amacı
Koşullar, programlama dillerinde belirli bir durumda farklı işlemler gerçekleştirmek için kullanılır. Örneğin, bir kullanıcıdan alınan değerin belirli bir koşulu sağlayıp sağlamadığını kontrol etmek için kullanılır. Koşullar, akış kontrolünde önemli bir rol oynar; kullanıcı girdilerini denetlemek, işlemlerin doğruluğunu sağlamak ve programın güvenilirliğini artırmak için kullanılır.

**Örnek:**
```python
# Kullanıcıdan yaşını alarak yetişkin olup olmadığını kontrol eden bir örnek
yas = int(input("Yaşınızı girin: "))
if yas >= 18:
    print("Yetişkinsiniz.")
else:
    print("Yetişkin değilsiniz.")
```

Bu örnekte, kullanıcıdan alınan `yas` değeri `18` veya daha büyükse kullanıcıya "Yetişkinsiniz" mesajı gösterilir; aksi takdirde "Yetişkin değilsiniz" mesajı çıkar. Böylece, kullanıcıdan gelen veri koşula göre işlenmiş olur.

---

## 2. Koşul Deyimlerinin Farkları
Koşul deyimleri, akış kontrolünde farklı durumlara göre işlem yapmamızı sağlar. `if`, `elif` ve `else` deyimleri arasında önemli farklar vardır:
- **if**: İlk koşulu kontrol eder; doğruysa o bloğu çalıştırır.
- **elif**: Birden fazla koşulu sırasıyla kontrol etmek için kullanılır. İlk `if` koşulu yanlışsa, `elif` koşulları denetlenir.
- **else**: `if` ve `elif` koşullarının hiçbiri sağlanmadığında çalıştırılan bloktur.

**Örnek:**
```python
# Sıcaklık derecesine göre öneri sunan örnek
sicaklik = int(input("Sıcaklık kaç derece? "))

if sicaklik > 30:
    print("Hava sıcak, su içmeyi unutmayın!")
elif sicaklik > 20:
    print("Hava güzel, dışarıda vakit geçirebilirsiniz.")
else:
    print("Hava soğuk, kalın giyinin!")
```

Bu örnekte, `sicaklik` değeri farklı aralıklarda olduğunda farklı mesajlar görüntülenir. Böylece `if`, `elif` ve `else` deyimleri arasındaki fark gözlemlenebilir.

---

## 3. Döngülerin Kullanım Amacı
Döngüler, belirli bir işlemi birden fazla kez çalıştırmak istediğimiz durumlarda kullanılır. Programın içinde tekrar eden görevler olduğunda döngüler, kod tekrarını azaltır ve işlevselliği artırır.

### 3.1 While Döngüsü
`while` döngüsü, koşul sağlandığı sürece çalışır. Bu döngüde koşul yanlış olduğunda döngü sona erer. Örneğin, kullanıcı doğru şifre girene kadar tekrar deneme yapılmasını istediğimizde `while` döngüsü idealdir.

**Örnek:**
```python
# 1'den 5'e kadar sayan bir while döngüsü
i = 1
while i <= 5:
    print(i)
    i += 1  # Her seferinde i değerini 1 arttırır
```

**Sonsuz Döngü Örneği:**
```python
# Sonsuz döngü (Ctrl+C ile durdurulabilir)
while True:
    print("Bu döngü sonsuzca devam eder!")
```

### 3.2 For Döngüsü
`for` döngüsü, genellikle belirli bir aralık veya dizideki her bir öğe üzerinde işlem yapmak için kullanılır. `while` döngüsünden farkı, genellikle belirli sayıda tekrarlanması ve daha kontrollü olmasıdır.

**Örnek:**
```python
# 1'den 5'e kadar sayan bir for döngüsü
for i in range(1, 6):
    print(i)
```

#### "in" Üyelik Operatörü ile Kullanım:
`for` döngüsü `in` operatörü ile kullanılarak bir dizide veya stringdeki her bir karakter üzerinde işlem yapılabilir.
```python
# Bir stringdeki karakterleri teker teker yazdıran örnek
isim = "Python"
for harf in isim:
    print(harf)
```

#### `range` Fonksiyonu ile Kullanım:
`range` fonksiyonu döngüde belirli bir aralık belirtmek için kullanılır.
```python
# 0'dan 9'a kadar olan çift sayıları yazdırır
for i in range(0, 10, 2):
    print(i)
```

---

## 4. Döngü Kırma Yapıları
Döngülerde belirli bir durumda döngüyü sonlandırmak veya o iterasyonu atlamak için kullanılan yapılar şunlardır:

### 4.1 `break`
`break`, döngüyü tamamen sonlandırmak için kullanılır. Örneğin, aradığımız bir değeri bulduktan sonra döngüyü sonlandırabiliriz.

**Örnek:**
```python
# 1'den 10'a kadar sayarken, 5'e gelince döngüyü sonlandırır
for i in range(1, 11):
    if i == 5:
        break
    print(i)
```

### 4.2 `continue`
`continue`, döngüdeki mevcut iterasyonu atlayarak bir sonraki iterasyona geçer. Örneğin, sadece belirli sayılarda işlem yapmak istediğimizde kullanabiliriz.

**Örnek:**
```python
# 1'den 10'a kadar olan sayılarda sadece çift sayıları yazdırır
for i in range(1, 11):
    if i % 2 != 0:
        continue
    print(i)
```

### 4.3 `pass`
`pass`, bir döngü veya koşul içinde geçici bir ifade olarak kullanılır. `pass` ile kod yazma işlemi sırasında blokları geçici olarak boş bırakabiliriz.

**Örnek:**
```python
# Tamamlanmamış bir işlev veya döngü için pass kullanılır
for i in range(5):
    pass  # Bu döngü şu anda hiçbir şey yapmıyor
```

---