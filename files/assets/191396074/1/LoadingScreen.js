pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash wrapper
        
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        var wrapper1 = document.createElement('div');
        wrapper1.id = 'application-splash-wrapper1';
        document.body.appendChild(wrapper1);
        
        var wrapper2 = document.createElement('div');
        wrapper2.id = 'application-splash-wrapper2';
        document.body.appendChild(wrapper2);
        
        var wrapper3 = document.createElement('div');
        wrapper3.id = 'application-splash-wrapper3';
        document.body.appendChild(wrapper3);
        
        var wrapper4 = document.createElement('div');
        wrapper4.id = 'application-splash-wrapper4';
        document.body.appendChild(wrapper4);
        
        var wrapper5 = document.createElement('div');
        wrapper5.id = 'application-splash-wrapper5';
        document.body.appendChild(wrapper5);

        
        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'none';
        
        var splash1 = document.createElement('div');
        splash1.id = 'application-splash1';
        wrapper1.appendChild(splash1);
        splash1.style.display = 'none';
        
        var splash2 = document.createElement('div');
        splash2.id = 'application-splash2';
        wrapper2.appendChild(splash2);
        splash2.style.display = 'none';
        
        var splash3 = document.createElement('div');
        splash3.id = 'application-splash3';
        wrapper3.appendChild(splash3);
        splash3.style.display = 'none';
        
        var splash4 = document.createElement('div');
        splash4.id = 'application-splash4';
        wrapper4.appendChild(splash4);
        splash4.style.display = 'none';
        
        var splash5 = document.createElement('div');
        splash5.id = 'application-splash5';
        wrapper5.appendChild(splash5);
        //splash5.style.display = 'none';

        var logo = document.createElement('img');
        logo.src = 'https://s3.amazonaws.com/aws-website-testvideopc-tuqrz/Ui/Client-Logo.png';
        splash.appendChild(logo);
        //logo.onload = function () {
            splash.style.display = 'block';
            splash.style.width = '35%';
            splash.style.height = '12%';
        //};
        
        var logo1 = document.createElement('img');
        logo1.src = 'https://s3.amazonaws.com/aws-website-testvideopc-tuqrz/Ui/Captate-Logo.png';
        splash1.appendChild(logo1);
        //logo.onload = function () {
            splash1.style.display = 'block';
            splash1.style.width = '12.239%';
            splash1.style.height = '5.0925%';
        //};
        
        var logo2 = document.createElement('img');
        logo2.src = 'https://s3.amazonaws.com/aws-website-testvideopc-tuqrz/Ui/Text-Comissioned_by.png';
        splash2.appendChild(logo2);
        //logo.onload = function () {
            splash2.style.display = 'block';
            splash2.style.width = '7.604%';
            splash2.style.height = '2.450%';
        //};
        
        var logo3 = document.createElement('img');
        logo3.src = 'https://s3.amazonaws.com/aws-website-testvideopc-tuqrz/Ui/Text-Developed_by.png';
        splash3.appendChild(logo3);
        //logo.onload = function () {
            splash3.style.display = 'block';
            splash3.style.width = '6.302%';
            splash3.style.height = '2.156%';
        //};
        
        var logo4 = document.createElement('img');
        logo4.src = 'https://s3.amazonaws.com/aws-website-testvideopc-tuqrz/Ui/Text.png';
        splash4.appendChild(logo4);
        //logo.onload = function () {
            splash4.style.display = 'block';
            splash4.style.width = '30%';
            splash4.style.height = '4.5%';
        //};
        
        var logo5 = document.createElement('img');
        logo5.src = 'https://s3.amazonaws.com/aws-website-testvideopc-tuqrz/Button/ModeClickedDummy.png';
        splash5.appendChild(logo5);
        //logo.onload = function () {
            splash5.style.display = 'block';
            splash5.style.width = '35%';
            splash5.style.height = '5%';
        //};
        
        var container = document.createElement('div');
        container.id = 'progress-bar-container';
        splash5.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);

    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    };
    
    var hideSplash1 = function () {
        var splash1 = document.getElementById('application-splash-wrapper1');
        splash1.parentElement.removeChild(splash1);
    };
    
    var hideSplash2 = function () {
        var splash2 = document.getElementById('application-splash-wrapper2');
        splash2.parentElement.removeChild(splash2);
    };
    
    var hideSplash3 = function () {
        var splash3 = document.getElementById('application-splash-wrapper3');
        splash3.parentElement.removeChild(splash3);
    };
    
    var hideSplash4 = function () {
        var splash4 = document.getElementById('application-splash-wrapper4');
        splash4.parentElement.removeChild(splash4);
    };
    
    var hideSplash5 = function () {
        var splash5 = document.getElementById('application-splash-wrapper5');
        splash5.parentElement.removeChild(splash5);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '    background-color: #2d2e2f;',
            '}',

            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '}',

            '#application-splash {',
            '    position: absolute;',
            '    top: 0px;',
            '    left: 0px;',
            '}',

            '#application-splash1 {',
            '    position: absolute;',
            '    bottom: 0px;',
            '    left: 0px;',
            '}',
            
            '#application-splash1 img {',
            '    height: 100%;',
            '    width: 100%;',
            '}',
            '#application-splash2 {',
            '    position: absolute;',
            '    bottom: 0px;',
            '    left: 0px;',
            '}',
            
            '#application-splash2 img {',
            '    height: 100%;',
            '    width: 100%;',
            '}',
            '#application-splash3 {',
            '    position: absolute;',
            '    bottom: 0px;',
            '    left: 0px;',
            '}',
            
            '#application-splash3 img {',
            '    height: 100%;',
            '    width: 100%;',
            '}',
            '#application-splash4 {',
            '    position: absolute;',
            '    bottom: 0px;',
            '    left: 0px;',
            '}',
            
            '#application-splash4 img {',
            '    height: 100%;',
            '    width: 100%;',
            '}',

            '#application-splash img {',
            '    height: 100%;',
            '    width: 100%;',
            '}',
            
            '#application-splash5 {',
            '    position: absolute;',
            '    bottom: 0px;',
            '    left: 0px;',
            '}',

            '#progress-bar-container {',
            '    margin: 20px auto 0 auto;',
            '    border-radius: 2%/98%;',
            '    top: 10px;',
            '    left: 0;',
            '    height: 6px;',
            '    width: 70%;',
            '    background-color: #1a1b1a;',
            '}',

            '#progress-bar {',
            '    border-radius: 2%/98%;',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color: #207b7d;',
            '}',
            '@media {',
            '    #application-splash {',
            '    top: 27.129%;',
            '    left: 32.5%;',
            '    }',
            '    #application-splash1 {',
            '    bottom: 5%;',
            '    left: 2.8%;',
            '    }',
            '    #application-splash2 {',
            '    top: 20.740%;',
            '    left: 31.125%;',
            '    }',
            '    #application-splash3 {',
            '    bottom: 12%;',
            '    left: 2.8%;',
            '    }',
            '    #application-splash4 {',
            '    top: 45%;',
            '    left: 35%;',
            '    }',
            '    #application-splash5 {',
            '    top: 42.5%;',
            '    left: 32.5%;',
            '    }',
            '}'
        ].join("\n");

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };


    createCss();

    showSplash();
        
    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
    app.on('start', hideSplash1);
    app.on('start', hideSplash2);
    app.on('start', hideSplash3);
    app.on('start', hideSplash4);
    app.on('start', hideSplash5);
});