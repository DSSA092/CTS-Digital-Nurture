# Week 6 - Hands-on for Git 2: Git Ignore Output

What GitIgnore is:
So gitignore basically tells the Git which all files and folders should be ignored and also not to be tracked in the repo. This is done to keep the sensitive files, temporary or the unwanted files out of the version control like .env, .log etc

2-GitIgnore Implementation:
To Ignore Unwanted Files, 

first create a .gitignore 

then add the names of the files or folders to ignore like .env or *.log etc

Save and Commit the file by doing the following:

git add .gitignore

git commit -m "Add .gitignore"
```
alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ cd "/c/Users/alwin/OneDrive/Desktop/CTS-Digital-Nurture/Week6"
$ mkdir "GitIgnoreDemo(HO2)"
$ cd "GitIgnoreDemo(HO2)"

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitIgnoreDemo(HO2) (main)
$ echo "This is a sample log file" >> sample.log

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitIgnoreDemo(HO2) (main)
$ mkdir log
$ echo "This is inside the log folder" >> log/inside.log

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitIgnoreDemo(HO2) (main)
$ cd "/c/Users/alwin/OneDrive/Desktop/CTS-Digital-Nurture"
$ git status
On branch main
Your branch is up to date with 'origin/main'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Week6/GitIgnoreDemo(HO2)/
nothing added to commit but untracked files present (use "git add" to track)

# .gitignore created inside Week6/GitIgnoreDemo(HO2) containing:
#   *.log
#   log/

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitIgnoreDemo(HO2) (main)
$ cd "/c/Users/alwin/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitIgnoreDemo(HO2)"
$ notepad++ .gitignore

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitIgnoreDemo(HO2) (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ./
nothing added to commit but untracked files present (use "git add" to track)

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitIgnoreDemo(HO2) (main)
$ cd "/c/Users/alwin/OneDrive/Desktop/CTS-Digital-Nurture"
$ git status --untracked-files=all
On branch main
Your branch is up to date with 'origin/main'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Week6/GitIgnoreDemo(HO2)/.gitignore
nothing added to commit but untracked files present (use "git add" to track)

# Note: sample.log and log/inside.log do NOT appear above -
# .gitignore is correctly excluding them from Git tracking.

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git add "Week6/GitIgnoreDemo(HO2)/.gitignore"
$ git status
On branch main
Your branch is up to date with 'origin/main'.
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Week6/GitIgnoreDemo(HO2)/.gitignore

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git commit
[main 6200360] Add .gitignore to exclude .log files and log folder for the 2nd HandsOn
 1 file changed, 2 insertions(+)
 create mode 100644 Week6/GitIgnoreDemo(HO2)/.gitignore

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 442 bytes | 442.00 KiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/DSSA092/CTS-Digital-Nurture.git
   22c9ff4..6200360  main -> main
```