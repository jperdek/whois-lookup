# whois-lookup
Client for whoi is lookup database - designed as whois web page for security scenarios

## Steps to run
1. Download whois database - only sample is for free on this page https://whoisdatacenter.com/whois-database/
2. Specify name of whois database file with all data to whoisToJSON.py script in prepara_data folder 
3. Run whoisToJSON.py script
4. Use command to load created data to postgres database:
psql -h hostname -d databasename -U username -f file.sql

