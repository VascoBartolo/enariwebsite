"""
Scrape selected Enari pages into plain .txt files.

Usage:
    pip install -r requirements.txt
    python scrape_enari_pages.py

Output:
    scraped_txt_files/*.txt
"""

from __future__ import annotations

import re
import time
from pathlib import Path
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

URLS = [
    "https://enari.com/services/data-roi/",
    "https://enari.com/services/enari-services-datenanalyse/",
    "https://enari.com/services/data-engineering-und-data-warehouse-consulting/",
    "https://enari.com/services/devops-und-cloud-infrastruktur-consulting/",
    "https://enari.com/services/kuenstliche-intelligenz-und-mlops/",
    "https://enari.com/blog/",
    "https://enari.com/datenqualitat-definition-was-ist-datenqualitat/",
    "https://enari.com/etl-definition-und-uberblick/",
    "https://enari.com/data-mesh-vs-data-spaces-was-ist-der-unterschied/",
    "https://enari.com/data-mesh-idee-und-ursprung/",
    "https://enari.com/data-mesh-prinzipien/",
    "https://enari.com/datenprodukte-in-data-mesh-infrastruktur/",
    "https://enari.com/services/case-studies/",
    "https://enari.com/karriere/",
]

def slug_from_url(url: str, index: int) -> str:
    parsed = urlparse(url)
    path = parsed.path.strip("/") or "home"
    slug = path.replace("/", "__")
    slug = re.sub(r"[^a-zA-Z0-9._-]+", "-", slug)
    return f"{index:02d}_{slug}.txt"

def clean_text(text: str) -> str:
    text = text.replace("\xa0", " ")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()

def extract_visible_text(html: str) -> tuple[str, str]:
    soup = BeautifulSoup(html, "lxml")
    for tag in soup(["script", "style", "noscript", "svg", "form"]):
        tag.decompose()
    title = soup.title.string.strip() if soup.title and soup.title.string else ""
    main = soup.find("main") or soup.body or soup
    block_tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "blockquote", "pre", "tr", "div", "section", "article"]
    for tag in main.find_all(block_tags):
        tag.insert_before("\n")
        tag.insert_after("\n")
    text = main.get_text(separator=" ", strip=True)
    text = re.sub(r"\s*\n\s*", "\n", text)
    return title, clean_text(text)

def scrape() -> None:
    output_dir = Path("scraped_txt_files")
    output_dir.mkdir(exist_ok=True)
    session = requests.Session()
    session.headers.update({"User-Agent": "Mozilla/5.0 EnariContentExporter/1.0 (+https://enari.com/)"})
    for index, url in enumerate(URLS, start=1):
        print(f"[{index}/{len(URLS)}] Fetching {url}")
        response = session.get(url, timeout=30)
        response.raise_for_status()
        title, text = extract_visible_text(response.text)
        out_path = output_dir / slug_from_url(url, index)
        out_path.write_text(f"Title: {title}\nURL: {url}\n\n{text}\n", encoding="utf-8")
        time.sleep(0.5)
    print(f"\nDone. Files saved to: {output_dir.resolve()}")

if __name__ == "__main__":
    scrape()
