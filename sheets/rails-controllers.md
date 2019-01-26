---
title: Rails Controllers
category: Rails
---

### Common stuff

```rb
redirect_to root_url
redirect_to root_url, notice: "Good."
```

### Special hashes

```rb
session[:user_id] = nil
```

```rb
flash[:notice] = "Hello"    # Gets flushed on next request
flash.keep                  # Persist flash values
flash.now[:error] = "Boo"   # Available on the same request
```

```rb
cookies[:hello] = "Hi"
```

```rb
params[:page]
```

```rb
# params is a combination of:
query_parameters
path_parameters
request_parameters
```

### respond_to

```rb
respond_to do |format|
  format.html
  format.xml  { render xml: @users }
  format.json { render json: @users }
  format.js    # Will be executed by the browser
end
```

### default_url_options

```rb
# The options parameter is the hash passed in to 'url_for'
def default_url_options(options)
  {:locale => I18n.locale}
end
```

### Filters

```rb
# Filter with callbacks
before_filter :authenticate
before_filter :authenticate, except: [:login]
before_filter :authenticate, only: [:login]
def authenticate
  redirect_to login_url unless controller.logged_in?
end
```

```rb
# Filter with inline
before_filter do |controller|
  redirect_to login_url unless controller.logged_in?
end
```

```rb
# Filter with external classes
before_filter LoginFilter
class LoginFilter
  def self.filter(controller) ...; end
end
```

```rb
# Filter exceptions
skip_before_filter :require_login, only: [:new, :create]
```

```rb
# Before/after filters
around_filter :wrap_in_transaction
def wrap_in_transaction(&blk)
  ActiveRecord::Base.transaction { yield }
end
```

### HTTP basic authentication

```rb
before_filter :authenticate
```

```rb
# Basic authentication:
def authenticate
  authenticate_or_request_with_http_basic { |u, p|
    u == "root" && p == "alpine"
  }
end
```

```rb
# ...or digest (hashed) authentication:
# uses the ha1 hash (username:realm:password)
def authenticate_by_digest
  realm = "Secret3000"
  users = {
    "rsc" => Digest::MD5.hexdigest("rsc:#{realm}:passwordhere")
  }
```

```rb
  authenticate_or_request_with_http_digest(realm) { |user|
    users[user]
  }
end
```

```rb
# For integration tests
def test_access
  auth = ActionController::HttpAuthentication::Basic.encode_credentials(user, pass)
  get "/notes/1.xml", nil, 'HTTP_AUTHORIZATION' => auth
end
```

```rb
# Token auth
is_logged_in = authenticate_with_http_token do |token, options|
  token == our_secret_token
end
```

```rb
request_http_token_authentication  unless is_logged_in
```

### Request/response

```rb
request.host            #=> "www.example.com"
request.domain          #=> "www.example.com"
request.domain(n=2)     #=> "example.com"
request.port            #=> 80
request.protocol        #=> "http://"
request.query_string    #=> "q=duck+tales"
request.url             #=> "http://www.example.com/search?q=duck+tales"
request.fullpath        #=> "/search?q=duck+tales"
```

```rb
request.headers         # Returns a hash
```

```rb
request.format          #=> "text/html"
request.remote_ip       #=> "203.167.220.220"
request.local?          #=> true (if localhost/127.0.0.1)
```

```rb
request.xhr?
```

```rb
request.method          #=> "POST"
request.method_symbol   #=> :post
request.get?
request.post?
request.put?
request.delete?
request.head?
```

### response

```rb
response.body
response.status         #=> 404
response.location       # Redirect location
response.content_type
response.charset
response.headers
```

```rb
response.headers["Content-Type"] = "application/pdf"
```

### Streaming

```rb
send_data pdfdata, filename: "foo.pdf", type: "application/pdf"
send_file Rails.root.join('public','filename.txt') [filename: '..', type: '..']
```

### References

- [Guide](http://guides.rubyonrails.org/action_controller_overview.html)
- [HttpAuthentication::Basic](http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Basic.html)
- [HttpAuthentication::Token](http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html)
