# Week 6 - Hands-on on Git 3: Branching and Merging in Git

## Questions

**Explain branching and merging**
A branch is a separate line of development that lets you make changes without affecting the main codebase (trunk/main). Merging is the process of bringing those changes from a branch back into the main branch once they're ready.

**Explain about creating a branch request in GitLab**
A branch request in GitLab refers to creating a new branch off the main/trunk branch through GitLab's interface (or via Git commands pushed to GitLab), so changes can be made in isolation before being reviewed and merged.

**Explain about creating a merge request in GitLab**
A merge request (MR) in GitLab is a request to merge the changes from one branch into another, usually into main/trunk. It allows the changes to be reviewed, discussed, and approved before being merged, keeping the main branch stable.

## Command Log

```
alwin@DSSA MINGW64 ~/OneDrive/Desktop/CTS-Digital-Nurture (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean

$ git branch GitNewBranch

$ git branch
  GitNewBranch
* main
  master

$ git branch -r
  origin/HEAD -> origin/main
  origin/main

$ git branch -a
  GitNewBranch
* main
  master
  remotes/origin/HEAD -> origin/main
  remotes/origin/main

$ git checkout GitNewBranch

$ mkdir -p Week6/BranchDemo
$ echo "This file was created on GitNewBranch" >> Week6/BranchDemo/branchfile.txt

$ cat Week6/BranchDemo/branchfile.txt
This file was created on GitNewBranch

$ git status
On branch GitNewBranch
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Week6/BranchDemo/
nothing added to commit but untracked files present (use "git add" to track)

$ git add Week6/BranchDemo/branchfile.txt
$ git commit
[GitNewBranch ...] Add branchfile.txt on GitNewBranch

$ git status
On branch GitNewBranch
nothing to commit, working tree clean

$ git checkout main

$ git diff main GitNewBranch
diff --git a/Week6/BranchDemo/branchfile.txt b/Week6/BranchDemo/branchfile.txt
new file mode 100644
index 0000000..b7d0663
--- /dev/null
+++ b/Week6/BranchDemo/branchfile.txt
@@ -0,0 +1 @@
+This file was created on GitNewBranch

$ git config --global diff.tool p4merge
$ git config --global difftool.p4merge.cmd "\"/c/Program Files/Perforce/p4merge.exe\" \"$LOCAL\" \"$REMOTE\""

$ git checkout GitNewBranch
$ echo "This line was added on GitNewBranch" >> "Week6/GitDemo(Git_HO1)/welcome.txt"
$ git add "Week6/GitDemo(Git_HO1)/welcome.txt"
$ git commit
[GitNewBranch ...] Modify welcome.txt on GitNewBranch for merge demo

$ git checkout main
$ git difftool main GitNewBranch -- "Week6/GitDemo(Git_HO1)/welcome.txt"
Viewing (1/1): 'Week6/GitDemo(Git_HO1)/welcome.txt'
Launch 'p4merge' [Y/n]? y

$ git checkout main
$ git merge GitNewBranch
Already on 'main'
Your branch is up to date with 'origin/main'.
Updating e3d42dc..b76f14c
Fast-forward
 Week6/BranchDemo/branchfile.txt    | 1 +
 Week6/GitDemo(Git_HO1)/welcome.txt | 1 +
 2 files changed, 2 insertions(+)
 create mode 100644 Week6/BranchDemo/branchfile.txt

$ git --no-pager log --oneline --graph --decorate
* b76f14c (HEAD -> main, GitNewBranch) Modify welcome.txt on GitNewBranch for merge demo
* fb20f94 Add branchfile.txt on GitNewBranch
* e3d42dc (origin/main, origin/HEAD) Clean up unwanted shortcut and ignore .vscode folder
...

$ git branch -d GitNewBranch
Deleted branch GitNewBranch (was b76f14c).

$ git branch
* main
  master

$ git status
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean

$ git push origin main
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 12 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), 938 bytes | 312.00 KiB/s, done.
Total 10 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 1 local object.
To https://github.com/DSSA092/CTS-Digital-Nurture.git
   e3d42dc..b76f14c  main -> main
```