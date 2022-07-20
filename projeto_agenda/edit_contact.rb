require_relative "./clear.rb";

def edit_contact(contact_list)
  clear();
  print "Informe o nome do contato que você deseja editar: "
  name = gets.chomp.downcase
  
  contact_list.each do |contact|
    if(name == contact[:name].downcase)
      clear();
      loop do
        puts "Deseja realmente alterar o contato: #{contact[:name]} - #{contact[:telephone]}\n1. Sim\n2. Não"
        option = gets.chomp.to_i;
        if(option > 0 and option < 3)
          case
            when option == 1
              clear();
              puts "\nAgora informe os novos valores para o campo nome e telefone: "
              print "\nNome: "
              new_name = gets.chomp.capitalize
              print "Telefone: "
              new_phone = gets.chomp

              if(new_name and new_phone)
                contact[:name] = new_name
                contact[:telephone] = new_phone
                
                clear();
                puts "Contato editado com sucesso\n#{contact[:name]} - #{contact[:telephone]}!"
                return;
              else
                puts "Infome o nome e o telefone!"
              end
            when option == 2
              clear();
              puts "O contato não foi editado!"
              return;
          end
        else
          clear();
          puts "Informe somente 1 para sim e 2 para não!\nTente novamente!"
        end
      end
    else
      puts "\nO nome #{name.capitalize}, não corresponde a nenhum contato da sua agenda telefônica!"
    end
  end
end