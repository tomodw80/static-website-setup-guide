Building a static website on Amazon S3, distributing it using Amazon CloudFront, and managing DNS with Amazon Route 53. 

 

--- 

 

### **Step 1: Prepare Your Static Website Files** 

1. **Create your website files**: Ensure your static website files (HTML, CSS, JavaScript, images, etc.) are ready and organized in a folder. 

2. **Test locally**: Open your `index.html` file in a browser to ensure it works as expected. 

 

--- 

 

### **Step 2: Create an S3 Bucket** 

1. **Log in to AWS Management Console**: Go to [https://aws.amazon.com/](https://aws.amazon.com/) and sign in. 

2. **Open S3 Console**: Search for "S3" in the AWS Management Console and open the S3 service. 

3. **Create a Bucket**: 

   - Click **Create bucket**. 

   - Enter a unique **Bucket name** (e.g., `my-static-website`). 

   - Choose the **Region** closest to your audience. 

   - Leave other settings as default and click **Create bucket**. 

 

--- 

 

### **Step 3: Upload Your Website Files to S3** 

1. **Select your bucket**: Click on the bucket you just created. 

2. **Upload files**: 

   - Click **Upload**. 

   - Add your website files (e.g., `index.html`, `styles.css`, etc.). 

   - Click **Upload**. 

3. **Set permissions**: 

   - After uploading, select all files, click **Actions**, and choose **Make public**. 

   - Confirm by typing "make public" in the dialog box. 

 

--- 

 

### **Step 4: Enable Static Website Hosting on S3** 

1. **Go to Properties**: In your S3 bucket, click the **Properties** tab. 

2. **Enable static website hosting**: 

   - Scroll down to **Static website hosting** and click **Edit**. 

   - Select **Enable**. 

   - Set `index.html` as the **Index document**. 

   - Optionally, set an error document (e.g., `error.html`). 

   - Click **Save changes**. 

3. **Note the endpoint URL**: Under **Static website hosting**, you’ll see a URL (e.g., `http://my-static-website.s3-website-us-east-1.amazonaws.com`). This is your website URL. 

 

--- 

 

### **Step 5: Set Up Amazon CloudFront** 

1. **Open CloudFront Console**: Search for "CloudFront" in the AWS Management Console and open the service. 

2. **Create a Distribution**: 

   - Click **Create distribution**. 

   - Under **Origin domain**, select your S3 bucket (e.g., `my-static-website.s3.amazonaws.com`). 

   - Leave other settings as default. 

   - Scroll down to **Default cache behavior** and ensure **Viewer protocol policy** is set to **Redirect HTTP to HTTPS**. 

   - Click **Create distribution**. 

3. **Wait for deployment**: It may take a few minutes for the CloudFront distribution to deploy. Note the **Domain name** (e.g., `d12345.cloudfront.net`). 

 

--- 

 

### **Step 6: Configure Route 53 for DNS** 

1. **Open Route 53 Console**: Search for "Route 53" in the AWS Management Console and open the service. 

2. **Register a Domain (if needed)**: 

   - If you don’t have a domain, go to **Registered domains** and click **Register domain**. 

   - Follow the steps to register a new domain. 

3. **Create a Hosted Zone**: 

   - Go to **Hosted zones**. 

   - Click **Create hosted zone**. 

   - Enter your domain name (e.g., `example.com`) and click **Create**. 

4. **Create a Record Set**: 

   - In your hosted zone, click **Create record**. 

   - Choose **Simple routing** and click **Next**. 

   - Click **Define simple record**. 

   - Leave the **Record name** blank (for the root domain) or enter a subdomain (e.g., `www`). 

   - Set **Record type** to `A – Routes traffic to an IPv4 address`. 

   - Enable **Alias** and select your CloudFront distribution from the dropdown. 

   - Click **Create records**. 

 

--- 

 

### **Step 7: Test Your Website** 

1. **Wait for DNS propagation**: It may take a few minutes for DNS changes to propagate. 

2. **Visit your website**: Open your browser and navigate to your domain (e.g., `http://example.com` or `http://www.example.com`). 

3. **Verify HTTPS**: Ensure your website loads over HTTPS (e.g., `https://example.com`). 

 

--- 

 

### **Optional: Configure a Custom SSL Certificate** 

1. **Request a Certificate**: 

   - Open **AWS Certificate Manager (ACM)**. 

   - Click **Request a certificate**. 

   - Enter your domain name (e.g., `example.com` and `*.example.com` for wildcard). 

   - Follow the steps to validate the certificate using DNS. 

2. **Update CloudFront Distribution**: 

   - Go back to your CloudFront distribution. 

   - Click **Edit** under **General**. 

   - Set **Custom SSL certificate** to the certificate you just created. 

   - Save changes. 

 

--- 

 

### **Done!** 

Your static website is now hosted on Amazon S3, distributed via CloudFront, and accessible via your custom domain using Route 53. Let me know if you need further assistance! 