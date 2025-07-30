$htmlFiles = Get-ChildItem -Path . -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Update the first navbar class
    $content = $content -replace '(<!-- First Navbar for Logos-->[\r\n]+<nav class="navbar navbar-expand-lg navbar-light) navback"', '$1 logo-navbar"'
    
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Updated $($file.Name)"
}
