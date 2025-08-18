# What caused the conflict?
- The conflict happened because I edited the same line in the same file on two different branches (main and conflict-branch). Specifically, I added different sentences to the file on each branch and committed my changes. When I tried to merge the conflic-branch back into main, Git could not decide which change to keep so it flagged the file as having a conflict.

# How did you resolve it?
- I opened the file in my GitHub Desktop which led me to viewing the conflict in Visual Studio Code via the Merge Editor. Both versions of the changes were displayed side-by-side with conflict markers and I chose which version of the file that I would like to keep and saved the changes. From there, I staged the changed file, committed the change and completed the merge.

# What did you learn?
- Merge conflicts when different changes are made to the same part of a file on two branches.
- Since Git cannot guess which change is correct, so it asks the developer to decide.
- Resolving conflicts requires reviewing the changes carefully, deciding which change to keep, and then marking the conflict as resolved before committing.