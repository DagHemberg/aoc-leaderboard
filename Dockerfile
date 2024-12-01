FROM denoland/deno:latest

WORKDIR /app
COPY . ./
RUN mkdir ./leaderboards

RUN deno i --allow-scripts
RUN deno run build

EXPOSE 8080
CMD ["deno", "run", "--allow-env", "--allow-read", "--allow-net", "--allow-write", "build/index.js"]
