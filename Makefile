npm:
	npm install jzz --save
test-websocket:
	curl --include --no-buffer --header "Connection: Upgrade" --header "Upgrade: websocket" --header "Sec-WebSocket-Key: SGVsbG8sIHdvcmxkIQ==" --header "Sec-WebSocket-Version: 13" http://williams-air.lan:8080/midi
replace-ws-host-to-ip:
	sed -e "s#://williams-air.lan#://`host williams-air.lan|grep 192.* -o`#" index.html
run-web-server:
	@ifconfig en0 | sed -n -E 's#.*inet ([0-9.]+).*#http://\1/index.html#p'
	python3 -m http.server 80 -b 0.0.0.0
