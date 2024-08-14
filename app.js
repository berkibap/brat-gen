window.theme = 'white';
let setTheme = (theme) => {
    window.theme = theme;
    if(theme == 'white') {
        $('.output').css('background-color', 'white');
        $('#input').removeAttr('maxlength');
        //$('.output').css('color', 'black');
    } else {
        $('.output').css('background-color', '#8ACE00');
        $('#input').attr('maxlength', '20');
        $('.output').css('font-size', '5vw!important');
        // center the text in the output div
        $('.output').css('text-align', 'center');
        $('.output').css('padding', '20px');
        // remove the border
        $('.output').css('border', 'none');
    }
}
$(() => {
    
    $('#input').on('input', (e) => {
        console.log(textFit($('#input').val(), {maxFontSize: 170}));
        $('.output').text($('#input').val());
        
        if(window.theme == 'white') {
            $('.output').css('background-color', 'white');
            //$('.output').css('color', 'black');
        } else {
            $('.output').css('background-color', '#8ACE00');
            //$('.output').css('color', 'white');
        }
        // if theme is green, fit it in the center from top and left, else fit it in the left top corner
        if(window.theme == 'green') {
            textFit($('.output'), {maxFontSize: 170, alignHoriz: true, alignVert: true});
        } else {
            
        textFit($('.output'), {maxFontSize: 170, multiLine: true, });

        }

    })

    $('button').on('click', (e) => {
        html2canvas(document.querySelector(".output"), {
            dpi: 72
        }).then(canvas => {
            // apply 2px blur to the canvas
            var ctx = canvas.getContext('2d');
            ctx.filter = 'blur(2px)';
            ctx.drawImage(canvas, 0, 0);

            var link = document.createElement('a');
            link.download = 'bratgen.png';
            link.href = canvas.toDataURL("image/png");
            link.click();

            link.remove();

        });
    })
})