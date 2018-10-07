---
title: Do gem
category: Ruby libraries
---

### Connection

```ruby
server = DO::Server.new('srv1', 'srv1.domain.local', 'root', :key =>
    %w[srv1.pem]
```

### Run

```ruby
server.run 'uname'
# root@srv1 ~ # uname
# Linux
```

```ruby
server.run 'uname', '-a'
# root@srv1 ~ # uname -a
# Linux srv1.lipsiasoft.net 2.6.18-194.32.1.el5  x86_64 x86_64 x86_64 GNU/Linux
```

```ruby
server.run 'mysqladmin -u root -p password "oldone"', 'newpassword'
# root@srv1 ~ # mysqladmin -u root -p password 'oldone'
# Enter password: oldone
# mysqladmin: connect to server at 'localhost' failed
# error: 'Access denied for user 'root'@'localhost' (using password: YES)'
```

### Files

````ruby
server.exist?('~/.ssh')
# root@srv1 ~ # test -e ~/.ssh && echo True
# => true

```ruby
server.read('/etc/redhat-release')
# root@srv1 ~ # cat /etc/redhat-release
# => "CentOS release 5.5 (Final)"
````

### Upload/download

```ruby
server.upload '/tmp/file', '/tmp/foo'
# root@srv1 ~ # upload from '/tmp/file' to '/tmp/foo'
```

```ruby
server.download '/tmp/foo', '/tmp/file2'
# root@srv1 ~ # download from '/tmp/foo' to '/tmp/file2'
```

### Replace

```ruby
server.replace :all, 'new content', '/tmp/file'
# root@srv1 ~ # replace all in '/tmp/foo'
```

```ruby
server.read('/tmp/foo')
# root@srv1 ~ # cat /tmp/foo
# => "new content"
```

### Replace via regex

```ruby
server.replace /content$/, 'changed content', '/tmp/foo'
# root@srv1 ~ # replace /content$/ in '/tmp/foo'
```

```ruby
server.read('/tmp/foo')
# root@srv1 ~ # cat /tmp/foo
# => "new changed content"
```

### Append

```ruby
server.append('appended', '/tmp/foo')
# root@srv1 ~ # append to 'bottom' in '/tmp/foo'
```

```ruby
server.read('/tmp/foo')
# root@srv1 ~ # cat /tmp/foo
# => "new changed contentappended"
```

### Append to top

```ruby
server.append('---', '/tmp/foo', :top)
# root@srv1 ~ # append to 'top' in '/tmp/foo'
```

```ruby
server.read('/tmp/foo')
# root@srv1 ~ # cat /tmp/foo
# => "---new changed contentappended"
```

### Prompt

```ruby
server.ask "Please choose"
# root@srv1 ~ # Please choose: foo
# => "foo"
```

```ruby
server.yes? "Do you want to proceed"
# root@srv1 ~ # Do you want to proceed? (y/n): y
# => 0
```

```ruby
server.wait
# Press ENTER to continue...
```

### References

* [DAddYE/do](https://github.com/DAddYE/do) _(github.com)_
