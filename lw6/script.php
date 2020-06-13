<?php
    function getPost($name, $email, $subject, $messenge, $filename)
    {
        $name = $_POST['name'] ?? null;
        $email = $_POST['email'] ?? null;
        $subject = $_POST['subject'] ?? null;
        $messenge = $_POST['messenge'] ?? null;
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
    }

    getPost($name, $email, $subject, $messenge, $filename);