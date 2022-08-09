<?php

    $language=strtolower($_POST['language']);
    $code=$_POST['code'];

    $random=substr(md5(mt_rand()),0,7);
    $filePath="temp/".$random.".".$language;
    $programeFile=fopen($filePath,"w");
    fwrite($programeFile,$code);
    fclose($programeFile);

    if ($language=="python") {
        $output=shell_exec("C:\Users\Lenovo\AppData\Local\Programs\Python\Python310\python.exe $filePath 2>&1");
        echo $output;
    }

    if ($language=="node") {
        rename($filePath,$filePath.".js");
        $output=shell_exec("node $filePath.js 2>&1");
        echo $output;
    }

    if ($language=="php") {
        $output=shell_exec("D:\php_download\php-8.1.9-nts-Win32-vs16-x64\php.exe $filePath 2>&1");
        echo $output;
    }

    if ($language=="c") {
        $outputExe="temp/".$random.".exe";
        $errorMessage=shell_exec("gcc $filePath -o $outputExe 2>&1");
        $output=shell_exec(__DIR__ . "//$outputExe");
    
        echo $errorMessage;
        
        echo $output;
    }

    if ($language=="cpp") {
        $outputExe="temp/".$random.".exe";
        $errorMessageOutput=shell_exec("g++ $filePath -o $outputExe 2>&1");
        $output=shell_exec(__DIR__ . "//$outputExe");

        echo $errorMessageOutput;

        echo $output;
    }
