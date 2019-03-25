# module for downloading html
import urllib
# HTML Parsing
from bs4 import BeautifulSoup

# url. Go ahead and open it in your browser
url = "http://labfiles.linuxacademy.com/python/scraping/courses.html"

# open the site and download the html into the var html_data
html_data = urllib.urlopen(url).read()

# parse the data using BeautifulSoup
soup = BeautifulSoup(html_data,"lxml")

# find the specific tags needed
# we are using find_all since there are many
# find returns an iterable
sections = soup.find_all('a', attrs={'class':'col-xs-12 p-x-0 library-content-box-container content-aws'})

# for each of the found sections
for section in sections:
    # section at this point is a BeautifulSoup object
    # but you can further parse if if needed
    # we are using find since we know there is only one
    # find returns a non-iterable
    title =  section.find('span', attrs={"class":"library-content-title"})
    # extract the length of the section too
    length = section.find('span', attrs={"class":"library-content-length"})
    # hyperlink from the section
    url = section['href']
    # open and get data from the url
    html_data = urllib.urlopen(url).read()
    # All we are interested in is the instructor,
    # which has the instructor-name tag
    instructor = BeautifulSoup(html_data,"lxml").find_all('span', attrs={"class":"instructor-name"})
    # print it all out
    print "%s is taught by %s [%s]" % ( title.text, instructor[0].text, length.text)
