webpackJsonp([0xf617c2ca9376],{968:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Automatically make migrations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ rails generate migration RemovePartNumberFromProducts part_number:string\n$ rails generate migration remove_part_number_from_products part_number # rails assumes string if not type given - and you can use snake_case\n\n$ rails generate migration AddNameToWidgets name:string\n$ rails g migration add_name_to_widgets name:string # you can use the short cut 'g' instead of generate - they both do the same thing\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Run migrations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ rake db:migrate\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Creating tables"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"create_table :users do |t|\n  t.string :name\n  t.text   :description\n\n  t.primary_key :id\n  t.string      :title\n  t.text        :description\n  t.integer     :games_count\n  t.float       :lol\n  t.decimal     :price\n  t.decimal     :price, :precision => 2, :scale => 10\n  t.datetime    :expiration\n  t.timestamp   :time_in\n  t.time        :time_in\n  t.date        :expiry\n  t.binary      :image_data\n  t.boolean     :is_admin\nend\n\n# Options:\n  :null (boolean)\n  :limit (integer)\n  :default\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Operations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"add_column    :users, :first_name, :string\nremove_column :users, :first_name, :string\n\nchange_column :users, :first_name, :text\nchange_column :users, :first_name, :text\n\nchange_column_default :users, :admin, nil\nchange_column_null    :users, :email, false # adds NOT NULL constraint\n\ncreate_table\nchange_table\ndrop_table\n\nadd_column\nchange_column\nrename_column\nremove_column\n\nadd_index\nremove_index\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Use models"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"class AddFlagToProduct < ActiveRecord::Migration\n  class Product < ActiveRecord::Base\n  end\n \n  def change\n    add_column :products, :flag, :boolean\n    Product.reset_column_information\n    reversible do |dir|\n      dir.up { Product.update_all flag: false }\n    end\n  end\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Associations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"t.references :category   # kinda same as t.integer :category_id\n\n# Can have different types\nt.references :category, polymorphic: true\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Auto-Add/remove columns"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ rails generate migration RemovePartNumberFromProducts part_number:string\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Indices"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'# Simple\nadd_index :suppliers, :name\n\n# Unique\nadd_index :accounts, [:branch_id, :party_id], :unique => true\n\n# Named (:name => ...)\nadd_index :accounts, [:branch_id, :party_id], :unique => true, :name => "by_branch_party"\n\n# Length\nadd_index :accounts, :name, :name => ‘by_name’, :length => 10\nadd_index :accounts, [:name, :surname], :name => ‘by_name_surname’,\n  :length => {\n    :name => 10,\n    :surname => 15\n  }\n\n# Sort order (no MySQL support)\nadd_index :accounts, [:branch_id, :party_id, :surname],\n  :order => {:branch_id => :desc, :part_id => :asc}\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"In console"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ActiveRecord::Migration"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ActiveRecord::Migration.add_index :posts, :slug\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://apidock.com/rails/ActiveRecord/ConnectionAdapters/SchemaStatements/add_index"},children:[{type:"text",value:"http://apidock.com/rails/ActiveRecord/ConnectionAdapters/SchemaStatements/add_index"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Migrations",category:"Rails",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /arel",context:{nodePath:"/arel",category:"Rails",title:"Arel"}}},{node:{id:"SitePage /rails-features",context:{nodePath:"/rails-features",category:"Rails",title:"Rails features"}}},{node:{id:"SitePage /rails-controllers",context:{nodePath:"/rails-controllers",category:"Rails",title:"Controllers"}}},{node:{id:"SitePage /rails-forms",context:{nodePath:"/rails-forms",category:"Rails",title:"Form helpers"}}},{node:{id:"SitePage /rails-gems",context:{nodePath:"/rails-gems",category:"Rails",title:"Rails gems"}}},{node:{id:"SitePage /rails-helpers",context:{nodePath:"/rails-helpers",category:"Rails",title:"Helpers"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rails-migrations.md absPath of file >>> MarkdownRemark",nodePath:"/rails-migrations",nodeType:"sheet",title:"Migrations",category:"Rails",weight:0,updated:null}}}});
//# sourceMappingURL=path---rails-migrations-02b315f4fbe16ecf312c.js.map