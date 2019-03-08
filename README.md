 # Manjaro Homepage

This project is being developed for Manjaro.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Installing and Running for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install

```
hugo
git
```

### Installing and Running

* Install **hugo** on Manjaro with `pacman -S hugo`
* clone this repository to your local pc with `git clone https://gitlab.manjaro.org/tools/maintenance-tools/manjaro-homepage`
* change in the new dir with `cd homepage`
* do a test run with `hugo server --config config.toml,en-us.toml -D`
* preview the homepage with any webbrowser from `http://localhost:1313/`

### Translation

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

* Then, copy the contents of the en-us.toml, create new .toml file at `site/` directory. The new file name should be the `en-us` you changed above(example;`aa-bb.toml`). Paste the lines that you copied inside your new file. After that, you can start to translate it. You can just edit `languages.en-us` and `name = "New"`. Please, Don't touch others :) .
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

* Similar to the previous step, copy the contents of the en-us.toml, create new .toml file at `i18n/` directory. The new file name should be the `en-us` you changed above(example;`aa-bb.toml`). Paste the lines that you copied inside your new file. After that, you can start to translate it. You can only edit `other="TranslateMe"`. Please, Don't touch others :) .
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

**Before you send us, you may want to try. You can run with `hugo server --config config.toml,en-us.toml,aa-bb.toml -D`(don't forget to change `aa-bb` with your config file)**

After these steps, create a issue(`issues>new issue`), send us your changed files.

## Built With

* [Hugo](https://gohugo.io/getting-started/) - The web framework used


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



