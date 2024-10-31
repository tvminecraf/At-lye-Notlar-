# Git ve GitHub Nedir ve Nasıl Kullanılır?

## 1. Giriş

- **Git ve GitHub Tanıtımı:**
  - **Git nedir?**  
    Git, bir **sürüm kontrol sistemi**dir. Projelerdeki dosyaların değişim geçmişini takip etmeye ve aynı proje üzerinde birden fazla kişinin eş zamanlı çalışmasına olanak sağlar.
  - **GitHub nedir?**  
    GitHub, Git depolarını internet üzerinde barındırabileceğiniz ve diğer kişilerle paylaşabileceğiniz **bulut tabanlı bir platform**dur. İş birliği ve proje yönetimi için kullanılır.
  - **Neden önemli?**  
    Git, projelerde geri dönülebilirlik sağlar. Ayrıca, farklı geliştiricilerin aynı proje üzerinde çalışmasını kolaylaştırır. GitHub ise uzak bir depoda projeleri saklamaya ve başkalarıyla paylaşmaya olanak tanır.

---

## 2. Git Kurulumu ve İlk Yapılandırma

- **Git’in Kurulumu:**
  - **Windows:**
    - Git’in resmi sitesi olan [git-scm.com](https://git-scm.com) adresinden Git’i indirin ve Git Bash'i kurun.
  - **MacOS:**
    - Homebrew paket yöneticisini kullanarak terminalde şu komutu çalıştırın:
      ```bash
      brew install git
      ```
  - **Linux (Debian/Ubuntu):**
    - Aşağıdaki komut ile Git’i terminal üzerinden kurun:
      ```bash
      sudo apt-get install git
      ```

- **İlk Yapılandırma:**
  - **Kurulumu doğrulama:**  
    Git’in doğru şekilde kurulduğundan emin olmak için şu komutu çalıştırın:
    ```bash
    git --version
    ```
    Eğer bir sürüm numarası alıyorsanız, Git başarıyla kurulmuş demektir.

  - **Kullanıcı adı ve e-posta ayarları:**
    Git, her commit’in kim tarafından yapıldığını kaydeder. Bu yüzden kullanıcı adı ve e-posta ayarı yapılmalıdır:
    ```bash
    git config --global user.name "Adınız"
    git config --global user.email "email@ornek.com"
    ```

---

## 3. Git Temelleri

- **Durum Kontrolü:**
  - `git clone` komutu, git sunucusunda bulunan projenizin bilgisayarınıza ilk kopylama işlemi için kullanılır. 
    ```bash
    git clone
    ```
- **Durum Kontrolü:**
  - `git status` komutu, projenizdeki mevcut durumu gösterir. Hangi dosyaların izlenmediğini veya hangi dosyalarda değişiklik olduğunu öğrenmek için kullanılır:
    ```bash
    git status
    ```

- **Değişikliklerin Kaydedilmesi (Staging ve Commit):**
  - Yeni veya değiştirilmiş bir dosyayı izlemek ve commit etmek için önce “staging” alanına eklenir:
    ```bash
    git add dosya.txt
    ```
  - Eklediğimiz dosyayı çıkartmak için
    ```
    git rm --cached dosya.txt
    ```
  - Dosya commit edilir, yani projedeki değişiklikler kaydedilir:
    ```bash
    git commit -m "İlk commit"
    ```
    - `-m "mesaj"` parametresi, commit için kısa bir açıklama eklemeye yarar. Bu mesaj, commit’in neyle ilgili olduğunu anlamaya yardımcı olur.

---



## 4. GitHub Kullanımı

- **GitHub Hesabı Oluşturma ve Depo Oluşturma:**
  - GitHub üzerinden yeni bir hesap oluşturun: [github.com](https://github.com)
  - GitHub’da yeni bir depo (repository) oluşturun ve URL’sini kopyalayın.

- **GitHub ile Yerel Depoyu Bağlama:**
  - GitHub deposunu yerel Git projenizle ilişkilendirmek için şu komut kullanılır:
    ```bash
    git remote add origin https://github.com/kullanici_adi/depo_adi.git
    ```
    `origin`, GitHub deposunu temsil eden isimdir.

  - **Projenizi GitHub’a gönderme (Push):**  
    İlk kez GitHub’a gönderirken şu komutu kullanın:
    ```bash
    git push -u origin master
    ```
    `-u` parametresi, yerel branch ile GitHub’daki branch’i bağlar.

  - **GitHub’dan bir projeyi klonlama:**  
    Başka bir projeyi GitHub’dan yerel bilgisayarınıza indirmek için:
    ```bash
    git clone https://github.com/kullanici_adi/depo_adi.git
    ```

  - **Güncellemeleri çekme (Pull):**
    GitHub’daki projede yapılan değişiklikleri yerel bilgisayarınıza çekmek için:
    ```bash
    git pull
    ```

---

## 5. GitHub İş Birliği ve Proje Yönetimi

- **Forklama ve Pull Request:**
  - Başka bir projeyi forklamak, o projeyi kendi hesabınıza kopyalar. Böylece istediğiniz değişiklikleri yapabilir ve proje sahibine pull request ile bu değişiklikleri sunabilirsiniz.
  - Bir repo forklanarak, üzerinde değişiklik yapılır. Sonra GitHub’da Pull Request (PR) açılır. Proje sahibi bu PR'yi inceleyip değişiklikleri kabul edebilir.

- **Pull Request Oluşturma:**
  1. GitHub’da repo sayfasına gidin.
  2. “Pull Request” butonuna tıklayın.
  3. Yaptığınız değişiklikleri açıklayan bir mesaj ekleyin ve “Create Pull Request” butonuna basın.

---