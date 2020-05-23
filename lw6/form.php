<?php
  function getPostParameter(string $text) : ?string
    {
      return isset($_POST[$text]) ? (string)$_POST[$text] : null;
    }

$name = getPOSTParameter('name');
$email = getPOSTParameter('email');
$subject = getPOSTParameter('subject');
$messenge = getPOSTParameter('messege');
$filename = 'data/'.$email.".txt";

if (file_exists($filename)) {
    echo "Пользователь с данной почтой существует.";
} else {
    if((isset($name) && $name !== '') && (isset($email) && $email !== ''))
    {
        $file = fopen('data/'.$email.".txt", "w");
        fwrite($file, $name.PHP_EOL);
        fwrite($file, $email.PHP_EOL);
        fwrite($file, $subject.PHP_EOL);
        fwrite($file, $messenge.PHP_EOL);
        fclose($file);
    } else {
        echo 'Не заполнены основные поля: Name, email';
    }

}