import urllib.request
import re
import json

def parse_drive_folder(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept-Language": "id,en;q=0.9"
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        return {"error": str(e), "items": []}

    items = []

    # Method 1: window['_DRIVE_ivd']
    ivd_match = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']+)'", html)
    if ivd_match:
        raw_escaped = ivd_match.group(1)
        try:
            # Decode \x.. escapes
            decoded_str = raw_escaped.encode('utf-8').decode('unicode_escape')
            data = json.loads(decoded_str)
            for entry in data:
                if isinstance(entry, list) and len(entry) >= 4:
                    item_id = entry[0]
                    name = entry[2]
                    mime = entry[3]
                    is_folder = "folder" in str(mime).lower()
                    drive_link = f"https://drive.google.com/drive/folders/{item_id}" if is_folder else f"https://drive.google.com/file/d/{item_id}/view"
                    items.append({
                        "id": item_id,
                        "name": name,
                        "mimeType": mime,
                        "is_folder": is_folder,
                        "link": drive_link
                    })
        except Exception as e:
            pass

    # Method 2: AF_initDataCallback with ds:3
    if not items:
        ds_matches = re.findall(r'AF_initDataCallback\(\{key:\s*\'ds:0\'.*?data:\s*(\[.*?\]),\s*sideChannel', html, re.DOTALL)
        # fallback regex for names
        pass

    return {
        "url": url,
        "items": items
    }

# Test with 2 folders
urls = [
    ("SILVERBELL", "https://drive.google.com/drive/folders/13FWSU06DNW85xtKY1MeEOrMCofXq2ojb?usp=sharing"),
    ("CIPTA GRAND CITY", "https://drive.google.com/drive/folders/1cp8ySo-gPPfUmVEGr55YZgP2gGWPrOLj?usp=drive_link"),
    ("CIPTA PIAYU VILLAGE 2", "https://drive.google.com/drive/folders/1g58CAzx2HabFvp0OP4zhexvDqVLXUMoi?usp=drive_link")
]

for name, u in urls:
    res = parse_drive_folder(u)
    print(f"\nProyek: {name}")
    print(f"Items found ({len(res['items'])}):")
    for it in res['items']:
        print(f"  - [{('FOLDER' if it['is_folder'] else 'FILE')}] {it['name']} -> {it['link']}")
