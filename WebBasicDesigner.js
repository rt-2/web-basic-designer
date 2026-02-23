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
            //.window
            const $window = $("<div>", {
                class: "window"
            });
            //.titlebar
            const $titlebar = $("<div>", {
                class: "titlebar",
                text: "WebBasicDesigner - Example Form"
            });
            //.innerContent
            const $innerContent = $("<div>", {
                id: "innerContent"
            });

            $window.append($titlebar);
            $window.append($innerContent);
            $container.append($window);


            console.log("WebBasicDesigner initialized", settings);
        }

    };

    global.WebBasicDesigner = WebBasicDesigner;

})(window, jQuery);