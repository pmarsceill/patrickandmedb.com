require 'rake'
require 'rake/task'
require 'serve'

desc "Preview the site for development"
task :start do
  puts "\n\nStrapOn starting.....................\n\n"
  system("serve")
  puts "\n\nStrapOn shutting down................"
  export
end

desc "Export the static site"
task :export do
  puts "\n\nStrapOn exporting static site....................."
  export
end


def export
  puts "\n\nGenerating static version of site in: ./_site/ ..."
  system("serve export . _site/")
end
