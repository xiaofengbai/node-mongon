function loadfn() {
    $.ajax({
        url: '/project/add',
        type: "POST",
        data: {
            name: '白小峰'
        }
    }).done(function(data) {
        debugger
    }).fail(function() {
        debugger
    });
}