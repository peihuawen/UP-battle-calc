function run2() {
                  document.getElementById("modh").innerHTML =                 document.getElementById("Heal").value;
                      document.getElementById("hhbuff").innerHTML = document.getElementById("modh2").value;
                  var recstat = document.getElementById("hea").innerHTML ;
                  var modifier = document.getElementById("modh").innerHTML ;
                      var hebuf = document.getElementById("hhbuff").innerHTML;
                      var hdebuff = document.getElementById("hdebuff").value;
                  document.getElementById("heals").innerHTML = recstat * hebuf * hdebuff;
              } 
function run() {
      document.getElementById("mod").innerHTML =                 document.getElementById("Ultra").value;
          document.getElementById("buff1").innerHTML = document.getElementById("mod3").value;
      var damage = document.getElementById("atk").innerHTML ;
      var modifier = document.getElementById("mod").innerHTML ;
  var buff = document.getElementById("buff1").innerHTML
          var debuff=document.getElementById("debuff").value;
      document.getElementById("deeps").innerHTML = damage * modifier * buff * debuff;
  
  					var output = document.getElementById("deeps").innerHTML;
                      document.getElementById("rawo").innerHTML = output;
                      var tardef = document.getElementById("tard").value;
                      document.getElementById("adjo").innerHTML = output - tardef;
                  }
function run4() {
                    document.getElementById("tanmod").innerHTML =                 document.getElementById("Tank").value;
                        var defstat = document.getElementById("def").innerHTML;
                    var modifier = document.getElementById("tanmod").innerHTML ;
                        var tankbuf = document.getElementById("tanmod2").value;
                        var tandebuff = document.getElementById("tandebuff").value;
                    document.getElementById("drawo").innerHTML = defstat * modifier * tankbuf * tandebuff;
                        var drawoutput = document.getElementById("drawo").innerHTML;
                        var dtardef = document.getElementById("dtard").value;
                        document.getElementById("dadjo").innerHTML = drawoutput - dtardef;
                }

function run10() {
  var hp = document.getElementById("hp10").value;
  var def = document.getElementById("def10").value;
        var deb = document.getElementById("tdeb").value;
  var raw = document.getElementById("atk10").value;
       var def2 = def * deb * defense;
       document.getElementById("def210").innerHTML = def2;
  document.getElementById("output10").innerHTML = +hp + +def2 - raw;
}