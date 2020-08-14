build:
	docker build -t react_cursos .

up:
	docker run  -p 3000:3000 -it --rm -v $(shell pwd):/app --entrypoint=/bin/ash react_cursos