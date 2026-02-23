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
            $container.load("res/layout/main.html", function () {


                $(".WBD_mainContainer #window").load("res/layout/window.html", function () {
                    // Window UI Loaded

                    // Callbacks
                    // Edit title on click
                    $(".WBD_mainContainer").on("click", "#window #title", function () {

                        var $title = $(this);

                        // Prevent creating multiple inputs
                        if ($title.find("input").length) return;

                        var currentText = $title.text();

                        var $input = $("<input>", {
                            type: "text",
                            id: "WBD_windowsTitleInput",
                            value: currentText
                        });

                        $title.empty().append($input);
                        $input.focus();

                        // Save on Enter
                        $input.on("keydown", function (e) {
                            if (e.key === "Enter") {
                                $title.text($(this).val());
                            }
                        });

                        // Save on blur (click outside)
                        $input.on("blur", function () {
                            $title.text($(this).val());
                        });

                        //select all
                        $input.select();

                    });

                    console.log("WebBasicDesigner window UI initialized", settings);
                });

                $(".WBD_mainContainer #toolbox").load("res/layout/toolbox.html", function () {
                    // Toolbox UI Loaded

                    console.log("WebBasicDesigner toolbox UI initialized", settings);
                });

                $(".WBD_mainContainer #properties").load("res/layout/properties.html", function () {
                    // Properties UI Loaded

                    console.log("WebBasicDesigner properties UI initialized", settings);
                });


                //console.log("WebBasicDesigner initialized", settings);
            
            });
        }

    };

    global.WebBasicDesigner = WebBasicDesigner;

})(window, jQuery);