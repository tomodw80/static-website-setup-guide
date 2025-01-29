import markdown # type: ignore
import re

# Read the Markdown file
with open("static_website_setup.md", "r", encoding="utf-8") as md_file:
    md_content = md_file.read()

# Convert markdown to HTML
html_content = markdown.markdown(md_content)

# Add `id` attributes to headers for navigation
html_content = re.sub(r'<h3>(.*?)</h3>', r'<h3 id="\1">\1</h3>', html_content)

# Create a styled HTML template with smooth scrolling
html_template = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Static Website Setup Guide</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
    <script defer src="script.js"></script>
</head>
<body>
    <nav>
        <h1>🚀 Static Website Guide</h1>
         <button id="darkModeToggle">🌙</button>
    </nav>
    <div class="container">
        <aside>
            <h2>📌 Steps</h2>
            <ul>
                <li><a href="#Step 1: Prepare Your Static Website Files">Step 1: Prepare Files</a></li>
                <li><a href="#Step 2: Create an S3 Bucket">Step 2: Create S3 Bucket</a></li>
                <li><a href="#Step 3: Upload Your Website Files to S3">Step 3: Upload Files</a></li>
                <li><a href="#Step 4: Enable Static Website Hosting on S3">Step 4: Enable Hosting</a></li>
                <li><a href="#Step 5: Set Up Amazon CloudFront">Step 5: Set Up CloudFront</a></li>
                <li><a href="#Step 6: Configure Route 53 for DNS">Step 6: Configure Route 53</a></li>
                <li><a href="#Step 7: Test Your Website">Step 7: Test Your Website</a></li>
            </ul>
        </aside>
        <main>
            {html_content}
        </main>
    </div>
    
    <!-- Floating Action Button -->
    <button id="scrollTopBtn" title="Go to Top">⬆️</button>

</body>
</html>
"""


# Save the styled HTML file
output_file = "static_website_setup.html"
with open(output_file, "w", encoding="utf-8") as html_file:
    html_file.write(html_template)

print(f"Styled HTML saved as {output_file}")
