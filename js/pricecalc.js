$(document).ready(function (){
  var taxtable = {
    'DELAWARE' : {
      'NewCastle': 0
      },
    'INDIANA' : {
      'Adams': 0.07,
      'Allen': 0.07,
      'Bartholomew': 0.07,
      'Blackford': 0.07,
      'Boone': 0.07,
      'Brown': 0.07,
      'Clark': 0.07,
      'Clay': 0.07,
      'Crawford': 0.07,
      'Daviess': 0.07,
      'Dearborn': 0.07,
      'Decatur': 0.07,
      'DeKalb': 0.07,
      'Delaware': 0.07,
      'Fayette': 0.07,
      'Floyd': 0.07,
      'Franklin': 0.07,
      'Grant': 0.07,
      'Hamilton': 0.07,
      'Hancock': 0.07,
      'Harrison': 0.07,
      'Hendricks': 0.07,
      'Henry': 0.07,
      'Howard': 0.07,
      'Huntington': 0.07,
      'Jackson': 0.07,
      'Jay': 0.07,
      'Jefferson': 0.07,
      'Jennings': 0.07,
      'Johnson': 0.07,
      'Lawrence': 0.07,
      'Madison': 0.07,
      'Marion': 0.07,
      'Marshall': 0.07,
      'Martin': 0.07,
      'Miami': 0.07,
      'Monroe': 0.07,
      'Montgomery': 0.07,
      'Morgan': 0.07,
      'Ohio': 0.07,
      'Orange': 0.07,
      'Owen': 0.07,
      'Perry': 0.07,
      'Pike': 0.07,
      'Randolph': 0.07,
      'Ripley': 0.07,
      'Rush': 0.07,
      'Shelby': 0.07,
      'Spencer': 0.07,
      'Switzerland': 0.07,
      'Union': 0.07,
      'Vanderburgh': 0.07,
      'Wabash': 0.07,
      'Washington': 0.07,
      'Wayne': 0.07,
      'Wells': 0.07,
      'Whitley': 0.07
      },
    'KENTUCKY' : {
      'Boone': 0,
      'Campbell': 0,
      'Caroll': 0,
      'Fayette': 0,
      'Gallatin': 0,
      'Henry': 0,
      'Kenton': 0,
      'Mason': 0,
      'Oldham': 0,
      'Owen': 0,
      'Pendelton': 0,
      'Trimble': 0
      },
    'MARYLAND' : {
      'Allegany': 0,
      'AnneArundel': 0,
      'Baltimore': 0,
      'Carrol': 0,
      'Cecil': 0,
      'Frederick': 0,
      'Garrett': 0,
      'Harford': 0,
      'Howard': 0,
      'Kent': 0,
      'Montgomery': 0,
      'PrinceGeorge': 0,
      "Queen Anne's": 0,
      'Washington': 0
      },
    'OHIO' : {
      'Adams': 0.0725,
      'Allen': 0.0675,
      'Ashland': 0.07,
      'Ashtabula': 0.0675,
      'Athens': 0.07,
      'Auglaize': 0.0725,
      'Belmont': 0.0725,
      'Brown': 0.0725,
      'Butler': 0.065,
      'Carroll': 0.0675,
      'Champaign': 0.0725,
      'Clark': 0.0725,
      'Clermont': 0.0675,
      'Clinton': 0.0675,
      'Columbiana': 0.0725,
      'Coshocton': 0.0725,
      'Crawford': 0.0725,
      'Cuyahoga': 0.08,
      'Darke': 0.0725,
      'Defiance': 0.0675,
      'Delaware': 0.07,
      'Erie': 0.0675,
      'Fairfield': 0.0675,
      'Fayette': 0.0725,
      'Franklin': 0.075,
      'Fulton': 0.0725,
      'Geauga': 0.0675,
      'Greene': 0.0675,
      'Guernsey': 0.0725,
      'Hamilton': 0.07,
      'Hancock': 0.0675,
      'Hardin': 0.0725,
      'Harrison': 0.0725,
      'Henry': 0.0725,
      'Highland': 0.0725,
      'Hocking': 0.0725,
      'Holmes': 0.07,
      'Huron': 0.0725,
      'Jackson': 0.0725,
      'Jefferson': 0.0725,
      'Knox': 0.0675,
      'Lake': 0.07,
      'Licking': 0.0725,
      'Logan': 0.0725,
      'Lorain': 0.0675,
      'Lucas': 0.0725,
      'Madison': 0.07,
      'Mahoning': 0.0725,
      'Marion': 0.0725,
      'Medina': 0.0675,
      'Mercer': 0.0725,
      'Miami': 0.07,
      'Monroe': 0.0725,
      'Montgomery': 0.0725,
      'Morgan': 0.0725,
      'Morrow': 0.0725,
      'Muskingum': 0.0725,
      'Noble': 0.0725,
      'Ottawa': 0.07,
      'Paulding': 0.0725,
      'Perry': 0.0725,
      'Pickaway': 0.0725,
      'Pike': 0.0725,
      'Portage': 0.0725,
      'Preble': 0.0725,
      'Putnam': 0.07,
      'Richland': 0.07,
      'Ross': 0.0725,
      'Sandusky': 0.0725,
      'Scioto': 0.0725,
      'Seneca': 0.0725,
      'Shelby': 0.0725,
      'Stark': 0.065,
      'Summit': 0.0675,
      'Trumbull': 0.0675,
      'Tuscarawas': 0.0675,
      'Union': 0.07,
      'VanWert': 0.0725,
      'Vinton': 0.0725,
      'Warren': 0.0675,
      'Washington': 0.0725,
      'Wayne': 0.065,
      'Williams': 0.0725,
      'Wood': 0.0675,
      'Wyandot': 0.0725
      },
    'PENNSYLVANIA' : {
      'Adams': 0,
      'Alleghany': 0,
      'Armstrong': 0,
      'Beaver': 0,
      'Bedford': 0,
      'Berks': 0,
      'Blair': 0,
      'Bucks': 0,
      'Butler': 0,
      'Cambria': 0,
      'Carbon': 0,
      'Centre': 0,
      'Chester': 0,
      'Clarion': 0,
      'Clearfield': 0,
      'Clinton': 0,
      'Columbia': 0,
      'Crawford': 0,
      'Cumberland': 0,
      'Dauphin': 0,
      'Delaware': 0,
      'Erie': 0,
      'Fayette': 0,
      'Forest': 0,
      'Franklin': 0,
      'Fulton': 0,
      'Greene': 0,
      'Huntingdon': 0,
      'Indiana': 0,
      'Jefferson': 0,
      'Juniata': 0,
      'Lackawanna': 0,
      'Lancaster': 0,
      'Lawrence': 0,
      'Lebanon': 0,
      'Lehigh': 0,
      'Luzerne': 0,
      'Mercer': 0,
      'Mifflin': 0,
      'Monroe': 0,
      'Montgomery': 0,
      'Montour': 0,
      'NorthUmberland': 0,
      'Northampton': 0,
      'Perry': 0,
      'Philadelphia': 0,
      'Schuylkill': 0,
      'Snyder': 0,
      'Somerset': 0,
      'Union': 0,
      'Venango': 0,
      'Warren': 0,
      'Washington': 0,
      'Westmoreland': 0,
      'York': 0
      },
    'VIRGINIA' : {
      'Clarke': 0,
      'Frederick': 0,
      'Loudoun': 0,
      'Shenandoah': 0
      },
    'WEST VIRGINIA' : {
      'Berkeley': 0,
      'Brooke': 0,
      'Hancock': 0,
      'Jefferson': 0,
      'Marshall': 0,
      'Monongalia': 0,
      'Morgan': 0,
      'Ohio': 0,
      'Preston': 0,
      'Wetzel': 0
      }
  };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  $("#addtank").click(function(){
    var elemCount = document.getElementsByClassName('rowset').length;
    if (elemCount > 1) {
      document.getElementById('addtank').disabled = true;
      $(".btn-remove").removeClass("remove");
      $(".glyphicon-remove").hide();
    }
    var tankCount = elemCount + 1;
    var newcontent = document.createElement('div');
    var appendHtml = `<div class="row col-md-3 rowset">
                        <button class="btn btn-danger btn-small btn-remove align-right remove">Tank `+ tankCount +` <span class="glyphicon glyphicon-remove"></span></button>
                        <div class="row">
                          <div class="col-md-12">
                            <label for="tanksize[`+ elemCount +`]">Tank size</label><br>
                            <input type="text" id="tanksize[`+ elemCount +`]" name="tanksize[`+ elemCount +`]" maxlength="4" style="width:100%;">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <label for="remaining[`+ elemCount +`]">Tank % remaining</label><br>
                            <input type="text" id="remaining[`+ elemCount +`]" name="remaining[`+ elemCount +`]" maxlength="2" style="width:100%;">
                          </div>
                        </div>
                      </div>`;
    newcontent.innerHTML = appendHtml;
    while (newcontent.firstChild) {
      document.getElementById('tank-entry').appendChild(newcontent.firstChild);
    }
  });

  $(document).on('click', '.remove', function() {
    $(this).parent().remove();
    document.getElementById('addtank').disabled = false;
    $(".btn-remove").addClass("remove");
    $(".glyphicon-remove").show();
  });

  $("#calculate").click(function(){
    //validate input
    if (document.getElementById('calcppg').value=='') {
      alert('Price per gallon needed to compute.');
      return false;
    } else if (document.getElementById('tanksize[0]').value=='') {
      alert('Tank size needed to compute.');
      return false;
    } else if (document.getElementById('remaining[0]').value=='') {
      alert('Tank percentage remaining needed to compute.');
      return false;
    }
    var ppg = parseFloat(document.getElementById('calcppg').value).toFixed(3);
    //calculate gallons needed
    var tanks = document.getElementsByClassName('rowset').length;
    var gallons = 0;
    for (x = 0; x < tanks; x++) {
      var size = parseInt(document.getElementById('tanksize['+x+']').value);
      var remaining = parseInt(document.getElementById('remaining['+x+']').value);
      gallons += Math.floor(size * ((85 - remaining) / 100));
    }
    
    //calculate tax
    var stateval = document.getElementById('addressstate').value;
    var countyval = toTitleCase(document.getElementById('addresscounty').value).replace(' ','');
    var tax = taxtable[stateval][countyval];
    var taxamount = parseFloat(+gallons * +ppg * +tax).toFixed(2);
    var subtotal = parseFloat(+gallons * +ppg + +taxamount).toFixed(2);
    
    var hazmatfee = (0.00).toFixed(2);
    var storagefee = (0.00).toFixed(2);
    hazmatfee = (Math.ceil(gallons/250) * 19.94).toFixed(2);
    var total = (+subtotal + +hazmatfee + +storagefee).toFixed(2);
    var ccfee = (0.00).toFixed(2);
    if (document.getElementById('paywithcc').checked) {
      ccfee = 9.99;
      total = (+total + +9.99).toFixed(2);
    }
    var expressdelivery = (0.00).toFixed(2);
    if (document.getElementById('expressdelivery').checked) {
      expressdelivery = 250.00;
      total = (+total + +250.00).toFixed(2);
    }

    var prompt = `
    <pre>
    Order type: ==========Regular fill===========
    Tank price               -----   $ 0.00
    Gallons needed           -----   `+ gallons +`
    Price per gallon         -----   $ `+ ppg +`
    Tax                      -----   $ `+ (+tax*100).toFixed(2) +` %
    Tax amount               -----   $ `+ taxamount +`
    Subtotal                 -----   $ `+ subtotal +`
    Hazmat fee               -----   $ `+ hazmatfee +`
    Storage fee (prebuy)     -----   $ `+ storagefee +`
    Credit card fee          -----   $ `+ ccfee +`
    Express delivery fee     -----   $ `+ expressdelivery +`
    TOTAL               ---------------   $ `+ total +`
    </pre>`;
    document.getElementById('calculatehere').innerHTML = prompt;
    document.getElementById('totalamount').value = total;
  });

});