//
// Load Required Elements
//
var init = function() {
    var init_temp = '<div id="now_page_number" data-num="0"></div><div id="pn_1" class="sk_page"><div id="next_empty_content"></div></div><div id="next_empty_page_template"></div>';
    $('body').append(init_temp);
}
init();
//
// Transition function
//
function nextPage(html, header_title) {

        var now_num = Number($('#now_page_number').attr('data-num'));

        var next_num = Number(now_num) + 1;

        var create_num = Number(next_num) + 1;

        var prev_page = Number(now_num) - 1;

        $('#pn_'+next_num).html(html);

        if(now_num == 0) {
            $('#sk_main').addClass('close');
        } else {
            $('#pn_'+now_num).addClass('close');
        }
        $('#pn_'+next_num).addClass('open');

        $('#pn_'+prev_page).addClass('disnon');

        htmlData = '';
        htmlData += '<div id="pn_'+create_num+'" class="sk_page">';
        htmlData += '</div>';
        htmlData += '<div id="next_empty_page_template"></div>';

        $('#next_empty_page_template').replaceWith(htmlData);

        $('#now_page_number').attr('data-num', next_num);

        nextHeader(header_title);
        return next_num;
}


//
// Page Prev Transiton Function
//
function prevPage() {

        var now_num = Number($('#now_page_number').attr('data-num'));

        var prev_num = Number(now_num) - 1;

        var next_num = Number(now_num) + 1;

        var back_page = Number(now_num) - 2;

        if(now_num !== 0) {

            $('#pn_'+now_num).removeClass('open');

            if(now_num == 1) {
                $('#sk_main').removeClass('close');
            } else {
                $('#pn_'+prev_num).removeClass('close');
            }

            $('#pn_'+back_page).removeClass('disnon');

            $('#now_page_number').attr('data-num', prev_num);

            $('#pn_'+next_num).remove();

            prevHeader();
        }
}


//
// Change Header Text Function
//
function nextHeader(text) {

    setTimeout(function() {

        var htmlData = '';
        htmlData += '<div class="sk_header-content">';
        htmlData += '<div class="leftButton backPageButton">';
        htmlData += '<i class="icon-arrow-left"></i>';
        htmlData += '</div>';
        htmlData += '<h1>'+text+'</h1>';
        htmlData += '</div>';

        $('#sk_header .sk_header-content').addClass('disnon');

        $('#sk_header').append(htmlData);

    }, 300);
}


//
// Prev Header Title Funtion
//
function prevHeader() {

    setTimeout(function() {

        $('#sk_header .sk_header-content:last').remove();

        $('#sk_header .sk_header-content:last').removeClass('disnon');

    }, 300);

}
