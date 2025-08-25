# Debugging & Managing Docker Containers

## Inspecting Running Containers
- `docker ps` → list all running containers
- `docker inspect <container_id>` → list detailed info (networks, volumes, env vars) of a container

## Checking Logs
- `docker logs <container_id>` → view logs
- `docker logs -f <container_id>` → follow logs in real time

## Entering Containers
- `docker exec -it <container_id> bash` → open interactive shell
- `docker exec <container_id> <command>` → run one-off command
- **Difference:**
  - `exec` → starts a new process inside container
  - `attach` → connects to container’s main process (less safe)

## Restarting & Rebuilding
- `docker stop <container_id>` → stop container
- `docker start <container_id>` → start container
- `docker restart <container_id>` → restart without data loss (if using volumes)
- `docker rm <container_id>` → remove container
- `docker-compose down && docker-compose up --build` → rebuild services

---

# Reflection

## How can you check logs from a running container?
- Use the command `docker logs <container_id>`.

## What is the difference between docker exec and docker attach?
- `docker exec` starts a new process inside the container which makes it safer for debugging
- `docker attach` connects to the main proccess which can interfere with the application.

## How do you restart a container without losing data?
- Use `docker restart <container_id>`

## How can you troubleshoot database connection issues inside a containerized NestJS app?
- Use service name (`postgres`) instead of `localhost` in DB config
- Check for port conflicts with `docker ps`
- Ensure database container is ready before API starts (`depends_on`, healthchecks)
- Debug workflow:
  1. `docker logs postgres` → check DB startup
  2. `docker exec -it postgres psql -U <user>` → connect to DB inside container
  3. Verify NestJS `.env` matches container credentials