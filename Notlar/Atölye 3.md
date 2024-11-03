
# Fonksiyonlar ve Sınıflar

## 1. Fonksiyonların Tanımı ve Kullanım Amaçları
Fonksiyonlar, programlama dillerinde belirli işlemleri gerçekleştiren, tekrar kullanılabilir kod bloklarıdır. Kod tekrarını önlemek, işlemleri daha düzenli ve okunabilir hale getirmek için kullanılır. Fonksiyonlar ikiye ayrılır:
- **Gömülü Fonksiyonlar**: Python'da hazır olarak sunulan ve direkt kullanılabilen fonksiyonlardır. Örneğin, `print()`, `len()`, `split()`, `input()` gibi fonksiyonlar.
- **Özel Fonksiyonlar**: Kullanıcının belirli bir amaca yönelik olarak oluşturduğu fonksiyonlardır.

**Örnek - Gömülü Fonksiyonlar:**
```python
# Gömülü fonksiyonlar ile örnekler
print("Merhaba")          # Yazdırma işlemi
uzunluk = len("Python")    # Uzunluk hesaplama
print(uzunluk)
kelimeler = "Merhaba Dünya".split()  # Stringi bölme
print(kelimeler)
isim = input("İsminizi girin: ")     # Kullanıcıdan veri alma
print(f"Merhaba, {isim}!")
```

## 2. Fonksiyon Oluşturma
Özel fonksiyonlara, belirli işlemleri tekrar etmeden bir kere tanımlayıp farklı yerlerde çağırarak ulaşabiliriz. Fonksiyonlar, `def` anahtar kelimesi ile tanımlanır.

**Örnek - Fonksiyon Oluşturma:**
```python
# Basit bir toplama fonksiyonu
def toplama(a, b):
    return a + b

# Fonksiyonun çağrılması
sonuc = toplama(5, 3)
print(sonuc)  # Çıktı: 8
```

## 3. `return` ve `print` Farkı
- **`print`**: Sonucu ekrana yazdırır ancak başka işlemler için döndürmez.
- **`return`**: Fonksiyonun sonucunu döndürür, böylece bu sonucu başka bir değişkende saklayabilir veya işlem yapabilirsiniz.

**Örnek - `return` ve `print` Farkı:**
```python
def kare_al_print(x):
    print(x ** 2)

def kare_al_return(x):
    return x ** 2

# Ekrana yazdırır ama değeri döndürmez
kare_al_print(4)

# Değeri döndürdüğü için başka bir değişkene atayabiliriz
sonuc = kare_al_return(4)
print(sonuc)
```


---

## 4. Sınıf Tanımı (Class) ve Kullanım Amacı
Sınıflar (Class), nesne tabanlı programlama yapısını kullanarak nesne (object) oluşturmak için kullanılır. Benzer özellik ve davranışları taşıyan nesneleri modellemek için kullanılır.

**Örnek - Sınıf Tanımı:**
```python
class Araba:
    pass  # Henüz özellik eklemedik, sadece sınıf tanımı yaptık.
```

## 5. Class ve Object Kavramları
Sınıflar, bir nesnenin (object) şablonudur. Sınıftan türetilmiş her bir örneğe nesne denir.

**Örnek - Class ve Object Oluşturma:**
```python
class Araba:
    marka = "Ford"
    model = "Mustang"
    yil = 1964

# Nesne oluşturma
araba1 = Araba()
print(araba1.marka)  # Çıktı: Ford
```

## 6. Sınıf Oluşturma ve Özellikler
Sınıflarda, nesneye ait özellikler ve metotlar tanımlanabilir. Yapıcı metot (`__init__`), nesne oluşturulduğunda otomatik olarak çalışır ve nesneye ait özellikleri tanımlar.

**Örnek - Sınıf ve Yapıcı Metot:**
```python
class Araba:
    def __init__(self, marka, model, yil):
        self.marka = marka
        self.model = model
        self.yil = yil

araba1 = Araba("Ford", "Mustang", 1964)
print(araba1.marka)  # Çıktı: Ford
```

## 7. Metot Oluşturma
Sınıf içinde tanımlanan fonksiyonlara **metot** denir. Metotlar, nesneye özgü işlemler gerçekleştirmek için kullanılır.

**Örnek - Metot Tanımlama:**
```python
class Araba:
    def __init__(self, marka, model, yil):
        self.marka = marka
        self.model = model
        self.yil = yil

    def bilgi_goster(self):
        return f"{self.yil} model {self.marka} {self.model}"

araba1 = Araba("Ford", "Mustang", 1964)
print(araba1.bilgi_goster())  # Çıktı: 1964 model Ford Mustang
```

---

