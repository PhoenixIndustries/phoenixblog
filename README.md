# manjaro.org

This readme is a work in progress if anything is missing let us know.

## Built With

* [Hugo](https://gohugo.io/getting-started/) - Static Website Generator

### Installing and running localy 

* Install on Manjaro with `pacman -S hugo, git`
* clonning repo on local machine `git clone https://gitlab.manjaro.org/tools/maintenance-tools/manjaro-homepage`
* `cd /manjaro-homepage/site`
* Test run `hugo server -wDEFv --disableFastRender --noHTTPCache`
* Preview at `http://localhost:1313/`

### Testing News Localy
* Cors plugins are available 
  * [Chrome](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc)
  * [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/cors-everywhere/)
  
### Testing in a diferent language
* (TODO)

### libraries used, get familiar with them. ( needs update ) 
* [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Isotope](https://isotope.metafizzy.co/)
* [Jquery](https://jquery.com/)
* [Fontawesome](https://fontawesome.com/)

## Content creation
* Adding/Editing menus

Menus can be edited by opening (/site/config.toml), more examples can be found inside the file.

`weight` - link order in the menu.

`parent` - submenu the link belongs to.

If only a link is needed, ignore submenu, set link in `url` field.

```
[[menu.main]]
    name = "Features"
    url = "#"
    pre = ""
    weight = 2
    identifier = "features"
```
Submenu

```
[[menu.main]]
    name = "Under your control"
    url = "/features/under-your-control/"
    pre = "<i class='now-ui-icons objects_spaceship'></i>"
    weight = 2
    parent = "features"
```

* Adding a Edition

Editions can be added by creating an markdown file in (/site/content/download/my-edition.md), supported edition category, in the `Tags` field ( official, community, arm, 32bit ).

```
+++
Download_x64 = "https://osdn.net/dl/manjaro/manjaro-gnome-18.0.4-stable-x86_64.iso"
Download_x64_Checksum = "c7ce6949197a42b285425ae5c6c5203c883530c4"
Download_x64_Sig = "https://osdn.net/dl/manjaro/manjaro-gnome-18.0.4-stable-x86_64.iso.sig"
Download_x64_Torrent = ""
Download_x86 = ""
Download_x86_Checksum = ""
Download_x86_Sig = ""
Download_x86_Torrent = ""
Name = "GNOME"
Screenshot = "gnome-full.jpg"
Youtube = "OjyfrFWaLDM"
Tags = [ "official" ]
shortDescription = "For people who want a very modern and simple desktop"
Thumbnail = "gnome.jpg"
Version = "18.0.4"
date = "12.03.2019T12:37:00+01:00"
title = "Gnome Stable"
type="download-edition"
weigth = "3"
+++

This edition is supported by the Manjaro team and comes with the GNOME 3 desktop that breaks with traditional concepts and allows users to focus on their tasks. Desktop-specific applications are crafted with care and clearly defined by guidelines that make them more consistent to use.

If you are looking for older images check the [GNOME](https://osdn.net/projects/manjaro/storage/z_release_archive/gnome) archive.
```
## Translation

If you want to translate Manjaro-Homepage with your language,
* After installation, you should add these lines inside `[languages]` at `site/config.toml`
```
        [languages.en-us]
        languageName= "English"
        title = "Manjaro - enjoy the simplicity"
        weight= 1
        contentDir= "content/english"
```
example;
```
        [languages.aa-bb]
        languageName= "Example"
        title = "Manjaro - enjoy the simplicity"
        weight= 1
        contentDir= "content/example"
```
In the these lines, you should change these words; `en-us`, `English`, `enjoy the simplicity`, `english` according to your language. Please, Don't touch others :) .

* Then, copy the menus lines(only start with `languages.en-us.menu`) of the config.toml Paste the lines to ends of the file. After that, you can start to translate it. You can only edit and `name = "blablabla"`. Please, Don't touch others :) .
original lines;
```
 [[languages.en-us.menu.main]]
    name = "New"
    url = "/news/"
    pre = ""
    weight = 2
```
example translation;
```
 [[languages.aa-bb.menu.main]]
    name = "myTranslation"
    url = "/news/"
    pre = ""
    weight = 2
```

* Copy the contents of the en-us.toml at `i18n/` directory, create new .toml file at `i18n/` directory. The new file name should be the `en-us` you changed above(example;`aa-bb.toml`). Paste the lines that you copied inside your new file. After that, you can start to translate it. You can only edit `other="TranslateMe"`. Please, Don't touch others :) .
original lines;
```
[chooseEditionAndDownload]
other = "Choose Edition and Download"

[slogan]
other="enjoy the simplicity"

[learnMore]
other = "Learn more"
```
example translation;
```
[chooseEditionAndDownload]
other = "aaa"

[slogan]
other="bbbbb"

[learnMore]
other = "mmmmmm"
```

* Lastly, make a new folder at `site/content/`, directory's name should be same `contentDir` at the `config.toml` (ex; `example`). Copy the contents of the `english` folder, then paste your new folder.
After that, you can start to translate contents at the new folder. Don't forget, translate only text, not tags :) .

**Before you send us, you may want to try. You can run with `hugo server -wDEFv --disableFastRender --noHTTPCache`**

After these steps, create a issue(`issues>new issue`), send us your changed files.

Thank you for your preciousss works.

### Adding pages
(TODO)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

