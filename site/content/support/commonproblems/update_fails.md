+++
Name = ""
type="problem-post"
category="after_installation"
title = "Update or installation fails"
+++

|   |   |
|---|---|
| ![Icon](/img/actions/question.svg) | **Check if you are connected with the internet** |
|   |   |
| ![Icon](/img/actions/warning.svg) | **Maybe the current mirror is not reachable** |
|   | Open a [terminal](/commonproblems/howtoterminal) and enter: |
|   | `sudo pacman-mirrors -g` |
|   | More information about this in our [wiki](https://wiki.manjaro.org/index.php?title=Manjaro_Mirrors) |
|   |   |
| ![Icon](/img/actions/warning.svg) | **Maybe the cache is full** |
|   | Some editions come with a cache cleaner. Just search `cache` in the application menu. |
|   | If no cache cleaner is available, open a [terminal](/commonproblems/howtoterminal) and enter: |
|   | `sudo pacman -Scc` |
|   | More information about this in our [wiki](https://wiki.manjaro.org/index.php?title=Pacman_Tips#Cleaning_Packages) |
|   |   |
| ![Icon](/img/actions/warning.svg) | **Maybe the pacman database is locked** |
|   | Open a [terminal](/commonproblems/howtoterminal) and enter: |
|   | `sudo rm /var/lib/pacman/db.lck` |
|   | More information about this in our [wiki](https://wiki.manjaro.org/index.php?title=Pacman_troubleshooting#.22Unable_to_lock_database.22_Error) |
|   |   |
|   |   |
| ![Icon](/img/actions/information.svg) | **Upgrade fails in Octopi** |
|   | This is caused by restructuring of some packages. Click on "Run in Terminal" to be able to upgrade. |
|   | The terminal will ask you questions if packages shall be removed. Answer 'yes' to all of them. Our testers then already confirmed that everything will work out. |
|   | More information about this in our [wiki](https://wiki.manjaro.org/index.php?title=Pacman_troubleshooting) |
|   |   |
