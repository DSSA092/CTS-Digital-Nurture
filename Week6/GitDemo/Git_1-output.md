# Week 6 - Hands-on on Git 1: Git Setup Output

alwin@DSSA MINGW64 ~
$ git --version
git version 2.52.0.windows.1

alwin@DSSA MINGW64 ~
$ git config --global --list
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
user.name=DSSA092
user.email=alwintomy6@gmail.com

alwin@DSSA MINGW64 ~
$ notepad++
bash: notepad++: command not found

alwin@DSSA MINGW64 ~
$ ls "/c/Program Files/Notepad++/notepad++.exe"
ls: cannot access '/c/Program Files/Notepad++/notepad++.exe': No such file or directory

alwin@DSSA MINGW64 ~
$ ls "/c/Program Files (x86)/Notepad++/notepad++.exe"
ls: cannot access '/c/Program Files (x86)/Notepad++/notepad++.exe': No such file or directory

alwin@DSSA MINGW64 ~
$ winget install Notepad++.Notepad++
Found Notepad++ [Notepad++.Notepad++] Version 8.9.7
Downloading https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.9.7/npp.8.9.7.Installer.x64.msi
  ██████████████████████████████  7.41 MB / 7.41 MB
Successfully verified installer hash
Starting package install...
Successfully installed

alwin@DSSA MINGW64 ~
$ ls "/c/Program Files/Notepad++/notepad++.exe"
'/c/Program Files/Notepad++/notepad++.exe'*

alwin@DSSA MINGW64 ~
$ notepad++ ~/.bash_profile

alwin@DSSA MINGW64 ~
$ source ~/.bash_profile

alwin@DSSA MINGW64 ~
$ cat ~/.bash_profile
alias notepad++="'/c/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"

alwin@DSSA MINGW64 ~
$ git config --global core.editor "notepad++.exe -multiInst -nosession"

alwin@DSSA MINGW64 ~
$ git config --global -e

alwin@DSSA MINGW64 ~
$ git init GitDemo
Initialized empty Git repository in C:/Users/alwin/GitDemo/.git/

alwin@DSSA MINGW64 ~
$ cd GitDemo

alwin@DSSA MINGW64 ~/GitDemo (master)
$ ls -al
total 28
drwxr-xr-x 1 alwin 197609 0 Jul 23 23:58 ./
drwxr-xr-x 1 alwin 197609 0 Jul 23 23:58 ../
drwxr-xr-x 1 alwin 197609 0 Jul 23 23:58 .git/

alwin@DSSA MINGW64 ~/GitDemo (master)
$ echo "Welcome to the version control" >> welcome.txt

alwin@DSSA MINGW64 ~/GitDemo (master)
$ ls -al
total 29
drwxr-xr-x 1 alwin 197609  0 Jul 23 23:58 ./
drwxr-xr-x 1 alwin 197609  0 Jul 23 23:58 ../
drwxr-xr-x 1 alwin 197609  0 Jul 23 23:58 .git/
-rw-r--r-- 1 alwin 197609 31 Jul 23 23:58 welcome.txt

alwin@DSSA MINGW64 ~/GitDemo (master)
$ cat welcome.txt
Welcome to the version control

alwin@DSSA MINGW64 ~/GitDemo (master)
$ git status
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        welcome.txt
nothing added to commit but untracked files present (use "git add" to track)

alwin@DSSA MINGW64 ~/GitDemo (master)
$ git add welcome.txt
warning: in the working copy of 'welcome.txt', LF will be replaced by CRLF the next time Git touches it

alwin@DSSA MINGW64 ~/GitDemo (master)
$ git status
On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   welcome.txt

alwin@DSSA MINGW64 ~/GitDemo (master)
$ git commit
[master (root-commit) 61639fc] Add welcome.txt
 1 file changed, 1 insertion(+)
 create mode 100644 welcome.txt

alwin@DSSA MINGW64 ~/GitDemo (master)
$ git status
On branch master
nothing to commit, working tree clean

alwin@DSSA MINGW64 ~/GitDemo (master)
$ cd "/c/Users/alwin/OneDrive/Desktop/CTS-Digital-Nurture"

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git remote -v
origin  https://github.com/DSSA092/CTS-Digital-Nurture.git (fetch)
origin  https://github.com/DSSA092/CTS-Digital-Nurture.git (push)

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ mkdir -p Week6/GitDemo

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ cd Week6/GitDemo

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitDemo (main)
$ echo "Welcome to the version control" >> welcome.txt

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitDemo (main)
$ ls -al
total 1
drwxr-xr-x 1 alwin 197609  0 Jul 24 00:08 ./
drwxr-xr-x 1 alwin 197609  0 Jul 24 00:07 ../
-rw-r--r-- 1 alwin 197609 31 Jul 24 00:08 welcome.txt

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitDemo (main)
$ cat welcome.txt
Welcome to the version control

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture/Week6/GitDemo (main)
$ cd "/c/Users/alwin/OneDrive/Desktop/CTS-Digital-Nurture"

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Week6/
nothing added to commit but untracked files present (use "git add" to track)

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git add Week6/GitDemo/welcome.txt
warning: in the working copy of 'Week6/GitDemo/welcome.txt', LF will be replaced by CRLF the next time Git touches it

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Week6/GitDemo/welcome.txt

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git commit
[main 69eab02] Add Week6 GitDemo welcome.txt
 1 file changed, 1 insertion(+)
 create mode 100644 Week6/GitDemo/welcome.txt

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git push origin main
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (5/5), 432 bytes | 432.00 KiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/DSSA092/CTS-Digital-Nurture.git
   826cead..69eab02  main -> main