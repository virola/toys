#!/bin/sh 

print "$cmd"
cmd=$1
target=$2

if ["$cmd" == "mv"]; then
    cp -ur ./* "$target"
fi

if ["$cmd" == "build"]; then
    edp build -f
    # cp index.html index.bak.html
    # cp output/index.html index.html
fi 