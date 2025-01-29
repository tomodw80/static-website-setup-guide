import markdown

# Read the Markdown file
with open("static_website_setup.md", "r", encoding="utf-8") as md_file:
    md_content = md_file.read()

# Convert Markdown to HTML
html_content = markdown.markdown(md_content)

# Save the HTML output
html_output_file = "static_website_setup.html"
with open(html_output_file, "w", encoding="utf-8") as html_file:
    html_file.write(html_content)

print(f"Markdown converted to HTML successfully! Saved as {html_output_file}")
