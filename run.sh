#!/bin/bash
gulp clean
sleep 1
gulp
ps -ef|grep build/serve/index.js|grep -v grep|awk '{print $2}'|xargs kill -9
npm start
