function calendar(y){
    var w = new Date(y,0).getDay();
    var html = '<div class="box">';
    for (var m=1;m<=12; ++m){
        html +='<table>'
        html +='<tr class="title"><th colspan="7">' +y + '年' +m +'yue</th></tr>';
        html +='<tr><td>ri</td><td>yi</td><td>er</td><td>san</td><td>si</td><td>wu</td><td>liu</td></tr>';
        var max = new Date(y,m,0).getDate();
        html +=''
    }
}