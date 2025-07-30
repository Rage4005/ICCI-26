$htmlFiles = Get-ChildItem -Path . -Filter "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Skip if file already has theme toggle button
    if ($content -match 'id="theme-toggle"') {
        Write-Host "Skipping $($file.Name) - already has theme toggle"
        continue
    }
    
    # Add theme toggle button to navbar
    $content = $content -replace '(<ul class="navbar-nav[^>]*>)', '$1
        <li class="nav-item mx-2">
          <button id="theme-toggle" class="btn nav-link" aria-label="Toggle theme">
            <i class="fas fa-moon"></i>
          </button>
        </li>'
    
    # Move JavaScript to end of body if needed
    if ($content -match '<script src="./js/main.js"></script>.*</head>') {
        $content = $content -replace '<script src="./js/main.js"></script>.*</head>', '</head>'
        $content = $content -replace '</body>', '  <!-- JavaScript -->
  <script src="./js/main.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>'
    }
    
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Updated $($file.Name)"
}
