window.onload = () => 
{
    let active_img = 1;
    let animated_ = true;
    let current_mes = 0;
    let messages = [ "Недавание релизы", "Горячие новости", "И многое другое!"];
    let label_enter = $('#title_enter');
    let title_album = $('#title_album');
    let title_band = $('#title_band');
    let scroll_box = $('#scroll_box_albums');
    let arrow = $('#info_expande');
    let text_box = $('#text_box');
    text_box.slideUp();


    function Rotate_Images(e)
    {
        console.log('rotate')
        let koeff = -1;
        let element = $('#img_scroll_' + active_img);
        //left
        if(element.offset().left + element.width() / 2 > e.clientX)
            koeff = 1;
        let elem = $('#img_scroll_' + (active_img - 1 * koeff));
        if(elem.length && animated_)//
        {
            animated_ = false;
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
            element.animate({ 'opacity': '0.5', 'z-index': '0', 'left': left, 'width': '300px', 'margin-left': margin_left }, {duration: 500, complete: () => 
            {
                element.css('box-shadow', box_shadow + ' -20px 30px 5px rgba(0, 0, 0, 1)');
                title_album.fadeOut({complete: () => { title_album.html(elem.attr('data-name')) }});
                title_album.fadeIn();
                elem.css('box-shadow', '0px -10px 30px 5px rgba(0, 0, 0, 1)');
                elem.css('z-index', '1');
                element.animate({ }, 400);
                to_hide.fadeOut();
                elem.animate({ 'opacity': '1', 'z-index': '1', 'left': '50%', 'width': '500px', 'margin-left': '-250px' }, {duration: 500, complete: () => 
                {
                    to_show.show('fast');
                    to_hide.hide('slow');
                    animated_ = true;
                }});
            }}); 
        }
    }

    function Rotate_Arrow(e)
    {
        if(arrow.data('orientation') == 'down')
        {
            arrow.css('transform', 'rotate(180deg)');
            // arrow.css('display', 'block');
            arrow.data('orientation', 'up');
            //
            // reviev.fadeTo(400, 1);
            text_box.slideDown();
        }
        else
        {
            arrow.css('transform', 'rotate(0deg)');
            arrow.data('orientation', 'down');
            //
            text_box.slideUp();
        }
    }

    function Scroll_Text()
    {
        console.log('enter');
        label_enter.animate({ 'margin-left': '+=100px', 'opacity': '0' }, { complete: () => 
        {
            label_enter.css('margin-left', '-10px');
            let new_mes = current_mes;
            while(new_mes == current_mes)
                new_mes = Math.round(Math.random() * 2);
            label_enter.html(messages[new_mes]);
            label_enter.animate({ 'margin-left': '15px', 'opacity': '1' });
            current_mes = new_mes;
        }});
    }

    function Load_Images()
    {
        // text_box.load( { data: 'hollow' });
        $.post('http://localhost:3000/', { data: 'hollow' }, (result) => 
        {
            console.log(result);
            result.map((elem, index) => 
            {
                if(index == 0)
                    title_album.html(elem.Name);
                scroll_box.append(`<img data-name="${elem.Name}" class="img_scroll" id="img_scroll_${index + 1}" src="${elem.cover}">`);
            });
        });
    }

    Load_Images();
    arrow.on("click", (e) => Rotate_Arrow(e));
    scroll_box.on('click', (e) => Rotate_Images(e));
    setInterval(Scroll_Text, Math.random() * 5000 + 3000);
}

