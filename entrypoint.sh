#!/bin/bash

# Run cspell with all arguments passed to the script
cspell "$@" > spellcheck-results.txt

# Run the Node.js script
node index.js
