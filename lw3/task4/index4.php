<?php
    function getGetParameter(string $text):?string
    {
        return isset($_GET[$text]) ? (string)$_GET[$text] : null;
    }

    header("Content-Type: text/plain");

    $email = getGetParameter('email');
    $first_name = getGetParameter('first_name');
    $last_name = getGetParameter('last_name');
    $age = getGetParameter('age');
    $file = 'data/' . $email.".txt";
    function makeFile($email, $first_name, $last_name, $age) {
        if (isset($email) && $email !== '') {
            if (file_exists($file)) {
                unlink('data/' . $email.".txt");
            }
            $file = fopen('data/' . $email . '.txt', "w+");
            fwrite($file, 'email: ' . $email . PHP_EOL);
            fwrite($file, 'first_name: ' . $first_name . PHP_EOL);
            fwrite($file, 'last_name: ' . $last_name . PHP_EOL);
            fwrite($file, 'age: ' . $age . PHP_EOL);
            fclose($file);
        } else {
            echo 'Введите email';
        }
    }

    makeFile($email, $first_name, $last_name, $age);