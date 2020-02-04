+++
class = "first-steps"
date = "2016-09-05T21:03:22+02:00"
title = "First Steps"
type = ""
meta_description = "First steps for Manjaro"
meta_keywords = "manjaro first steps, first steps,"
weight = 0
right = false
navsection = "support"
+++

## Introduction

After you [downloaded](/download) Manjaro. This guide covers the basic's, If you want more information look into the [Manjaro User Guide](/support/userguide/) or the [Manjaro Wiki](https://wiki.manjaro.org/).

You downloaded Manjaro as an ISO file. An ISO file contains all files Manjaro needs to start an installation compressed into a handy file, which you can then use to make a [DVD](https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File) or [USB-Stick](https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File#Writing_to_a_USB_Stick_in_Linux) that can be run by your computer. This file can be directly used by a virtual machine if you don't want to try out Manjaro on your actual computer, yet.

## Different ways to try Manjaro

To try out Manjaro, you can either directly load it from a DVD or USB-Drive or use a  [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) if you are unsure or want to be able to use your current operating-system without [dual-booting](https://en.wikipedia.org/wiki/Multi-booting). Here you can find a list of all options you have and their pros and cons.


* ![icon](/img/try/virtual-machine.svg)[**Using a virtual machine**](#using-a-virtual-machine).
  * Leaves your current system untouched.
  * Experiment without modifying your current setup. 
  * Work parallel with Manjaro and your current system. 
  * Manjaro runs slower due to emulation. 
  * Emulation needs many system resources. 

* ![icon](/img/try/live-boot.svg)[**Using a live-system**](#making-a-live-system)
    * Leaves your current system untouched.
    * Experiment without modifying your current setup. 
    * No settings get stored on the medium. 
    * Manjaro runs slower due to slower speed of DVD or USB.                      
 
      
* ![icon](/img/try/install.svg)[**Install Manjaro**](#install-manjaro) 
 * Always backup your data.
 * Install along side your current system or replace it. 
 
                                                 

![Pipeline](/img/support/firststeps-overview.png#center)

## Using a virtual machine

A virtual machine is a computer that runs "in" your current computer. If you just want to try or use Manjaro without rebooting your computer, you can set up a virtual machine. We will give you a quick step-by-step guide, but if you want to know more, visit our [Wiki](https://wiki.manjaro.org/index.php?title=VirtualBox#Running_Manjaro_in_VirtualBox). Keep in mind that if you use a virtual machine, you only wipe the machine, not your actual computer.


* ![icon](/img/actions/download.svg) **1. Download an application that allows creating virtual machines and install it.** 
  * [VirtualBox](https://www.virtualbox.org/)
  * [VmWare Player](http://www.vmware.com/)
  * [Qemu](https://www.qemu.org/)

* ![icon](/img/actions/vm.svg) **2. Create a virtual machine** 
  * Select Linux.                                               
  * At least 20-30GB virtual hard drive space.                                               
  * At least 2GB RAM/Memory.                                               
  * At least 2 CPU cores.      
  * increase the graphics memory.      
  * Enable 3D acceleration if possible.  
  
* ![icon](/img/logo.svg) **3. Loading Manjaro** 
  * Start the virtual machine and select the Manjaro ISO to be loaded into the virtual DVD drive.  
  * Manjaro will now boot. Select Manjaro (Free drivers) or leave it until it's automatically selected. 
  * Manjaro now boots into the live environment. 
  * [Install Manjaro into the virtual machine](#install-manjaro). 
  * Grab a coffee and wait for the instalation process to finish.
  * Go to the virtual machine settings and unload the Manjaro ISO.
  * All done. Reboot and enjoy. 
      
Now you can just start your virtual computer with Manjaro, play around with it and use software that is not well supported on other operating systems! Note that this is (while being virtual) an actual computer, so you have to shut down Manjaro just like all operating systems. If you want to know what you can do after installing Manjaro, give a look at our [user guide](/support/userguide/) and our [wiki](https://wiki.manjaro.org/index.php?title=Main_Page#Customisation_and_Configuration).

## Making a Live-System

To be able to install or try Manjaro on your computer, you need to put it on a DVD or USB-Drive. Then the computer will start (or "boot") from this medium into Manjaro's live-system[¹](#glossary).

### Create a bootable USB-Stick

* ![icon](/img/actions/download.svg) 1. Download an application that is able to create a bootable USB-Drive.
  * [ImageWriter](https://launchpad.net/win32-image-writer/) or [Rufus](https://rufus.akeo.ie/), see our [wiki](https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File) for more information. 
  * Use **dd** as copy option to make a working bootable USB-Stick. 
  * Any data already in the USB stick will be lost.
  * Select the ISO and put Manjaro in. 
  * [Boot from USB](#booting-into-the-live-environment)  


### Burn a DVD

 * ![icon](/img/actions/download.svg)1. Download an application that is able to burn a disk
    * [DeepBurner](http://www.deepburner.com/), or if available the software that comes with your operating system 
    * [Burn the Manjaro ISO to the DVD](https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File) 
    * [Boot from DVD](#booting-into-the-live-environment)   

### Booting into the Live-System
      
* ![icon](/img/actions/boot.svg)1. Boot from USB or DVD
  * Sometimes you need to configure your system to allow [booting](https://www.howtogeek.com/129815/beginner-geek-how-to-change-the-boot-order-in-your-computers-bios/)
  * [BIOS and UEFI - Manjaro Wiki](https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI) 
  * [Manjaro User Guide](/support/userguide/)   
  * After booting you can choose your drivers. 
  * Choose "proprietary" if you use a Nvidia graphics card or need wireless.  
  * Choose "free" if you are using a virtual machine or know that everything will work without proprietary drivers.  
  * For more information, have a look at our [user guide](/support/userguide/).   

Now you have booted into Manjaro's live-environment and can begin to play around with it or proceed to install Manjaro on your computer (or the virtual machine). In the next section, you can find a quick step-by-step guide how to install Manjaro.

## Install Manjaro

There are many different ways to install Manjaro and the process depends heavily from your current hardware. If you want more detailed steps, you will find them in our [user guide](/support/userguide/). Here we will give you a rough outline how to install Manjaro. The installer offers plenty of options such as installing Manjaro alongside your current operating system. Experienced users also can partition manually.

We recommend to make backups of your important data before installing Manjaro on your hard drive. You can do this directly in the live-environment if you forgot it.

* ![icon](/img/actions/install.svg)1. Start the installer.
  * After you boot, there's a welcome-window that has an option to Install Manjaro. 
  * If you closed the welcome-window, you can find it in the application menu as "Manjaro Welcome". 
  * Chose timezone, keyboard layout and language. 
  * Determine where Manjaro should be installed. 
  * Insert your account data.
  * Grab a coffee and wait until the installation is finished.
  * You can use the live-environment while you wait.
  * When instalation finish restart your machine. 

Congratulations! You have now installed Manjaro. If there are any problems, you can maybe find a solution [here](/support/commonproblems), our [user guide](/support/userguide/) or our [wiki](https://wiki.manjaro.org/). Our [user guide](/support/userguide/) also contains information how to use Manjaro. Also we recommend to visit our [forums](https://forum.manjaro.org/) where people discuss about problems, new programs and make customizations like wallpapers.

## Glossary
      
 **Live-Environment / Live-System**   Manjaro and many other Linux distributions allow running the system directly from a USB-Drive or DVD.<br/>Those "Live-Enviroments" are completely functional systems and can be used as portable operating-system or to rescue data if something went wrong.  
