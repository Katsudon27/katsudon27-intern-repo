# Reflection

## How does Docker differ from a virtual machine?

- A Docker container runs on the host operating system's kernel whereas a Virtual Machine runs on a full guest operating system.
- Docker containers are smaller in size, faster to start and more resource-efficient compared to virtual machines.
- For example, when I looked at Focus Bear’s docker-compose.yml, I noticed that the backend API and PostgreSQL database each run inside lightweight containers. Spinning them up took just seconds compared to the minutes a VM might need to boot an entire OS.

## Why is containerization useful for a backend like Focus Bear’s?

- Ensures consistent environment across all developers and production.  
- Prevents bugs caused by mismatched software versions.
- Makes scaling easier by replicating containers across servers.  
- For instance, the repo shows both the FastAPI service and PostgreSQL database defined in the same docker-compose.yml, which means I can bring up the whole backend stack with a single command (docker compose up).

## How do containers help with dependency management?

- Containers bundle application code and required dependencies into one image.
- This ensures the correct versions of Python, libraries, and PostgreSQL are always used. For example, the backend’s image definition guarantees that FastAPI runs with the same Python version for every developer.
- It reduces the need for complex setup guides, since the dependencies are already packaged into the container.

## What are the potential downsides of using Docker?

- Steeper learning curve for beginners.  
- Debugging inside containers can be more complex.
- Requires Docker installation and system resources.

## Personal Experience
Before working with Focus Bear, I had briefly used Docker in a data visualization project at university. Initially, I struggled because my local Python environment had conflicting library versions. After containerising the app, I found it much easier to share with teammates, since all they needed was Docker installed.

Seeing Focus Bear’s setup made me realise that Docker makes it possible to launch both the FastAPI backend and the PostgreSQL database with one command. This is a huge improvement compared to manually installing and configuring everything. It also made me realise how much smoother development becomes when the whole stack is defined in containers.
