// Global değişken - CSV verilerini saklayacağız
let csvData = {};

// CSV dosyasını yükleyip başlık bilgilerini okuyoruz
function loadCSV() {
    fetch('Notlar/data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").slice(1); // Başlık satırını atla
            rows.forEach(row => {
                const columns = row.split(",");
                // Satırın iki sütun içerdiğinden emin ol
                if (columns.length >= 2) {
                    const mdFile = columns[0].trim();
                    const title = columns[1].trim();
                    csvData[mdFile] = title; // Veriyi obje olarak sakla
                }
            });
            // CSV yüklendikten sonra varsayılan Markdown dosyasını (Duyurular) yükle
            loadMarkdown('Git-Github');
        })
        .catch(error => console.error("CSV yüklenirken hata oluştu:", error));
}

// Markdown dosyasını yüklerken başlık güncelleme
function loadMarkdown(file) {
    const title = csvData[file] || "Başlık bulunamadı";
    document.getElementById("csvTitle").textContent = title;

    // Mevcut zero-md öğesini kaldır ve yenisini oluştur
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ''; // İçeriği temizle
    const zeroMd = document.createElement("zero-md");
    zeroMd.setAttribute("src", `Notlar/${file}.md`);
    contentDiv.appendChild(zeroMd);
}

// Tema geçişi
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Sidebar açma/kapama işlemi
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const isOpen = sidebar.style.left === "0px";

    if (isOpen) {
        sidebar.style.left = "-200px";
        document.body.classList.remove("sidebar-open");
    } else {
        sidebar.style.left = "0px";
        document.body.classList.add("sidebar-open");
    }
}

// Sayfa yüklendiğinde CSV verilerini yükle
document.addEventListener("DOMContentLoaded", loadCSV);
