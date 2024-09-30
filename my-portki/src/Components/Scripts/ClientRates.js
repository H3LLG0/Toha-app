let $ = require('jquery');
window.$ = window.jQuery = $;



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




