<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Peceptor</title>
  </head>
  <body>
    <h1>Cadastro dados Enviados com sucesso!</h1>
    <?php
      $cep = $_POST["cep"];
      $rua = $_POST["rua"];
      $complemento = $_POST["complemento"];
      $numero = $_POST["numero"];
      $bairro = $_POST["bairro"];
      $cidade = $_POST["cidade"];
      $uf = $_POST["uf"];
      $pais = $_POST["pais"];

      echo "CEP: ".$cep."<br>";
      echo "Rua: ".$rua."<br>";
      echo "Número: ".$numero."<br>";
      echo "Complemento: ".$complemento."<br>";
      echo "Bairro: ".$bairro."<br>";
      echo "Cidade: ".$cidade."<br>";
      echo "UF: ".$uf."<br>";
      echo "País: ".$pais."<br>";
    ?>
  </body>
</html>