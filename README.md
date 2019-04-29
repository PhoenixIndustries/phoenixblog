# Manjaro Homepage

This project is being developed for Manjaro, this readme is a work in progress if anything is missing let us know.

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

## Built With

* [Hugo](https://gohugo.io/getting-started/) - The web framework used

### libraries used, get familiar with them. ( needs update ) 
* [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Isotope](https://isotope.metafizzy.co/)
* [Jquery](https://jquery.com/)
* [Fontawesome](https://fontawesome.com/)

## Adding/Editing menus

Menus can be edited by opening (/site/config.toml), more examples can be found inside the file.

```
[[menu.main]]
    name = "Features"
    url = "#"
    pre = ""
    weight = 2
    identifier = "features"
```
Content

```
[[menu.main]]
    name = "Under your control"
    url = "/features/under-your-control/"
    pre = "<i class='now-ui-icons objects_spaceship'></i>"
    weight = 2
    parent = "features"
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

