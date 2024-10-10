# Use an official Node.js image as a base
FROM node:14

# Set the working directory for the frontend app
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY . .

# Build the frontend assets (if needed, for Vue or React)
RUN npm run build

# Expose the port the frontend will run on (3000)
EXPOSE 3000

# Command to start the frontend application
CMD ["npm", "start"]
