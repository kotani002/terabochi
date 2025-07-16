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
        toujyuin_card_title_text: "東樹院",
        toujyuin_card_description_text: "川崎の七福神・毘沙門天を祀る寺院<br>ご先祖様を身近に感じる<br>「つながり」の空間があります。",
        toujyuin_card_address_text: "所在地： 神奈川県川崎市中原区宮内1-11-1<br>永代使用料： 80万円～",
        toujyuin_card_UI_check: "../images/common/UI_check.svg",

        kakusyouji_card_title_text: "覺證寺",
        kakusyouji_card_description_text: "昭和22年に開創<br>品川区戸越にある真宗高田派寺院。",
        kakusyouji_card_address_text: "所在地：東京都品川区戸越6-2-3<br>永代使用料： 150万円～",
        kakusyouji_card_UI_check: "../images/common/UI_check.svg",

        hourenji_card_title_text: "法蓮寺",
        hourenji_card_description_text: "品川区旗の台にある日蓮宗寺院、<br>東急大井町線・荏原町駅改札出て目の前。",
        hourenji_card_address_text: "所在地： 東京都品川区旗の台3-6-18<br>永代使用料： 60万円～",
        hourenji_card_UI_check: "../images/common/UI_check.svg",

        toukouin_card_title_text: "東光院",
        toukouin_card_description_text: "東急多摩川線・沼部駅より徒歩1分、<br>歌にもなった「桜坂」下の名刹。",
        toukouin_card_address_text: "所在地： 東京都大田区田園調布本町35-8<br>永代使用料： 120万円～",
        toukouin_card_UI_check: "../images/common/UI_check.svg",

        iouji_card_title_text: "医王寺",
        iouji_card_description_text: "世田谷区深沢の一等地に<br>佇む趣のある寺院墓所。",
        iouji_card_address_text: "所在地： 東京都世田谷区深沢6-14-2<br>永代使用料： 80万円～",
        iouji_card_UI_check: "../images/common/UI_check.svg",

        enkouji_card_title_text: "円光寺",
        enkouji_card_description_text: "世田谷区の静かな住宅地にある<br>自然豊かな緑に囲まれた墓地です。",
        enkouji_card_address_text: "所在地： 東京都世田谷区大蔵2丁目2-1<br>永代使用料： 170万円～",
        enkouji_card_UI_check: "../images/common/UI_check.svg",
        inquiry_image:"../images/common/UI_inquiry.svg",

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
        toujyuin_card_title_text: "Toju-in",
        toujyuin_card_description_text: "A temple in Kawasaki enshrining the Seven Lucky Gods and Bishamonten. A space where you can feel close to your ancestors and the bonds.",
        toujyuin_card_address_text: "Location： 1-11-1 Miyauchi, Nakahara-ku, Kawasaki-shi, Kanagawa, Japan<br>Perpetual usage fee： 800,000yen and up",
        toujyuin_card_UI_check: "../images/localize/en/button/UI_check_en.svg",

        kakusyouji_card_title_text: "Kakusho-ji",
        kakusyouji_card_description_text: "Founded in 1947 A Jodo Shinshu Takada sect temple in Togoshi, Shinagawa Ward.",
        kakusyouji_card_address_text: "Location： 6-2-3 Togoshi, Shinagawa-ku, Tokyo, Japan<br>Perpetual usage fee： 1,500,000yen and up",
        kakusyouji_card_UI_check: "../images/localize/en/button/UI_check_en.svg",

        hourenji_card_title_text: "Horenji",
        hourenji_card_description_text: "A Nichiren sect temple in Hatanodai, Shinagawa Ward. Right in front of Ebaramachi Station ticket gate on Tokyu Oimachi Line.",
        hourenji_card_address_text: "Location：  3-6-18 Hatanodai, Shinagawa-ku, Tokyo, Japan<br>Perpetual usage fee： 600,000yen and up",
        hourenji_card_UI_check: "../images/localize/en/button/UI_check_en.svg",

        toukouin_card_title_text: "Toko-in",
        toukouin_card_description_text: "A famous temple just a 1-minute walk from Numabe Station on the Tokyu Tamagawa Line, located beneath the “Sakurazaka” made famous in song.",
        toukouin_card_address_text: "Location：  35-8 Denenchofu-honcho, Ota-ku, Tokyo, Japan<br>Perpetual usage fee： 1,200,000yen and up",
        toukouin_card_UI_check: "../images/localize/en/button/UI_check_en.svg",

        iouji_card_title_text: "Io-ji",
        iouji_card_description_text: "A charming temple cemetery located in a prime area of Fukazawa, Setagaya Ward.",
        iouji_card_address_text: "Location：  6-14-2 Fukazawa, Setagaya-ku, Tokyo, Japan<br>Perpetual usage fee： 800,000yen and up",
        iouji_card_UI_check: "../images/localize/en/button/UI_check_en.svg",

        enkouji_card_title_text: "Enkouji",
        enkouji_card_description_text: "A cemetery surrounded by rich greenery in a quiet residential area of Setagaya Ward.",
        enkouji_card_address_text: "Location：  2-2-1 Okura, Setagaya-ku, Tokyo, Japan<br>Perpetual usage fee： 1,700,000yen and up",
        enkouji_card_UI_check: "../images/localize/en/button/UI_check_en.svg",
        inquiry_image:"../images/localize/en/button/UI_inquiry_en.svg",

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
        toujyuin_card_title_text: "东树院",
        toujyuin_card_description_text: "川崎供奉七福神和毘沙门天的寺庙，有一个让您感受与祖先紧密联系的空间。",
        toujyuin_card_address_text: "所在地： 日本神奈川县川崎市中原区宫内1-11-1<br>永久使用费： 80万日元起",
        toujyuin_card_UI_check: "../images/localize/zh/button/UI_check_zh.svg",

        kakusyouji_card_title_text: "觉证寺",
        kakusyouji_card_description_text: "建于1947年 位于品川区户越的真宗高田派寺院。",
        kakusyouji_card_address_text: "所在地：日本东京都品川区户越6-2-3<br>永久使用费： 150万日元起",
        kakusyouji_card_UI_check: "../images/localize/zh/button/UI_check_zh.svg",

        hourenji_card_title_text: "法莲寺",
        hourenji_card_description_text: "位于品川区旗之台的日莲宗寺院<br>东急大井町线荏原町站检票口正前方。",
        hourenji_card_address_text: "所在地： 日本东京都品川区旗之台3-6-18<br>永久使用费： 60万日元起",
        hourenji_card_UI_check: "../images/localize/zh/button/UI_check_zh.svg",

        toukouin_card_title_text: "东光院",
        toukouin_card_description_text: "距东急多摩川线沼部站步行1分钟<br>位于因歌曲闻名的“樱坂”下的名刹。",
        toukouin_card_address_text: "所在地： 日本东京都大田区田园调布本町35-8<br>永久使用费： 120万日元起",
        toukouin_card_UI_check: "../images/localize/zh/button/UI_check_zh.svg",

        iouji_card_title_text: "医王寺",
        iouji_card_description_text: "位于世田谷区、深泽一等地的风情寺院墓地。",
        iouji_card_address_text: "所在地： 日本东京都世田谷区深泽6-14-2<br>永久使用费： 80万日元起",
        iouji_card_UI_check: "../images/localize/zh/button/UI_check_zh.svg",

        enkouji_card_title_text: "圆光寺",
        enkouji_card_description_text: "位于世田谷区安静住宅区、四周环绕着丰富绿意的墓地。",
        enkouji_card_address_text: "所在地： 日本东京都世田谷区大藏2丁目2-1<br>永久使用费： 170万日元起",
        enkouji_card_UI_check: "../images/localize/zh/button/UI_check_zh.svg",
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
    document.getElementById("toujyuin_card_title_text").innerHTML = t.toujyuin_card_title_text;
    document.getElementById("toujyuin_card_description_text").innerHTML = t.toujyuin_card_description_text;
    document.getElementById("toujyuin_card_address_text").innerHTML = t.toujyuin_card_address_text;
    const toujyuin_card_UI_check = document.getElementById("toujyuin_card_UI_check");
    toujyuin_card_UI_check.src = t.toujyuin_card_UI_check;

    document.getElementById("kakusyouji_card_title_text").innerHTML = t.kakusyouji_card_title_text;
    document.getElementById("kakusyouji_card_description_text").innerHTML = t.kakusyouji_card_description_text;
    document.getElementById("kakusyouji_card_address_text").innerHTML = t.kakusyouji_card_address_text;
    const kakusyouji_card_UI_check = document.getElementById("kakusyouji_card_UI_check");
    kakusyouji_card_UI_check.src = t.kakusyouji_card_UI_check;

    document.getElementById("hourenji_card_title_text").innerHTML = t.hourenji_card_title_text;
    document.getElementById("hourenji_card_description_text").innerHTML = t.hourenji_card_description_text;
    document.getElementById("hourenji_card_address_text").innerHTML = t.hourenji_card_address_text;
    const hourenji_card_UI_check = document.getElementById("hourenji_card_UI_check");
    hourenji_card_UI_check.src = t.hourenji_card_UI_check;

    document.getElementById("toukouin_card_title_text").innerHTML = t.toukouin_card_title_text;
    document.getElementById("toukouin_card_description_text").innerHTML = t.toukouin_card_description_text;
    document.getElementById("toukouin_card_address_text").innerHTML = t.toukouin_card_address_text;
    const toukouin_card_UI_check = document.getElementById("toukouin_card_UI_check");
    toukouin_card_UI_check.src = t.toukouin_card_UI_check;

    document.getElementById("iouji_card_title_text").innerHTML = t.iouji_card_title_text;
    document.getElementById("iouji_card_description_text").innerHTML = t.iouji_card_description_text;
    document.getElementById("iouji_card_address_text").innerHTML = t.iouji_card_address_text;
    const iouji_card_UI_check = document.getElementById("iouji_card_UI_check");
    iouji_card_UI_check.src = t.iouji_card_UI_check;

    document.getElementById("enkouji_card_title_text").innerHTML = t.enkouji_card_title_text;
    document.getElementById("enkouji_card_description_text").innerHTML = t.enkouji_card_description_text;
    document.getElementById("enkouji_card_address_text").innerHTML = t.enkouji_card_address_text;
    const enkouji_card_UI_check = document.getElementById("enkouji_card_UI_check");
    enkouji_card_UI_check.src = t.enkouji_card_UI_check;

    const inquiry_image = document.getElementById("inquiry_image");
    inquiry_image.src = t.inquiry_image;
    value = String(lang);
    /*同じセッション中は言語を統一させたいのでセッションストレージにデータを保存 */
    sessionStorage.setItem('SelectLanguage', value);
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
    if (storageItem != null) {
        SelectLanguage = storageItem;
    }
    changeLanguage(SelectLanguage);
}
