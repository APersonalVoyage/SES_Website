# DNS Setup - Super Simple Version

## What You Need to Do in GoDaddy

### 1️⃣ Log in to GoDaddy
Go to https://www.godaddy.com → Sign In

### 2️⃣ Find Your Domain
Click "My Products" → Find `shriengineeringandsteel.com` → Click **DNS** button

### 3️⃣ Add These Records

#### Add 4 A Records (one by one):

**Record 1:**
- Type: `A`
- Name: `@`
- Value: `185.199.108.153`
- TTL: `600`

**Record 2:**
- Type: `A`
- Name: `@`
- Value: `185.199.109.153`
- TTL: `600`

**Record 3:**
- Type: `A`
- Name: `@`
- Value: `185.199.110.153`
- TTL: `600`

**Record 4:**
- Type: `A`
- Name: `@`
- Value: `185.199.111.153`
- TTL: `600`

#### Add/Edit 1 CNAME Record:

**CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `YOUR-GITHUB-USERNAME.github.io` ← Replace with your actual username
- TTL: `600`

**Example**: If your GitHub username is "abhishekkarkola", use:
- Value: `abhishekkarkola.github.io`

### 4️⃣ Save
Click "Save Changes" button

### 5️⃣ Wait
Wait 1-4 hours for DNS to propagate worldwide

---

## Copy-Paste Values

**GitHub IP Addresses** (for A records):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**What "@" means**: Your main domain (shriengineeringandsteel.com)

**What "www" means**: The www version (www.shriengineeringandsteel.com)

---

## Check If It's Working

After 1 hour, visit: https://www.whatsmydns.net
- Enter: `shriengineeringandsteel.com`
- Select: `A`
- You should see the GitHub IPs

---

That's it! Simple as that.

📖 For detailed instructions with screenshots descriptions, see: **GODADDY_DNS_SETUP.md**
