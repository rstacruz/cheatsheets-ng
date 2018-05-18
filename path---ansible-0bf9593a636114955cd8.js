webpackJsonp([30247774074837],{719:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting started"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Hosts"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ sudo mkdir /etc/ansible\n$ sudo vim /etc/ansible/hosts\n\n[example]\n192.0.2.101\n192.0.2.102\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Running a playbook"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ ansible-playbook playbook.yml\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Tasks"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"- hosts: all\n  user: root\n  sudo: no\n  vars:\n    aaa: bbb\n  tasks:\n    - ...\n  handlers:\n    - ...\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Includes"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"tasks:\n  - include: db.yml\nhandlers:\n  - include: db.yml user=timmy\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Handlers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"handlers:\n  - name: start apache2\n    action: service name=apache2 state=started\n\ntasks:\n  - name: install apache\n    action: apt pkg=apache2 state=latest\n    notify:\n      - start apache2\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Vars"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'- host: lol\n  vars_files:\n    - vars.yml\n  vars:\n    project_root: /etc/xyz\n  tasks:\n    - name: Create the SSH directory.\n      file: state=directory path=${project_root}/home/.ssh/\n      only_if: "$vm == 0"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Roles"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"- host: xxx\n  roles:\n    - db\n    - { role:ruby, sudo_user:$user }\n    - web\n\n# Uses:\n# roles/db/tasks/*.yml\n# roles/db/handlers/*.yml\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Task: Failures"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'- name: my task\n  command: ...\n  register: result\n  failed_when: "\'FAILED\' in result.stderr"\n\n  ignore_errors: yes\n\n  changed_when: "result.rc != 2"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Env vars"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"vars:\n  local_home: \"{{ lookup('env','HOME') }}\"\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.ansibleworks.com/docs/intro_configuration.html"},children:[{type:"text",value:"Intro"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.ansibleworks.com/docs/modules.html"},children:[{type:"text",value:"Modules"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Ansible",category:"Ansible",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /ansible-examples",context:{nodePath:"/ansible-examples",category:"Ansible",title:"Ansible examples"}}},{node:{id:"SitePage /ansible-guide",context:{nodePath:"/ansible-guide",category:"Ansible",title:"Ansible quickstart"}}},{node:{id:"SitePage /ansible-roles",context:{nodePath:"/ansible-roles",category:"Ansible",title:"Ansible roles"}}},{node:{id:"SitePage /ansible-modules",context:{nodePath:"/ansible-modules",category:"Ansible",title:"Ansible modules"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/ansible.md absPath of file >>> MarkdownRemark",nodePath:"/ansible",nodeType:"sheet",title:"Ansible",category:"Ansible",weight:0,updated:null}}}});
//# sourceMappingURL=path---ansible-0bf9593a636114955cd8.js.map