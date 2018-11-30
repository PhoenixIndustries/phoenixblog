$('.row').masonry({
    itemSelector: '.grid-item'
});
(function () {
var feeds = [
"https://forum.manjaro.org/c/announcements.rss",
"https://forum.manjaro.org/c/announcements/manjaro32.rss",
"https://forum.manjaro.org/c/manjaro-arm/announcements.rss"
]
var feeds = feeds.values();
for (var feed of feeds) {
    $.get(feed, function(data) {
    var $XML = $(data);
    $XML.find("item").each(function(iter) {
        iter++
        var $this = $(this),
            item = {
                title:       $this.find("title").text().replace(/\d{2,4}[\-|\/]\d{1,2}[\-]\d{1,2}|\[|\]|\(|\)/g, ""),
                category:    $this.find("category").text(),
                description: $this.find("description").html().replace(/\]]>/g, "").replace("full topic", "in the forum"),
                date:        $this.find("pubDate").text().replace(/\+0000/g, ""),
                link:        $this.find("link").text(),
            };
        var el = "news" + item.date.replace(/\ |:|,/g, "") + iter.toString()
        //el += item.date.replace.text().replace(/\ |:|,/g, "")
        var shortDesc = item.description
        var article = `
        <article class='blog-post ` + el + ` grid-item col-md-6 col-xl-4 ml-auto mr-auto'>
            <div class="card">
                <div class="card-body">
                <time>` + item.date + `</time>
                <h5 class="card-title">` + item.title + `</h5>
                <img class="card-img-top img-fluid" src="" alt="Post Image" onerror="this.style.opacity='0'">
                <p class="card-text"></p>
                <div class="btn-group">
                <button class="btn-sm btn disabled">Read More:</button>
                <button data-toggle="modal" data-target='#` + el + `' class="btn btn-sm btn-success btn-primary"><a href="#">Here</a></button>
                <button class="btn btn-success btn-sm btn-primary"><a href="` + item.link + `">Forum</a></button>
                </div>
                </div>
            </div>
        </article>`
        
        var modal = `<div class="modal fade" id="` + el + `" tabindex="-1" role="dialog" aria-labelledby="` + item.title + `" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">` + item.title + `</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">
                    &times;
                    </button>
                </div>
                <div class="modal-body">
                ` + item.description + `
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        `
        var dateRegex = "/\d{2,4}[\:|\/]\d{1,2}[\:]\d{1,2}|\[|\]|\(|\)|,/g, ''"
        var oldDate =  $(".blog-post").find("time:first").text().replace(dateRegex)
        var newDate = item.date.replace(dateRegex)
        if (oldDate < newDate) {
            $(".blog .row").append(article);
        } else {
            $(".blog .row").prepend(article);
        }
        $("body").append(modal);
        var shortDesc = $('#' + el + ' .modal-body').text().trim().slice(1, 300);
        var img = item.description
        img = $('#' + el + ' .modal-body').find("img:first").attr("src")
        $("." + el + " .card-text").append(shortDesc);
        $(".row").masonry("reloadItems").masonry("layout");
        $("." + el + " .card-img-top").attr("src", img);
        
        $('.grid img').imagesLoaded( function() {
           $(".row").masonry("reloadItems").masonry("layout");
        });
    });
});
}})();
$(".row").masonry("reloadItems").masonry("layout");