
var page_to_load;


// Clear images when hitting submit button again
function clearImages(){
  page_to_load = 1;
  document.getElementById('image_cards').innerHTML = "";
}

// Add more photos when scrolling to bottom of page
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       makeApiCall();
   }
});

function makeApiCall(){
  // get inputs from HTML page
  var tags = document.getElementById('tags').value;
  var num_images = document.getElementById('num_images').value;

  // parse tags variable into individual words
  var parsed = tags.split(",");
  var tags_insert = "";

  // create tags insert into the API URL
  for (var j = 0; j < parsed.length; j++) {
    if (j < parsed.length - 1){
      tags_insert += (parsed[j] + "%2C+");
    }
    else{
      tags_insert += parsed[j];
    }
  }

  console.log(tags_insert);

  // build URL according to variables above
  var url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ebb99020f2379d2263144ae355747943&tags=' + tags_insert + '&privacy_filter=1&safe_search=1&extras=&per_page=' + num_images + '&page=' + page_to_load + '&format=json&nojsoncallback=1'; //Place your flickr API Call Here

  // Increment page to view
  page_to_load += 1;

  // Ajax API call
  $.ajax({url:url, dataType:"json"}).then(function(data) {
    console.log(data);//Review all of the data returned

    // Function to add a card with image and title
    function addCard(i){

      var server = data.photos.photo[i].server
      var id = data.photos.photo[i].id
      var secret = data.photos.photo[i].secret
      var size = "q"
      var title = data.photos.photo[i].title

      var image = "https://live.staticflickr.com/" + server + "/" + id + "_" + secret + "_" + size + ".jpg"

      var addition = ""

      addition += '<div style="width: 20%;">'
      addition += '<div class="card">'
      addition += '<img src="' + image + '" class="card-img-top" alt="picture: ' + i + '">'
      addition += '<div class="card-body">'
      addition += '<p class="card-title">' + title + '</p>'
      addition += '</div>'
      addition += '</div>'
      addition += '</div>'

      document.getElementById('image_cards').innerHTML += addition
    }

    // function to add cards according to num_images
    for (var i = 0; i < num_images; i++) {
      addCard(i)
    }
  })
}
