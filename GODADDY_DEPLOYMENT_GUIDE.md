# GoDaddy Deployment Guide for shriengineeringandsteel.com

## Overview

This guide will walk you through deploying your Shri Engineering and Steel website to your GoDaddy domain **shriengineeringandsteel.com**.

---

## Prerequisites

- [x] GoDaddy domain purchased: shriengineeringandsteel.com
- [ ] GoDaddy hosting plan (Web Hosting, WordPress Hosting, or cPanel)
- [ ] GoDaddy account login credentials

---

## Step 1: Check Your GoDaddy Hosting

### Option A: If You Already Have Hosting

1. Log in to your GoDaddy account: https://www.godaddy.com
2. Click on your profile icon → **My Products**
3. Look for "Web Hosting" or "cPanel Hosting" associated with your domain

### Option B: If You Need to Purchase Hosting

1. Go to GoDaddy Web Hosting: https://www.godaddy.com/hosting/web-hosting
2. Choose a plan:
   - **Economy Plan** (Recommended for your needs) - ~$5-10/month
   - Includes: 1 website, 100 GB storage, unmetered bandwidth
3. Complete the purchase
4. Associate it with your domain: shriengineeringandsteel.com

---

## Step 2: Access Your Hosting Control Panel

### Method 1: cPanel (Most Common)

1. Log in to GoDaddy
2. Go to **My Products**
3. Find your Web Hosting plan
4. Click **Manage** next to your hosting plan
5. Scroll down to find **cPanel Admin** button
6. Click to open cPanel in a new tab

### Method 2: File Manager (Alternative)

1. In GoDaddy Products, find your hosting
2. Click **Manage**
3. Look for **File Manager** option
4. Click to open

---

## Step 3: Upload Your Website Files

### Files to Upload (7 files + 1 folder)

```
✅ index.html          (Main website file)
✅ profile.html        (PDF-ready version)
✅ styles.css          (Styling)
✅ script.js           (Interactive features)
✅ README.md           (Documentation)
✅ SETUP_GUIDE.md      (Setup instructions)
✅ PROJECT_SUMMARY.md  (Project details)
✅ Images/             (Folder with 12 images)
```

### Upload Process (cPanel File Manager)

1. **Open File Manager** in cPanel
2. **Navigate to public_html folder**
   - This is your website's root directory
   - Everything here will be visible on shriengineeringandsteel.com

3. **Clear the default files** (optional but recommended):
   - Delete any default files like `index.html`, `default.html`, `coming-soon.html`
   - Keep `.htaccess` if it exists

4. **Upload your files**:

   **Option A: Upload One by One**
   - Click **Upload** button at the top
   - Drag and drop files or click "Select File"
   - Upload these files to `public_html`:
     - index.html
     - profile.html
     - styles.css
     - script.js
     - README.md
     - SETUP_GUIDE.md
     - PROJECT_SUMMARY.md

   **Option B: Upload as ZIP (Faster)**
   - First, create a ZIP file of all your website files on your computer
   - In File Manager, click **Upload**
   - Upload the ZIP file
   - Right-click the uploaded ZIP file → **Extract**
   - Delete the ZIP file after extraction

5. **Upload Images Folder**:
   - In File Manager, click **+ Folder** button
   - Create a folder named: `Images` (capital I)
   - Open the Images folder
   - Click **Upload**
   - Upload all 12 image files from your local Images folder

6. **Verify Structure**:

   Your `public_html` folder should now look like this:
   ```
   public_html/
   ├── index.html
   ├── profile.html
   ├── styles.css
   ├── script.js
   ├── README.md
   ├── SETUP_GUIDE.md
   ├── PROJECT_SUMMARY.md
   └── Images/
       ├── 04-1536x654.webp
       ├── 687f31c1f1410d2f759d2639_MMS-000-p-1080.png
       ├── GM-2P_1-6.webp
       ├── STREET LIGHT POLE.jfif
       ├── Water-Solar-Pump-500x309.png
       ├── WhatsApp Image 2026-01-04 at 12.44.14.jpeg
       ├── WhatsApp Image 2026-01-04 at 12.44.17.jpeg
       ├── WhatsApp Image 2026-01-04 at 12.44.19.jpeg
       ├── WhatsApp Image 2026-01-04 at 12.44.20.jpeg
       ├── WhatsApp Image 2026-01-04 at 12.44.21.jpeg
       ├── pole-mounted-structure-768x768.jpg
       └── .htaccess (if exists)
   ```

---

## Step 4: Set File Permissions (Important)

1. In File Manager, select `index.html`
2. Right-click → **Change Permissions**
3. Set to: **644** (Owner: Read+Write, Group: Read, Public: Read)
4. Repeat for all files (styles.css, script.js, profile.html)
5. For the `Images` folder:
   - Right-click → **Change Permissions**
   - Set to: **755**
   - Check "Recurse into subdirectories"
   - Apply to all images

---

## Step 5: Configure DNS (Connect Domain to Hosting)

### Check if Domain is Already Connected

1. Go to GoDaddy **My Products**
2. Find your domain: shriengineeringandsteel.com
3. Click **DNS** button next to it
4. Check the **A Record**:
   - If it points to your hosting IP, you're good!
   - If not, follow steps below

### Connect Domain to Hosting

1. In **My Products**, find your Web Hosting
2. Click **Manage**
3. Find the **Server IP Address** (write it down)
4. Go back to **My Products** → Find your domain
5. Click **DNS** next to shriengineeringandsteel.com
6. Scroll to **A Records** section
7. Edit the A Record with:
   - **Type**: A
   - **Name**: @ (represents your domain)
   - **Value**: [Your hosting IP address]
   - **TTL**: 600 seconds (default)
8. Save changes

### Add WWW Record (Important!)

1. In the same DNS settings
2. Add/Edit A Record:
   - **Type**: A
   - **Name**: www
   - **Value**: [Same hosting IP address]
   - **TTL**: 600 seconds
3. Save changes

---

## Step 6: Wait for DNS Propagation

- **Time Required**: 1-24 hours (usually 1-4 hours)
- **What's Happening**: Your domain is being connected to your hosting server globally

### Check DNS Propagation Status

1. Visit: https://www.whatsmydns.net
2. Enter: shriengineeringandsteel.com
3. Select: A record
4. Click **Search**
5. Green checkmarks = DNS is propagated in that location

---

## Step 7: Test Your Website

### After DNS Propagation

1. Open a browser
2. Visit: **http://shriengineeringandsteel.com**
3. Also test: **http://www.shriengineeringandsteel.com**

### What You Should See

✅ Your company profile homepage
✅ Professional blue/purple gradient design
✅ All images loading correctly
✅ Interactive navigation menu working
✅ Smooth scrolling between sections

---

## Step 8: Set Up SSL Certificate (HTTPS)

### Enable Free SSL in GoDaddy

1. Go to GoDaddy **My Products**
2. Find your Web Hosting plan
3. Click **Manage**
4. Scroll to **SSL Certificates** section
5. Click **Set Up** or **Manage** next to Free SSL
6. Select your domain: shriengineeringandsteel.com
7. Wait 5-10 minutes for activation

### Force HTTPS (Redirect HTTP to HTTPS)

1. Open cPanel File Manager
2. Navigate to `public_html`
3. Find `.htaccess` file (if it doesn't exist, create it)
4. Right-click → **Edit**
5. Add this code at the top:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force WWW
RewriteCond %{HTTP_HOST} !^www\.
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

6. Save the file

### Test HTTPS

1. Visit: **https://shriengineeringandsteel.com**
2. Check for padlock icon in browser address bar
3. Certificate should show as valid

---

## Step 9: Update Contact Information (When Ready)

### Edit Files Online (cPanel)

1. Open cPanel File Manager
2. Navigate to `public_html`
3. Right-click `index.html` → **Edit**
4. Search for (Ctrl+F): `[Your`
5. Replace placeholders with actual information:
   - `[Your Address Here]` → Your business address
   - `[Your Phone Number]` → Your phone number
   - `[Your Email Address]` → Your email
   - `[Your Website]` → shriengineeringandsteel.com
6. Click **Save Changes**
7. Repeat for `profile.html`

---

## Step 10: Set Up Professional Email (Optional)

### Create Email Addresses

1. In GoDaddy **My Products**
2. Find **Email** section
3. If you have email hosting, click **Manage**
4. Create email addresses:
   - info@shriengineeringandsteel.com
   - sales@shriengineeringandsteel.com
   - support@shriengineeringandsteel.com

### Or Use Google Workspace

1. GoDaddy offers Google Workspace integration
2. Professional Gmail with your domain
3. Cost: ~$6/user/month
4. Better features and reliability

---

## Troubleshooting

### Website Not Loading

**Problem**: "This site can't be reached" or 404 error

**Solutions**:
1. Check DNS propagation (Step 6)
2. Verify A records point to correct IP
3. Ensure `index.html` is in `public_html` (not in a subfolder)
4. Clear browser cache (Ctrl+Shift+Delete)
5. Try different browser or incognito mode

### Images Not Showing

**Problem**: Broken image icons or missing images

**Solutions**:
1. Check folder name is exactly `Images` (capital I)
2. Verify all images are uploaded to `public_html/Images/`
3. Check file permissions (should be 644 for images)
4. Right-click image in browser → "Open in new tab" to see error
5. Check browser console (F12) for 404 errors

### Styling Broken

**Problem**: Website looks plain, no colors or layout

**Solutions**:
1. Verify `styles.css` is in same folder as `index.html`
2. Check `styles.css` permissions (should be 644)
3. Clear browser cache
4. Check browser console (F12) for CSS loading errors

### Menu Not Working

**Problem**: Navigation menu doesn't open or scroll doesn't work

**Solutions**:
1. Verify `script.js` is uploaded
2. Check `script.js` permissions (should be 644)
3. Open browser console (F12) and check for JavaScript errors
4. Ensure file is in same folder as `index.html`

### SSL Not Working

**Problem**: "Not Secure" warning or certificate errors

**Solutions**:
1. Wait 24 hours after SSL setup
2. Force HTTPS using .htaccess (see Step 8)
3. Clear browser cache
4. Contact GoDaddy support for SSL troubleshooting

---

## Quick Command Reference

### File Permissions

- **Files** (HTML, CSS, JS): 644
- **Folders**: 755
- **.htaccess**: 644

### Important Locations

- **Website files go in**: `/public_html/`
- **Images go in**: `/public_html/Images/`
- **Logs are in**: `/logs/` or `/error_log`

---

## After Deployment Checklist

- [ ] Website loads at shriengineeringandsteel.com
- [ ] WWW version works (www.shriengineeringandsteel.com)
- [ ] All images display correctly
- [ ] Navigation menu functions properly
- [ ] Smooth scrolling works
- [ ] SSL certificate installed (HTTPS)
- [ ] HTTP redirects to HTTPS
- [ ] Contact information updated
- [ ] Mobile responsive (test on phone)
- [ ] PDF version accessible (shriengineeringandsteel.com/profile.html)

---

## Alternative Deployment Methods

### Method 1: FTP Upload (For Technical Users)

1. Get FTP credentials from GoDaddy hosting settings
2. Download FileZilla or any FTP client
3. Connect using:
   - Host: ftp.shriengineeringandsteel.com
   - Username: [from GoDaddy]
   - Password: [from GoDaddy]
   - Port: 21
4. Upload files to `/public_html/` folder

### Method 2: GoDaddy Website Builder (Not Recommended)

- GoDaddy Website Builder uses drag-and-drop
- Your custom HTML won't work with it
- Stick with File Manager or FTP upload

---

## Getting Help

### GoDaddy Support

- **Phone**: 1-480-505-8877 (US)
- **Chat**: Available 24/7 in GoDaddy account
- **Help Center**: https://www.godaddy.com/help

### Common Questions to Ask Support

1. "How do I access my cPanel File Manager?"
2. "What is my hosting server IP address?"
3. "How do I set up free SSL certificate?"
4. "How do I point my domain to my hosting?"

---

## Next Steps After Deployment

1. **Test Everything**: Check all sections, images, and features
2. **Update Contact Info**: Add your real business details
3. **Share Your Website**: Send link to clients and partners
4. **SEO Optimization**: Add meta tags for Google search
5. **Google Analytics**: Track website visitors
6. **Google My Business**: List your company online
7. **Social Media**: Share your new website

---

## Maintenance

### Regular Updates

- **Monthly**: Check website loads correctly
- **Quarterly**: Update product information
- **Annually**: Renew domain and hosting

### Backup Your Website

1. In cPanel, use **Backup Wizard**
2. Download full backup to your computer
3. Store safely in case you need to restore

---

## Cost Summary

### Typical GoDaddy Costs

- **Domain Registration**: $15-20/year (already purchased)
- **Web Hosting**: $60-120/year (Economy plan)
- **Free SSL**: Included with hosting
- **Email Hosting**: $60-80/year (optional)
- **Total Year 1**: ~$75-140/year

---

## Your Website URLs

After deployment, your website will be accessible at:

- **Main Website**: https://shriengineeringandsteel.com
- **With WWW**: https://www.shriengineeringandsteel.com
- **PDF Version**: https://shriengineeringandsteel.com/profile.html
- **cPanel**: https://shriengineeringandsteel.com:2083

---

**Ready to Deploy!** Follow the steps above and your website will be live in a few hours.

**Need Help?** GoDaddy support is available 24/7 to assist with hosting questions.

---

**Created**: January 10, 2026
**For**: Shri Engineering and Steel
**Domain**: shriengineeringandsteel.com
**Status**: Ready for Deployment
