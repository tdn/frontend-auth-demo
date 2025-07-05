FROM madnificent/ember:5.12.0 AS builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
# RUN npx update-browserslist-db@latest
RUN ember build -prod

FROM semtech/static-file-service:0.2.0

COPY --from=builder /app/dist /data
