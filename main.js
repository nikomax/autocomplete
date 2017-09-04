/**
 * Created by maksc on 04.09.2017.
 */
$(document).ready(function(){
    $('.customerName').keyup(function(){
        var customerName =  $(this).val();
        $.ajax({
            url: 'array.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                var s = '';
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Name.toLowerCase().startsWith(customerName.toLowerCase())) {
                            s += '<li>' + data[i].Name + '</li>';
                        }
                    }
                $('.result').html(s).click(function(){
                    var target = event.target;
                    $('.customerName').val(target.innerHTML);
                });
            }
        });
    });
});