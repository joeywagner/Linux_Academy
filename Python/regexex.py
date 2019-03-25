line = "Nov  4 00:02:40 shirazk2141 sshd[13506]: Invalid user jira from 87.249.204.63"

import re
match = re.search('^(.*?)\s\w+\ssshd.*?Invalid\suser\s(\w+)\sfrom\s(.*)', line);
print match.groups();
