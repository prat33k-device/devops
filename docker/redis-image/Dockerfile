FROM alpine

RUN apk add --update redis
RUN apk add gcc
# what will be run when this image is used to start up a new container
CMD ["redis-server"]

# run this command in the same working dir: docker build .