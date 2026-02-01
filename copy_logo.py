import shutil
import os

src = r"C:\Users\skcus\.gemini\antigravity\brain\90caab0d-a5ab-4280-8b84-c30cfd7fb7c3\uploaded_media_1769938196658.png"
dst = r"c:\Users\skcus\asc-bot\asc-bot-dashboard\public\asc_logo.png"

# Ensure directory exists
os.makedirs(os.path.dirname(dst), exist_ok=True)

try:
    shutil.copy(src, dst)
    print(f"Successfully copied {src} to {dst}")
except Exception as e:
    print(f"Error copying file: {e}")
