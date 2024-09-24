let $ = require('jquery');
window.$ = window.jQuery = $;

window.onload = function() {
    $.ajax({
        url: 'http://backednd/api/entity/read_rate.php',
        method: 'get',
        dataType: 'json',
        success: function(resp) {
           resp.forEach(element => {
            $('.rating-wrapper').append(`
                <div class='geted-rate'>
                    <div class='rate-head'>
                        ${element.name} ${element.surname} <br/>
                        <span>Оценка: ${element.rate_mark}</span>
                    </div>
                    <div class='geted-rate-text'>
                        ${element.rate_text}
                    </div>
                </div>
                `);
           });
        }
    });
}

$('#rate-us').on('submit',function()
{
    
});