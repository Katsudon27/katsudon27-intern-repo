# Reflection

## How does Docker differ from a virtual machine?
- A Docker container runs on the host operating system's kernel whereas a Virtual Machine runs on a full guest operating system.
- Docker containers are smaller in size, faster to start and more resource-efficient compared to virtual machines.

## Why is containerization useful for a backend like Focus Bear’s?
- Ensures consistent environment across all developers and production.  
- Prevents bugs caused by mismatched software versions.
- Makes scaling easier by replicating containers across servers.  

## How do containers help with dependency management?
- Containers bundle application code and required dependencies into one image. 
- This helps to ensure correct versions of software are used on developer machines while reducing the need for manual setup.

## What are the potential downsides of using Docker?
- Steeper learning curve for beginners.  
- Debugging inside containers can be more complex.
- Requires Docker installation and system resources.
