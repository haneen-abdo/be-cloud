const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// جعل مجلد "public" متاح كملفات ثابتة
app.use(express.static(path.join(__dirname, "public")));


// عند الدخول على الرابط الأساسي، نعرض ملف index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// تشغيل السيرفر
app.listen(port, () => {
    console.log(`السيرفر يعمل على http://localhost:${port}`);
});