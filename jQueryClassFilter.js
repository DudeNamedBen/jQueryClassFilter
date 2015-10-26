(function ($) {

    /**
     * Takes a function that is applied to every class that the given DOM element (or list of DOM elements) has.
     * If the function returns a falsy value the class is discarded if the function returns a truthy
     * value the class is not discarded.
     *
     * Example:
     *
     * Given the following div container
     *   <div id="myDiv" class="button buttonRed otherClass"></div>
     *
     * Calling the plugin like this:
     *   $('#myDiv').filterClasses(name => name.startsWith('button'));
     *
     * Results in:
     *   <div id="myDiv" class="button buttonRed"></div>
     *
     * @param filter function that should be used to filter class names
     */
    $.fn.filterClasses = function (filter) {
        if (typeof filter === 'function') {
            this.each(function () {
                //convert class list to an Array
                var classes = [].slice.call(this.classList);
                $(this).attr('class', classes.filter(filter).join(' '));
            })
        }
    }

})(jQuery);