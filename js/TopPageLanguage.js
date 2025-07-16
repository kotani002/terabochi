/*各ページの切り替えたい画像類 */
/*ここはページごとにjsを作る予定 */
var SelectLanguage = "ja";

const translations = {
    /*日本語のローカライズ用データ */
    ja: {
        header_title_logo_image: "images/top/top_titlerogo2.svg",
        tel_box_top_image: "images/top/top_tel1.svg",
        menu_search: "images/top/UI_top_search.svg",
        menu_eidaikuyou: "images/top/UI_top_eidaikuyou.svg",
        menu_funeral: "images/top/UI_top_funeral.svg",
        menu_moving: "images/top/UI_top_moving.svg",
        menu_tombstone: "images/top/UI_top_tombstone.svg",
        top_banner: "images/top/UI_funeral_process.svg",
        top_attention:"",

        latest_news: "―― 新着情報 ――",
        toukouin_2025_4_description: "東光院墓地及び永代供養墓<br>イベント中",
        toujyuin_2025_4_description: "東樹院墓地及び永代供養墓<br>イベント中",
        iouji_2025_4_description: "医王寺墓地及び永代供養墓<br>イベント中",
        enkoji_2025_4_description: "円光寺墓地<br>イベント中",
        toujyuin_2022_1_description: "東樹院<br>イベント中",
        iouji_2022_1_description: "医王寺<br>イベント中",
        copyright: "Copyright © 2025 新星会合同会社 All Rights Reserved designed",
    },
    /*英語のローカライズ用データ*/
    en: {
        header_title_logo_image: "images/localize/en/top/rogo2_en.svg",
        tel_box_top_image: "images/localize/en/top/image_tel_en.svg",
        menu_search: "images/localize/en/top/UI_search_en.svg",
        menu_eidaikuyou: "images/localize/en/top/UI_eidaikuyou_en.svg",
        menu_funeral: "images/localize/en/top/UI_funeral_en.svg",
        menu_moving: "images/localize/en/top/UI_moving_en.svg",
        menu_tombstone: "images/localize/en/top/UI_tombstone_en.svg",
        top_banner: "images/localize/en/button/UI_funeral_process_en.svg",
        top_attention:"images/localize/en/image_Cautionary_en.svg",

        latest_news: "―― Latest News ――",
        toukouin_2025_4_description: "Toko-in Cemetery and Perpetual Memorial Grave<br>Event in Progress",
        toujyuin_2025_4_description: "Toju-in Cemetery and Perpetual Memorial Grave<br>Event in Progress",
        iouji_2025_4_description: "Io-ji Cemetery and Perpetual Memorial Grave<br>Event in Progress",
        enkoji_2025_4_description: "Enko-ji Cemetery<br>Event in Progress",
        toujyuin_2022_1_description: "Toju-in Cemetery<br>Event in Progress",
        iouji_2022_1_description: "Io-ji Cemetery<br>Event in Progress",
        copyright: "Copyright © 2025 Shinseikai LLC. All Rights Reserved",
    },
    /*中国語のローカライズ用データ*/
    zh: {
        header_title_logo_image: "images/localize/zh/top/rogo2_zh.svg",
        tel_box_top_image: "images/localize/zh/top/image_tel_zh.svg",
        menu_search: "images/localize/zh/top/UI_search_zh.svg",
        menu_eidaikuyou: "images/localize/zh/top/UI_eidaikuyou_zh.svg",
        menu_funeral: "images/localize/zh/top/UI_funeral_zh.svg",
        menu_moving: "images/localize/zh/top/UI_moving_zh.svg",
        menu_tombstone: "images/localize/zh/top/UI_tombstone_zh.svg",
        top_banner: "images/localize/zh/button/UI_funeral_process_zh.svg",
        top_attention:"images/localize/zh/image_Cautionary_zh.svg",

        latest_news: "―― 最新消息 ――",
        toukouin_2025_4_description: "东光院墓地及永代供养墓 活动进行中",
        toujyuin_2025_4_description: "东树院墓地及永代供养墓 活动进行中",
        iouji_2025_4_description: "医王寺墓地及永代供养墓 活动进行中",
        enkoji_2025_4_description: "圆光寺墓地 活动进行中",
        toujyuin_2022_1_description: "东树院墓地 活动进行中",
        iouji_2022_1_description: "医王寺墓地 活动进行中",
        copyright: "版权所有 © 2025 新星会有限责任公司。保留所有权利。",
    }
};

/*ボタンが押された時に動作*/
/*ここは共通動作なので1つのjsにして呼び出す */
function changeLanguage(lang) {
    const t = translations[lang];

    /*もし言語が日本語以外なら注意書きの画像をトップに追加する*/
    

    /*引数で取得した言語に各ページの内容を切り替える*/
    const img = document.getElementById("header_title_logo_image");
    const info = document.getElementById("tel_box_top_image");
    const menu_search = document.getElementById("menu_search");
    const menu_eidaikuyou = document.getElementById("menu_eidaikuyou");
    const menu_funeral = document.getElementById("menu_funeral");
    const menu_moving = document.getElementById("menu_moving");
    const menu_tombstone = document.getElementById("menu_tombstone");
    const top_banner = document.getElementById("top_banner");
    const top_attention = document.getElementById("top_attention");

    document.getElementById("latest_news").innerHTML = t.latest_news;
    document.getElementById("toukouin_2025_4_description").innerHTML = t.toukouin_2025_4_description;
    document.getElementById("toujyuin_2025_4_description").innerHTML = t.toujyuin_2025_4_description;
    document.getElementById("iouji_2025_4_description").innerHTML = t.iouji_2025_4_description;
    document.getElementById("enkoji_2025_4_description").innerHTML = t.enkoji_2025_4_description;
    document.getElementById("toujyuin_2022_1_description").innerHTML = t.toujyuin_2025_4_description;
    document.getElementById("iouji_2022_1_description").innerHTML = t.iouji_2025_4_description;
    document.getElementById("copyright").innerHTML = t.copyright;
    const top_text = document.getElementById("top_text");

    img.src = t.header_title_logo_image;
    info.src = t.tel_box_top_image;
    menu_search.src = t.menu_search;
    menu_eidaikuyou.src = t.menu_eidaikuyou;
    menu_funeral.src = t.menu_funeral;
    menu_moving.src = t.menu_moving;
    menu_tombstone.src = t.menu_tombstone;
    top_banner.src = t.top_banner;
    top_attention.src = t.top_attention;

    if(lang == "ja")
    {
        top_attention.style.display = 'none'; // 要素を非表示にする
        top_text.style.display ='block';
    }else
    {
        top_attention.style.display = 'block'; // 要素を表示にする
        top_text.style.display = 'none';
    }

    value = String(lang);

    /*同じセッション中は言語を統一させたいのでセッションストレージにデータを保存 */
    sessionStorage.setItem('SelectLanguage',value);
    console.log(sessionStorage);

    /*言語毎に使用フォントの切り替えのフォントに変換する */
    switch(lang)
    {
        //日本語、英語用フォントに変更
        case "en":
        case "ja":
            document.getElementById("top_main_box").style.fontFamily = 'sans-serif';
            return;
        //中文用にfontを変更
        case "zh":
            document.getElementById("top_main_box").style.fontFamily = 'Noto Sans SC';
            return;
    }
}

/*ページを変更した時は一度この処理を呼び言語変更を有効化する*/
function LanguageCheck() {
    /*もしsessionStorageにSelectLanguageが入っていた場合、それを取得して言語を変える */
    var storageItem = sessionStorage.getItem('SelectLanguage');
    if(storageItem != null)
    {
        console.log(storageItem);
        SelectLanguage = storageItem;
    }
    changeLanguage(SelectLanguage);
}
