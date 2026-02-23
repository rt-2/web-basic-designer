(function (global, $) {

    if (!$) {
        console.error("WebBasicDesigner requires jQuery.");
        return;
    }

    const WebBasicDesigner = {

        version: "0.0.3",

        config: {
            width: 800,
            height: 600
        },

        $container: null,

        init: function (containerId, options) {

            const settings = $.extend(true, {}, this.config, options);

            const $container = $("#" + containerId);

            if (!$container.length) {
                console.error("WebBasicDesigner: container not found");
                return;
            }

            $container.addClass("WBD_mainContainer");

            this.config = settings;
            this.$container = $container;

            // Apply dimensions via jQuery
            $container.css({
                width: settings.width,
                height: settings.height
            });

            // apply default elements

            /* PROBLEM START */

/*
            I got 2 different script here,, both dont work in different ways,,
*/

/*

            Script 1 loads all correctly, but inside a div of the same name I don't want:

            const $window = $("<div>", { id: "window" });
            const $toolbox = $("<div>", { id: "toolbox" });
            const $properties = $("<div>", { id: "properties" });
            $container.append($window);
            $container.append($toolbox);
            $container.append($properties);
            $window.load("res/layout/window.html");
            $toolbox.load("res/layout/toolbox.html");
            $properties.load("res/layout/properties.html");
*/

/*
            Script 2 seems to load only the last one:

            $container.load("res/layout/window.html");
            $container.load("res/layout/toolbox.html");
            $container.load("res/layout/properties.html");
*/
            /* PROBLEM END */


            console.log("WebBasicDesigner initialized", settings);
        }

    };

    global.WebBasicDesigner = WebBasicDesigner;

})(window, jQuery);