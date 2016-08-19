# angular-icons
A collection of icon libraries to use in your angular apps

## Usage
The following icon libraries are supported by Angular Icons:
- Iconic
- Ionicons
- Material Icons

You can include an icon from one of the above libraries by using the provided directives:
- `ba-iconic`
- `ba-ionicon`
- `ba-material-icon`

Each of the directives as an **icon** attribute which can be used to easily load an icon:
- `<ba-iconic icon="thumb"></ba-iconic>`
  - Full list of supported icons can be found [here](https://github.com/base-apps/angular-icons/tree/master/dist/icons/iconic)
  - Check the [Iconic website](https://useiconic.com/icons) for examples
- `<ba-ionicon icon="thumbsup"></ba-ionicon>`
  - Full list of supported icons can be found [here](https://github.com/base-apps/angular-icons/tree/master/dist/icons/ionicons)
  - Check the [Ionicons website](http://ionicons.com/) for examples
- `<ba-material-icon icon="thumb-up"></ba-material-icon>`
  - Full list of supported icons can be found [here](https://github.com/base-apps/angular-icons/tree/master/dist/icons/material-icons)
  - Check the [Material Icons website](https://design.google.com/icons/) for examples

Styling of the icons is provided as part of [Angular Base Apps](https://base-apps.github.io/angular-base-apps/#!/icon).

## angularIcons.iconic (Module)

### Iconic (Service)

You can use the IconicProvider to configure the default path to the iconic assets:
```javascript
angular.module('...').config(function(IconicProvider) {
   IconicProvider.setAssetPath("...");
});
```

### ba-iconic (Directive)

A directive used to load an icon from Iconic.  The directive has the following supported attributes:
- `icon-dir`: changes the directory for the icons (default specified by Iconic service)
- `src`: full path to the icon (including svg extension)
- `size`: use the values **small**, **medium**, or **large** to size the icon (by default all iconic icons are responsive and will fill to fit their entire container)
- `dyn-icon`: use this attribute to define the name of the icon using an [expression](https://docs.angularjs.org/guide/expression)
- `dyn-icon-attrs`: use this attribute to define the icon attributes using an object

Each icon from iconic may also provide a set of attributes to further customize the icon.  For instance the `data-direction` attribute can be used for the `chevron` icon to specify the [direction of the chevron](https://useiconic.com/icons/chevron).

## angularIcons.ionicons (Module)

### Ionicons (Service)

You can use the IoniconProvider to configure the default path to the ionicons assets:
```javascript
angular.module('...').config(function(IoniconProvider) {
   IoniconProvider.setAssetPath("...");
});
```

### ba-ionicon (Directive)

A directive used to load an icon from Ionicon.

## angularIcons.materialIcons (Module)

### MaterialIcon (Service)

You can use the MaterialIcon to configure the default path to the material icons assets:
```javascript
angular.module('...').config(function(MaterialIcon) {
   MaterialIcon.setAssetPath("...");
});
```

### ba-material-icon (Directive)

A directive used to load an icon from Material Icons.
