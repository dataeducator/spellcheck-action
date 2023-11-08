# Use an official Node.js runtime as the base image
FROM node:16-buster

# Set the working directory in the container to /app
WORKDIR /app

# Install cspell globally
RUN npm install -g cspell

# Copy the current directory contents into the container at /app
COPY . /app

# Make port 80 available to the world outside this container
EXPOSE 80

# Run cspell when the container launches
CMD ["cspell", "**/*"]
