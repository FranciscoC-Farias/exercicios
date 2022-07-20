require_relative "./clear.rb";

def list_contacts(contact_list)
  clear();
  puts "Os contatos da sua agenda telefônica são: \n"
  contact_list.each do |contact|
    puts "#{contact[:name]} - #{contact[:telephone]}"
  end
  puts ""
end