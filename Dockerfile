FROM node:22-alpine

WORKDIR /portfolio

EXPOSE 3000

CMD ["tail", "-f", "/dev/null"]