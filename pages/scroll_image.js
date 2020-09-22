window.onload = () => 
{
    let active_img = 1;
    let animated_ = true;
    let Y;
    let element = $('#img_scroll_' + active_img);
    let scroll_box = $('#scroll_box_albums');
    let arrow = $('#info_expande');
    let reviev = $('#text_box');
    reviev.slideUp();
    arrow.on("click", (e) => 
    {
        if(arrow.data('orientation') == 'down')
        {
            arrow.css('transform', 'rotate(180deg)');
            arrow.css('display', 'blocks');
            arrow.data('orientation', 'up');
            //
            // reviev.fadeTo(400, 1);
            reviev.slideDown();
        }
        else
        {
            arrow.css('transform', 'rotate(0deg)');
            arrow.data('orientation', 'down');
            //
            reviev.slideUp();
        }
    });
    scroll_box.on('click', (e) =>
    {
        let koeff = -1;
        element = $('#img_scroll_' + active_img);
        //left
        if(element.offset().left + element.width() / 2 > e.clientX)
            koeff = 1;
        let elem = $('#img_scroll_' + (active_img - 1 * koeff));
        if(elem.length && animated_)//
        {
            let to_hide = $('#img_scroll_' + (active_img + 1 * koeff));
            let to_show = $('#img_scroll_' + (active_img - 2 * koeff));
            let left = '0';
            let margin_left = '0';
            let box_shadow = '-20px';
            active_img -= koeff;
            if(koeff == 1 && to_hide && to_show)//left
            {
                left = '100%';
                margin_left = '-300px';
                box_shadow = '20px';
            }//right
            animated_ = false;
            element.animate({ 'opacity': '0.5', 'z-index': '0', 'left': left, 'width': '300px' }, {complete: () => 
            {
                element.css('box-shadow', box_shadow + ' -20px 30px 5px rgba(0, 0, 0, 1)');
                element.animate({ 'margin-left': margin_left }, 1000);
                to_hide.fadeOut();
                elem.animate({ 'opacity': '1', 'z-index': '1', 'left': '50%', 'width': '500px'}, {complete: () => 
                {
                    elem.css('box-shadow', '0px -10px 30px 5px rgba(0, 0, 0, 1)');
                    elem.animate({ 'margin-left': '-250px' });
                    to_hide.hide('fast');
                    to_show.show();
                    animated_ = true;
                }});
            }}); 
        }
    }).on('mousedown', (e) => 
    {
        // Y = e.clientY;
        animated_ = true;
        Y = e.clientY;
    }).on('mousemove', (e) => 
    {
        element = $('#img_scroll_' + active_img);
        if(animated_)
        {
            element.offset({ 'top': Y - e.clientY});
        }
    }).on('mouseup', (e) => 
    {

    });

}
