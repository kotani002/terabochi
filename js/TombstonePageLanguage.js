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
        menu_eidaikuyou: "../images/top/UI_top_eidaikuyou.svg",
        menu_funeral: "../images/top/UI_top_funeral.svg",
        menu_moving: "../images/top/UI_top_moving.svg",
        menu_tombstone: "../images/top/push/UI_top_tombstone_push.svg",
        /*共通フッダー*/
        copyright: "Copyright © 2025 新星会合同会社 All Rights Reserved designed",

        /*ボディ内容のデータ*/
        inquiry_image:"../images/common/UI_inquiry.svg",
        UI_3dmodel_button: "../images/tombstone/UI_3dmodel_button.svg",

        stone_title_text:"墓石の種類",
        japanese_stone_title:"和型墓石",
        japanese_stone_description:"伝統的で格式を重んじる雰囲気の墓石<br>縦に高い三段構造(竿石・上石・下台)です。<br>",
        western_stone_title:"洋型墓石",
        western_stone_description:"モダンで自由な雰囲気をした墓石<br>横長で、直方体や曲線を使うデザインも多いです。",
    },
    /*英語のローカライズ用データ*/
    en: {
        /*共通ヘッダー*/
        header_title_logo_image: "../images/localize/en/top/rogo2_en.svg",
        tel_box_top_image: "../images/localize/en/top/image_tel_en.svg",
        menu_search: "../images/localize/en/top/UI_search_en.svg",
        menu_eidaikuyou: "../images/localize/en/top/UI_eidaikuyou_en.svg",
        menu_funeral: "../images/localize/en/top/UI_funeral_en.svg",
        menu_moving: "../images/localize/en/top/UI_moving_en.svg",
        menu_tombstone: "../images/localize/en/top/UI_tombstone_push_en.svg",
        /*共通フッダー*/
        copyright: "Copyright © 2025 Shinseikai LLC. All Rights Reserved",

        /*ボディ内容のデータ*/
        inquiry_image:"../images/localize/en/button/UI_inquiry_en.svg",
        UI_3dmodel_button: "../images/localize/en/button/UI_3d_en.svg",

        stone_title_text:"Types of Gravestones",
        japanese_stone_title:"Japanese-style gravestone",
        japanese_stone_description:"A traditional, formal-style gravestone<br>A tall, three-tiered design (top, middle, base)<br>",
        western_stone_title:"Western-style gravestone",
        western_stone_description:"A modern and relaxed-style gravestone<br>Often horizontal, with rectangular or curved designs",
    },
    /*中国語のローカライズ用データ*/
    zh: {
        /*共通ヘッダー*/
        header_title_logo_image: "../images/localize/zh/top/rogo2_zh.svg",
        tel_box_top_image: "../images/localize/zh/top/image_tel_zh.svg",
        menu_search: "../images/localize/zh/top/UI_search_zh.svg",
        menu_eidaikuyou: "../images/localize/zh/top/UI_eidaikuyou_zh.svg",
        menu_funeral: "../images/localize/zh/top/UI_funeral_zh.svg",
        menu_moving: "../images/localize/zh/top/UI_moving_zh.svg",
        menu_tombstone: "../images/localize/zh/top/UI_tombstone_push_zh.svg",
        /*共通フッダー*/
        copyright: "版权所有 © 2025 新星会有限责任公司。保留所有权利。",

        /*ボディ内容のデータ*/
        inquiry_image:"../images/localize/zh/button/UI_inquiry_zh.svg",
        UI_3dmodel_button: "../images/localize/zh/button/UI_3d_zh.svg",

        stone_title_text:"墓碑的种类",
        japanese_stone_title:"和式墓碑",
        japanese_stone_description:"传统且讲究礼仪的墓碑<br>采用竿石、上石、下台的三层垂直结构<br>",
        western_stone_title:"洋式墓碑",
        western_stone_description:"现代且自由风格的墓碑<br>多为横向长形，常用直线或曲线设计",
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
    const UI_3dmodel_button = document.getElementById("UI_3dmodel_button");
    UI_3dmodel_button.src = t.UI_3dmodel_button;
    const inquiry_image = document.getElementById("inquiry_image");
    inquiry_image.src = t.inquiry_image;

    document.getElementById("stone_title_text").innerHTML = t.stone_title_text;
    document.getElementById("japanese_stone_title").innerHTML = t.japanese_stone_title;
    document.getElementById("japanese_stone_description").innerHTML = t.japanese_stone_description;
    document.getElementById("western_stone_title").innerHTML = t.western_stone_title;
    document.getElementById("western_stone_description").innerHTML = t.western_stone_description;
    value = String(lang);
    /*同じセッション中は言語を統一させたいのでセッションストレージにデータを保存 */
    sessionStorage.setItem('SelectLanguage', value);

    /*言語毎に使用フォントの切り替えのフォントに変換する */
    switch (lang) {
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
    if (storageItem != null) {
        SelectLanguage = storageItem;
    }
    changeLanguage(SelectLanguage);
}
