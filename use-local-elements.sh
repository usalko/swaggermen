#!/bin/bash
example=$1

cd ./examples-dev/$example

npx json -I -f package.json -e "this.resolutions=this.resolutions || {}"
npx json -I -f package.json -e "this.resolutions[\"@swaggermen/swaggermen\"]=\"file:../../packages/swaggermen/dist\""
npx json -I -f package.json -e "this.resolutions[\"@swaggermen/swaggermen-core\"]=\"file:../../packages/swaggermen-core/dist\""

npx json -I -f package.json -e "this.dependencies[\"@swaggermen/swaggermen\"]=\"file:../../packages/swaggermen/dist\""

npx json -I -f package.json -e "this.scripts.reinstall=\"rm -rf node_modules && yarn install\""
