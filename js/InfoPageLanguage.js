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
        menu_tombstone: "../images/top/UI_top_tombstone.svg",
        /*共通フッダー*/
        copyright: "Copyright © 2025 新星会合同会社 All Rights Reserved designed",

        /*ボディ内容のデータ*/
        info_title_text: "お問い合わせフォーム",
        message_title_text: "ご相談内容",
        message_title: "例）墓石の価格について",
        message_name: "お名前",
        name: "例）山田太郎",
        message_name_furigana: "フリガナ",
        name_furigana: "例）ヤマダタロウ",
        message_tel: "ご連絡先電話番号",
        tel: "例）123-4567-7890",
        message_email: "メールアドレス",
        email: "test@gmail.com",
        message_timezone: "ご連絡希望時間帯",
        timezone: "例）10時から19時",
        message_inner: "お問い合わせ内容",
        message: "",
        from_Btn: "入力内容の確認",
        must: "必須",
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
        menu_tombstone: "../images/localize/en/top/UI_tombstone_en.svg",
        /*共通フッダー*/
        copyright: "Copyright © 2025 Shinseikai LLC. All Rights Reserved",

        /*ボディ内容のデータ*/
        info_title_text: "Contact Us",
        message_title_text: "Details of Your Inquiry",
        message_title: "Example: About the Price of Gravestones",
        message_name: "Name",
        name: "Example: Taro Yamada",
        message_name_furigana: "Pronunciation Guide",
        name_furigana: "Example: YAMADA TARO",
        message_tel: "Contact Phone Number",
        tel: "例）123-4567-7890",
        message_email: "Email Address",
        email: "test@gmail.com",
        message_timezone: "Preferred Contact Time",
        timezone: "Example: 10:00 AM to 7:00 PM",
        message_inner: "Inquiry Message",
        message: "",
        from_Btn: "Review Your Input",
        must: "Required",
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
        menu_tombstone: "../images/localize/zh/top/UI_tombstone_zh.svg",
        /*共通フッダー*/
        copyright: "版权所有 © 2025 新星会有限责任公司。保留所有权利。",

        /*ボディ内容のデータ*/
        info_title_text: "联系我们",
        message_title_text: "问题详情",
        message_title: "例）关于墓碑价格",
        message_name: "姓名",
        name: "例）关于墓碑价格",
        message_name_furigana: "假名注音",
        name_furigana: "例）ヤマダタロウ",
        message_tel: "联系电话号码",
        tel: "例）123-4567-7890",
        message_email: "电子邮箱地址",
        email: "test@gmail.com",
        message_timezone: "希望联系时间段",
        timezone: "例）上午10点到下午7点",
        message_inner: "咨询内容",
        message: "",
        from_Btn: "确认输入内容",
        must: "必填",
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


    /*ボディ内容のデータ*/
    document.getElementById("info_title_text").innerText = t.info_title_text;
    document.getElementById("message_title_text").innerText = t.message_title_text;
    document.getElementById("message_title").placeholder = t.message_title;

    //中身を一度空に変更
    document.getElementById("message_name").innerHTML = "";

    //必須の文字をspanで囲んだ後に文言に追加
    const spans = document.createElement("span");
    //spanタグで囲いたいテキストの追加
    spans.textContent = t.must;
    //適用したいcssクラスの付与
    spans.classList.add("from-Item-Label-Required");
    //適用させたい要素の子供に作ったspanの追加
    document.getElementById("message_name").appendChild(spans);
    //必須タグの後ろに追加したタグの追加
    document.getElementById("message_name").innerHTML += t.message_name;

    document.getElementById("name").placeholder = t.name;

    document.getElementById("message_name_furigana").innerHTML = "";
    document.getElementById("message_name_furigana").appendChild(spans);
    document.getElementById("message_name_furigana").innerHTML += t.message_name_furigana;

    document.getElementById("message_tel").innerHTML = "";
    document.getElementById("message_tel").appendChild(spans);
    document.getElementById("message_tel").innerHTML += t.message_tel;
    document.getElementById("tel").placeholder = t.tel;
    document.getElementById("message_email").innerHTML = t.message_email;
    document.getElementById("email").placeholder = t.email;
    document.getElementById("message_timezone").innerHTML = t.message_timezone;
    document.getElementById("timezone").placeholder = t.timezone;
    document.getElementById("message_inner").innerHTML = t.message_inner;
    document.getElementById("message").placeholder = t.message;
    document.getElementById("from_Btn").value = t.from_Btn;


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
