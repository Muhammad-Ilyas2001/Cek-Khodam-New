const form = document.getElementById('khodamForm');
const hasilKhodamDiv = document.getElementById('hasilKhodam');
const namaKhodamP = document.getElementById('namaKhodam');
const deskripsiKhodamP = document.getElementById('deskripsiKhodam');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const nama = formData.get('nama');
    const tanggalLahir = formData.get('tanggal_lahir');
    
    // Simulasi pencarian khodam berdasarkan data yang dimasukkan
    const randomKhodam = getRandomKhodam();
    
    // Tampilkan hasil pencarian
    namaKhodamP.textContent = `Nama Khodam: ${randomKhodam.nama}`;
    deskripsiKhodamP.textContent = `Deskripsi: ${randomKhodam.deskripsi}`;
    hasilKhodamDiv.classList.remove('hidden');
});

function getRandomKhodam() {
    const khodamList = [
        {
            nama: "Khodam Pelindung",
            deskripsi: "Khodam ini dikenal sebagai pelindung yang setia dan penuh energi positif."
        },
        {
            nama: "Khodam Intuisi",
            deskripsi: "Khodam ini membantu dalam meningkatkan intuisi dan kepekaan spiritual."
        },
        {
            nama: "Khodam Pembimbing Mimpi",
            deskripsi: "Khodam ini sering kali memberikan petunjuk dan inspirasi dalam mimpi."
        },
        {
            nama: "Khodam Pelindung dari Sihir",
            deskripsi: "Khodam ini memberikan perlindungan ekstra terhadap energi negatif dan sihir hitam."
        },
        {
            nama: "Khodam Cinta Lokal",
            deskripsi: "Khodam ini ahli dalam membantu mencari cinta lokal yang tepat."
        },
        {
            nama: "Khodam Sosial Media",
            deskripsi: "Khodam ini membantu dalam meningkatkan followers Anda."
        },
        {
            nama: "Khodam Pembawa Hoki",
            deskripsi : "Khodam ini membawa hoki dan keberuntungan dalam segala aspek."
        },
        {
            nama: "Khodam Pencari Wifi Gratis",
            deskripsi: "Khodam ini selalu tahu tempat-tempat di mana bisa mendapatkan wifi secara gratis."
        },
        {
            nama: "Khodam Si Kancil",
            deskripsi: "Khodam ini gesit dan cerdik."
        },
        {
            nama: "Khodam Elang Jawa",
            deskripsi: "Khodam ini memiliki penglihatan yang tajam dan tekad yang kuat."
        },
        {
            nama: "Khodam Sapi Santun",
            deskripsi: "Khodam ini tenang dan penuh kesabaran."
        },
        {
            nama: "Khodam Bebek Selamatan",
            deskripsi: "Khodam ini ceria dan bahagia."
        },
        {
            nama: "Khodam Pocong Kocak",
            deskripsi: "Khodam ini suka membuat lelucon dan memberikan keberuntungan."
        },
        {
            nama: "Khodam Tuyul Manis",
            deskripsi: "Khodam ini lucu dan membantu mencari rezeki."
        },
        {
            namaKhodamP: "Khodam Sundel Bolong Ceria",
            deskripsi: "Khodam ini ramah dan selalu membawa keceriaan."
        },
        {
            nama: "Khodam Kaki Kuntilanak",
            deskripsi: "Khodam ini penuh perhatian dan menjaga keamanan."
        },
        {
            nama: "Khodam Genderuwo Pemberani",
            deskripsi: "Khodam ini memiliki keberanian yang luar biasa."
        },
        {
            nama: "Khodam Pocong Gokil",
            deskripsi: "Khodam ini humoris dan cerdas."
        },
        {
            nama: "Khodam Hantu Jepang",
            deskripsi: "Khodam ini memiliki pengetahuan yang luas."
        },
        {
            nama: "Khodam Burung Warna-Warni",
            deskripsi: "Khodam ini indah dan bersemangat."
        },
        {
            nama: "Khodam Komodo Pulau",
            deskripsi: "Khodam ini kuat dan pemberani."
        },
        {
            nama: "Khodam Gajah Baik Hati",
            deskripsi: "Khodam ini penuh belas kasih dan berbudi luhur."
        },
        {
            nama: "Khodam Cacing Tanah",
            deskripsi: "Khodam ini ceria dan berebergi."
        },
        {
            nama: "Khodam Kura-Kura Ninja",
            deskripsi: "Khodam ini bijaksana dan sabar."
        },
        {
            nama: "Khodam Jalak Pondoh",
            deskripsi: "Khodam ini ramah dan cerdas."
        },
    ];

    const randomIndex = Math.floor(Math.random() * khodamList.length);
    return khodamList[randomIndex];
}
