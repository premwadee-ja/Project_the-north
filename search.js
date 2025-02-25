document.getElementById("search-btn").addEventListener("click", function () {
    let searchValue = document.getElementById("search-input").value.trim().toLowerCase();

    // รายชื่อจังหวัด และไฟล์ที่เชื่อมโยง
    const provinces = {
        "พิษณุโลก": "phitsanulok.html",
        "สุโขทัย": "sukhothai.html",
        "กำแพงเพชร": "kamphaengphet.html",
        "พิจิตร": "phichit.html",
        "ตาก": "tak.html",
        "นครสวรรค์": "nakhonsawan.html",
        "อุตรดิตถ์": "uttaradit.html", // แก้ไขสะกดผิดจาก "ีttaradit.html" เป็น "uttaradit.html"
        "เพชรบูรณ์": "phetchabun.html"
    };

    if (provinces[searchValue]) {
        window.location.href = provinces[searchValue];
    } else {
        alert("ไม่พบข้อมูลจังหวัดที่ค้นหา กรุณาลองใหม่");
    }
});
