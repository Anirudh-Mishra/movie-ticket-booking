$(function($) {
    $('[data-numeric]').payment('restrictNumeric');
    $('.cc-number').payment('formatCardNumber');
    $('.cc-exp').payment('formatCardExpiry');
    $('.cc-cvc').payment('formatCardCVC');
    $.fn.toggleInputError = function(erred) {
    this.parent('.form-group').toggleClass('has-error', erred);
    return this;
    };
    $('form').submit(function(e) {
    e.preventDefault();
    var cardType = $.payment.cardType($('.cc-number').val());
    $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
    $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
    $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
    $('.cc-brand').text(cardType);
    $('.validation').removeClass('text-danger text-success');
    $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
    });

    var price= sessionStorage.getItem('price');
    $('#p1').html("Rs "+price);

    var name= sessionStorage.getItem('name');
    $('#m1').html(name);

    var ss= sessionStorage.getItem('seats');
    $('#s1').html(ss);

    var price2= sessionStorage.getItem('addon');
    $('#p2').html("Rs "+price2);

    var gst= 0.18*(Number(price)+ Number(price2));
    var fgst= gst.toFixed(2);
    $('.gst1').html("Rs "+fgst);

    var total= 0.18*(Number(price)+ Number(price2))+ (Number(price)+ Number(price2));
    var tf= total.toFixed(2);
    $('#total1').html("Rs "+tf);

    var poster= sessionStorage.getItem('poster');
    $("#movImg").attr("src", poster);
    });    