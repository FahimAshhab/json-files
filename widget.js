 var loc = window.location.href;
        var params = loc.split('?')[1];
        
        // console.log('params ',params)
        // console.log('iframe.src',iframe.src )
        document.getElementById('myIframe').src = document.getElementById('myIframe').src.toString() + '?' + params
