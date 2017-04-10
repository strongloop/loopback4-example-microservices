# First stop if anything
echo "Stopping service if any running..."
ps -ef | grep "[i]ndex.ts" | awk '{print $2}' | xargs kill -9
sleep 2

echo "Starting services..."
cd services/account
npm i
npm link loopback-next
ts-node index.ts &
cd ../customer
npm i
npm link loopback-next
ts-node index.ts &
cd ../transaction
npm i
npm link loopback-next
ts-node index.ts &
sleep 5
cd ../facade
npm i
npm link loopback-next
ts-node index.ts &
sleep 5
echo "Started all services!!"

echo "Making account summary call to facade"
curl http://localhost:3000/accountsummary?accountNumber=CHK52321122 | jq
