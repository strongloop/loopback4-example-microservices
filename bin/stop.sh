#!/usr/bin/env bash

ps -ef | grep "[i]ndex.ts" | awk '{print $2}' | xargs kill -9