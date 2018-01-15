$(document).ready(function (){
  $("#state").change(function(){
    $("#county").empty();
    refreshCounty();
  });

  function refreshCounty() {
    $("#county").append("<option value=''></option>");
    if ($("#state").val()=='') {
      $("#county").append("<option value=''>---Please select state first---</option>");
    } else if ($("#state").val()=='DE') {
      for (var x=0; x < ctyDelaware.length; x++) {
        $("#county").append('<option value="'+ ctyDelaware[x] +'">'+ ctyDelaware[x] +'</option>');
      }
    } else if ($("#state").val()=='IN') {
      for (var x=0; x < ctyIndiana.length; x++) {
        $("#county").append('<option value="'+ ctyIndiana[x] +'">'+ ctyIndiana[x] +'</option>');
      }
    } else if ($("#state").val()=='KY') {
      for (var x=0; x < ctyKentucky.length; x++) {
        $("#county").append('<option value="'+ ctyKentucky[x] +'">'+ ctyKentucky[x] +'</option>');
      }
    } else if ($("#state").val()=='MD') {
      for (var x=0; x < ctyMaryland.length; x++) {
        $("#county").append('<option value="'+ ctyMaryland[x] +'">'+ ctyMaryland[x] +'</option>');
      }
    } else if ($("#state").val()=='OH') {
      for (var x=0; x < ctyOhio.length; x++) {
        $("#county").append('<option value="'+ ctyOhio[x] +'">'+ ctyOhio[x] +'</option>');
      }
    } else if ($("#state").val()=='PA') {
      for (var x=0; x < ctyPennsylvania.length; x++) {
        $("#county").append('<option value="'+ ctyPennsylvania[x] +'">'+ ctyPennsylvania[x] +'</option>');
      }
    } else if ($("#state").val()=='VA') {
      for (var x=0; x < ctyVirginia.length; x++) {
        $("#county").append('<option value="'+ ctyVirginia[x] +'">'+ ctyVirginia[x] +'</option>');
      }
    } else if ($("#state").val()=='WV') {
      for (var x=0; x < ctyWestVirginia.length; x++) {
        $("#county").append('<option value="'+ ctyWestVirginia[x] +'">'+ ctyWestVirginia[x] +'</option>');
      }
    }
  };

  var ctyDelaware = [
    'New Castle'
  ];

  var ctyIndiana =[
    'Adams',
    'Allen',
    'Bartholomew',
    'Blackford',
    'Boone',
    'Brown',
    'Clark',
    'Clay',
    'Crawford',
    'Daviess',
    'Dearborn',
    'Decatur',
    'DeKalb',
    'Delaware',
    'Fayette',
    'Floyd',
    'Franklin',
    'Grant',
    'Hamilton',
    'Hancock',
    'Harrison',
    'Hendricks',
    'Henry',
    'Howard',
    'Huntington',
    'Jackson',
    'Jay',
    'Jefferson',
    'Jennings',
    'Johnson',
    'Lawrence',
    'Madison',
    'Marion',
    'Marshall',
    'Martin',
    'Miami',
    'Monroe',
    'Montgomery',
    'Morgan',
    'Ohio',
    'Orange',
    'Owen',
    'Perry',
    'Pike',
    'Randolph',
    'Ripley',
    'Rush',
    'Shelby',
    'Spencer',
    'Switzerland',
    'Union',
    'Vanderburgh',
    'Wabash',
    'Washington',
    'Wayne',
    'Wells',
    'Whitley'
  ];

  var ctyKentucky = [
    'Boone',
    'Campbell',
    'Caroll',
    'Fayette',
    'Gallatin',
    'Henry',
    'Kenton',
    'Mason',
    'Oldham',
    'Owen',
    'Pendelton',
    'Trimble'
  ];

  var ctyMaryland = [
    'Allegany',
    'Anne Arundel',
    'Baltimore',
    'Carrol',
    'Cecil',
    'Frederick',
    'Garrett',
    'Harford',
    'Howard',
    'Kent',
    'Montgomery',
    'Prince George',
    "Queen Anne's",
    'Washington'
  ];

  var ctyOhio = [
    'Adams',
    'Allen',
    'Ashland',
    'Ashtabula',
    'Athens',
    'Auglaize',
    'Belmont',
    'Brown',
    'Butler',
    'Carroll',
    'Champaign',
    'Clark',
    'Clermont',
    'Clinton',
    'Columbiana',
    'Coshocton',
    'Crawford',
    'Cuyahoga',
    'Darke',
    'Defiance',
    'Delaware',
    'Erie',
    'Fairfield',
    'Fayette',
    'Franklin',
    'Fulton',
    'Geauga',
    'Greene',
    'Guernsey',
    'Hamilton',
    'Hancock',
    'Hardin',
    'Harrison',
    'Henry',
    'Highland',
    'Hocking',
    'Holmes',
    'Huron',
    'Jackson',
    'Jefferson',
    'Knox',
    'Lake',
    'Licking',
    'Logan',
    'Lorain',
    'Lucas',
    'Madison',
    'Mahoning',
    'Marion',
    'Medina',
    'Mercer',
    'Miami',
    'Monroe',
    'Montgomery',
    'Morgan',
    'Morrow',
    'Muskingum',
    'Noble',
    'Ottawa',
    'Paulding',
    'Perry',
    'Pickaway',
    'Pike',
    'Portage',
    'Preble',
    'Putnam',
    'Richland',
    'Ross',
    'Sandusky',
    'Scioto',
    'Seneca',
    'Shelby',
    'Stark',
    'Summit',
    'Trumbull',
    'Tuscarawas',
    'Union',
    'Van Wert',
    'Vinton',
    'Warren',
    'Washington',
    'Wayne',
    'Williams', 
    'Wood',
    'Wyandot'
  ];

  var ctyPennsylvania = [
    'Adams',
    'Alleghany',
    'Armstrong',
    'Beaver',
    'Bedford',
    'Berks',
    'Blair',
    'Bucks',
    'Butler',
    'Cambria',
    'Carbon',
    'Centre',
    'Chester',
    'Clarion',
    'Clearfield',
    'Clinton',
    'Columbia',
    'Crawford',
    'Cumberland',
    'Dauphin',
    'Delaware',
    'Erie',
    'Fayette',
    'Forest',
    'Franklin',
    'Fulton',
    'Greene',
    '2Huntingdon',
    'Indiana',
    'Jefferson',
    'Juniata',
    'Lackawanna',
    'Lancaster',
    'Lawrence',
    'Lebanon',
    'Lehigh',
    'Luzerne',
    'Mercer',
    'Mifflin',
    'Monroe',
    'Montgomery',
    'Montour',
    'North Umberland',
    'Northampton',
    'Perry',
    'Philadelphia',
    'Schuylkill',
    'Snyder',
    'Somerset',
    'Union',
    'Venango',
    'Warren',
    'Washington',
    'Westmoreland',
    'York'    
  ];

  var ctyVirginia = [
    'Clarke',
    'Frederick',
    'Loudoun',
    'Shenandoah'
  ];

  var ctyWestVirginia = [
    'Berkeley',
    'Brooke',
    'Hancock',
    'Jefferson',
    'Marshall',
    'Monongalia',
    'Morgan',
    'Ohio',
    'Preston',
    'Wetzel'    
  ];

});