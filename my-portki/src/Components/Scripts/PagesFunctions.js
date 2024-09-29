let $ = require('jquery');
window.$ = window.jQuery = $;


export function GetPrice() {
    $.ajax({
        url: 'http://backednd/api/entity/read_price.php',
        method: 'get',
        dataType: 'json',
        success: function(resp) {
           resp.forEach(element => {
            $('.Price-List-table').append(`
                <tr><td>${element.naming}</td><td class="td-price">${element.price} р.</td></tr>
                `)
           });
        }
    });
}
window.onload = GetPrice();

export function PostOrder() {
    const body = {
        'name': document.getElementById('name').value,
        'surname':document.getElementById('surname').value,
        'pathronumic':document.getElementById('pathronumic').value,
        'phone':document.getElementById('phone').value,
        'email':document.getElementById('email').value
        };
        $.ajax({
            url:'http://backednd/api/entity/create_order.php',
            method:'post',
            dataType:'json',
            data: body,
            success: function(response) {
                alert(response.message);
            }
        });

}