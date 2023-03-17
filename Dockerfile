# Base image
FROM node:14-alpine

# Create and set working directory
WORKDIR /backend/server

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy project files
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8000

# Expose port for server
EXPOSE 8000

# Start server
CMD ["node", "backend/server.js"]

