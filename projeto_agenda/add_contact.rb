require_relative "./clear.rb";

def add_contact(contact_list)
  clear();
  print "Nome: "
  name = gets.chomp.capitalize;

  print "Telefone: "

  telephone = gets.chomp

  contact_list.each do |contact|
    if(contact[:name].downcase == name.downcase and contact[:telephone] == telephone)
      puts "\nJá existe um contato com essas informações!\nDeseja adicioná-lo novamente?\n1. Sim\n2. Não";
      option = gets.chomp.to_i;
      if(option > 0 and option < 3)
        case
          when option == 1
            clear();
          when option == 2
            clear();
            puts "Okay, Contato não adicionado!";
            return;
        end
      end
    end
  end
  
  contact_list.push({name: name, telephone: telephone});
  puts "\nContato Adicionado com sucesso!"
end