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
        profile_name:"法蓮寺",
        profile_name_furigana:"〈ほうれんじ〉",
        profile_tag1:"日蓮宗",
        profile_tag2:"一般墓",
        profile_tag3:"永代供養墓",
        profile_description:"品川区旗の台にある日蓮宗寺院<br>東急大井町線・荏原町駅改札<br>出て目の前",
        profile_description_small:"法蓮寺は東急大井町線「荏原町駅」大井町方面の改札を出た目の前に建つ、アクセスに便利なお寺です。毎年10月の御会式には万灯や団扇太鼓を持った信者の参詣で賑わい、荏原七福神の恵比寿をお祀りする寺として、信仰を集めています。",
        info_button:"../images/common/UI_form_short.svg",
        profile_weblink_button:"法蓮寺　WEBページはこちら",
        profile_location:"<strong>所在地：</strong> 東京都品川区旗の台3-6-18",

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
        profile_name:"Horenji",
        profile_name_furigana:"〈horenji〉",
        profile_tag1:"Nichiren",
        profile_tag2:"Regular grave",
        profile_tag3:"Perpetual grave",
        profile_description:"A Nichiren sect temple in Hatanodai, Shinagawa Ward.Right in front of Ebaramachi Station ticket gate on Tokyu Oimachi Line.",
        profile_description_small:"Horenji Temple stands right in front of the Ebaramachi Station ticket gate (Tokyu Oimachi Line, Oimachi direction) with easy access. Every October, the temple is lively with worshippers carrying lanterns and drums for the annual Oeshiki festival. It is also known for enshrining Ebisu, one of the Seven Lucky Gods of Ebara, attracting many believers.",
        info_button:"../images/localize/en/button/UI_form_short_en.svg",
        profile_weblink_button:"Horenji　Visit our webpage here",
        profile_location:"<strong>Location：</strong> 3-6-18 Hatanodai, Shinagawa-ku, Tokyo, Japan",
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
        profile_name:"法莲寺",
        profile_name_furigana:"〈ほうれんじ〉",
        profile_tag1:"日莲宗",
        profile_tag2:"普通墓",
        profile_tag3:"永代墓",
        profile_description:"位于品川区旗之台的日莲宗寺院<br>东急大井町线荏原町站检票口正前方。",
        profile_description_small:"法莲寺坐落于东急大井町线荏原町站大井町方向检票口正前方，交通便利。每年十月的御会式期间，信徒们携带万灯和团扇太鼓前来参拜，寺内供奉荏原七福神之一的惠比寿，深受信众敬仰。",
        info_button:"../images/localize/zh/button/UI_form_short_zh.svg",
        profile_weblink_button:"法莲寺　访问网页",
        profile_location:"<strong>所在地：</strong> 日本东京都品川区旗之台3-6-18",

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
    document.getElementById("profile_weblink_button").innerHTML = t.profile_weblink_button;
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
        case "jp":
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
