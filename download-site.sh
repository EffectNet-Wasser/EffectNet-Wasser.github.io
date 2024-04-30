#!/bin/bash

# delete directory if it does already exist
if [ -d "www.effect-net-wasser.de" ]; then
    rm -r www.effect-net-wasser.de
fi

if [ -d "docs" ]; then
    rm -r docs
fi


# Download the original website
wget -r -np -k --no-check-certificate --adjust-extension http://www.effect-net-wasser.de/

# copy files
touch www.effect-net-wasser.de/.nojekyll

# rename directory
mv www.effect-net-wasser.de docs