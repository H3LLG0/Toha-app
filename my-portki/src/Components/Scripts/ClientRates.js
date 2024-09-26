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

export function SubmitPost(event)
{
    const body = {
    'name': document.getElementById('name').value,
    'surname':document.getElementById('surname').value,
    'rating':document.getElementById('rating').value,
    'rate-text':document.getElementById('rate-text').value
    };
    $.ajax({
        url:'http://backednd/api/entity/create_rate.php',
        method:'post',
        dataType:'json',
        data: body,
        success: function(response)
        {
            console.log(response);
        }
    });

}




