#!/bin/bash
exec > /var/log/user-data.log 2>&1
echo "Starting ABK Psychological Services automated deployment..."

# Update system packages
apt-get update -y

# Install Node.js 20.x LTS, Git, Nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs git nginx build-essential

# Install PM2 process manager
npm install -g pm2

# Clone GitHub repository
mkdir -p /var/www
cd /var/www
git clone https://github.com/eebeid/ABKPsych.git abkpsych
cd /var/www/abkpsych

# Install dependencies and build Next.js site
npm install
npm run build

# Configure PM2 to run Next.js server on port 3000
pm2 start npm --name "abkpsych" -- run start
pm2 save
env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u root --hp /root

# Configure Nginx Reverse Proxy
cat << 'EOF' > /etc/nginx/sites-available/abkpsych
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

ln -sf /etc/nginx/sites-available/abkpsych /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx

echo "Deployment complete! ABK Psychological Services is live on Nginx."
