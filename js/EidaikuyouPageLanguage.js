/*各ページの切り替えたい画像類 */
/*ここはページごとにjsを作る予定 */
var SelectLanguage = "ja";

const translations = {
    /*日本語のローカライズ用データ */
    ja: {
        /*共通ヘッダー*/
        header_title_logo_image: "../images/top/top_titlerogo2.svg",
        tel_box_top_image: "../images/top/top_tel1.svg",
        menu_search: "../images/top/UI_top_search.svg",
        menu_eidaikuyou: "../images/top/push/UI_top_eidaikuyou_push.svg",
        menu_funeral: "../images/top/UI_top_funeral.svg",
        menu_moving: "../images/top/UI_top_moving.svg",
        menu_tombstone: "../images/top/UI_top_tombstone.svg",
        /*共通フッダー*/
        copyright: "Copyright © 2025 新星会合同会社 All Rights Reserved designed",

        /*ボディ内容のデータ*/
        UI_3dmodel_button: "../images/tombstone/UI_3dmodel_button.svg",
        eidaikuyou_explanation_headline_text:"永代供養墓とは",
        eidaikuyou_explanation_text: "お墓参りできない人に代わって、あるいはお墓参りしてくれる人がいなくても、代わりにお寺が責任を持って永代にわたって供養と管理をしてもらえるお墓です。永代供養墓は「えいだいくようばか」あるいは「えいたいくようぼ」と呼ばれています。",
        eidaikuyou_explanation_headline_bottom_text: "費用",
        eidaikuyou_explanation_price_text: "個別供養：約90万～<br>合祀の場合：約10万<br>墓誌・彫刻：約10万</br>",

        eidaikuyou_image: "../images/eidaikuyu/image_permanent_all.svg",
        inquiry_image:"../images/common/UI_inquiry.svg",
    },
    /*英語のローカライズ用データ*/
    en: {
        /*共通ヘッダー*/
        header_title_logo_image: "../images/localize/en/top/rogo2_en.svg",
        tel_box_top_image: "../images/localize/en/top/image_tel_en.svg",
        menu_search: "../images/localize/en/top/UI_search_en.svg",
        menu_eidaikuyou: "../images/localize/en/top/UI_eidaikuyou_push_en.svg",
        menu_funeral: "../images/localize/en/top/UI_funeral_en.svg",
        menu_moving: "../images/localize/en/top/UI_moving_en.svg",
        menu_tombstone: "../images/localize/en/top/UI_tombstone_en.svg",
        /*共通フッダー*/
        copyright: "Copyright © 2025 Shinseikai LLC. All Rights Reserved",

        /*ボディ内容のデータ*/
        UI_3dmodel_button: "../images/localize/en/button/UI_3d_en.svg",
        eidaikuyou_explanation_headline_text:"What is a perpetual memorial grave?",
        eidaikuyou_explanation_text: "It’s a grave where the temple permanently cares and manages on behalf of those who cannot visit or have no one to visit.Perpetual memorial graves are called “eidai kuyō haka” or “eitai kuyō bo.”",
        eidaikuyou_explanation_headline_bottom_text: "Costs",
        eidaikuyou_explanation_price_text: "Individual memorial service: approx. 900,000 yen and up<br>Joint burial: approx. 100,000 yen<br>Grave inscription/carving: approx. 100,000 yen",
        
        eidaikuyou_image: "../images/localize/en/image_permanent_all_en.svg",
        inquiry_image:"../images/localize/en/button/UI_inquiry_en.svg",


    },
    /*中国語のローカライズ用データ*/
    zh: {
        /*共通ヘッダー*/
        header_title_logo_image: "../images/localize/zh/top/rogo2_zh.svg",
        tel_box_top_image: "../images/localize/zh/top/image_tel_zh.svg",
        menu_search: "../images/localize/zh/top/UI_search_zh.svg",
        menu_eidaikuyou: "../images/localize/zh/top/UI_eidaikuyou_push_zh.svg",
        menu_funeral: "../images/localize/zh/top/UI_funeral_zh.svg",
        menu_moving: "../images/localize/zh/top/UI_moving_zh.svg",
        menu_tombstone: "../images/localize/zh/top/UI_tombstone_zh.svg",
        /*共通フッダー*/
        copyright: "版权所有 © 2025 新星会有限责任公司。保留所有权利。",

        /*ボディ内容のデータ*/
        UI_3dmodel_button: "../images/localize/zh/button/UI_3d_zh.svg",
        eidaikuyou_explanation_headline_text:"什么是永代供养墓？",
        eidaikuyou_explanation_text: "这是寺庙代为永久供养和管理的墓地，适合无法扫墓或无人扫墓的人。永代供养墓被称为“えいだいくようばか”或“えいたいくようぼ”。",
        eidaikuyou_explanation_headline_bottom_text: "费用",
        eidaikuyou_explanation_price_text: "个人供养：约90万日元起<br>合祀情况：约10万日元<br>墓志铭及雕刻：约10万日元</br>",

        eidaikuyou_image: "../images/localize/zh/image_permanent_all_zh.svg",
        inquiry_image:"../images/localize/zh/button/UI_inquiry_zh.svg",


    }
};

/*ボタンが押された時に動作*/
/*ここは共通動作なので1つのjsにして呼び出す */
function changeLanguage(lang) {
    const t = translations[lang];

    /*もし言語が日本語以外なら注意書きの画像をトップに追加する*/


    /*引数で取得した言語に各ページの内容を切り替える*/
    /*共通ヘッダー*/
    const img = document.getElementById("header_title_logo_image");
    const info = document.getElementById("tel_box_top_image");
    const menu_search = document.getElementById("menu_search");
    const menu_eidaikuyou = document.getElementById("menu_eidaikuyou");
    const menu_funeral = document.getElementById("menu_funeral");
    const menu_moving = document.getElementById("menu_moving");
    const menu_tombstone = document.getElementById("menu_tombstone");
    img.src = t.header_title_logo_image;
    info.src = t.tel_box_top_image;
    menu_search.src = t.menu_search;
    menu_eidaikuyou.src = t.menu_eidaikuyou;
    menu_funeral.src = t.menu_funeral;
    menu_moving.src = t.menu_moving;
    menu_tombstone.src = t.menu_tombstone;
    document.getElementById("copyright").innerHTML = t.copyright;

    /*ボディ内容変更*/
    const inquiry_image = document.getElementById("inquiry_image");
    const UI_3dmodel_button = document.getElementById("UI_3dmodel_button");
    const eidaikuyou_image = document.getElementById("eidaikuyou_image");

    inquiry_image.src = t.inquiry_image;
    UI_3dmodel_button.src = t.UI_3dmodel_button;
    eidaikuyou_image.src = t.eidaikuyou_image;

    document.getElementById("eidaikuyou_explanation_headline_text").innerHTML = t.eidaikuyou_explanation_headline_text;
    document.getElementById("eidaikuyou_explanation_text").innerHTML = t.eidaikuyou_explanation_text;
    document.getElementById("eidaikuyou_explanation_headline_bottom_text").innerHTML = t.eidaikuyou_explanation_headline_bottom_text;
    document.getElementById("eidaikuyou_explanation_price_text").innerHTML = t.eidaikuyou_explanation_price_text;


    /*言語毎に使用フォントの切り替えのフォントに変換する */
    switch (lang) {
        //日本語、英語用フォントに変更
        case "en":
        case "jp":
            document.getElementById("top_main_box").style.fontFamily = 'sans-serif';
            return;
        //中文用にfontを変更
        case "zh":
            document.getElementById("top_main_box").style.fontFamily = 'Noto Sans SC';
            return;
    }

    value = String(lang);

    /*同じセッション中は言語を統一させたいのでセッションストレージにデータを保存 */
    sessionStorage.setItem('SelectLanguage', value);
}

/*ページを変更した時は一度この処理を呼び言語変更を有効化する*/
function LanguageCheck() {
    /*もしsessionStorageにSelectLanguageが入っていた場合、それを取得して言語を変える */
    var storageItem = sessionStorage.getItem('SelectLanguage');
    if (storageItem != null) {
        SelectLanguage = storageItem;
    }
    changeLanguage(SelectLanguage);
}
