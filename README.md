# angular-icons
A collection of icon libraries to use in your angular apps

[![GitHub version](https://badge.fury.io/gh/base-apps%2Fangular-icons.svg)](https://badge.fury.io/gh/base-apps%2Fangular-icons)

## Install
```
npm install angular-icons
```

You will also need to install the icon assets:
```
npm install ionicons
npm install material-design-icons
npm install open-iconic
```

## Usage
The following icon libraries are supported by Angular Icons:
- Iconic
- Open Iconic
- Ionicons
- Material Icons

You can include an icon from one of the above libraries by using the provided directives:
- `ba-iconic`
- `ba-open-iconic`
- `ba-ionicon`
- `ba-material-icon`

Each of the directives has an `icon` attribute which can be used to easily load an icon:
- `<ba-iconic icon="thumb"></ba-iconic>`
  - Full list of supported icons can be found [here](https://github.com/base-apps/angular-icons/tree/master/dist/icons/iconic)
  - Check the [Iconic website](https://useiconic.com/icons) for examples
- `<ba-open-iconic icon="thumb-up"></ba-open-iconic>`
  - Full list of supported icons can be found [here](https://github.com/base-apps/angular-icons/tree/master/dist/icons/open-iconic)
  - Check the [Open Iconic website](https://useiconic.com/open) for examples
- `<ba-ionicon icon="ios-thumbs-up"></ba-ionicon>`
  - Full list of supported icons can be found [here](https://github.com/base-apps/angular-icons/tree/master/dist/icons/ionicons)
  - Check the [Ionicons website](http://ionicons.com/) for examples
- `<ba-material-icon icon="thumb-up"></ba-material-icon>`
  - Full list of supported icons can be found [here](https://github.com/base-apps/angular-icons/tree/master/dist/icons/material-icons)
  - Check the [Material Icons website](https://design.google.com/icons/) for examples

Styling of the icons is provided as part of [Angular Base Apps](https://base-apps.github.io/angular-base-apps/#!/icon).

## angularIcons.iconic (Module)

### Iconic (Service)

You can use the IconicProvider to configure the default path to the iconic assets.  The following methods exist:
  - `setAssetPath(path)` - sets the full path to the icons
    - useful if hosting the icons locally or if using a non-supported CDN
  - `setCdn(cdn)` - sets the CDN to use for the icons
    - the icons are hosted on the following CDNs: npmcdn (default), jsdelivr

### ba-iconic (Directive)

A directive used to load an icon from Iconic.  The directive has the following supported attributes:
- `icon-dir`: changes the directory for the icons (default specified by Iconic service)
- `src`: full path to the icon (including svg extension)
- `size`: use the values **small**, **medium**, or **large** to size the icon (by default all iconic icons are responsive and will fill to fit their entire container)
- `dyn-icon`: use this attribute to define the name of the icon using an [expression](https://docs.angularjs.org/guide/expression)
- `dyn-icon-attrs`: use this attribute to define the icon attributes using an object

Each icon from iconic may also provide a set of attributes to further customize the icon.  For instance the `data-direction` attribute can be used for the `chevron` icon to specify the [direction of the chevron](https://useiconic.com/icons/chevron).

## angularIcons.openIconic (Module)

### OpenIconic (Service)

You can use the OpenIconicProvider to configure the default path to the open iconic assets.  The following methods exist:
  - `setAssetPath(path)` - sets the full path to the icons
    - useful if hosting the icons locally or if using a non-supported CDN
  - `setCdn(cdn)` - sets the CDN to use for the icons
    - the icons are hosted on the following CDNs: npmcdn (default), jsdelivr

### ba-open-iconic (Directive)

A directive used to load an icon from Open Iconic.

## angularIcons.ionicons (Module)

### Ionicons (Service)

You can use the IoniconsProvider to configure the default path to the ionicons assets.  The following methods exist:
  - `setAssetPath(path)` - sets the full path to the icons
    - useful if hosting the icons locally or if using a non-supported CDN
  - `setCdn(cdn)` - sets the CDN to use for the icons
    - the icons are hosted on the following CDNs: npmcdn (default), jsdelivr

### ba-ionicon (Directive)

A directive used to load an icon from Ionicon.

## angularIcons.materialIcons (Module)

### MaterialIcons (Service)

You can use the MaterialIconsProvider to configure the default path to the material icons assets.  The following methods exist:
  - `setAssetPath(path)` - sets the full path to the icons
    - useful if hosting the icons locally or if using a non-supported CDN
  - `setCdn(cdn)` - sets the CDN to use for the icons
    - the icons are hosted on the following CDNs: npmcdn (default), jsdelivr

### ba-material-icon (Directive)

A directive used to load an icon from Material Icons.
