$(document).ready(function() {
    var l = 10;
    
    var userFeed = new Instafeed({
        get: 'user',
        userId: '2267354727',
        limit: l,
        resolution: 'standard_resolution',
        accessToken: '2267354727.1677ed0.4a5f3391d8fa4cd596995ebb404beea0',
        sortBy: 'most-recent',
        //template: '<div style="background-image: url({{image}});"></div>',
        template: '<div class="grid-item portraits"><div class="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="500" data-hover-bkg-color="#000000" data-hover-bkg-opacity="0.4"><a class="overlay-link lightbox-link" data-group="gallery-1"data-image-url="http://sartre.thememountain.com/images/photo-studio/portfolio/grid/small-margins/project-8-lightbox.jpg" href="images/photo-studio/portfolio/grid/small-margins/project-9-lightbox.jpg"><img src="{{image}}" alt="" /><span class="overlay-info v-align-bottom left"><span><span><span class="text-line bkg-white mb-10"></span><span class="project-title">Jayden</span><span class="project-description">Personal Folio</span></span></span></span></a></div></div>',
        filter: function(image) {
            return image.tags.indexOf('gallery') >= 0;
        }
    });
    //userFeed.run();

});
// id : https://codeofaninja.com/tools/find-instagram-user-id/
// token generate : http://instagram.pixelunion.net/
