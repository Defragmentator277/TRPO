window.onload = () => 
{
    let active_img = 1;
    let scroll_box = getElem('scroll_box');
    let arrow = getElem('info_expande');
    let reviev = getElem('text_box');
    let rect = scroll_box.getBoundingClientRect();
    arrow.onclick = (e) => 
    {
        if(!arrow.style.transform)//expande
        {
            arrow.style.transform = 'rotate(180deg)';
            reviev.style.opacity = '1';
            reviev.style.height = '500px';
        }
        else//shrink
        {
            reviev.style.opacity = '0';
            reviev.style.height = '0px';
            arrow.style.transform = '';
        }
    }
    scroll_box.onclick = function(e) 
    {
        element = getElem('img_scroll_' + active_img);
        let elem;
        let to_hide;
        let to_show;
        //left
        if(rect.width / 2 + rect.left > e.clientX)
        {
            elem = getElem('img_scroll_' + (active_img - 1));
            if(elem)//On middle
            {
                to_hide = getElem('img_scroll_' + (active_img + 1));
                to_show = getElem('img_scroll_' + (active_img - 2));
                active_img--;
                element.style.left = '100%';
                element.style.marginLeft = '-300px';
                element.style.width = '300px';
                element.style.opacity = '0.5';
                element.style.zIndex = '0';
                //
                // elem.style.right = '25%';
                elem.style.left = '50%';
                elem.style.marginLeft = '-250px';
                elem.style.width = '500px';
                elem.style.opacity = '1';
                elem.style.zIndex = '1';
            }

        }
        else
        {
            console.log('right');
            elem = getElem('img_scroll_' + (active_img + 1));
            if(elem)//On middle
            {
                to_hide = getElem('img_scroll_' + (active_img - 1));
                to_show = getElem('img_scroll_' + (active_img + 2));
                active_img++;
                element.style.left = '0';
                element.style.marginLeft = '0';
                element.style.width = '300px';
                element.style.opacity = '0.5';
                element.style.zIndex = '0';
                //
                // elem.style.left = '25%';
                elem.style.left = '50%';
                elem.style.width = '500px';
                elem.style.marginLeft = '-250px';
                elem.style.opacity = '1';
                elem.style.zIndex = '1';
            }
        }
        if(to_hide)
        {
            console.log('to_hide - ' + to_hide.style.display);
            to_hide.style.display = 'none';
        }
        if(to_show)
        {
            console.log('to_show - ' + to_show.style.display);
            to_show.style.display = 'block';
        }
    }

}


function getElem(id)
{
    return document.getElementById(id);
}