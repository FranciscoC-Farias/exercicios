require_relative "./clear.rb";

def see_contact(contact_list)
  clear();
  print "Qual o nome do contato que você deseja visualizar: "
  name = gets.chomp;

  contact_list.each do |contact|
    if(contact[:name].downcase == name.downcase)
      contact.each do |key, value|
        puts value
      end
    else
      clear();
      puts "O nome informado não pertence a nenhum contato registrado!";
    end
  end
  
end
