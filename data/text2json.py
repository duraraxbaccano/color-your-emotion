#!/usr/bin/python
import sys
import json

print 'Number of arguments:', len(sys.argv), 'arguments.'
print 'Argument List:', str(sys.argv)

# no input file
if len(sys.argv) < 2:
    exit();

print sys.argv[1]

# Open a file
fo = open(sys.argv[1], "rw+")
print "Name of the file: ", fo.name
print ""

# data array
dataset = []

# readline until the end of file
while 1:
    line = fo.readline()
    if not line:
        break
    elif line[0] != ';' and line[0] != '\n':
        dataset.append( unicode(line.replace("\n", ""), errors='replace') )
        # print line
    pass
# Close opend file
fo.close()

# open new file
jsonName = sys.argv[1].split(".")[0] + ".json";
fjson = open(jsonName, "w");

# convert array to json and fave file
fjson.write(json.dumps(dataset))
fjson.close();

print "Succeed to save json file %s" % jsonName