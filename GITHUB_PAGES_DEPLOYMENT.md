# GitHub Pages Deployment Guide
## For shriengineeringandsteel.com

**Status**: Git repository initialized and ready to push!

---

## What's Already Done ✅

- [x] Git repository initialized
- [x] All website files added to git
- [x] Initial commit created
- [x] .gitignore configured

---

## Next Steps: Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Sign in** to your account (or create one if needed)
3. **Click the "+" icon** in top-right corner
4. **Select "New repository"**

5. **Repository Settings**:
   - **Repository name**: `shriengineeringandsteel` or `SES_Website`
   - **Description**: "Professional company website for Shri Engineering and Steel"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README (we already have files)
   - **DO NOT** add .gitignore (we already have one)
   - **DO NOT** choose a license yet

6. **Click "Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. **Use these commands**:

```bash
# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/shriengineeringandsteel.git

# Push your code
git branch -M main
git push -u origin main
```

**Example** (if your username is "abhishekkarkola"):
```bash
git remote add origin https://github.com/abhishekkarkola/shriengineeringandsteel.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (top navigation)
3. **Click "Pages"** in the left sidebar (under "Code and automation")
4. **Under "Source"**:
   - Select **"Deploy from a branch"**
5. **Under "Branch"**:
   - Select **"main"** (or "master")
   - Select **"/ (root)"**
   - Click **"Save"**

6. **Wait 1-2 minutes** for deployment

7. **Your site will be live at**:
   - `https://YOUR-USERNAME.github.io/shriengineeringandsteel/`

### Step 4: Configure Custom Domain (shriengineeringandsteel.com)

#### In GitHub:

1. **Still in Settings → Pages**
2. **Under "Custom domain"**:
   - Enter: `shriengineeringandsteel.com`
   - Click **"Save"**
3. **Wait for DNS check** (it will show "DNS check in progress")
4. **Check "Enforce HTTPS"** (after DNS is configured)

#### In GoDaddy (DNS Configuration):

1. **Log in to GoDaddy**
2. **Go to "My Products"**
3. **Find your domain**: shriengineeringandsteel.com
4. **Click "DNS"** button

5. **Add/Update A Records** (for apex domain):

   Delete any existing A records and add these **4 A records**:

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | A | @ | 185.199.108.153 | 600 |
   | A | @ | 185.199.109.153 | 600 |
   | A | @ | 185.199.110.153 | 600 |
   | A | @ | 185.199.111.153 | 600 |

6. **Add CNAME Record** (for www):

   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | CNAME | www | YOUR-USERNAME.github.io | 600 |

   Replace `YOUR-USERNAME` with your actual GitHub username.

7. **Save all changes**

8. **Wait for DNS propagation** (15 minutes to 24 hours, usually ~1 hour)

### Step 5: Verify Deployment

**After DNS propagates**:

1. Visit: `https://shriengineeringandsteel.com`
2. Visit: `https://www.shriengineeringandsteel.com`
3. Both should show your website with HTTPS (padlock icon)

**Check DNS Propagation**:
- Go to: https://www.whatsmydns.net
- Enter: `shriengineeringandsteel.com`
- Select: `A`
- You should see the GitHub IPs (185.199.108-111.153)

---

## Complete Command Reference

### If you need to run the commands from terminal:

```bash
# Navigate to your project
cd /Users/abhishekkarkola/SES_Website

# Add GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/shriengineeringandsteel.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### For future updates to your website:

```bash
# After making changes to files
git add .
git commit -m "Update website content"
git push

# Changes will automatically deploy to GitHub Pages in ~1 minute
```

---

## Troubleshooting

### "Repository not found" error when pushing

**Solution**:
1. Make sure you created the repository on GitHub first
2. Double-check your username in the URL
3. You may need to authenticate (enter GitHub username and personal access token)

### How to create a Personal Access Token (if needed):

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "SES Website Deployment"
4. Select scopes: `repo` (check the box)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

### DNS not propagating

**Solution**:
1. Wait at least 1 hour
2. Clear browser cache
3. Try incognito mode
4. Check whatsmydns.net for propagation status
5. Verify you entered the correct GitHub IP addresses

### "DNS check failed" in GitHub Pages

**Solution**:
1. Make sure you added all 4 A records in GoDaddy
2. Make sure CNAME record points to YOUR-USERNAME.github.io
3. Wait 30 minutes and refresh the GitHub Pages settings page
4. Remove and re-add the custom domain in GitHub Pages settings

### HTTPS not working

**Solution**:
1. Wait 24 hours after DNS propagation
2. In GitHub Pages settings, uncheck "Enforce HTTPS"
3. Wait 10 minutes
4. Check "Enforce HTTPS" again
5. Wait another 10 minutes

---

## Benefits of GitHub Pages

✅ **FREE hosting** (no monthly costs)
✅ **Fast global CDN** (faster than most paid hosting)
✅ **Free SSL/HTTPS** (automatic security certificate)
✅ **Easy updates** (just git push)
✅ **Version control** (track all changes)
✅ **99.9% uptime** (reliable infrastructure)
✅ **No server management** (GitHub handles everything)

---

## Updating Your Website

Whenever you want to update content:

1. **Edit your files locally** (index.html, styles.css, etc.)
2. **Save changes**
3. **Run these commands**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. **Wait ~1 minute** - changes go live automatically!

---

## File Structure on GitHub

Your repository will contain:

```
shriengineeringandsteel/
├── .gitignore
├── index.html              ← Homepage
├── profile.html            ← PDF version
├── styles.css              ← Styling
├── script.js               ← Interactive features
├── README.md               ← Documentation
├── SETUP_GUIDE.md
├── PROJECT_SUMMARY.md
├── DEPLOYMENT_CHECKLIST.md
├── GODADDY_DEPLOYMENT_GUIDE.md
├── GITHUB_PAGES_DEPLOYMENT.md
└── Images/                 ← All project photos
    ├── [12 image files]
```

---

## Important URLs

- **GitHub**: https://github.com
- **Create Token**: https://github.com/settings/tokens
- **DNS Check**: https://www.whatsmydns.net
- **GoDaddy DNS**: https://dcc.godaddy.com/manage/dns
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

## Cost Comparison

| Service | GitHub Pages | GoDaddy Hosting |
|---------|--------------|-----------------|
| Hosting | **FREE** | $60-120/year |
| SSL Certificate | **FREE** | Included |
| Bandwidth | **Unlimited** | Limited |
| Storage | 1 GB | 100 GB |
| Updates | **Instant** | FTP upload |
| **Total** | **$0/year** | $60-120/year |

**Domain cost** (same for both): ~$15-20/year

---

## Security & Performance

GitHub Pages provides:
- **DDoS protection**
- **Global CDN** (fast loading worldwide)
- **Automatic HTTPS**
- **Automatic compression**
- **High availability**

---

## Need Help?

### GitHub Support
- **Docs**: https://docs.github.com/en/pages
- **Community**: https://github.community

### For DNS Issues
- **GoDaddy Support**: 1-480-505-8877
- **DNS Propagation**: https://www.whatsmydns.net

---

## Quick Start Summary

1. ✅ **Create GitHub account** (if needed)
2. ✅ **Create new repository** on GitHub
3. ✅ **Push code** using git commands
4. ✅ **Enable GitHub Pages** in repository settings
5. ✅ **Configure custom domain** in GitHub Pages
6. ✅ **Update GoDaddy DNS** with GitHub IPs
7. ✅ **Wait for DNS** to propagate
8. ✅ **Visit your live site!**

---

## Your Website Will Be Live At:

- **Primary**: https://shriengineeringandsteel.com
- **With WWW**: https://www.shriengineeringandsteel.com
- **PDF Version**: https://shriengineeringandsteel.com/profile.html
- **GitHub URL**: https://YOUR-USERNAME.github.io/shriengineeringandsteel/

---

**Estimated Time**: 20-30 minutes + DNS propagation (1-4 hours)

**Status**: Ready to deploy! Just follow the steps above.

Good luck! Your professional website will be live on GitHub Pages soon! 🚀

---

**Created**: January 10, 2026
**For**: Shri Engineering and Steel
**Domain**: shriengineeringandsteel.com
**Hosting**: GitHub Pages (FREE)
