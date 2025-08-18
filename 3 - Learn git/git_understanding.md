# Summary 

## What is the difference between staging and committing?
- Staging means preparing specific changes to be included in the next commit.
- On the other hand, committing means permanently recording the staged changes into the project's history with a commit message.

## Why does Git separate these two steps?
- The separation is to give developers more control and flexibility which allows them to:
    - Group related changes together into a single commit.
    - Review what is staged before finalising a commit.

## When would you want to stage changes without committing?
- When you want to save progress incrementally but are not ready to commit yet. Staging lets you mark work in progress while continuing development.
- When collaborating, you might stage parts of your work to review them before finalising a commit.

## Screenshot as evidence of experimenting with the terminal:
- I created a testing file and tried the following:
    - Stage it but don’t commit (git add <file>).
    - Check the status (git status).
    - Unstage the file (git reset HEAD <file>).
    - Commit the file (git commit -m <message>)

- ![Screenshot of me experimenting with the terminal](images/git_terminal_experiment.png) 