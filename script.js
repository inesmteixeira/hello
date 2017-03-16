$(document).ready(function () {
                  
//  console.log("hello")
                  
//  $(".list li").addClass('active');
                  
                  
// $('.btn').on('click', function() {                 
//      $(".list li").addClass('active');      
//    });
    
// $('.list li').on('click', function() {                 
// $(this).toggleClass('active');    
// });

//  $('.btn').on('click', function() {                 
//      $(this).text('hello');      
//    });
    
//    $('.btn').on('click', function() {    
//        $('.list').append('<li>Item 4 <li/>');    
//}); 
    
 $('.btn').on('click', function() {    
    $('.list').children().first().addClass('active');  
}); 
    
    
});