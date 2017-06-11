import re # 正規表現マッチング操作
import tika # Apache Tika
tika.initVM()
from tika import parser

""""
parsed = parser.from_file('170317adjustments_1.pdf')
print(parsed["metadata"])
print(parsed["content"])

pdf_data = parsed["content"]

# FILE WRITE
fout = open('url_list', 'wt')
print(pdf_data, file=fout)
fout.close()
"""""

# Get URL
url_count = 0
url_data = '['
print(url_data)
fin = open('url_list', 'rt')
while True:
    line = fin.readline()
    if not line:
        break

    matchobj = re.search('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', line)
    if matchobj:
        url_data += '"'
        url_data += matchobj.group()
        url_data = url_data[:-1]
        url_data += '",'
        url_count += 1
url_data = url_data[:-1]
url_data += ']'
print(url_data)
print("URL COUNT:", url_count)

# ^(https?|ftp|file)://.+$

# FILE WRITE
fout = open('url_list.json', 'wt')
print(url_data, file=fout)
fout.close()

print("END:", __file__)
