window.onload = () => 
{
    let current = 1;
    let koeff = 1;
    if(Math.random > 0.5) //up
        koeff = -1;
    let current_li = $(".current"); 
    let swap_li = $(".animated_list").eq(current + koeff);
    console.log(swap_li.is('li'));
    if(swap_li.is('li'))
    {
        swap_li.addClass('current');
        current_li.removeClass('animated_list');
        current_li.animate({ 'margin-bottom': `+=${koeff * 75}px`, 'opacity': '0' }, 1000);
        swap_li.animate({ 'margin-bottom': `+=${koeff * 75}75px`, 'opacity': '1'}, 1000);
        // swap_li.fadeIn(1000);    

    }
}