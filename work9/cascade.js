





function createOption(obj,data){
    for (var i in data){
        var op = new Option(date[i],i);
        obj.option.add(op);
    }
}
var collegeSelect = document.getElementById('collegeSelect')
createOption(collegeSelect,collegeSelectArr);
