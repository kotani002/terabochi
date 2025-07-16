/*各ページの切り替えたい画像類 */
/*ここはページごとにjsを作る予定 */
var SelectLanguage = "ja";

const translations = {
    /*日本語のローカライズ用データ */
    ja: {
        /*共通ヘッダー*/
        header_title_logo_image: "../images/top/top_titlerogo2.svg",
        tel_box_top_image: "../images/top/top_tel1.svg",
        menu_search: "../images/top/push/UI_top_search_push.svg",
        menu_eidaikuyou: "../images/top/UI_top_eidaikuyou.svg",
        menu_funeral: "../images/top/UI_top_funeral.svg",
        menu_moving: "../images/top/UI_top_moving.svg",
        menu_tombstone: "../images/top/UI_top_tombstone.svg",
        /*共通フッダー*/
        copyright: "Copyright © 2025 新星会合同会社 All Rights Reserved designed",

        /*ボディ内容のデータ*/
        profile_name:"覺證寺",
        profile_name_furigana:"〈かくしょうじ〉",
        profile_tag1:"真宗 高田派",
        profile_tag2:"室内墓",
        profile_tag3:"納骨堂",
        profile_description:"昭和22年に開創<br>品川区戸越にある真宗高田派寺院",
        profile_description_small:"覺證寺は、都内では希少な真宗高田派に属し、成覺山と号します。戦災により日暮里から品川区荏原に移転、さらに現在の地に移りました。室内墓地を設けており、風雨にさらされる事なく、お参りが可能です。納骨堂もございます。",
        info_button:"../images/common/UI_form_short.svg",
        profile_location:"<strong>所在地：</strong> 品川区戸越6-2-3",

    },
    /*英語のローカライズ用データ*/
    en: {
        /*共通ヘッダー*/
        header_title_logo_image: "../images/localize/en/top/rogo2_en.svg",
        tel_box_top_image: "../images/localize/en/top/image_tel_en.svg",
        menu_search: "../images/localize/en/top/UI_search_push_en.svg",
        menu_eidaikuyou: "../images/localize/en/top/UI_eidaikuyou_en.svg",
        menu_funeral: "../images/localize/en/top/UI_funeral_en.svg",
        menu_moving: "../images/localize/en/top/UI_moving_en.svg",
        menu_tombstone: "../images/localize/en/top/UI_tombstone_en.svg",
        /*共通フッダー*/
        copyright: "Copyright © 2025 Shinseikai LLC. All Rights Reserved",

        /*ボディ内容のデータ*/
        profile_name:"Kakusho-ji",
        profile_name_furigana:"〈kakusyouji〉",
        profile_tag1:"Takada Sect",
        profile_tag2:"Indoor Grave",
        profile_tag3:"Columbarium",
        profile_description:"Founded in 1947 A Jodo Shinshu Takada sect temple in Togoshi, Shinagawa Ward.",
        profile_description_small:"Kakushoji Temple belongs to the rare Jodo Shinshu Takada sect in Tokyo and is named Seikaku-san. Due to war damage, it moved from Nippori to Ebara in Shinagawa Ward, then to its current location. It has an indoor cemetery allowing visits without exposure to weather, and also offers a columbarium.",
        info_button:"../images/localize/en/button/UI_form_short_en.svg",
        profile_location:"<strong>Location：</strong> 6-2-3 Togoshi, Shinagawa-ku, Tokyo, Japan",
    },
    /*中国語のローカライズ用データ*/
    zh: {
        /*共通ヘッダー*/
        header_title_logo_image: "../images/localize/zh/top/rogo2_zh.svg",
        tel_box_top_image: "../images/localize/zh/top/image_tel_zh.svg",
        menu_search: "../images/localize/zh/top/UI_search_push_zh.svg",
        menu_eidaikuyou: "../images/localize/zh/top/UI_eidaikuyou_zh.svg",
        menu_funeral: "../images/localize/zh/top/UI_funeral_zh.svg",
        menu_moving: "../images/localize/zh/top/UI_moving_zh.svg",
        menu_tombstone: "../images/localize/zh/top/UI_tombstone_zh.svg",
        /*共通フッダー*/
        copyright: "版权所有 © 2025 新星会有限责任公司。保留所有权利。",

        /*ボディ内容のデータ*/
        profile_name:"觉证寺",
        profile_name_furigana:"〈かくしょうじ〉",
        profile_tag1:"真宗 高田派",
        profile_tag2:"室内墓",
        profile_tag3:"骨灰堂",
        profile_description:"建于1947年 位于品川区户越的真宗高田派寺院。",
        profile_description_small:"觉证寺属于东京罕见的真宗高田派，号称成觉山。因战灾从日暮里迁至品川区荏原，后来又迁至现址。设有室内墓地，无需冒风雨即可参拜，并设有骨灰堂。",
        info_button:"../images/localize/zh/button/UI_form_short_zh.svg",
        profile_location:"<strong>所在地：</strong> 日本东京都品川区户越6-2-3",

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
    document.getElementById("profile_name").innerHTML = t.profile_name;
    document.getElementById("profile_name_furigana").innerHTML = t.profile_name_furigana;
    document.getElementById("profile_tag1").innerHTML = t.profile_tag1;
    document.getElementById("profile_tag2").innerHTML = t.profile_tag2;
    document.getElementById("profile_tag3").innerHTML = t.profile_tag3;
    document.getElementById("profile_description").innerHTML = t.profile_description;
    document.getElementById("profile_description_small").innerHTML = t.profile_description_small;
    document.getElementById("profile_location").innerHTML = t.profile_location;

    const info_button = document.getElementById("info_button");
    info_button.src = t.info_button;


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
