+++
Name = ""
type="problem-post"
category="hardware"
title = "Laptop screen is too dark"
meta_description = "Laptop screen is too dark on Manjaro"
meta_keywords = "manjaro laptop screen, manjaro screen"
+++

|   |   |
|---|---|
| <img class="icon" src="/img/actions/information.svg"> | **This is likely caused by your hardware manufacturer** |
|   | More information about this in our [wiki](https://wiki.manjaro.org/index.php?title=Reactivating_the_Backlight) |
|   |   |
| <img class="icon" src="/img/actions/execute.svg"> | **Re-activate the backlight** |
|   | Open a [terminal](/support/commonproblems/howtoterminal) and enter: |
|   | `sudo sed "s/\(GRUB_CMDLINE_LINUX=\)\"\"/\1\"acpi_osi=Linux acpi_backlight=vendor\"/" /etc/default/grub -i; sudo update-grub` |
