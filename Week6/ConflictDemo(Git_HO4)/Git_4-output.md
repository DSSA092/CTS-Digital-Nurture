# HO4 Git - Conflict Resolution


## Explanation for resolving the merge conflict.
A merge conflict happens when two branches change the same part of a file
and Git can't automatically decide which version is correct. Git pauses the
merge and marks the file as unmerged, inserting conflict markers to show
both versions. To correct it, you open the file , decide the final content,
then stage it with `git add` and complete the merge with `git commit.

## Git Bash Output of HO4

\`\`\`
alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ mkdir -p "Week6/ConflictDemo(Git_HO4)"
git branch GitWork
git checkout GitWork
notepad++ "Week6/ConflictDemo(Git_HO4)/hello.xml"
Switched to branch 'GitWork'

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (GitWork)
$ git status
On branch GitWork
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Week6/ConflictDemo(Git_HO4)/
nothing added to commit but untracked files present (use "git add" to track)

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (GitWork)
$ git add "Week6/ConflictDemo(Git_HO4)/hello.xml"
git commit
[GitWork 21328ed] Adding the hello.xml on GitWork branch
 1 file changed, 2 insertions(+)
 create mode 100644 Week6/ConflictDemo(Git_HO4)/hello.xml

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (GitWork)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ mkdir -p "Week6/ConflictDemo(Git_HO4)"
notepad++ "Week6/ConflictDemo(Git_HO4)/hello.xml"

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git add "Week6/ConflictDemo(Git_HO4)/hello.xml"
git commit
[main 7232c40] Adding the hello.xml on main branch with different content wrt the branch
 1 file changed, 2 insertions(+)
 create mode 100644 Week6/ConflictDemo(Git_HO4)/hello.xml

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git --no-pager log --oneline --graph --decorate --all
* 7232c40 (HEAD -> main) Adding the hello.xml on main branch with different content wrt the branch
| * 21328ed (GitWork) Adding the hello.xml on GitWork branch
|/
* 2bed1c3 (origin/main, origin/HEAD) renamind the folder BranchDemo to BranchDemo(Git_HO3)
...

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git diff main GitWork -- "Week6/ConflictDemo(Git_HO4)/hello.xml"
diff --git a/Week6/ConflictDemo(Git_HO4)/hello.xml b/Week6/ConflictDemo(Git_HO4)/hello.xml
index f66ddc6..52e09a4 100644
--- a/Week6/ConflictDemo(Git_HO4)/hello.xml
+++ b/Week6/ConflictDemo(Git_HO4)/hello.xml
@@ -1,2 +1,2 @@
-<message>Hello,this is from main branch</message>
-<note>This content is different from GitWork on purposeranch to compare btw main and </note>
\ No newline at end of file
+<message>Hello from GitWork branch...</message>
+<note>This is kinda a test update on GitWork</note>
\ No newline at end of file

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git difftool main GitWork -- "Week6/ConflictDemo(Git_HO4)/hello.xml"
Viewing (1/1): 'Week6/ConflictDemo(Git_HO4)/hello.xml'
Launch 'p4merge' [Y/n]? Y

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git merge GitWork
Auto-merging Week6/ConflictDemo(Git_HO4)/hello.xml
CONFLICT (add/add): Merge conflict in Week6/ConflictDemo(Git_HO4)/hello.xml
Automatic merge failed; fix conflicts and then commit the result.

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main|MERGING)
$ notepad++ "Week6/ConflictDemo(Git_HO4)/hello.xml"

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main|MERGING)
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)
Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both added:      Week6/ConflictDemo(Git_HO4)/hello.xml
no changes added to commit (use "git add" and/or "git commit -a")

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main|MERGING)
$ git mergetool
Merging:
Week6/ConflictDemo(Git_HO4)/hello.xml
Normal merge conflict for 'Week6/ConflictDemo(Git_HO4)/hello.xml':
  {local}: created file
  {remote}: created file

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main|MERGING)
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)
Changes to be committed:
        modified:   Week6/ConflictDemo(Git_HO4)/hello.xml
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Week6/ConflictDemo(Git_HO4)/hello.xml.orig

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main|MERGING)
$ cat "Week6/ConflictDemo(Git_HO4)/hello.xml"
<message>Hello,this is from main branch</message>
<note>This content is different from GitWork on purposeranch to compare btw main and </note>
<message>Hello from GitWork branch...</message>
<note>This is kinda a test update on GitWork</note>

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main|MERGING)
$ git commit
[main 2322e70] Merge branch 'GitWork'

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git status
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Week6/ConflictDemo(Git_HO4)/hello.xml.orig
nothing added to commit but untracked files present (use "git add" to track)

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ notepad++ .gitignore

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git status
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .gitignore
no changes added to commit (use "git add" and/or "git commit -a")

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git add .gitignore
git commit
[main 9f49df9] Added *.orig to .gitignore to exclude P4Merge backup files
 1 file changed, 2 insertions(+), 1 deletion(-)

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git branch
  GitWork
* main
  master

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git branch -d GitWork
Deleted branch GitWork (was 21328ed).

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git --no-pager log --oneline --graph --decorate
* 9f49df9 (HEAD -> main) Added *.orig to .gitignore to exclude P4Merge backup files
*   2322e70 Merge branch 'GitWork'
|\
| * 21328ed Adding the hello.xml on GitWork branch
* | 7232c40 Adding the hello.xml on main branch with different content wrt the branch
|/
* 2bed1c3 (origin/main, origin/HEAD) renamind the folder BranchDemo to BranchDemo(Git_HO3)
...

alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git push origin main
Enumerating objects: 21, done.
Counting objects: 100% (21/21), done.
Delta compression using up to 12 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (18/18), 1.47 KiB | 1.47 MiB/s, done.
Total 18 (delta 10), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (10/10), completed with 2 local objects.
To https://github.com/DSSA092/CTS-Digital-Nurture.git
   2bed1c3..9f49df9  main -> main
\`\`\`