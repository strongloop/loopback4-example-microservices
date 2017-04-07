echo "Testing Account"
curl http://localhost:3001/accounts | jq

echo "Testing Customer"
curl http://localhost:3002/customers | jq

echo "Testing Transaction"
curl http://localhost:3003/transactions | jq
