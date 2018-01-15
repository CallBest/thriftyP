
  function loadCounty(county,state) {
    while (document.getElementById(county).firstChild) {
      document.getElementById(county).removeChild(document.getElementById(county).firstChild);
    }

    var node = document.createElement("option",{value:''});
    document.getElementById(county).appendChild(node);
    switch(document.getElementById(state).value) {
      case 'DE':
        for (var x=0; x < ctyDelaware.length; x++) {
          var node = document.createElement("option",{value: ctyDelaware[x]});
          node.innerHTML = ctyDelaware[x];
          document.getElementById(county).appendChild(node);
        }
        break;
      case 'IN':
        for (var x=0; x < ctyIndiana.length; x++) {
          var node = document.createElement("option",{value: ctyIndiana[x]});
          node.innerHTML = ctyIndiana[x];
          document.getElementById(county).appendChild(node);
        }
        break;
      case 'KY':
        for (var x=0; x < ctyKentucky.length; x++) {
          var node = document.createElement("option",{value: ctyKentucky[x]});
          node.innerHTML = ctyKentucky[x];
          document.getElementById(county).appendChild(node);
        }
        break;
      case 'MD':
        for (var x=0; x < ctyMaryland.length; x++) {
          var node = document.createElement("option",{value: ctyMaryland[x]});
          node.innerHTML = ctyMaryland[x];
          document.getElementById(county).appendChild(node);
        }
        break;
      case 'OH':
        for (var x=0; x < ctyOhio.length; x++) {
          var node = document.createElement("option",{value: ctyOhio[x]});
          node.innerHTML = ctyOhio[x];
          document.getElementById(county).appendChild(node);
        }
        break;
      case 'PA':
        for (var x=0; x < ctyPennsylvania.length; x++) {
          var node = document.createElement("option",{value: ctyPennsylvania[x]});
          node.innerHTML = ctyPennsylvania[x];
          document.getElementById(county).appendChild(node);
        }
        break;
      case 'VA':
        for (var x=0; x < ctyVirginia.length; x++) {
          var node = document.createElement("option",{value: ctyVirginia[x]});
          node.innerHTML = ctyVirginia[x];
          document.getElementById(county).appendChild(node);
        }
        break;
      case 'WV':
        for (var x=0; x < ctyWestVirginia.length; x++) {
          var node = document.createElement("option",{value: ctyWestVirginia[x]});
          node.innerHTML = ctyWestVirginia[x];
          document.getElementById(county).appendChild(node);
        }
        break;
      default:
        node.innerHTML = '---Please select state first---';
        document.getElementById(county).appendChild(node);
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
