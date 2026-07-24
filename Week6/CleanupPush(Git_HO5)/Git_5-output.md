# HO5 - Clean Up and Push Back to Remote- The final reviw ....

## Explanation on how to clean up and push back to remote Git
## Explanation
This is just about making sure everything is clean and synced at the 
end. We check status and branches, pull from remote to grab any changes, 
then push back whatever is pending so GitHub has the latest version of 
our work which is present locally in our system.

## Git Bash Output

\`\`\`
alwin@DSSA MINGW64 ~
$ cd "/c/Users/alwin/OneDrive/Desktop/CTS-Digital-Nurture"
git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git branch
* main
  master

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git pull origin main
From https://github.com/DSSA092/CTS-Digital-Nurture
 * branch            main       -> FETCH_HEAD
Already up to date.

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git push origin main
Everything up-to-date
\`\`\`