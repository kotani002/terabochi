<!DOCTYPE html>
<html lang="ja">
<?php
// 入力データを取得&バリデーション
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$name_furigana = htmlspecialchars($_POST['name_furigana'], ENT_QUOTES, 'UTF-8');
$tel = htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8');
$timezone = htmlspecialchars($_POST['timezone'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8');
//メールアドレス内に不要な改行があった場合それを消す
$email = str_replace(array("\r", "\n"), '', $_POST['email']);
// メール内容
$to = 'terabochi@terabochi.com';  // 送信先メールアドレス
$body = "お名前: $name\nフリガナ: $name_furigana\nメールアドレス: $email\n電話番号:$tel\n連絡希望時間:$timezone\nお問い合わせ内容:\n$message";
// ヘッダー（送信元メールアドレスなど）
$headers = "From: " . $email;
?>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=yes, maximum-scale=1.0, minimum-scale=1.0">
  <meta name="description" content="寺墓地.COM(ドットコム) - 新星会合同会社のサイトです">
  <title>寺墓地.COM(ドットコム)</title>
  <link rel="stylesheet" href="../style.css" />
</head>

<body>
  <!--固定ヘッダー部分の作成-->
  <header>
    <div class="header_inner_logo">
      <!--タイトルロゴの位置-->
      <div class="titlerogo-box">
        <a href="../index.html"><img src="../images/top/top_titlerogo2.svg" alt="タイトルロゴ"
            class="header_title_logo"></a>
      </div>
      <div class="tel-box">
        <a href="../info/index.html"><img src="../images/top/top_tel1.svg" alt="お問い合わせ資料はこちらまで"
            class="tel-box-top"></a>
        <a href="tel:0120-686-684"><img src="../images/top/top_tel2.svg" alt="電話番号:0120-686-684"
            class="tel-box-bottom"></a>
      </div>
    </div>
    <!--固定ヘッダー内のメニューボタン-->
    <div class="header_inner_menu">
      <a href="../search/index.html"><img src="../images/top/UI_top_search.svg" alt="寺墓地を探す"
          class="UI_top_funeral"></a>
      <a href="../eidaikuyou/index.html"><img src="../images/top/UI_top_eidaikuyou.svg" alt="永代供養墓"
          class="UI_top_funeral"></a>
      <a href="../funeralservice/index.html"><img src="../images/top/UI_top_funeral.svg" alt="葬儀"
          class="UI_top_funeral"></a>
      <a href="../moving/index.html"><img src="../images/top/UI_top_moving.svg" alt="お墓の引っ越し"
          class="UI_top_funeral"></a>
      <a href="../tombstone/index.html"><img src="../images/top/UI_top_tombstone.svg" alt="墓石"
          class="UI_top_funeral"></a>
    </div>
  </header>

  <!--コンテンツ部分-->
  <!-- ここにトップページの本文を追加していく-->
  <main>
    <div class="top_main_box">
      <!-- お問い合わせフォーム -->
      <div class="info_main_inner_box">
        <h2>
          <div class="info_main_inner_header_text">メール内容確認</div>
        </h2>
        <!-- お問い合わせ内容のインプット -->
        <div class="from">
          <!--メール送信用フォーム-->
          <form method="POST" action="mail.php">
            <div class="from-Item">
              <p class="from-Item-Label">ご相談内容</p>
              <div class="from-Item-element"><?php echo $subject; ?></div>
              <p class="from-Item-Label"><span class="from-Item-Label-Required">必須</span>お名前</p>
              <div class="from-Item-element"><?php echo $name; ?></div>
              <p class="from-Item-Label"><span class="from-Item-Label-Required">必須</span>フリガナ</p>
              <div class="from-Item-element"><?php echo $name_furigana; ?></div>
              <p class="from-Item-Label"><span class="from-Item-Label-Required">必須</span>ご連絡先電話番号</p>
              <div class="from-Item-element"><?php echo $tel; ?></div>
              <p class="from-Item-Label">メールアドレス</p>
              <div class="from-Item-element"><?php echo $email; ?></div>
              <p class="from-Item-Label">ご連絡希望時間帯</p>
              <div class="from-Item-element" name="timezone"><?php echo $timezone; ?></div>
              <p class="from-Item-Label isMsg">お問い合わせ内容</p>
              <div class="from-Item-element" id="message" name="message"><?php echo $message; ?></div>
            </div>
            <!-- hiddenで値を次の画面に渡す -->
            <input type="hidden" name="subject" value="<?= $subject ?>">
            <input type="hidden" name="name" value="<?= $name ?>">
            <input type="hidden" name="name_furigana" value="<?= $name_furigana ?>">
            <input type="hidden" name="tel" value="<?= $tel ?>">
            <input type="hidden" name="email" value="<?= $email ?>">
            <input type="hidden" name="timezone" value="<?= $timezone ?>">
            <input type="hidden" name="message" value="<?= $message ?>">
            <div class="from-Item-button">
              <input type="submit" class="from-Btn" value="メールを送信する">
              <button type="button" class="from-Btn back" onclick="history.back()">戻る</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <style>
      .back{
        background-color:rgb(174, 67, 78);
      }
    </style>

    <!--フッター情報欄-->
    <footer class="footer">
      <div class="footer_banner">
        <a href="https://www.tojyuin.com/"><img src="../images/footer/bn_01.jpg" alt="東樹院"
            class="footer_banner_image"></a>
        <a href="http://www.project-x.co.jp/320003/index.shtml"><img src="../images/footer/bn_02.jpg" alt="昭和セレモニー"
            class="footer_banner_image"></a>
        <a href="https://little-emperor.weebly.com/"><img src="../images/footer/bn_03.png" alt="小皇帝合同会社"
            class="footer_banner_image"></a>
      </div>
      <div class="footer_text">
        <p>Copyright © 2015 新星会合同会社 All Rights Reserved designed</p>
      </div>
    </footer>
  </main>

</html>