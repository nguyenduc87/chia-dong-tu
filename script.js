const verbs = [
  { masu: "たべます", kanji: "食べます", kanjiChoices: ["食", "飲", "見", "行"], ru: "たべる", te: "たべて", nai: "たべない", meaning: "ăn" },
  { masu: "のみます", kanji: "飲みます", kanjiChoices: ["飲", "食", "見", "行"], ru: "のむ", te: "のんで", nai: "のまない", meaning: "uống" },
  { masu: "いきます", kanji: "行きます", kanjiChoices: ["行", "来", "帰", "入"], ru: "いく", te: "いって", nai: "いかない", meaning: "đi" },
  { masu: "きます", kanji: "来ます", kanjiChoices: ["来", "行", "帰", "出"], ru: "くる", te: "きて", nai: "こない", meaning: "đến" },
  { masu: "かえります", kanji: "帰ります", kanjiChoices: ["帰", "行", "来", "入"], ru: "かえる", te: "かえって", nai: "かえらない", meaning: "về" },
  { masu: "みます", kanji: "見ます", kanjiChoices: ["見", "聞", "読", "書"], ru: "みる", te: "みて", nai: "みない", meaning: "xem" },
  { masu: "ききます", kanji: "聞きます", kanjiChoices: ["聞", "見", "話", "読"], ru: "きく", te: "きいて", nai: "きかない", meaning: "nghe, hỏi" },
  { masu: "はなします", kanji: "話します", kanjiChoices: ["話", "聞", "言", "見"], ru: "はなす", te: "はなして", nai: "はなさない", meaning: "nói" },
  { masu: "よみます", kanji: "読みます", kanjiChoices: ["読", "書", "見", "聞"], ru: "よむ", te: "よんで", nai: "よまない", meaning: "đọc" },
  { masu: "かきます", kanji: "書きます", kanjiChoices: ["書", "読", "見", "話"], ru: "かく", te: "かいて", nai: "かかない", meaning: "viết" },
  { masu: "かいます", kanji: "買います", kanjiChoices: ["買", "売", "作", "持"], ru: "かう", te: "かって", nai: "かわない", meaning: "mua" },
  { masu: "うります", kanji: "売ります", kanjiChoices: ["売", "買", "作", "送"], ru: "うる", te: "うって", nai: "うらない", meaning: "bán" },
  { masu: "あいます", kanji: "会います", kanjiChoices: ["会", "見", "話", "来"], ru: "あう", te: "あって", nai: "あわない", meaning: "gặp" },
  { masu: "つくります", kanji: "作ります", kanjiChoices: ["作", "使", "買", "持"], ru: "つくる", te: "つくって", nai: "つくらない", meaning: "làm, tạo" },
  { masu: "つかいます", kanji: "使います", kanjiChoices: ["使", "作", "持", "買"], ru: "つかう", te: "つかって", nai: "つかわない", meaning: "dùng" },
  { masu: "もらいます", kanji: "もらいます", kanjiChoices: ["貰", "あ", "受", "取"], ru: "もらう", te: "もらって", nai: "もらわない", meaning: "nhận" },
  { masu: "あげます", kanji: "あげます", kanjiChoices: ["上", "下", "出", "入"], ru: "あげる", te: "あげて", nai: "あげない", meaning: "cho" },
  { masu: "おくります", kanji: "送ります", kanjiChoices: ["送", "渡", "出", "持"], ru: "おくる", te: "おくって", nai: "おくらない", meaning: "gửi" },
  { masu: "かします", kanji: "貸します", kanjiChoices: ["貸", "借", "与", "送"], ru: "かす", te: "かして", nai: "かさない", meaning: "cho mượn" },
  { masu: "かります", kanji: "借ります", kanjiChoices: ["借", "貸", "取", "持"], ru: "かりる", te: "かりて", nai: "かりない", meaning: "mượn" },
  { masu: "ならいます", kanji: "習います", kanjiChoices: ["習", "学", "教", "知"], ru: "ならう", te: "ならって", nai: "ならわない", meaning: "học" },
  { masu: "おしえます", kanji: "教えます", kanjiChoices: ["教", "習", "話", "言"], ru: "おしえる", te: "おしえて", nai: "おしえない", meaning: "dạy" },
  { masu: "はたらきます", kanji: "働きます", kanjiChoices: ["働", "休", "作", "使"], ru: "はたらく", te: "はたらいて", nai: "はたらかない", meaning: "làm việc" },
  { masu: "やすみます", kanji: "休みます", kanjiChoices: ["休", "働", "止", "寝"], ru: "やすむ", te: "やすんで", nai: "やすまない", meaning: "nghỉ" },
  { masu: "すみます", kanji: "住みます", kanjiChoices: ["住", "行", "来", "入"], ru: "すむ", te: "すんで", nai: "すまない", meaning: "sống, ở" },
  { masu: "しります", kanji: "知ります", kanjiChoices: ["知", "分", "思", "習"], ru: "しる", te: "しって", nai: "しらない", meaning: "biết" },
  { masu: "おもいます", kanji: "思います", kanjiChoices: ["思", "知", "考", "分"], ru: "おもう", te: "おもって", nai: "おもわない", meaning: "nghĩ" },
  { masu: "わかります", kanji: "分かります", kanjiChoices: ["分", "知", "思", "習"], ru: "わかる", te: "わかって", nai: "わからない", meaning: "hiểu" },
  { masu: "あそびます", kanji: "遊びます", kanjiChoices: ["遊", "休", "行", "来"], ru: "あそぶ", te: "あそんで", nai: "あそばない", meaning: "chơi" },
  { masu: "およぎます", kanji: "泳ぎます", kanjiChoices: ["泳", "走", "遊", "入"], ru: "およぐ", te: "およいで", nai: "およがない", meaning: "bơi" },
  { masu: "のります", kanji: "乗ります", kanjiChoices: ["乗", "降", "入", "出"], ru: "のる", te: "のって", nai: "のらない", meaning: "lên (xe)" },
  { masu: "おります", kanji: "降ります", kanjiChoices: ["降", "乗", "出", "入"], ru: "おりる", te: "おりて", nai: "おりない", meaning: "xuống" },
  { masu: "はいります", kanji: "入ります", kanjiChoices: ["入", "出", "来", "行"], ru: "はいる", te: "はいって", nai: "はいらない", meaning: "vào" },
  { masu: "でます", kanji: "出ます", kanjiChoices: ["出", "入", "行", "来"], ru: "でる", te: "でて", nai: "でない", meaning: "ra" },
  { masu: "あけます", kanji: "開けます", kanjiChoices: ["開", "閉", "出", "入"], ru: "あける", te: "あけて", nai: "あけない", meaning: "mở" },
  { masu: "しめます", kanji: "閉めます", kanjiChoices: ["閉", "開", "止", "消"], ru: "しめる", te: "しめて", nai: "しめない", meaning: "đóng" },
  { masu: "けします", kanji: "消します", kanjiChoices: ["消", "付", "止", "開"], ru: "けす", te: "けして", nai: "けさない", meaning: "tắt, xóa" },
  { masu: "あらいます", kanji: "洗います", kanjiChoices: ["洗", "使", "持", "作"], ru: "あらう", te: "あらって", nai: "あらわない", meaning: "rửa" },
  { masu: "つかれます", kanji: "疲れます", kanjiChoices: ["疲", "休", "働", "寝"], ru: "つかれる", te: "つかれて", nai: "つかれない", meaning: "mệt" },
  { masu: "いそぎます", kanji: "急ぎます", kanjiChoices: ["急", "走", "待", "行"], ru: "いそぐ", te: "いそいで", nai: "いそがない", meaning: "vội" },
  { masu: "まちます", kanji: "待ちます", kanjiChoices: ["待", "行", "止", "来"], ru: "まつ", te: "まって", nai: "またない", meaning: "đợi" },
  { masu: "とまります", kanji: "止まります", kanjiChoices: ["止", "立", "入", "出"], ru: "とまる", te: "とまって", nai: "とまらない", meaning: "dừng, ở trọ" },
  { masu: "すわります", kanji: "座ります", kanjiChoices: ["座", "立", "休", "止"], ru: "すわる", te: "すわって", nai: "すわらない", meaning: "ngồi" },
  { masu: "たちます", kanji: "立ちます", kanjiChoices: ["立", "座", "止", "入"], ru: "たつ", te: "たって", nai: "たたない", meaning: "đứng" },
  { masu: "もちます", kanji: "持ちます", kanjiChoices: ["持", "取", "使", "買"], ru: "もつ", te: "もって", nai: "もたない", meaning: "cầm, mang" },
  { masu: "つきます", kanji: "着きます", kanjiChoices: ["着", "行", "来", "帰"], ru: "つく", te: "ついて", nai: "つかない", meaning: "đến nơi" },
  // ====== 44 TỪ BỔ SUNG ======
  { masu: "はしります", kanji: "走ります", kanjiChoices: ["走", "歩", "急", "行"], ru: "はしる", te: "はしって", nai: "はしらない", meaning: "chạy" },
  { masu: "あるきます", kanji: "歩きます", kanjiChoices: ["歩", "走", "行", "来"], ru: "あるく", te: "あるいて", nai: "あるかない", meaning: "đi bộ" },
  { masu: "とびます", kanji: "飛びます", kanjiChoices: ["飛", "走", "入", "出"], ru: "とぶ", te: "とんで", nai: "とばない", meaning: "bay, nhảy" },
  { masu: "ねます", kanji: "寝ます", kanjiChoices: ["寝", "起", "休", "座"], ru: "ねる", te: "ねて", nai: "ねない", meaning: "ngủ" },
  { masu: "おきます", kanji: "起きます", kanjiChoices: ["起", "寝", "立", "座"], ru: "おきる", te: "おきて", nai: "おきない", meaning: "thức dậy" },

  { masu: "あびます", kanji: "浴びます", kanjiChoices: ["浴", "洗", "入", "出"], ru: "あびる", te: "あびて", nai: "あびない", meaning: "tắm, dội" },
  { masu: "でんわします", kanji: "電話します", kanjiChoices: ["電", "話", "言", "聞"], ru: "でんわする", te: "でんわして", nai: "でんわしない", meaning: "gọi điện" },
  { masu: "コピーします", kanji: "コピーします", kanjiChoices: ["写", "作", "取", "持"], ru: "コピーする", te: "コピーして", nai: "コピーしない", meaning: "photo, sao chép" },
  { masu: "つけます", kanji: "付けます", kanjiChoices: ["付", "消", "開", "閉"], ru: "つける", te: "つけて", nai: "つけない", meaning: "bật, gắn" },
  { masu: "けんがくします", kanji: "見学します", kanjiChoices: ["見", "学", "行", "来"], ru: "けんがくする", te: "けんがくして", nai: "けんがくしない", meaning: "tham quan" },

  { masu: "りょこうします", kanji: "旅行します", kanjiChoices: ["旅", "行", "来", "帰"], ru: "りょこうする", te: "りょこうして", nai: "りょこうしない", meaning: "du lịch" },
  { masu: "れんしゅうします", kanji: "練習します", kanjiChoices: ["練", "習", "学", "教"], ru: "れんしゅうする", te: "れんしゅうして", nai: "れんしゅうしない", meaning: "luyện tập" },
  { masu: "そうじします", kanji: "掃除します", kanjiChoices: ["掃", "洗", "消", "片"], ru: "そうじする", te: "そうじして", nai: "そうじしない", meaning: "dọn dẹp" },
  { masu: "せんたくします", kanji: "洗濯します", kanjiChoices: ["洗", "掃", "使", "作"], ru: "せんたくする", te: "せんたくして", nai: "せんたくしない", meaning: "giặt đồ" },
  { masu: "うんてんします", kanji: "運転します", kanjiChoices: ["運", "走", "乗", "行"], ru: "うんてんする", te: "うんてんして", nai: "うんてんしない", meaning: "lái xe" },

  { masu: "はいけんします", kanji: "拝見します", kanjiChoices: ["見", "拝", "読", "聞"], ru: "はいけんする", te: "はいけんして", nai: "はいけんしない", meaning: "xem (khiêm nhường)" },
  { masu: "しゅっちょうします", kanji: "出張します", kanjiChoices: ["出", "行", "来", "帰"], ru: "しゅっちょうする", te: "しゅっちょうして", nai: "しゅっちょうしない", meaning: "đi công tác" },
  { masu: "けっこんします", kanji: "結婚します", kanjiChoices: ["結", "会", "住", "来"], ru: "けっこんする", te: "けっこんして", nai: "けっこんしない", meaning: "kết hôn" },
  { masu: "べんきょうします", kanji: "勉強します", kanjiChoices: ["勉", "学", "習", "教"], ru: "べんきょうする", te: "べんきょうして", nai: "べんきょうしない", meaning: "học tập" },
  { masu: "しごとします", kanji: "仕事します", kanjiChoices: ["仕", "働", "作", "使"], ru: "しごとする", te: "しごとして", nai: "しごとしない", meaning: "làm việc" },

  { masu: "やくそくします", kanji: "約束します", kanjiChoices: ["約", "待", "会", "来"], ru: "やくそくする", te: "やくそくして", nai: "やくそくしない", meaning: "hẹn, hứa" },
  { masu: "あんないします", kanji: "案内します", kanjiChoices: ["案", "行", "来", "見"], ru: "あんないする", te: "あんないして", nai: "あんないしない", meaning: "hướng dẫn" },
  { masu: "うけます", kanji: "受けます", kanjiChoices: ["受", "取", "借", "持"], ru: "うける", te: "うけて", nai: "うけない", meaning: "nhận (thi, phỏng vấn)" },
  { masu: "だします", kanji: "出します", kanjiChoices: ["出", "入", "送", "持"], ru: "だす", te: "だして", nai: "ださない", meaning: "nộp, gửi, lấy ra" },
  { masu: "つたえます", kanji: "伝えます", kanjiChoices: ["伝", "話", "言", "聞"], ru: "つたえる", te: "つたえて", nai: "つたえない", meaning: "truyền đạt" },

];


const tbody = document.getElementById("table-body");

verbs.forEach(v => {
  tbody.innerHTML += `
    <tr>
      <td>${v.masu}</td>

      <td class="kanji-cell">
        ${renderKanjiChoices(v)}
      </td>

      <td>${createButton(v.ru)}</td>
      <td>${createButton(v.te)}</td>
      <td>${createButton(v.nai)}</td>
      <td>${createButton(v.meaning)}</td>
    </tr>
  `;
});

function renderKanjiChoices(v) {
  return `
    <div class="kanji-options">
      ${v.kanjiChoices.map(k =>
    `<button class="kanji-btn" onclick="showKanji(this, '${v.kanji}')">${k}</button>`
  ).join("")}
    </div>
  `;
}

function showKanji(button, kanjiText) {
  const cell = button.closest("td");
  cell.innerHTML = `<span class="kanji-text">${kanjiText}</span>`;
}

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


