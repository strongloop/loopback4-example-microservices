# First stop if anything
echo "Stopping service if any running..."
ps -ef | grep "[i]ndex.ts" | awk '{print $2}' | xargs kill -9
sleep 2

echo "Starting services..."
cd services/account
ts-node index.ts &
cd ../customer
ts-node index.ts &
cd ../transaction
ts-node index.ts &
sleep 10
echo "Starting started up!!"
