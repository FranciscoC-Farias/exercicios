#Buscar o arquivo gitIgnore;

#verificar se encontrou algum caminho correspondente;
  #Se encontrou
    #Copiar o conteúdo de dentro do arquivo;
    #Mostrar mensagem, conteúdo copiado com sucesso!

  #Se não encontrou
    #mostrar mensagem que caminho não foi encontrado

# Verificar se já existe um arquivo gitIgnore na pasta Raiz;
  #Se existir
    #adicionar o conteúdo copiado, anteriormente, do arquivo .gitignore, sem apagar o conteúdo já existente
    # Mostrar mensagem conteúdo adicionado com sucesso!

  #Se não existir
    #cria um arquivo com nome ".gitignore" adicionando o conteúdo copiado do outro arquivo .gitignore;

require_relative 'lista_path.rb'

def modificaStr(str)
  str = str.sub(".gitignore","");
  str = str.sub("../","");
end


#Buscar o arquivo gitIgnore;
caminhosEncontrados = lista_path('.gitignore');
caminhosFiltrados = caminhosEncontrados.filter { |caminho| caminho != "./../.gitignore"};

#verificar se encontrou algum caminho correspondente;
if(caminhosFiltrados.length > 0)
  conteudoArquivo = nil;
  caminhosFiltrados.each do |caminho|

    conteudoArquivo = File.readlines(caminho).map do |linha|

      if(!linha.index("#") and linha.length != 1)
        if(linha.index("/"))
          linha = linha.sub('/','')
        end
        "#{modificaStr(caminho)}#{linha}" 
      end

    end

    File.open("#{Dir.pwd}/../.gitignore", 'a') do |ponteiroEscrita|
      ponteiroEscrita.puts conteudoArquivo
    end
    puts "Escrita no arquivo realizada com sucesso!"      
        
  end
  #verifica se já existe um arquivo .gitignore na pasta Raiz
else
  puts "Nenhum caminho foi encontrado!";
end