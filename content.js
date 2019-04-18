var checkUnwantedChatsExist = setInterval(
    function() {
        var list_items = document.querySelectorAll( '.list-item' );

        for (var i = 0; i < list_items.length; i++) {
            if (list_items[i].querySelectorAll( '.chat-name' )[0].title === 'Sydney Young' ) {
                console.log( 'Hiding unwanted direct message chat(s).' );
                list_items[i].style.display = 'none';
                clearInterval( checkUnwantedChatsExist );
            }
        }
    },
    100 // check every 100 ms to see if the chats exist on the page yet
);

