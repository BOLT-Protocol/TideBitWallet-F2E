# tidebit-wallet

## develop script

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deploy to AWS

### Install nginx

```
sudo apt-get update
sudo apt-get install nginx -y
```

### update nginx config

```
sudo vim /etc/init.d/nginx/nginx.conf
```

```
server {
    listen 80;
    server_name wallet.tidebit.network;
    index index.php index.html index.htm default.php default.htm default.html;
    root /var/www/html;

    # vue-router setting
    location / {
        try_files $uri $uri/ @router;
        index index.html;
    }
    location @router {
        rewrite ^.*$ /index.html last;
    }

}
```

### reload nginx config

```
sudo /etc/init.d/nginx reload
```

## clone && build

```
git clone https://github.com/BOLT-Protocol/TideBitWallet-F2E.git
cd TideBitWallet-F2E
npm i
sh ./update.sh
```