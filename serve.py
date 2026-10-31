"""
Local Web Server untuk Website Katalog Cipta Group
Jalankan file ini untuk membuka website secara lokal di browser Anda.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 60)
        print(" [🚀] Website Cipta Group berhasil berjalan!")
        print(f" [🌐] URL Lokal : {url}")
        print(" [ℹ️ ] Tekan Ctrl + C di terminal ini untuk menghentikan server.")
        print("=" * 60)
        
        # Buka browser otomatis
        try:
            webbrowser.open(url)
        except Exception:
            pass

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[!] Server dihentikan.")
            sys.exit(0)

if __name__ == "__main__":
    start_server()
