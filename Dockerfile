# Use the official Node.js 18 alpine image as the base image
FROM node:18-alpine AS base

# Install the libc6-compat package for glibc compatibility
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install packages
RUN npm ci

# Copy the rest of the project files
COPY . .

# # Create a system user and group for our app
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # change the ownership of the /app/ directory to nextjs:nodejs
# RUN chown -R nextjs:nodejs /app/

# # Switch to the nextjs user
# USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD [ "npm", "run", "dev" ]