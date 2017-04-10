#!/usr/bin/env bash

time curl -s http://localhost:3000/account/summary?accountNumber=CHK52321122 | jq