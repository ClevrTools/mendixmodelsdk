#!/bin/bash
rm -rf doc/generated-doc

# build typedoc:
cd dist && ../node_modules/.bin/typedoc --includeDeclarations --name 'Mendix Model SDK' --out ../doc/generated-doc --mode file --theme ../doc/custom_typedoc_theme --excludePrivate --readme 'none' --ignoreCompilerErrors --exclude '**/test/**' .
