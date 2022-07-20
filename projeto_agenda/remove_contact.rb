require_relative "./clear.rb"

def remove_contact(contact_list)
  clear();

  print "Informe o nome do contato que você quer remover: "
  nameContactRemoved = gets.chomp.downcase;

  contact_list.each do |contact|
    if(contact[:name].downcase == nameContactRemoved)
      clear();
      loop do
        puts "O contato '#{contact[:name]} - #{contact[:telephone]}' será excluído, tem certeza disso?\n1. Sim\n2. Não"
        option = gets.chomp.to_i;
        
        if(option > 0 and option < 3)
          case
            when option == 1
              clear();
              contact_list.delete(contact);
              puts "Contato Excluido com sucesso!"
              break;
            when option == 2
              clear();
              puts "Operação de exclusão cancelada!"
              return;
          end
        else
          clear();
          puts "Informe somente 1 para sim e 2 para não!\nTente novamente!"
        end
      end
    else
      clear();
      puts "O contato informado não existe na agenda telefônica!"
    end
  end
end