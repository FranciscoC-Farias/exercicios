require_relative 'lista_path.rb'
def validaPermissao(str)
  if(str == "não" or str == "sim" )
    return true;
  else
    return false;
  end
end

def deleta_path(caminhos)
  caminhosFiltrados = caminhos.filter {|caminho| caminho != "./../.git"}

  if(caminhosFiltrados.length == 0)
    puts "\nO diretório especificado não existe nos níveis e subníveis das pastas subsequentes!"
    return;
  end
  
  puts caminhosFiltrados
  permissao = '';
  
  loop do
    print "\nOs caminhos acima serão deletados. Você tem certeza disso (sim ou não)?: ";
    permissao = STDIN.gets.chomp.downcase;
    puts ''
    if(validaPermissao(permissao))
      break;
    else
      puts "\nEscreva somente sim ou não para responder!"
    end
  end

  if(permissao == "sim")
    caminhosFiltrados.each do |caminho|
      pastaDeletada = system("rm -rf #{caminho}");
      if(pastaDeletada)
        puts "O caminho #{caminho} foi deletado com sucesso";
      end
    end
  elsif(permissao == "não")
    puts "\nOk, os diretórios serão mantidos! ";
    return;
  end
end

#def lista_path(str)
  #Dir.chdir(Dir.pwd) do
    #return Dir.glob("./**/#{str}");
  #end
#end

param = ARGV[0];

if(!param)
  print "Informe o nome do diretório que você deseja excluir: ";
  param = gets.chomp;
end

paths = lista_path(param);

unless(paths.empty?)
  deleta_path(paths)
else
  puts "#{param} Não encontrado!"
end