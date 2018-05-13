webpackJsonp([0xbcf5beb06fec],{995:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Open a database"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"require 'rubygems'\nrequire 'sequel'\n\nDB = Sequel.sqlite('my_blog.db')\nDB = Sequel.connect('postgres://user:password@localhost/my_db')\nDB = Sequel.postgres('my_db', :user => 'user', :password => 'password', :host => 'localhost')\nDB = Sequel.ado('mydb')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Open an SQLite memory database"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Without a filename argument, the sqlite adapter will setup a new sqlite database in memory."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB = Sequel.sqlite\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Logging SQL statements"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"require 'logger'\nDB = Sequel.sqlite '', :loggers => [Logger.new($stdout)]\n# or\nDB.loggers << Logger.new(...)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using raw SQL"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'DB.run "CREATE TABLE users (name VARCHAR(255) NOT NULL, age INT(3) NOT NULL)"\ndataset = DB["SELECT age FROM users WHERE name = ?", name]\ndataset.map(:age)\nDB.fetch("SELECT name FROM users") do |row|\n  p row[:name]\nend\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Create a dataset"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset = DB[:items]\ndataset = DB.from(:items)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Most dataset methods are chainable"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset = DB[:managers].where(:salary => 5000..10000).order(:name, :department)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Insert rows"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.insert(:name => 'Sharon', :grade => 50)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Retrieve rows"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.each{|r| p r}\ndataset.all # => [{...}, {...}, ...]\ndataset.first # => {...}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Update/Delete rows"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.filter(~:active).delete\ndataset.filter('price < ?', 100).update(:active => true)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Datasets are Enumerable"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.map{|r| r[:name]}\ndataset.map(:name) # same as above\n\ndataset.inject(0){|sum, r| sum + r[:value]}\ndataset.sum(:value) # same as above\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Filtering (see also doc/dataset_filtering.rdoc)"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Equality"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.filter(:name => 'abc')\ndataset.filter('name = ?', 'abc')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Inequality"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.filter{value > 100}\ndataset.exclude{value <= 100}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Inclusion"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.filter(:value => 50..100)\ndataset.where{(value >= 50) & (value <= 100)}\n\ndataset.where('value IN ?', [50,75,100])\ndataset.where(:value=>[50,75,100])\n\ndataset.where(:id=>other_dataset.select(:other_id))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Subselects as scalar values"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.where('price > (SELECT avg(price) + 100 FROM table)')\ndataset.filter{price > dataset.select(avg(price) + 100)}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"LIKE/Regexp"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB[:items].filter(:name.like('AL%'))\nDB[:items].filter(:name => /^AL/)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"AND/OR/NOT"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB[:items].filter{(x > 5) & (y > 10)}.sql \n# SELECT * FROM items WHERE ((x > 5) AND (y > 10))\n\nDB[:items].filter({:x => 1, :y => 2}.sql_or & ~{:z => 3}).sql \n# SELECT * FROM items WHERE (((x = 1) OR (y = 2)) AND (z != 3))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Mathematical operators"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB[:items].filter((:x + :y) > :z).sql \n# SELECT * FROM items WHERE ((x + y) > z)\n\nDB[:items].filter{price - 100 < avg(price)}.sql \n# SELECT * FROM items WHERE ((price - 100) < avg(price))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ordering"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.order(:kind)\ndataset.reverse_order(:kind)\ndataset.order(:kind.desc, :name)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Limit/Offset"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.limit(30) # LIMIT 30\ndataset.limit(30, 10) # LIMIT 30 OFFSET 10\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Joins"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB[:items].left_outer_join(:categories, :id => :category_id).sql \n# SELECT * FROM items LEFT OUTER JOIN categories ON categories.id = items.category_id\n\nDB[:items].join(:categories, :id => :category_id).join(:groups, :id => :items__group_id) \n# SELECT * FROM items INNER JOIN categories ON categories.id = items.category_id INNER JOIN groups ON groups.id = items.group_id\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Aggregate functions methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.count #=> record count\ndataset.max(:price)\ndataset.min(:price)\ndataset.avg(:price)\ndataset.sum(:stock)\n\ndataset.group_and_count(:category)\ndataset.group(:category).select(:category, :AVG.sql_function(:price))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"SQL Functions / Literals"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dataset.update(:updated_at => :NOW.sql_function)\ndataset.update(:updated_at => 'NOW()'.lit)\n\ndataset.update(:updated_at => \"DateValue('1/1/2001')\".lit)\ndataset.update(:updated_at => :DateValue.sql_function('1/1/2001'))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Schema Manipulation"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB.create_table :items do\n  primary_key :id\n  String :name, :unique => true, :null => false\n  TrueClass :active, :default => true\n  foreign_key :category_id, :categories\n  DateTime :created_at\n  \n  index :created_at\nend\n\nDB.drop_table :items\n\nDB.create_table :test do\n  String :zipcode\n  enum :system, :elements => ['mac', 'linux', 'windows']\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Aliasing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB[:items].select(:name.as(:item_name))\nDB[:items].select(:name___item_name)\nDB[:items___items_table].select(:items_table__name___item_name)\n# SELECT items_table.name AS item_name FROM items AS items_table\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Transactions"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB.transaction do\n  dataset.insert(:first_name => 'Inigo', :last_name => 'Montoya')\n  dataset.insert(:first_name => 'Farm', :last_name => 'Boy')\nend # Either both are inserted or neither are inserted\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Database#transaction is re-entrant:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB.transaction do # BEGIN issued only here\n  DB.transaction\n    dataset << {:first_name => 'Inigo', :last_name => 'Montoya'}\n  end\nend # COMMIT issued only here\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Transactions are aborted if an error is raised:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'DB.transaction do\n  raise "some error occurred"\nend # ROLLBACK issued and the error is re-raised\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Transactions can also be aborted by raising Sequel::Rollback:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB.transaction do\n  raise(Sequel::Rollback) if something_bad_happened\nend # ROLLBACK issued and no error raised\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Savepoints can be used if the database supports it:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"DB.transaction do\n  dataset << {:first_name => 'Farm', :last_name => 'Boy'} # Inserted\n  DB.transaction(:savepoint=>true) # This savepoint is rolled back\n    dataset << {:first_name => 'Inigo', :last_name => 'Montoya'} # Not inserted\n    raise(Sequel::Rollback) if something_bad_happened\n  end\n  dataset << {:first_name => 'Prince', :last_name => 'Humperdink'} # Inserted\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Miscellaneous:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'dataset.sql # "SELECT * FROM items"\ndataset.delete_sql # "DELETE FROM items"\ndataset.where(:name => \'sequel\').exists # "EXISTS ( SELECT * FROM items WHERE name = \'sequel\' )"\ndataset.columns #=> array of columns in the result set, does a SELECT\nDB.schema(:items) => [[:id, {:type=>:integer, ...}], [:name, {:type=>:string, ...}], ...]\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Documents"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"http://sequel.rubyforge.org/rdoc/files/doc/association_basics_rdoc.html\nhttp://sequel.rubyforge.org/rdoc/classes/Sequel/Schema/Generator.html\nhttp://sequel.rubyforge.org/rdoc/files/doc/validations_rdoc.html\nhttp://sequel.rubyforge.org/rdoc/classes/Sequel/Model.html\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Alter table"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"database.alter_table :deals do\n  add_column :name, String\n  drop_column :column_name\n  rename_column :from, :to\n\n  add_constraint :valid_name, :name.like('A%')\n  drop_constraint :constraint\n\n  add_full_text_index :body\n  add_spacial_index [columns]\n\n  add_index :price\n  drop_index :index\n\n  add_foreign_key :artist_id, :table\n  add_primary_key :id\n  add_unique_constraint [columns]\n  set_column_allow_null :foo, false\n  set_column_default :title, ''\n\n  set_column_type :price, 'char(10)'\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Model associations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"class Deal < Sequel::Model\n\n  # Us (left) <=> Them (right)\n  many_to_many  :images,\n    left_id:    :deal_id,\n    right_id:   :image_id,\n    join_table: :image_links\n\n  one_to_many   :files,\n    key:        :deal_id,\n    class:      :DataFile,\n\n  many_to_one   :parent, class: self\n  one_to_many   :children, key: :parent_id, class: self\n\n  one_to_many :gold_albums, class: :Album do |ds|\n    ds.filter { copies_sold > 50000 }\n  end\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Provided by many"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"to"}]},{type:"text",value:"many"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Deal[1].images\nDeal[1].add_image\nDeal[1].remove_image\nDeal[1].remove_all_images\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Validations"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"  def validate\n    super\n    errors.add(:name, 'cannot be empty') if !name || name.empty?\n\n    validates_presence [:title, :site]\n    validates_unique :name\n    validates_format /\\Ahttps?:\\/\\//, :website, :message=>'is not a valid URL'\n    validates_includes %w(a b c), :type\n    validates_integer :rating\n    validates_numeric :number\n    validates_type String, [:title, :description]\n\n    validates_integer :rating  if new?\n\n    # options: :message =>, :allow_nil =>, :allow_blank =>,\n    #          :allow_missing =>,\n\n    validates_exact_length 17, :isbn\n    validates_min_length 3, :name\n    validates_max_length 100, :name\n    validates_length_range 3..100, :name\n    \n    # Setter override\n    def filename=(name)\n      @values[:filename] = name\n    end\n  end\nend\n\ndeal.errors\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Model stuff"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"deal = Deal[1]\ndeal.changed_columns\ndeal.destroy  # Calls hooks\ndeal.delete   # No hooks\ndeal.exists?\ndeal.new?\ndeal.hash  # Only uniques\ndeal.keys  #=> [:id, :name]\ndeal.modified!\ndeal.modified?\n\ndeal.lock!\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Callbacks"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"before_create\nafter_create\n\nbefore_validation\nafter_validation\nbefore_save\nbefore_update\nUPDATE QUERY\nafter_update\nafter_save\n\nbefore_destroy\nDELETE QUERY\nafter_destroy\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Schema"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"class Deal < Sequel::Model\n  set_schema do\n    primary_key :id\n    primary_key [:id, :title]\n    String :name, primary_key: true\n    \n    String  :title\n    Numeric :price\n    DateTime :expires\n\n    unique :whatever\n    check(:price) { num > 0 }\n\n    foreign_key :artist_id\n    String :artist_name, key: :id\n\n    index :title\n    index [:artist_id, :name]\n    full_text_index :title\n\n    # String, Integer, Fixnum, Bignum, Float, Numeric, BigDecimal,\n    # Date, DateTime, Time, File, TrueClass, FalseClass\n  end\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Unrestrict primary key"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Category.create id: 'travel'   # error\nCategory.unrestrict_primary_key\nCategory.create id: 'travel'   # ok\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Sequel",category:"Ruby libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}},{node:{id:"SitePage /factory_bot",context:{nodePath:"/factory_bot",category:"Ruby libraries",title:"Factory Bot"}}},{node:{id:"SitePage /meta-tags",context:{nodePath:"/meta-tags",category:"Ruby libraries",title:"Meta-tags gem"}}},{node:{id:"SitePage /ronn",context:{nodePath:"/ronn",category:"Ruby libraries",title:"Ronn"}}},{node:{id:"SitePage /slim",context:{nodePath:"/slim",category:"Ruby libraries",title:"Slim"}}},{node:{id:"SitePage /chunky_png",context:{nodePath:"/chunky_png",category:"Ruby libraries",title:"Chunky PNG"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/sequel.md absPath of file >>> MarkdownRemark",nodePath:"/sequel",nodeType:"sheet",title:"Sequel",category:"Ruby libraries",weight:0}}}});
//# sourceMappingURL=path---sequel-27ec0c05063205fdaa67.js.map