@echo off
title Push Nanduu's Website to GitHub ❤️
echo ========================================================
echo   PUSHING NANDUU'S WEBSITE TO GITHUB (krpreliner/NANDUU)
echo ========================================================
echo.
echo Current Remote:
git remote -v
echo.
echo Attempting to push to main branch...
echo (If a browser window pops up, please sign in as krpreliner!)
echo.
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ------------------------------------------------------------
    echo Notice: If you saw a 403 error or credential issue:
    echo Your Git is currently using another account (e.g. weber011).
    echo.
    echo Would you like to enter your GitHub Personal Access Token (PAT)?
    echo ------------------------------------------------------------
    set /p GHTOKEN="Enter GitHub Personal Access Token (or press Enter to cancel): "
    if not "%GHTOKEN%"=="" (
        git push https://%GHTOKEN%@github.com/krpreliner/NANDUU.git main
    )
)

echo.
echo ========================================================
echo Done! Press any key to exit.
echo ========================================================
pause
