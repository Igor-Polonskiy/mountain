
jQuery(function($){
  
 $('.sixth_block').imagesLoaded( function() {
  // этот код выполнится после полной загрузки изображений

 $(".grid").masonry({

  itemSelector: '.grid-item',
  columnWidth:'.width-1',
  gutter: 10,
 });
});


});