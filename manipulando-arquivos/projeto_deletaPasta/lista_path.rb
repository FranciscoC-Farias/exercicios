def lista_path(str)
  Dir.chdir(Dir.pwd) do
    return Dir.glob("./../**/#{str}");
  end
end