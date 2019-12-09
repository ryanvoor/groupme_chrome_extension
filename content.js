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
    100 // check every 100 ms to see if the chats list exists on the page yet
);

var checkChatsElementExists = setInterval(
    function() {
        if ( typeof document.getElementById( 'chats' ) !== 'undefined' ) {
            if ( document.getElementsByTagName( 'body' )[0].clientHeight > 1200 ) {
                document.getElementById( 'chats' ).style.paddingBottom = '500px';
                console.log( 'Putting extra space under the chat content so it strains my neck less' );
                clearInterval( checkChatsElementExists );
            }
        }
    },
    100 // check every 100 ms to see if the chats wrapper div exists on the page yet
);
