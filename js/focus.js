$(function () {
    $('a[data-toggle="tab"]').on('click', function (e) {
        window.localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = window.localStorage.getItem('activeTab');
    if (activeTab) {
        $('#myTab a[href="' + activeTab + '"]').tab('show');
        window.localStorage.removeItem("activeTab");
    }
});
$(function () {
    $('a[data-toggle="tab"]').on('click', function (e) {
        window.localStorage.setItem('activeTab2', $(e.target).attr('href'));
    });
    var activeTab2 = window.localStorage.getItem('activeTab2');
    if (activeTab2) {
        $('#pills-tab a[href="' + activeTab2 + '"]').tab('show');
        window.localStorage.removeItem("activeTab2");
    }
});