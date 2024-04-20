# Use the official Node.js 16 as a parent image
FROM node:16

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define environment variables (Recommend managing these outside of Dockerfile for production)
ENV PORT=4000 \
    MONGO_URL=mongodb+srv://TMS:TWybrjzIq6rFhmkg@tms-cluster.vrmbrlf.mongodb.net/ \
    JWT_SECRET_KEY=qwertyuiop

# Run the app when the container launches
CMD ["npm", "start"]
