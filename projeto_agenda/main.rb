#Adicionar, editar e remover contato;
#Os contatos terão as seguintes informações: nome e telefone;
#Deve ser possível ver todos os contatos registrados ou somente um contato;
require_relative "./list_contacts.rb";
require_relative "./add_contact.rb";
require_relative "./clear.rb";
require_relative "./remove_contact.rb"
require_relative "./see_contact.rb";
require_relative "./edit_contact.rb";


telephone_book = [
  {name: "Francisco", telephone: "11946758712"},
  {name: "Fernando", telephone: "11956868507"}
];

loop do
  puts " Para utilizar a aplicação, informe um número que corresponda a opção desejada do menu: "
  puts "1. Contatos\n2. Adicionar Contato\n3. Ver Contato\n4. Editar Contato\n5. Remover Contato\n0. Sair";

  cod = gets.chomp.to_i;

  if(cod >= 0 and cod <= 5)
    case
      when cod == 0
        clear();
        puts "Até a mais!"
        break;
      when cod == 1
        list_contacts(telephone_book);
      when cod == 2
        add_contact(telephone_book);
      when cod == 3
        see_contact(telephone_book);
      when cod == 4
        edit_contact(telephone_book);
      when cod == 5
        remove_contact(telephone_book);
    end
    
    puts "\nDeseja encerrar a sessão ou voltar para o menu?\n1. Voltar para o menu\n2. Encerrar"
    desire = gets.chomp.to_i;

    case
      when desire == 1
        clear();
      when desire == 2 
        clear();
        puts "Programa encerrado!"
        break; 
    end
  else
    clear();
    puts "Informe um número que corresponda as opções do menu!"
  end
end