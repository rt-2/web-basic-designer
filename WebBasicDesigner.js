(function (global, $) {

    if (!$) {
        console.error("WebBasicDesigner requires jQuery.");
        return;
    }

    const WebBasicDesigner = {

        version: "0.0.2",

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

            this.config = settings;
            this.$container = $container;

            // Apply dimensions via jQuery
            $container.css({
                width: settings.width,
                height: settings.height,
                position: "relative"
            });

            console.log("WebBasicDesigner initialized", settings);
        }

    };

    global.WebBasicDesigner = WebBasicDesigner;

})(window, jQuery);