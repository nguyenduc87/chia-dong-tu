const verbs = [
    { masu: "たべます", kanji: "食べます", ru: "たべる", te: "たべて", nai: "たべない", meaning: "ăn" },
    { masu: "のみます", kanji: "飲みます", ru: "のむ", te: "のんで", nai: "のまない", meaning: "uống" },
    { masu: "いきます", kanji: "行きます", ru: "いく", te: "いって", nai: "いかない", meaning: "đi" },
    { masu: "きます", kanji: "来ます", ru: "くる", te: "きて", nai: "こない", meaning: "đến" },
    { masu: "かえります", kanji: "帰ります", ru: "かえる", te: "かえって", nai: "かえらない", meaning: "về" },
    { masu: "みます", kanji: "見ます", ru: "みる", te: "みて", nai: "みない", meaning: "xem" },
    { masu: "ききます", kanji: "聞きます", ru: "きく", te: "きいて", nai: "きかない", meaning: "nghe, hỏi" },
    { masu: "はなします", kanji: "話します", ru: "はなす", te: "はなして", nai: "はなさない", meaning: "nói" },
    { masu: "よみます", kanji: "読みます", ru: "よむ", te: "よんで", nai: "よまない", meaning: "đọc" },
    { masu: "かきます", kanji: "書きます", ru: "かく", te: "かいて", nai: "かかない", meaning: "viết" },

    { masu: "かいます", kanji: "買います", ru: "かう", te: "かって", nai: "かわない", meaning: "mua" },
    { masu: "うります", kanji: "売ります", ru: "うる", te: "うって", nai: "うらない", meaning: "bán" },
    { masu: "あいます", kanji: "会います", ru: "あう", te: "あって", nai: "あわない", meaning: "gặp" },
    { masu: "つくります", kanji: "作ります", ru: "つくる", te: "つくって", nai: "つくらない", meaning: "làm, tạo" },
    { masu: "つかいます", kanji: "使います", ru: "つかう", te: "つかって", nai: "つかわない", meaning: "dùng" },
    { masu: "もらいます", kanji: "もらいます", ru: "もらう", te: "もらって", nai: "もらわない", meaning: "nhận" },
    { masu: "あげます", kanji: "あげます", ru: "あげる", te: "あげて", nai: "あげない", meaning: "cho" },
    { masu: "おくります", kanji: "送ります", ru: "おくる", te: "おくって", nai: "おくらない", meaning: "gửi" },
    { masu: "かします", kanji: "貸します", ru: "かす", te: "かして", nai: "かさない", meaning: "cho mượn" },
    { masu: "かります", kanji: "借ります", ru: "かりる", te: "かりて", nai: "かりない", meaning: "mượn" },

    { masu: "ならいます", kanji: "習います", ru: "ならう", te: "ならって", nai: "ならわない", meaning: "học" },
    { masu: "おしえます", kanji: "教えます", ru: "おしえる", te: "おしえて", nai: "おしえない", meaning: "dạy" },
    { masu: "はたらきます", kanji: "働きます", ru: "はたらく", te: "はたらいて", nai: "はたらかない", meaning: "làm việc" },
    { masu: "やすみます", kanji: "休みます", ru: "やすむ", te: "やすんで", nai: "やすまない", meaning: "nghỉ" },
    { masu: "すみます", kanji: "住みます", ru: "すむ", te: "すんで", nai: "すまない", meaning: "sống, ở" },
    { masu: "しります", kanji: "知ります", ru: "しる", te: "しって", nai: "しらない", meaning: "biết" },
    { masu: "おもいます", kanji: "思います", ru: "おもう", te: "おもって", nai: "おもわない", meaning: "nghĩ" },
    { masu: "わかります", kanji: "分かります", ru: "わかる", te: "わかって", nai: "わからない", meaning: "hiểu" },
    { masu: "あります", kanji: "あります", ru: "ある", te: "あって", nai: "ない", meaning: "có (đồ vật)" },
    { masu: "います", kanji: "います", ru: "いる", te: "いて", nai: "いない", meaning: "có (người, động vật)" },

    { masu: "あそびます", kanji: "遊びます", ru: "あそぶ", te: "あそんで", nai: "あそばない", meaning: "chơi" },
    { masu: "およぎます", kanji: "泳ぎます", ru: "およぐ", te: "およいで", nai: "およがない", meaning: "bơi" },
    { masu: "のります", kanji: "乗ります", ru: "のる", te: "のって", nai: "のらない", meaning: "lên (xe)" },
    { masu: "おります", kanji: "降ります", ru: "おりる", te: "おりて", nai: "おりない", meaning: "xuống" },
    { masu: "はいります", kanji: "入ります", ru: "はいる", te: "はいって", nai: "はいらない", meaning: "vào" },
    { masu: "でます", kanji: "出ます", ru: "でる", te: "でて", nai: "でない", meaning: "ra" },
    { masu: "あけます", kanji: "開けます", ru: "あける", te: "あけて", nai: "あけない", meaning: "mở" },
    { masu: "しめます", kanji: "閉めます", ru: "しめる", te: "しめて", nai: "しめない", meaning: "đóng" },
    { masu: "けします", kanji: "消します", ru: "けす", te: "けして", nai: "けさない", meaning: "tắt, xóa" },
    { masu: "つけます", kanji: "つけます", ru: "つける", te: "つけて", nai: "つけない", meaning: "bật" },

    { masu: "あらいます", kanji: "洗います", ru: "あらう", te: "あらって", nai: "あらわない", meaning: "rửa" },
    { masu: "つかれます", kanji: "疲れます", ru: "つかれる", te: "つかれて", nai: "つかれない", meaning: "mệt" },
    { masu: "いそぎます", kanji: "急ぎます", ru: "いそぐ", te: "いそいで", nai: "いそがない", meaning: "vội" },
    { masu: "あぶない", kanji: "危ない", ru: "あぶない", te: "-", nai: "-", meaning: "nguy hiểm" },
    { masu: "まちます", kanji: "待ちます", ru: "まつ", te: "まって", nai: "またない", meaning: "đợi" },
    { masu: "とまります", kanji: "止まります", ru: "とまる", te: "とまって", nai: "とまらない", meaning: "dừng, ở trọ" },
    { masu: "すわります", kanji: "座ります", ru: "すわる", te: "すわって", nai: "すわらない", meaning: "ngồi" },
    { masu: "たちます", kanji: "立ちます", ru: "たつ", te: "たって", nai: "たたない", meaning: "đứng" },
    { masu: "もちます", kanji: "持ちます", ru: "もつ", te: "もって", nai: "もたない", meaning: "cầm, mang" },
    { masu: "つきます", kanji: "着きます", ru: "つく", te: "ついて", nai: "つかない", meaning: "đến nơi" }
];


const tbody = document.getElementById("table-body");

verbs.forEach(v => {
    tbody.innerHTML += `
    <tr>
      <td>${v.masu}</td>
      <td class="kanji">${v.kanji}</td>
      <td>${createButton(v.ru)}</td>
      <td>${createButton(v.te)}</td>
      <td>${createButton(v.nai)}</td>
      <td>${createButton(v.meaning)}</td>
    </tr>
  `;
});

function createButton(answer) {
    return `<button class="answer-btn" onclick="showText(this, '${answer}')">Xem</button>`;
}

function showText(button, text) {
    button.parentElement.innerHTML =
        `<span class="answer-text">${text}</span>`;
}

function showText(button, text) {
    const cell = button.parentElement;

    // thêm class để giãn cột
    cell.classList.add("expanded");

    // thay nút bằng text
    cell.innerHTML = `<span class="answer-text">${text}</span>`;
}

