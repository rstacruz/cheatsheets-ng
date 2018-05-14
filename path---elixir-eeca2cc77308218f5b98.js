webpackJsonp([81751957962058],{777:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting started"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Hello world"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'# hello.exs\ndefmodule Greeter do\n  def greet(name) do\n    message = "Hello, " <> name <> "!"\n    IO.puts message\n  end\nend\n\nGreeter.greet("world")\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"elixir hello.exs\n# Hello, world!\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variables"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"age = 23\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Maps"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'user = %{\n  name: "John",\n  city: "Melbourne"\n}\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'IO.puts "Hello, " <> user.name\n'}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Lists"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'users = [ "Tom", "Dick", "Harry" ]\n'}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'Enum.map(users, fn user ->\n  IO.puts "Hello " <> user\nend)\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Piping"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"source\n|> transform(:hello)\n|> print()\n"}]}]},{type:"comment",value:' {data-line="2,3"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"# Same as:\nprint(transform(source, :hello))\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These two are equivalent."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Pattern matching"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'user = %{name: "Tom", age: 23}\n%{name: username} = user\n'}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This sets "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"username"}]},{type:"text",value:" to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'"Tom"'}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Pattern matching in functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'def greet(%{name: username}) do\n  IO.puts "Hello, " <> username\nend\n\nuser = %{name: "Tom", age: 23}\n'}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Pattern matching works in function parameters too."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Control flow"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"If"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'if false do\n  "This will never be seen"\nelse\n  "This will"\nend\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Case"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'case {1, 2, 3} do\n  {4, 5, 6} ->\n    "This clause won\'t match"\n  {1, x, 3} ->\n    "This will match and bind x to 2"\n  _ ->\n   "This will match any value"\nend\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Cond"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'cond do\n  1 + 1 == 3 ->\n    "I will never be seen"\n  2 * 5 == 12 ->\n    "Me neither"\n  true ->\n    "But I will (this is essentially an else)"\nend\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Errors"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'try do\n  throw(:hello)\ncatch\n  message -> "Got #{message}."\nafter\n  IO.puts("I\'m the after clause.")\nend\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Types"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Primitives"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Sample"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Type"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"nil"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Nil/null"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"true"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"/"}]},{type:"text",value:"\n \n"},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"false"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Boolean"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"?a"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Integer (ASCII)"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"23"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Integer"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"3.14"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Float"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"'hello'"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Charlist"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<<2, 3>>"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Binary"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'"hello"'}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Binary string"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:":hello"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Atom"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"[a, b]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"List"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"{a, b}"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Tuple"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"---"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'%{a: "hello"}'}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Map"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'%MyStruct{a: "hello"}'}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Struct"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"fn -> ... end"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Function"}]}]}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Type checks"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"is_atom/1\nis_bitstring/1\nis_boolean/1\nis_function/1\nis_function/2\nis_integer/1\nis_float/1\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"is_binary/1\nis_list/1\nis_map/1\nis_tuple/1\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"is_nil/1\nis_number/1\nis_pid/1\nis_port/1\nis_reference/1\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Operators"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"left != right   # equal\nleft !== right  # match\nleft ++ right   # concat lists\nleft <> right   # concat string/binary\nleft =~ right   # regexp\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Modules"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Importing"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"require Redux   # compiles a module\nimport Redux    # compiles, and you can use without the `Redux.` prefix\n\nuse Redux       # compiles, and runs Redux.__using__/1\nuse Redux, async: true\n\nimport Redux, only: [duplicate: 2]\nimport Redux, only: :functions\nimport Redux, only: :macros\n\nimport Foo.{Bar, Baz}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Aliases"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"alias Foo.Bar, as: Bar\nalias Foo.Bar   # same as above\n\nalias Foo.{Bar, Baz}\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"String"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"import String\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'str = "hello"\nstr |> length()        # → 5\nstr |> codepoints()    # → ["h", "e", "l", "l", "o"]\nstr |> slice(2..-1)    # → "llo"\nstr |> split(" ")      # → ["hello"]\nstr |> capitalize()    # → "Hello"\nstr |> match(regex)\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Inspecting objects"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"inspect(object, opts \\\\ [])\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"value |> IO.inspect()\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Numbers"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Operations"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"abs(n)\nround(n)\nrem(a, b)   # remainder (modulo)\ndiv(a, b)   # integer division\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Float"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"import Float\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"n = 10.3\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'n |> ceil()            # → 11.0\nn |> ceil(2)           # → 11.30\nn |> to_string()       # → "1.030000+e01"\nn |> to_string([decimals: 2, compact: true])\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'Float.parse("34")  # → { 34.0, "" }\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Integer"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"import Integer\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"n = 12\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"n |> digits()         # → [1, 2]\nn |> to_charlist()    # → '12'\nn |> to_string()      # → \"12\"\nn |> is_even()\nn |> is_odd()\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"# Different base:\nn |> digits(2)        # → [1, 1, 0, 0]\nn |> to_charlist(2)   # → '1100'\nn |> to_string(2)     # → \"1100\"\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'parse("12")           # → {12, ""}\nundigits([1, 2])      # → 12\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Type casting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'Float.parse("34.1")    # → {34.1, ""}\nInteger.parse("34")    # → {34, ""}\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'Float.to_string(34.1)  # → "3.4100e+01"\nFloat.to_string(34.1, [decimals: 2, compact: true])  # → "34.1"\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Map"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Defining"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'m = %{name: "hi"}       # atom keys (:name)\nm = %{"name" => "hi"}   # string keys ("name")\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Updating"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"import Map\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'m = %{m | name: "yo"}  # key must exist\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'m |> put(:id, 2)      # → %{id: 2, name: "hi"}\nm |> put_new(:id, 2)  # only if `id` doesn\'t exist (`||=`)\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'m |> put(:b, "Banana")\nm |> merge(%{b: "Banana"})\nm |> update(:a, &(&1 + 1))\nm |> update(:a, fun a -> a + 1 end)\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'m |> get_and_update(:a, &(&1 || "default"))\n# → {old, new}\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Deleting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'m |> delete(:name)  # → %{}\nm |> pop(:name)     # → {"John", %{}}\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Reading"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'m |> get(:id)       # → 1\nm |> keys()         # → [:id, :name]\nm |> values()       # → [1, "hi"]\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'m |> to_list()      # → [id: 1, name: "hi"]\n                    # → [{:id, 1}, {:name, "hi"}]\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Deep"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'put_in(map, [:b, :c], "Banana")\nput_in(map[:b][:c], "Banana")    # via macros\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'get_and_update_in(users, ["john", :age], &{&1, &1 + 1})\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Constructing from lists"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"Map.new([{:b, 1}, {:a, 2}])\nMap.new([a: 1, b: 2])\nMap.new([:a, :b], fn x -> {x, x} end)  # → %{a: :a, b: :b}\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"List"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"import List\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"l = [ 1, 2, 3, 4 ]\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"l = l ++ [5]         # push (append)\nl = [ 0 | list ]     # unshift (prepend)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"l |> first()\nl |> last()\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"l |> flatten()\nl |> flatten(tail)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also see "},{type:"element",tagName:"a",properties:{href:"#enum"},children:[{type:"text",value:"Enum"}]},{type:"text",value:"."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Enum"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Usage"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"import Enum\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"list = [:a, :b, :c]\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"list |> at(0)         # → :a\nlist |> count()       # → 3\nlist |> empty?()      # → false\nlist |> any?()        # → true\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"list |> concat([:d])  # → [:a, :b, :c, :d]\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also, consider streams instead."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Map/reduce"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"list |> reduce(fn)\nlist |> reduce(acc, fn)\nlist |> map(fn)\nlist |> reject(fn)\nlist |> any?(fn)\nlist |> empty?(fn)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"[1, 2, 3, 4]\n|> Enum.reduce(0, fn(x, acc) -> x + acc end)\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Tuple"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Tuples"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"import Tuple\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"t = { :a, :b }\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"t |> elem(1)    # like tuple[1]\nt |> put_elem(index, value)\nt |> tuple_size()\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Keyword lists"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'list = [{ :name, "John" }, { :age, 15 }]\nlist[:name]\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'# For string-keyed keyword lists\nlist = [{"size", 2}, {"type", "shoe"}]\nList.keyfind(list, "size", 0)  # → {"size", 2}\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Functions"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Lambdas"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"square = fn n -> n*n end\nsquare.(20)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"& syntax"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"square = &(&1 * &1)\nsquare.(20)\n\nsquare = &Math.square/1\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Running"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"fun.(args)\napply(fun, args)\napply(module, fun, args)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Function heads"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"def join(a, b \\\\ nil)\ndef join(a, b) when is_nil(b) do: a\ndef join(a, b) do: a <> b\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Structs"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Structs"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'defmodule User do\n  defstruct name: "", age: nil\nend\n\n%User{name: "John", age: 20}\n\n%User{}.struct  # → User\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://elixir-lang.org/getting-started/structs.html"},children:[{type:"text",value:"Structs"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Protocols"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Defining protocols"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'defprotocol Blank do\n  @doc "Returns true if data is considered blank/empty"\n  def blank?(data)\nend\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"defimpl Blank, for: List do\n  def blank?([]), do: true\n  def blank?(_), do: false\nend\n\nBlank.blank?([])  # → true\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Any"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'defimpl Blank, for: Any do ... end\n\ndefmodule User do\n  @derive Blank     # Falls back to Any\n  defstruct name: ""\nend\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Examples"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Enumerable"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Enum.map()"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Inspect"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"inspect()"}]}]},{type:"text",value:"\n"}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Comprehensions"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"For"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"for n <- [1, 2, 3, 4], do: n * n\nfor n <- 1..4, do: n * n\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"for {key, val} <- %{a: 10, b: 20}, do: val\n# → [10, 20]\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"for {key, val} <- %{a: 10, b: 20}, into: %{}, do: {key, val*val}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Conditions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"for n <- 1..10, rem(n, 2) == 0, do: n\n# → [2, 4, 6, 8, 10]\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Complex"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"for dir <- dirs,\n    file <- File.ls!(dir),          # nested comprehension\n    path = Path.join(dir, file),    # invoked\n    File.regular?(path) do          # condition\n  IO.puts(file)\nend\n"
}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Misc"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Metaprogramming"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"__MODULE__\n__MODULE__.__info__\n\n@after_compile __MODULE__\ndef __before_compile__(env)\ndef __after_compile__(env, _bytecode)\ndef __using__(opts)    # invoked on `use`\n\n@on_definition {__MODULE__, :on_def}\ndef on_def(_env, kind, name, args, guards, body)\n\n@on_load :load_check\ndef load_check\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Regexp"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'exp = ~r/hello/\nexp = ~r/hello/i\n"hello world" =~ exp\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Sigils"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"~r/regexp/\n~w(list of strings)\n~s[strings with #{interpolation} and \\x20 escape codes]\n~S[no interpolation and no escapes]\n~c(charlist)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Allowed chars: "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"|"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'"'}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"'"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"("}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"["}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"{"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'"""'}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"http://elixir-lang.org/getting-started/sigils.html"},children:[{type:"text",value:"Sigils"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Type specs"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"@spec round(number) :: integer\n\n@type number_with_remark :: {number, String.t}\n@spec add(number, number) :: number_with_remark\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Useful for "},{type:"element",tagName:"a",properties:{href:"http://www.erlang.org/doc/man/dialyzer.html"},children:[{type:"text",value:"dialyzer"}]},{type:"text",value:".\nSee: "},{type:"element",tagName:"a",properties:{href:"http://elixir-lang.org/getting-started/typespecs-and-behaviours.html"},children:[{type:"text",value:"Typespecs"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Behaviours"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"defmodule Parser do\n  @callback parse(String.t) :: any\n  @callback extensions() :: [String.t]\nend\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'defmodule JSONParser do\n  @behaviour Parser\n\n  def parse(str), do: # ... parse JSON\n  def extensions, do: ["json"]\nend\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://elixir-lang.org/docs/stable/elixir/Module.html"},children:[{type:"text",value:"Module"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://learnxinyminutes.com/docs/elixir/"},children:[{type:"text",value:"Learn Elixir in Y minutes"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Elixir",category:"Elixir",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /phoenix-conn",context:{nodePath:"/phoenix-conn",category:"Elixir",title:"Phoenix: Plug.Conn"}}},{node:{id:"SitePage /ets",context:{nodePath:"/ets",category:"Elixir",title:"Erlang ETS"}}},{node:{id:"SitePage /phoenix-routing",context:{nodePath:"/phoenix-routing",category:"Elixir",title:"Phoenix: Routing"}}},{node:{id:"SitePage /phoenix",context:{nodePath:"/phoenix",category:"Elixir",title:"Phoenix"}}},{node:{id:"SitePage /phoenix-migrations",context:{nodePath:"/phoenix-migrations",category:"Elixir",title:"Phoenix: Ecto migrations"}}},{node:{id:"SitePage /phoenix@1.2",context:{nodePath:"/phoenix@1.2",category:"Elixir",title:"Phoenix 1.2"}}}]},topPages:{edges:[{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}},{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/elixir.md absPath of file >>> MarkdownRemark",nodePath:"/elixir",nodeType:"sheet",title:"Elixir",category:"Elixir",weight:-10,updated:"2017-08-26T00:00:00.000Z"}}}});
//# sourceMappingURL=path---elixir-eeca2cc77308218f5b98.js.map