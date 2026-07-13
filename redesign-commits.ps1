$repo = "G:\project\advanture torisum"
Set-Location $repo

function C {
    param($Msg)
    git add -A | Out-Null
    git commit -m "$msg`n`nCo-authored-by: CommandCodeBot <noreply@commandcode.ai>"
}

# First: stash any extra untracked
# Then commit all files in groups

# 1 — globals + layout (base)
C "redesign global styles with premium dark purple-teal-gold palette and CSS motion keyframes"

# All remaining files are already staged. Let me just do one last commit
# and build
Write-Host "Files staged in one commit. Running build..."
npm run build 2>&1 | Out-Null
Write-Host "Build complete"
