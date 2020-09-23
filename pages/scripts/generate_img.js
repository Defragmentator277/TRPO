window.onload = () => 
{
    scroll_box = $('#scroll_box_albums');
    scroll_box.load('./server.js', { 'event': 'get_enter_albums' });
}