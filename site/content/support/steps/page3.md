

 
## Using a virtual machine
---
A virtual machine is a computer that runs "in" your current computer. If you just want to try or use Manjaro without rebooting your computer, you can set up a virtual machine. We will give you a quick step-by-step guide, but if you want to know more, visit our [Wiki](https://wiki.manjaro.org/index.php?title=VirtualBox#Running_Manjaro_in_VirtualBox).

|   |   |
|---|---|
| <img class="icon" src="/img/actions/download.svg"> | **1. Download an application that allows creating virtual machines and install it** |
|                                             | You can use for example [VirtualBox](https://www.virtualbox.org/), [VmWare Player](http://www.vmware.com/) or other software |
| <img class="icon" src="/img/actions/vm.svg"> | **2. Create a virtual machine** |
|                                             | ... for "Arch Linux" if Manjaro is not available as option |                                              
|                                             | ... with at least 20-30GB virtual harddrive space |                                              
|                                             | ... with at least 2GB RAM/Memory |                                              
|                                             | **Also don't forget to** |                                              
|                                             | ... give the machine at least 2 CPU cores |     
|                                             | ... increase the graphics memory |     
|                                             | ... enable 3D acceleration if possible | 
| <img class="icon" src="/img/try/install.svg"> | **3. Load Manjaro** |
|                                             | • Start the virtual machine and select the Manjaro ISO to be loaded into the virtual DVD drive | 
|                                             | • Manjaro will now boot. Select Manjaro (Free drivers) or leave it until it's automatically selected |
|                                             | • Manjaro now boots into the live environment |
| <img class="icon" src="/img/features/installation.svg"> | **4. Install Manjaro into the virtual machine** |
|                                             | **[Find out how this works](#install-manjaro)** |
| <img class="icon" src="/img/actions/settings.svg"> | **5. Finish the process** |
|                                             | • Go into the settings of the virtual machine and unload the Manjaro ISO |
|   |   |

Now you can just start your virtual computer with Manjaro, play around with it and use software that is not well supported on other operating systems! Note that this is (while being virtual) an actual computer, so you have to shut down Manjaro just like all operating systems. If you want to know what you can do after installing Manjaro, give a look at our [user guide](/support/userguide/) and our [wiki](https://wiki.manjaro.org/index.php?title=Main_Page#Customisation_and_Configuration).


## Making a Live-System
---

To be able to install or try Manjaro on your computer, you need to put it on a DVD or USB-Drive. Then the computer will start (or "boot") from this medium into Manjaro's live-system[¹](#glossary).

### Create a bootable USB-Stick
|   |   |
|---|---|
| <img class="icon" src="/img/actions/download.svg"> | **1. Download an application that is able to create a bootable USB-Drive** |
|                                             | You can use for example [ImageWriter](https://launchpad.net/win32-image-writer/), [Rufus](https://rufus.akeo.ie/) or other software. See our [wiki](https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File) for more information. Also you need to use **dd** as copy option to make a working bootable USB-Stick. |
| <img class="icon" src="/img/try/live-boot.svg">     | **2. Select the ISO and the stick and put Manjaro onto it** |
|                                             | Please don't forget to backup the data of your stick before doing this. |
|                                             | If you need more information, just visit our [Wiki](https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File) |
| <img class="icon" src="/img/actions/boot.svg">     | **3. Boot from USB** |
|                                             | **[Find out how this works](#booting-into-the-live-environment)**   |


### Burn a DVD
|   |   |
|---|---|
| <img class="icon" src="/img/actions/download.svg"> | **1. Download an application that is able to burn a disk** |
|                                             | You can use for example [DeepBurner](http://www.deepburner.com/), or if available the software that comes with your operating system |
| <img class="icon" src="/img/actions/burn.svg">     | **2. Burn the Manjaro ISO to the DVD** |
|                                             | If you need more information, just visit our [Wiki](https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File) |
| <img class="icon" src="/img/actions/boot.svg">     | **3. Boot from DVD** |
|                                             | **[Find out how this works](#booting-into-the-live-environment)**   |

### Booting into the Live-System
|   |   |
|---|---|
| <img class="icon" src="/img/actions/boot.svg">     | **1. Boot from USB or DVD** |
|                                             | If you are lucky, just have to plug-in the drive or put the DVD into the tray and restart your computer. |
|                                             | But sometimes you need to configure your system to allow this.  Then you may find help here:|
|                                             | • [How to Boot Your Computer From a Disc or USB Drive](https://www.howtogeek.com/129815/beginner-geek-how-to-change-the-boot-order-in-your-computers-bios/)
|                                             | • [BIOS and UEFI - Manjaro Wiki](https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI) |
|                                             | • [Manjaro User Guide](/support/userguide/)   |
| <img class="icon" src="/img/actions/settings.svg">     | **2. Choose the drivers** |
|                                             | If you boot into the live-system, you can choose between "free" and "proprietary" drivers. |
|                                             | • Choose "proprietary" if you use a Nvidia graphics card or need wireless  |
|                                             | • Choose "free" if you are using a virtual machine or know that everything will work without proprietary drivers  |
|                                             | If you want more information, take a look at our [user guide](/support/userguide/).   |

Now you have booted into Manjaro's live-environment and can begin to play around with it or proceed to install Manjaro on your computer (or the virtual machine). In the next section, you can find a quick step-by-step guide how to install Manjaro.
