<?php
  require 'database.php';
  date_default_timezone_set('America/Mexico_City');
  //---------------------------------------- Condition to check that POST value is not empty.
  if (!empty($_POST)) {
    //........................................ keep track POST values
    $id = $_POST['device_id'];
    $temperatura = $_POST['temperatura'];
    $suciedad = $_POST['suciedad'];
    $nivel_agua = $_POST['nivel_agua'];
    $created_at = date('Y-m-d');
    $updated_at = date('H:i:s');
    //........................................
    
    //........................................ Updating the data in the table.
    $pdo = Database::connect();
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT registers SET device_id = ?, temperatura = ?, suciedad = ?, nivel_agua = ?, created_at = ?, updated_at = ?";
    $q = $pdo->prepare($sql);
    $q->execute(array($id,$temperatura,$suciedad,$nivel_agua, $created_at, $updated_at));
    Database::disconnect();
    //........................................ 
  }
  //---------------------------------------- 
?>