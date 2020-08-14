build:
	docker build -t breaking_bad_hooks .

up:
	docker run  -p 3000:3000 -it --rm -v $(shell pwd):/app --entrypoint=/bin/ash breaking_bad_hooks