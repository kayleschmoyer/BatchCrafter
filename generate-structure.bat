@echo off
cd /d "%~dp0"

mkdir src\components
mkdir src\components\ui
mkdir src\components\steps
mkdir src\lib
mkdir src\constants
mkdir src\logic
mkdir src\data
mkdir public\icons

echo.> src\components\Layout.tsx
echo.> src\components\ui\Button.tsx
echo.> src\components\ui\Card.tsx
echo.> src\components\steps\StepSelector.tsx
echo.> src\components\steps\StepScriptType.tsx
echo.> src\components\steps\StepTaskType.tsx
echo.> src\components\steps\StepTaskOptions.tsx
echo.> src\components\steps\StepPreview.tsx
echo.> src\constants\defaults.ts
echo.> src\logic\builder.ts
echo.> src\logic\commentGenerator.ts
echo.> src\data\exampleTemplates.ts
echo.> src\lib\utils.ts
echo.> public\icons\favicon.ico
echo.> public\icons\app-icon.svg

echo Folder structure created successfully.
pause
