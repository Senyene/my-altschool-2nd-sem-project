# Landing Page Deployment

Live demo ➜ **http://34.249.11.6** (or **https://pickAI.ddns.net**)

![Screenshot of Landing Page](Screenshot.png)

---

## 📋 Project Goal
Build and deploy a landing page for my pickAI website on an Ubuntu server with Nginx and HTTPS.

## 🛠️ Steps Taken

| Steps | Summary |
|------|---------|
| 1 | **Provisioned an AWS EC2 server** · Ubuntu 22.04 · `34.249.11.6` |
| 2 | **Updated & secured the server** · `sudo apt update && sudo apt upgrade -y` |
| 3 | **Installed Nginx** · `sudo apt install nginx -y` |
| 4 | **Uploaded website from my local machine** (`scp -i key.pem -r ./my-landing-page ubuntu@IP:~/`) |
| 5 | **Moved files** · `sudo mv ~/my-landing-page/* /var/www/html/` |
| 6 | **Configured Nginx** · `/etc/nginx/sites-available/default` → `root /var/www/html;` |
| 7 | **Pointed my No-IP domain** `myproject.ddns.net` → A-record → `34.249.11.6` |
| 8 | **Installed Certbot** · `sudo apt install certbot python3-certbot-nginx -y` |
| 9 | **Obtained SSL** · `sudo certbot --nginx -d myproject.ddns.net` |
| 10 | **Verifed auto-renewal was working** · `systemctl list-timers | grep certbot` |

## ⚙️ Tech Stack
- **Nginx 1.24** for static hosting
- **Let’s Encrypt / Certbot** for HTTPS
- **No-IP Dynamic DNS** free sub-domain

## 📄 Useful Commands i used

```bash
# Upload new files
scp -i key.pem ./path/to/file ubuntu@34.249.11.6:~

# Move into web root (on server)
sudo mv ~/file /var/www/html/
sudo systemctl reload nginx
