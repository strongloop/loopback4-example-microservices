#!/usr/bin/env bash

time curl -s http://localhost:3000/accountsummary?accountNumber=CHK52321122 | jq