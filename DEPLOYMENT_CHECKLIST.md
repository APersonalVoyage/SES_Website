# Quick Deployment Checklist for shriengineeringandsteel.com

## Pre-Deployment

- [x] Domain purchased: shriengineeringandsteel.com
- [ ] GoDaddy hosting plan purchased
- [ ] GoDaddy account login credentials ready

---

## Files Ready to Upload (Check List)

### Main Files (7)
- [x] index.html (Main website)
- [x] profile.html (PDF version)
- [x] styles.css (Styling)
- [x] script.js (Interactive features)
- [x] README.md
- [x] SETUP_GUIDE.md
- [x] PROJECT_SUMMARY.md

### Images Folder (12 files)
- [x] 04-1536x654.webp
- [x] 687f31c1f1410d2f759d2639_MMS-000-p-1080.png
- [x] GM-2P_1-6.webp
- [x] STREET LIGHT POLE.jfif
- [x] Water-Solar-Pump-500x309.png
- [x] WhatsApp Image 2026-01-04 at 12.44.14.jpeg
- [x] WhatsApp Image 2026-01-04 at 12.44.17.jpeg
- [x] WhatsApp Image 2026-01-04 at 12.44.19.jpeg
- [x] WhatsApp Image 2026-01-04 at 12.44.20.jpeg
- [x] WhatsApp Image 2026-01-04 at 12.44.21.jpeg
- [x] pole-mounted-structure-768x768.jpg

**Total**: 7 files + 1 folder (Images) with 12 images

---

## Deployment Steps (Quick Version)

### Step 1: Access GoDaddy
- [ ] Log in to GoDaddy.com
- [ ] Go to "My Products"
- [ ] Find your Web Hosting plan
- [ ] Click "Manage"

### Step 2: Open File Manager
- [ ] Find "cPanel Admin" or "File Manager" button
- [ ] Click to open
- [ ] Navigate to `public_html` folder

### Step 3: Upload Files
- [ ] Delete any default files in public_html
- [ ] Upload all 7 main files to public_html
- [ ] Create "Images" folder in public_html
- [ ] Upload all 12 images to the Images folder

### Step 4: Check File Structure
Your public_html should look like this:
```
public_html/
├── index.html ✓
├── profile.html ✓
├── styles.css ✓
├── script.js ✓
├── README.md ✓
├── SETUP_GUIDE.md ✓
├── PROJECT_SUMMARY.md ✓
└── Images/
    └── [12 images] ✓
```

### Step 5: Set Permissions
- [ ] All files: 644
- [ ] Images folder: 755
- [ ] All images: 644

### Step 6: Configure DNS
- [ ] Get hosting IP address from GoDaddy
- [ ] Go to domain DNS settings
- [ ] Point A record (@) to hosting IP
- [ ] Point A record (www) to hosting IP
- [ ] Save changes

### Step 7: Wait for DNS
- [ ] Wait 1-24 hours for DNS propagation
- [ ] Check status at whatsmydns.net

### Step 8: Test Website
- [ ] Visit http://shriengineeringandsteel.com
- [ ] Check if website loads
- [ ] Verify all images appear
- [ ] Test navigation menu
- [ ] Test on mobile device

### Step 9: Enable SSL
- [ ] Set up free SSL certificate in GoDaddy
- [ ] Wait 5-10 minutes for activation
- [ ] Add HTTPS redirect code to .htaccess
- [ ] Test https://shriengineeringandsteel.com

### Step 10: Final Verification
- [ ] Website loads with HTTPS
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] Menu works smoothly
- [ ] Mobile responsive working
- [ ] PDF version accessible at /profile.html

---

## Update Contact Info (Later)

When ready, edit these files and replace placeholders:

### In index.html:
- [ ] `[Your Address Here]` → Your address
- [ ] `[Your Phone Number]` → Your phone
- [ ] `[Your Email Address]` → Your email
- [ ] `[Your Website]` → shriengineeringandsteel.com

### In profile.html:
- [ ] `[Your Address Line 1]` → Address line 1
- [ ] `[Your Address Line 2]` → Address line 2
- [ ] `[Your Phone Number]` → Your phone
- [ ] `[Your Mobile Number]` → Your mobile
- [ ] `[Your Email Address]` → Your email
- [ ] `[Your Website]` → shriengineeringandsteel.com

---

## Troubleshooting Quick Fixes

### Website Not Loading
1. Check DNS propagation (whatsmydns.net)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Wait 24 hours if just deployed

### Images Not Showing
1. Check folder is named exactly "Images" (capital I)
2. Verify images are in public_html/Images/
3. Check file permissions (644)

### No Styling/Colors
1. Verify styles.css is uploaded
2. Check it's in public_html (same folder as index.html)
3. Clear browser cache

---

## Important URLs

- **GoDaddy Login**: https://www.godaddy.com
- **Your Domain**: https://shriengineeringandsteel.com
- **DNS Check**: https://www.whatsmydns.net
- **GoDaddy Support**: 1-480-505-8877

---

## After Going Live

- [ ] Share website with team
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile phone
- [ ] Share link with clients
- [ ] Update business cards with website
- [ ] Add to email signature
- [ ] Share on social media
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics (optional)

---

## Need Help?

📖 **Full Guide**: See GODADDY_DEPLOYMENT_GUIDE.md for detailed instructions
📞 **GoDaddy Support**: Available 24/7 via chat or phone
💬 **Support Chat**: Log in to GoDaddy and click chat icon

---

**Estimated Time**: 30-60 minutes (plus DNS propagation wait time)
**Difficulty**: Easy to Medium
**Required**: GoDaddy account, hosting plan, domain

---

Good luck with your deployment! Your professional website will be live soon! 🚀
