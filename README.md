# Sneaker.js : HTML5 MobileApp Page Transition Framework

[![Bower version](https://badge.fury.io/bo/Sneaker.js.svg)](http://badge.fury.io/bo/Sneaker.js)

Sneaker.js is screen transition framework for making a simple HTML5 hybrid mobile apps.
This is jQuery Plugin.(future independent)



## Description

Such as HTML5 hybrid app development of using the [Cordova](https://cordova.apache.org/), will be used [ionic](https://github.com/driftyco/ionic) and [Famo.us](https://github.com/Famous/famous), [OnsenUI](https://github.com/OnsenUI/OnsenUI) such as well.

However, they can not take advantage if there is no advanced knowledge a little more complex, such as [Angular.js](https://angularjs.org/).

If you use the Sneaker.js, special knowledge is not required, you will be able to create a very simple application screen transition of templates.

It is suitable for making to quickly prototype production and very simple app.

It is a proven to work in iOS and Android both high quality.



## Demo

GIF

![DEMO](http://i.gyazo.com/8fe9177a1013e13406d0404ecbe3409c.gif)

**[Youtube](http://youtu.be/Q0R9AmC8Qjg)** (can see more smoothly)

Demo Page (iOS/Android) Coming Soon... ;)



## Requirement

The following libraries are **required** now.(future independent)

With **bower** it will be automatically downloaded


- jQuery

- **[Fastclick.js](https://github.com/ftlabs/fastclick)**  (In order to disable the reaction delay of tap at iOS Device)

- **[Monaca-viewport.js](https://github.com/monaca/monaca.viewport.js)** (To unify the horizontal pixels of the screen in a variety of devices)



## Usage

### 1. Inport Sneaker.js and other libraries and CSS for your HTML.


Download the repository is placed manually or, to be introduced in the **bower**

```
bower install Sneaker.js
```

Files required for operation is the following.

- Sneaker.js/js/sneaker.js

- Sneaker.js/js/plugin.js

- Sneaker.js/css/sneaker.css

- Sneaker.js/css/reset.css

- jQuery

- Fastclick.js

- Monaca-viewport.js


View `/DEMO` folder and it may be helpful



### 2. Mark up the template of the screen (It will be more simpler...:D)

```
<div id="sk_wrapper">
    <!-- Navigation Bar -->
    <div id="sk_header">
        <div class="sk_header-content">
            <h1>FirstPageTitle</h1>
        </div>
    </div>
    <!-- Main Content (First View) -->
    <div id="sk_main">
        <div id="sk_contents">
            FirstPage Content
        </div>
    </div>
</div>
```


### 3. Run the method (It will be in the future big convenient...)

#### Next Page

Function to transition to a new page

```
nextPage(html, title);
```

*About Argument*

`html`  ---  HTML content of the next page

`title`  ---  Text of the next page in the navigation bar title


*For Example*

```
var content_html = $('#page1_tmp').html();
nextPage(content_html, 'Page1Title');
```

Can be devised freely!




#### Prev Page

Function to return to the previous page

```
prevPage();
```



## ToDo

- Add SwipeBack

- Add an external reading of page templates

- Component of a custom element

- independent from jQuery

- etc...



## Author
[@Hikaru](http://twitter.com/Hikaru_Itou)

