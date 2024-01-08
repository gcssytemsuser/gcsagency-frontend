# Use a Node base image
FROM node:16

# Set the working directory in the Docker image
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy node_modules to a different directory
# This step is to avoid conflicts with local node_modules when using Docker volumes
RUN cp -R node_modules /tmp/node_modules

# Copy the project files
COPY . .

# Restore node_modules from the temporary directory
RUN cp -R /tmp/node_modules node_modules

# Expose the port the app runs on
EXPOSE 3000

# Command to run the development server
CMD ["npm", "run", "dev"]
