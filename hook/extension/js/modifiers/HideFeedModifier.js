/**
 *   HideFeedModifier is responsible of ...
 */
function HideFeedModifier(feedHideChallenges, feedHideCreatedRoutes) {
    this.feedHideChallenges_ = feedHideChallenges;
    this.feedHideCreatedRoutes_ = feedHideCreatedRoutes;
}

/**
 * Define prototype
 */
HideFeedModifier.prototype = {

    modify: function modify() {

        var hideFeeds = function() {

            // If hide challenges
            if (this.feedHideChallenges_) {
                jQuery('.feed-container').find('.challenge').remove();

            }

            // If hide created routes
            if (this.feedHideCreatedRoutes_) {
                jQuery('div.feed>.min-view').each(function() {
                    if (jQuery('div.feed').find('div.entry-container').has('a[href*=\'/routes\']').length > 0) jQuery(this).remove();
                });
            }

            jQuery('div.feed>.time-header').each(function() {

                timeHeaderElement = jQuery(this);

                if (timeHeaderElement.nextUntil('.time-header').not('script').length === 0) {
                    timeHeaderElement.remove();
                }
            });

        }.bind(this);

        setInterval(hideFeeds, 750);
    },
};
