# GoDaddy DNS Configuration Guide
## Step-by-Step Instructions for shriengineeringandsteel.com

---

## What is DNS and Why Do We Need This?

**DNS (Domain Name System)** tells the internet where to find your website.

- Your domain: `shriengineeringandsteel.com` (purchased from GoDaddy)
- Your website files: Hosted on GitHub Pages
- **DNS connects them together**

Think of it like a phone book: DNS tells browsers "When someone types shriengineeringandsteel.com, send them to GitHub's servers."

---

## Step 1: Log in to GoDaddy

1. Go to: **https://www.godaddy.com**
2. Click **"Sign In"** (top-right corner)
3. Enter your **GoDaddy username/email** and **password**
4. Click **"Sign In"**

---

## Step 2: Access Your Domain's DNS Settings

1. After logging in, look for **"My Products"**
   - Usually in the top menu, or click your profile icon

2. You'll see a list of your products. Find:
   ```
   Domains
   └── shriengineeringandsteel.com
   ```

3. Next to `shriengineeringandsteel.com`, you'll see several buttons:
   - **DNS** ← Click this button
   - (Or it might say "Manage DNS")

4. You're now in the **DNS Management** page for your domain

---

## Step 3: Understand What You'll See

The DNS Management page shows different types of **DNS Records**:

- **A Records**: Points your domain to an IP address (numbers like 185.199.108.153)
- **CNAME Records**: Points one domain name to another domain name
- **MX Records**: For email (don't touch these)
- **TXT Records**: For verification (don't touch these)

You'll see a table that looks like this:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | (some IP) | 600 |
| CNAME | www | (something) | 1 Hour |

---

## Step 4: Delete Existing A Records (Clean Slate)

**Important**: First, we need to remove any existing A records that might conflict.

1. **Find the "A" records** in the table
   - Look for rows where **Type = "A"**
   - The **Name** column will show **"@"** (this means your main domain)

2. **Delete them**:
   - Click the **pencil/edit icon** or **trash/delete icon** next to each A record
   - Or click the record and select **"Delete"**
   - Confirm deletion

3. **Don't delete**:
   - CNAME records
   - MX records (email)
   - TXT records
   - NS (nameserver) records

---

## Step 5: Add New A Records (GitHub's IPs)

Now we'll add **4 new A records** pointing to GitHub Pages.

### Add Record #1:

1. Click the **"Add"** or **"Add Record"** button
2. Fill in the form:

   - **Type**: Select **"A"** from the dropdown
   - **Name** (or Host): Enter **@**
     - The **@** symbol means "the root domain" (shriengineeringandsteel.com)
   - **Value** (or Points to, or Address): **185.199.108.153**
   - **TTL**: Select **600** (or "1 Hour" or "Custom: 600 seconds")

3. Click **"Save"** or **"Add Record"**

### Add Record #2:

1. Click **"Add"** button again
2. Fill in:
   - **Type**: **A**
   - **Name**: **@**
   - **Value**: **185.199.109.153**
   - **TTL**: **600**
3. Click **"Save"**

### Add Record #3:

1. Click **"Add"** button again
2. Fill in:
   - **Type**: **A**
   - **Name**: **@**
   - **Value**: **185.199.110.153**
   - **TTL**: **600**
3. Click **"Save"**

### Add Record #4:

1. Click **"Add"** button again
2. Fill in:
   - **Type**: **A**
   - **Name**: **@**
   - **Value**: **185.199.111.153**
   - **TTL**: **600**
3. Click **"Save"**

### Summary - You Should Now Have:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**Why 4 records?** GitHub Pages uses 4 different servers for reliability. If one is down, the others keep your site running.

---

## Step 6: Update or Add CNAME Record for "www"

Now we need to make sure `www.shriengineeringandsteel.com` also works.

### Check if CNAME Record Exists:

1. Look in the DNS records table for:
   - **Type**: CNAME
   - **Name**: www

### If CNAME "www" Already Exists:

1. Click the **pencil/edit icon** next to it
2. Update the fields:
   - **Type**: **CNAME**
   - **Name**: **www**
   - **Value**: **YOUR-GITHUB-USERNAME.github.io**
     - Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username
     - Example: If your GitHub username is `abhishekkarkola`, enter: **abhishekkarkola.github.io**
   - **TTL**: **600** (or 1 Hour)
3. Click **"Save"**

### If CNAME "www" Doesn't Exist:

1. Click **"Add"** or **"Add Record"** button
2. Fill in:
   - **Type**: Select **"CNAME"** from dropdown
   - **Name**: **www**
   - **Value**: **YOUR-GITHUB-USERNAME.github.io**
     - Example: `abhishekkarkola.github.io`
   - **TTL**: **600**
3. Click **"Save"**

### Example - If Your GitHub Username is "abhishekkarkola":

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | abhishekkarkola.github.io | 600 |

---

## Step 7: Verify Your DNS Settings

After adding all records, your DNS table should look like this:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| CNAME | www | YOUR-USERNAME.github.io | 600 |
| ... | ... | (other existing records) | ... |

**Don't worry about other records** (MX, TXT, NS) - leave them as they are.

---

## Step 8: Save Changes

1. Look for a **"Save"** or **"Save Changes"** button at the bottom/top of the page
2. Click it to confirm all changes
3. You might see a message like "Changes saved successfully" or "DNS records updated"

---

## Step 9: Wait for DNS Propagation

### What is DNS Propagation?

After you update DNS records, it takes time for the changes to spread across the internet. This is called **propagation**.

- **Minimum wait**: 15-30 minutes
- **Average wait**: 1-4 hours
- **Maximum wait**: 24-48 hours (rare)
- **TTL 600** means it should propagate within 10-60 minutes

### While You Wait:

- **Don't panic** if your site doesn't work immediately
- **Don't change DNS again** - wait for propagation to complete
- **Check propagation status** (see next step)

---

## Step 10: Check DNS Propagation Status

### Method 1: Online Tool (Recommended)

1. Go to: **https://www.whatsmydns.net**
2. In the search box, enter: **shriengineeringandsteel.com**
3. Select record type: **A**
4. Click **"Search"**

**What you'll see**:
- A world map with checkmarks
- **Green checkmarks** = DNS has propagated in that location
- **Red X** = Still propagating
- You should see the IPs: `185.199.108.153`, etc.

5. Also check **www.shriengineeringandsteel.com**:
   - Enter: **www.shriengineeringandsteel.com**
   - Select: **CNAME**
   - Should show: `YOUR-USERNAME.github.io`

### Method 2: Terminal Command (Mac/Linux)

Open Terminal and run:

```bash
# Check A record
dig shriengineeringandsteel.com

# Check CNAME record
dig www.shriengineeringandsteel.com
```

Look for your GitHub IPs in the results.

### Method 3: Just Try It

After 30 minutes, try visiting:
- `http://shriengineeringandsteel.com`
- `http://www.shriengineeringandsteel.com`

---

## Common Questions & Troubleshooting

### Q: What does "@" mean?

**A**: The **@** symbol represents your root/apex domain (`shriengineeringandsteel.com` without the www).

---

### Q: What does "www" mean in CNAME?

**A**: It's the subdomain for `www.shriengineeringandsteel.com`. The CNAME makes www work alongside your main domain.

---

### Q: What is TTL?

**A**: **Time To Live** - how long (in seconds) DNS servers should cache your records.
- 600 seconds = 10 minutes
- Lower TTL = changes propagate faster, but more DNS queries
- 600 is a good balance

---

### Q: Can I use different TTL values?

**A**: Yes, but keep them all the same (600 recommended). Options:
- 600 = 10 minutes (Recommended for setup)
- 3600 = 1 hour (Good for stable sites)
- 86400 = 24 hours (After everything is working)

---

### Q: What if I see "Parked" or "Domain for Sale" page?

**A**: This means DNS hasn't propagated yet, or GitHub Pages isn't set up. Wait 1 hour and try again.

---

### Q: What if GoDaddy asks me to verify or shows a warning?

**A**: GoDaddy might show a warning like "These IPs don't match our servers" - that's OK! Click "Confirm" or "Continue anyway" because we're intentionally pointing to GitHub's servers, not GoDaddy's.

---

### Q: I don't see an "Add" button

**A**: Look for:
- **"Add Record"**
- **"Add New Record"**
- **"+"** symbol
- **"Create Record"**

Different GoDaddy interfaces use different labels.

---

### Q: Can I delete the CNAME record later?

**A**: No, keep it! The CNAME makes www.shriengineeringandsteel.com work. Without it, only shriengineeringandsteel.com (without www) will work.

---

### Q: What if I made a mistake?

**A**: No problem! You can:
1. Click the record to edit it
2. Fix the typo
3. Save again
4. Or delete it and re-add correctly

DNS changes are reversible.

---

## Visual Guide to DNS Settings

```
┌─────────────────────────────────────────────────┐
│         GoDaddy DNS Management Page             │
├─────────────────────────────────────────────────┤
│                                                 │
│  Domain: shriengineeringandsteel.com            │
│                                                 │
│  DNS Records:                                   │
│  ┌──────┬──────┬─────────────────────┬─────┐   │
│  │ Type │ Name │ Value               │ TTL │   │
│  ├──────┼──────┼─────────────────────┼─────┤   │
│  │  A   │  @   │ 185.199.108.153     │ 600 │ ←─┼─── Add this
│  │  A   │  @   │ 185.199.109.153     │ 600 │ ←─┼─── Add this
│  │  A   │  @   │ 185.199.110.153     │ 600 │ ←─┼─── Add this
│  │  A   │  @   │ 185.199.111.153     │ 600 │ ←─┼─── Add this
│  │ CNAME│ www  │ username.github.io  │ 600 │ ←─┼─── Add/Edit this
│  └──────┴──────┴─────────────────────┴─────┘   │
│                                                 │
│  [Add Record]  [Save Changes]                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Quick Copy-Paste Reference

### A Records (Add all 4):

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600
```

```
Type: A
Name: @
Value: 185.199.109.153
TTL: 600
```

```
Type: A
Name: @
Value: 185.199.110.153
TTL: 600
```

```
Type: A
Name: @
Value: 185.199.111.153
TTL: 600
```

### CNAME Record:

```
Type: CNAME
Name: www
Value: YOUR-GITHUB-USERNAME.github.io
TTL: 600
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

---

## After DNS is Configured

Once DNS propagates (1-4 hours), your domain will point to GitHub Pages.

Then, in GitHub:
1. Go to your repository settings
2. Click "Pages"
3. Under "Custom domain", enter: `shriengineeringandsteel.com`
4. Click Save
5. Wait a few minutes
6. Check "Enforce HTTPS"

Your site will be live at:
- ✅ https://shriengineeringandsteel.com
- ✅ https://www.shriengineeringandsteel.com

---

## Summary Checklist

- [ ] Log in to GoDaddy
- [ ] Go to "My Products" → Find your domain
- [ ] Click "DNS" button
- [ ] Delete old A records (if any)
- [ ] Add 4 new A records with GitHub IPs
- [ ] Update/Add CNAME record for "www"
- [ ] Save all changes
- [ ] Wait for DNS propagation (1-4 hours)
- [ ] Check propagation at whatsmydns.net
- [ ] Configure custom domain in GitHub Pages
- [ ] Enable HTTPS in GitHub Pages

---

**Need Help?**
- **GoDaddy Support**: 1-480-505-8877 (24/7)
- **GoDaddy Chat**: Available in your account dashboard

---

**Created**: January 10, 2026
**For**: Shri Engineering and Steel
**Domain**: shriengineeringandsteel.com
