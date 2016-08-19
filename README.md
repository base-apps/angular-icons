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
- `<ba-ionicon icon="thumb"></ba-ionicon>`
  - Full list of supported icons can be found [here](https://github.com/base-apps/angular-icons/tree/master/dist/icons/ionicons)
  - Check the [Ionicons website](http://ionicons.com/) for examples
- `<ba-material-icon icon="thumb"></ba-material-icon>`
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

A directive used to load an icon from Iconic.

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
