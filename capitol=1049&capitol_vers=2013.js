function sumCap1049_Rind010() {
    var rowIDs = [
        { id: "80328", rind: "102111.1" },
        { id: "80329", rind: "102111.2" },
        { id: "80330", rind: "102111.3" },
        { id: "80331", rind: "102111.4" },
        { id: "80332", rind: "102111.5" },
        { id: "80333", rind: "102111.6" },
        { id: "80334", rind: "102111.7" },
        { id: "80335", rind: "102111.102111.5" },
        { id: "80336", rind: "102111.302111.2" },
        { id: "80337", rind: "102141.1" },
        { id: "80338", rind: "102142.1" },
        { id: "80339", rind: "102143.1" },
        { id: "80340", rind: "102144.1" },
        { id: "80341", rind: "102144.2" },
        { id: "80342", rind: "102144.3" },
        { id: "80343", rind: "104161.1" },
        { id: "80344", rind: "104161.2" },
        { id: "80345", rind: "104161.3" },
        { id: "80346", rind: "106111.1" },
        { id: "80347", rind: "106111.2" },
        { id: "80348", rind: "106111.106111.2" },
        { id: "80349", rind: "107111.1" },
        { id: "80350", rind: "107111.2" },
        { id: "80351", rind: "107131.1" },
        { id: "80352", rind: "107131.2" },
        { id: "80353", rind: "107131.3" },
        { id: "80354", rind: "107131.4" },
        { id: "80355", rind: "107131.5" },
        { id: "80356", rind: "107131.107131.3" },
        { id: "80357", rind: "107131.307131.4" },
        { id: "80358", rind: "107132.607132.8" },
        { id: "80359", rind: "107132.1" },
        { id: "80360", rind: "107132.2" },
        { id: "80361", rind: "107132.3" },
        { id: "80362", rind: "107132.4" },
        { id: "80363", rind: "107132.5" },
        { id: "80364", rind: "107132.6" },
        { id: "80365", rind: "107132.7" },
        { id: "80366", rind: "107132.8" },
        { id: "80367", rind: "107132.9" },
        { id: "80368", rind: "107133.1" },
        { id: "80369", rind: "107133.2" },
        { id: "80370", rind: "107133.3" },
        { id: "80371", rind: "107141.1" },
        { id: "80372", rind: "107141.2" },
        { id: "80373", rind: "107141.3" },
        { id: "80374", rind: "107141.4" },
        { id: "80375", rind: "107142.1" },
        { id: "80376", rind: "107143.1" },
        { id: "80377", rind: "107143.2" },
        { id: "80378", rind: "107143.3" },
        { id: "80379", rind: "107144.1" },
        { id: "80380", rind: "107144.2" },
        { id: "80381", rind: "107144.3" },
        { id: "80382", rind: "107144.4" },
        { id: "80383", rind: "107151.1" },
        { id: "80384", rind: "107151.2" },
        { id: "80385", rind: "107151.3" },
        { id: "80386", rind: "107151.4" },
        { id: "80387", rind: "107151.5" },
        { id: "80388", rind: "107151.6" },
        { id: "80389", rind: "107151.7" },
        { id: "80390", rind: "107151.207151.5" },
        { id: "80391", rind: "107152.1" },
        { id: "80392", rind: "107153.1" },
        { id: "80393", rind: "107161.1" },
        { id: "80394", rind: "107161.2" },
        { id: "80395", rind: "107161.3" },
        { id: "80396", rind: "107161.4" },
        { id: "80397", rind: "107161.207161.4" },
        { id: "80398", rind: "107161.407161.3" },
        { id: "80399", rind: "107162.1" },
        { id: "80400", rind: "107162.2" },
        { id: "80401", rind: "107211.1" },
        { id: "80402", rind: "107211.2" },
        { id: "80403", rind: "107211.3" },
        { id: "80404", rind: "107211.4" },
        { id: "80405", rind: "107211.207211.3" },
        { id: "80505", rind: "110131.2" },
        { id: "80406", rind: "107212.1" },
        { id: "80506", rind: "110131.3" },
        { id: "80407", rind: "107212.2" },
        { id: "80408", rind: "107212.3" },
        { id: "80409", rind: "107212.4" },
        { id: "80509", rind: "110151.1" },
        { id: "80410", rind: "107212.107212.3" },
        { id: "80510", rind: "110311.1" },
        { id: "80411", rind: "107213.1" },
        { id: "80511", rind: "110311.2" },
        { id: "80412", rind: "107213.2" },
        { id: "80413", rind: "107214.1" },
        { id: "80414", rind: "107214.2" },
        { id: "80415", rind: "107214.3" },
        { id: "80416", rind: "107214.4" },
        { id: "80417", rind: "107214.5" },
        { id: "80418", rind: "107214.6" },
        { id: "80419", rind: "107215.1" },
        { id: "80420", rind: "107215.2" },
        { id: "80421", rind: "107221.1" },
        { id: "80422", rind: "107221.2" },
        { id: "80423", rind: "107221.3" },
        { id: "80424", rind: "107221.4" },
        { id: "80425", rind: "107221.5" },
        { id: "80426", rind: "107221.6" },
        { id: "80427", rind: "107221.7" },
        { id: "80428", rind: "107221.8" },
        { id: "80429", rind: "107221.9" },
        { id: "80430", rind: "107221.10" },
        { id: "80431", rind: "107221.11" },
        { id: "80432", rind: "107221.1007221.3" },
        { id: "80433", rind: "107221.1107221.5" },
        { id: "80434", rind: "107221.207221.9" },
        { id: "80435", rind: "107222.1" },
        { id: "80436", rind: "107223.1" },
        { id: "80437", rind: "107223.2" },
        { id: "80438", rind: "107224.1" },
        { id: "80439", rind: "107224.2" },
        { id: "80440", rind: "107224.3" },
        { id: "80441", rind: "107231.1" },
        { id: "80442", rind: "107231.2" },
        { id: "80443", rind: "107231.3" },
        { id: "80444", rind: "107231.4" },
        { id: "80445", rind: "107231.5" },
        { id: "80446", rind: "107231.6" },
        { id: "80447", rind: "107231.7" },
        { id: "80448", rind: "107231.407231.5" },
        { id: "80449", rind: "107232.1" },
        { id: "80450", rind: "107232.2" },
        { id: "80451", rind: "107241.1" },
        { id: "80452", rind: "107321.1" },
        { id: "80453", rind: "107321.2" },
        { id: "80454", rind: "107321.3" },
        { id: "80455", rind: "107321.4" },
        { id: "80456", rind: "107321.5" },
        { id: "80457", rind: "107321.6" },
        { id: "80458", rind: "107321.7" },
        { id: "80459", rind: "107321.8" },
        { id: "80460", rind: "107321.9" },
        { id: "80461", rind: "107321.10" },
        { id: "80462", rind: "107321.11" },
        { id: "80463", rind: "107321.12" },
        { id: "80464", rind: "107321.13" },
        { id: "80465", rind: "107321.14" },
        { id: "80466", rind: "107321.1207321.9" },
        { id: "80467", rind: "107321.1207321.14" },
        { id: "80468", rind: "107322.1" },
        { id: "80469", rind: "107323.1" },
        { id: "80470", rind: "107323.2" },
        { id: "80471", rind: "107323.3" },
        { id: "80472", rind: "107323.4" },
        { id: "80473", rind: "107323.5" },
        { id: "80474", rind: "107323.6" },
        { id: "80475", rind: "107323.7" },
        { id: "80476", rind: "107324.1" },
        { id: "80477", rind: "107324.2" },
        { id: "80478", rind: "107324.3" },
        { id: "80479", rind: "108111.1" },
        { id: "80480", rind: "108112.1" },
        { id: "80481", rind: "108112.2" },
        { id: "80482", rind: "108112.3" },
        { id: "80483", rind: "108113.1" },
        { id: "80484", rind: "108114.1" },
        { id: "80485", rind: "108121.1" },
        { id: "80486", rind: "108121.2" },
        { id: "80487", rind: "108121.3" },
        { id: "80488", rind: "108121.4" },
        { id: "80489", rind: "108121.308121.4" },
        { id: "82968", rind: "108122.1" },
        { id: "82969", rind: "108122.2" },
        { id: "82970", rind: "108122.3" },
        { id: "80490", rind: "108211.1" },
        { id: "80491", rind: "108311.1" },
        { id: "80492", rind: "109111.1" },
        { id: "80493", rind: "109211.1" },
        { id: "80494", rind: "109211.2" },
        { id: "80495", rind: "109221.1" },
        { id: "80496", rind: "109221.2" },
        { id: "80497", rind: "110121.1" },
        { id: "80498", rind: "110121.2" },
        { id: "80499", rind: "110121.3" },
        { id: "80500", rind: "110121.4" },
        { id: "80501", rind: "110121.5" },
        { id: "80502", rind: "110121.6" },
        { id: "80503", rind: "110121.7" },
        { id: "80504", rind: "110131.1" },
        { id: "80507", rind: "110132.1" },
        { id: "80508", rind: "110132.110131.3" },
        { id: "80512", rind: "110311.3" },
        { id: "80513", rind: "110312.1" },
        { id: "80514", rind: "110312.2" },
        { id: "80515", rind: "110313.1" },
        { id: "80516", rind: "110313.2" },
        { id: "80517", rind: "110313.3" },
        { id: "80518", rind: "110411.1" },
        { id: "80519", rind: "110411.2" },
        { id: "80520", rind: "110411.3" },
        { id: "80521", rind: "110411.4" },
        { id: "80522", rind: "110411.5" },
        { id: "80523", rind: "110411.6" },
        { id: "80524", rind: "110411.7" },
        { id: "80525", rind: "110411.8" },
        { id: "80526", rind: "110411.9" },
        { id: "80527", rind: "110411.10" },
        { id: "80528", rind: "110411.11" },
        { id: "80529", rind: "110411.12" },
        { id: "80530", rind: "110411.13" },
        { id: "80531", rind: "110411.14" },
        { id: "80532", rind: "110411.910411.8" },
        { id: "80533", rind: "110411.1410411.13" }
    ];
    
    // Declare variables to store the sums for 12 columns
    var sumCol1 = 0, sumCol2 = 0, sumCol3 = 0, sumCol4 = 0, sumCol5 = 0,
        sumCol6 = 0, sumCol7 = 0, sumCol8 = 0, sumCol9 = 0, sumCol10 = 0,
        sumCol11 = 0, sumCol12 = 0;
 
    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\.");  // Escape the dots in `rind`
        sumCol1 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_1").val()) || 0;
        sumCol2 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_2").val()) || 0;
        sumCol3 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_3").val()) || 0;
        sumCol4 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_4").val()) || 0;
        sumCol5 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_5").val()) || 0;
        sumCol6 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_6").val()) || 0;
        sumCol7 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_7").val()) || 0;
        sumCol8 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_8").val()) || 0;
        sumCol9 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_9").val()) || 0;
        sumCol10 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_10").val()) || 0;
        sumCol11 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_11").val()) || 0;
        sumCol12 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_12").val()) || 0;
       
    });

    // Set the calculated values into the respective readonly fields for row 010
    $("#49_1049_79214_010_1").val(sumCol1 !== 0 ? sumCol1 : "").prop("readonly", true);
    $("#49_1049_79214_010_2").val(sumCol2 !== 0 ? sumCol2 : "").prop("readonly", true);
    $("#49_1049_79214_010_3").val(sumCol3 !== 0 ? sumCol3 : "").prop("readonly", true);
    $("#49_1049_79214_010_4").val(sumCol4 !== 0 ? sumCol4 : "").prop("readonly", true);
    $("#49_1049_79214_010_5").val(sumCol5 !== 0 ? sumCol5 : "").prop("readonly", true);
    $("#49_1049_79214_010_6").val(sumCol6 !== 0 ? sumCol6 : "").prop("readonly", true);
    $("#49_1049_79214_010_7").val(sumCol7 !== 0 ? sumCol7 : "").prop("readonly", true);
    $("#49_1049_79214_010_8").val(sumCol8 !== 0 ? sumCol8 : "").prop("readonly", true);
    $("#49_1049_79214_010_9").val(sumCol9 !== 0 ? sumCol9 : "").prop("readonly", true);
    $("#49_1049_79214_010_10").val(sumCol10 !== 0 ? sumCol10 : "").prop("readonly", true);
    $("#49_1049_79214_010_11").val(sumCol11 !== 0 ? sumCol11 : "").prop("readonly", true);
    $("#49_1049_79214_010_12").val(sumCol12 !== 0 ? sumCol12 : "").prop("readonly", true);
   
    
}



function sumCap1049_Rind020() {
    var rowIDs = [
        { id: "80534", rind: "202111.1" },
        { id: "80535", rind: "202111.2" },
        { id: "80536", rind: "202111.3" },
        { id: "80537", rind: "202111.4" },
        { id: "80538", rind: "202111.5" },
        { id: "80539", rind: "202111.6" },
        { id: "80540", rind: "202111.7" },
        { id: "80541", rind: "202111.102111.5" },
        { id: "80542", rind: "202111.302111.2" },
        { id: "80543", rind: "202141.1" },
        { id: "80544", rind: "202142.1" },
        { id: "80545", rind: "202143.1" },
        { id: "80546", rind: "202144.1" },
        { id: "80547", rind: "202144.2" },
        { id: "80548", rind: "202144.3" },
        { id: "80549", rind: "204161.1" },
        { id: "80550", rind: "204161.2" },
        { id: "80551", rind: "204161.3" },
        { id: "80552", rind: "206111.1" },
        { id: "80553", rind: "206111.2" },
        { id: "80554", rind: "206111.106111.2" },
        { id: "80555", rind: "207111.1" },
        { id: "80556", rind: "207111.2" },
        { id: "80557", rind: "207131.1" },
        { id: "80558", rind: "207131.2" },
        { id: "80559", rind: "207131.3" },
        { id: "80560", rind: "207131.4" },
        { id: "80561", rind: "207131.5" },
        { id: "80562", rind: "207131.107131.3" },
        { id: "80563", rind: "207131.307131.4" },
        { id: "80564", rind: "207132.607132.8" },
        { id: "80565", rind: "207132.1" },
        { id: "80566", rind: "207132.2" },
        { id: "80567", rind: "207132.3" },
        { id: "80568", rind: "207132.4" },
        { id: "80569", rind: "207132.5" },
        { id: "80570", rind: "207132.6" },
        { id: "80571", rind: "207132.7" },
        { id: "80572", rind: "207132.8" },
        { id: "80573", rind: "207132.9" },
        { id: "80574", rind: "207133.1" },
        { id: "80575", rind: "207133.2" },
        { id: "80576", rind: "207133.3" },
        { id: "80577", rind: "207141.1" },
        { id: "80578", rind: "207141.2" },
        { id: "80579", rind: "207141.3" },
        { id: "80580", rind: "207141.4" },
        { id: "80581", rind: "207142.1" },
        { id: "80582", rind: "207143.1" },
        { id: "80583", rind: "207143.2" },
        { id: "80584", rind: "207143.3" },
        { id: "80585", rind: "207144.1" },
        { id: "80586", rind: "207144.2" },
        { id: "80587", rind: "207144.3" },
        { id: "80588", rind: "207144.4" },
        { id: "80589", rind: "207151.1" },
        { id: "80590", rind: "207151.2" },
        { id: "80591", rind: "207151.3" },
        { id: "80592", rind: "207151.4" },
        { id: "80593", rind: "207151.5" },
        { id: "80594", rind: "207151.6" },
        { id: "80595", rind: "207151.7" },
        { id: "80596", rind: "207151.207151.5" },
        { id: "80597", rind: "207152.1" },
        { id: "80598", rind: "207153.1" },
        { id: "80599", rind: "207161.1" },
        { id: "80600", rind: "207161.2" },
        { id: "80601", rind: "207161.3" },
        { id: "80602", rind: "207161.4" },
        { id: "80603", rind: "207161.207161.4" },
        { id: "80604", rind: "207161.407161.3" },
        { id: "80605", rind: "207162.1" },
        { id: "80606", rind: "207162.2" },
        { id: "80607", rind: "207211.1" },
        { id: "80608", rind: "207211.2" },
        { id: "80609", rind: "207211.3" },
        { id: "80610", rind: "207211.4" },
        { id: "80611", rind: "207211.207211.3" },
        { id: "80612", rind: "207212.1" },
        { id: "80613", rind: "207212.2" },
        { id: "80614", rind: "207212.3" },
        { id: "80615", rind: "207212.4" },
        { id: "80616", rind: "207212.107212.3" },
        { id: "80617", rind: "207213.1" },
        { id: "80618", rind: "207213.2" },
        { id: "80619", rind: "207214.1" },
        { id: "80620", rind: "207214.2" },
        { id: "80621", rind: "207214.3" },
        { id: "80622", rind: "207214.4" },
        { id: "80623", rind: "207214.5" },
        { id: "80624", rind: "207214.6" },
        { id: "80625", rind: "207215.1" },
        { id: "80626", rind: "207215.2" },
        { id: "80627", rind: "207221.1" },
        { id: "80628", rind: "207221.2" },
        { id: "80629", rind: "207221.3" },
        { id: "80630", rind: "207221.4" },
        { id: "80631", rind: "207221.5" },
        { id: "80632", rind: "207221.6" },
        { id: "80633", rind: "207221.7" },
        { id: "80634", rind: "207221.8" },
        { id: "80635", rind: "207221.9" },
        { id: "80636", rind: "207221.10" },
        { id: "80637", rind: "207221.11" },
        { id: "80638", rind: "207221.1007221.3" },
        { id: "80639", rind: "207221.1107221.5" },
        { id: "80640", rind: "207221.207221.9" },
        { id: "80641", rind: "207222.1" },
        { id: "80642", rind: "207223.1" },
        { id: "80643", rind: "207223.2" },
        { id: "80644", rind: "207224.1" },
        { id: "80645", rind: "207224.2" },
        { id: "80646", rind: "207224.3" },
        { id: "80647", rind: "207231.1" },
        { id: "80648", rind: "207231.2" },
        { id: "80649", rind: "207231.3" },
        { id: "80650", rind: "207231.4" },
        { id: "80651", rind: "207231.5" },
        { id: "80652", rind: "207231.6" },
        { id: "80653", rind: "207231.7" },
        { id: "80654", rind: "207231.407231.5" },
        { id: "80655", rind: "207232.1" },
        { id: "80656", rind: "207232.2" },
        { id: "80657", rind: "207241.1" },
        { id: "80658", rind: "207321.1" },
        { id: "80659", rind: "207321.2" },
        { id: "80660", rind: "207321.3" },
        { id: "80661", rind: "207321.4" },
        { id: "80662", rind: "207321.5" },
        { id: "80663", rind: "207321.6" },
        { id: "80664", rind: "207321.7" },
        { id: "80665", rind: "207321.8" },
        { id: "80666", rind: "207321.9" },
        { id: "80667", rind: "207321.10" },
        { id: "80668", rind: "207321.11" },
        { id: "80669", rind: "207321.12" },
        { id: "80670", rind: "207321.13" },
        { id: "80671", rind: "207321.14" },
        { id: "80672", rind: "207321.1207321.9" },
        { id: "80673", rind: "207321.1207321.14" },
        { id: "80674", rind: "207322.1" },
        { id: "80675", rind: "207323.1" },
        { id: "80676", rind: "207323.2" },
        { id: "80677", rind: "207323.3" },
        { id: "80678", rind: "207323.4" },
        { id: "80679", rind: "207323.5" },
        { id: "80680", rind: "207323.6" },
        { id: "80681", rind: "207323.7" },
        { id: "80682", rind: "207324.1" },
        { id: "80683", rind: "207324.2" },
        { id: "80684", rind: "207324.3" },
        { id: "80685", rind: "208111.1" },
        { id: "80686", rind: "208112.1" },
        { id: "80687", rind: "208112.2" },
        { id: "80688", rind: "208112.3" },
        { id: "80689", rind: "208113.1" },
        { id: "80690", rind: "208114.1" },
        { id: "80691", rind: "208121.1" },
        { id: "80692", rind: "208121.2" },
        { id: "80693", rind: "208121.3" },
        { id: "80694", rind: "208121.4" },
        { id: "80695", rind: "208121.308121.4" },
        { id: "82971", rind: "208122.1" },
        { id: "82972", rind: "208122.2" },
        { id: "82973", rind: "208122.3" },
        { id: "80696", rind: "208211.1" },
        { id: "80697", rind: "208311.1" },
        { id: "80698", rind: "209111.1" },
        { id: "80699", rind: "209211.1" },
        { id: "80700", rind: "209211.2" },
        { id: "80701", rind: "209221.1" },
        { id: "80702", rind: "209221.2" },
        { id: "80703", rind: "210121.1" },
        { id: "80704", rind: "210121.2" },
        { id: "80705", rind: "210121.3" },
        { id: "80706", rind: "210121.4" },
        { id: "80707", rind: "210121.5" },
        { id: "80708", rind: "210121.6" },
        { id: "80709", rind: "210121.7" },
        { id: "80710", rind: "210131.1" },
        { id: "80711", rind: "210131.2" },
        { id: "80712", rind: "210131.3" },
        { id: "80713", rind: "210132.1" },
        { id: "80714", rind: "210132.110131.3" },
        { id: "80715", rind: "210151.1" },
        { id: "80716", rind: "210311.1" },
        { id: "80717", rind: "210311.2" },
        { id: "80718", rind: "210311.3" },
        { id: "80719", rind: "210312.1" },
        { id: "80720", rind: "210312.2" },
        { id: "80721", rind: "210313.1" },
        { id: "80722", rind: "210313.2" },
        { id: "80723", rind: "210313.3" },
        { id: "80724", rind: "210411.1" },
        { id: "80725", rind: "210411.2" },
        { id: "80726", rind: "210411.3" },
        { id: "80727", rind: "210411.4" },
        { id: "80728", rind: "210411.5" },
        { id: "80729", rind: "210411.6" },
        { id: "80730", rind: "210411.7" },
        { id: "80731", rind: "210411.8" },
        { id: "80732", rind: "210411.9" },
        { id: "80733", rind: "210411.10" },
        { id: "80734", rind: "210411.11" },
        { id: "80735", rind: "210411.12" },
        { id: "80736", rind: "210411.13" },
        { id: "80737", rind: "210411.14" },
        { id: "80738", rind: "210411.910411.8" },
        { id: "80739", rind: "210411.1410411.13" }
    ];

    // Declare variables to store the sums for 12 columns
    var sumCol1 = 0, sumCol2 = 0, sumCol3 = 0, sumCol4 = 0, sumCol5 = 0,
        sumCol6 = 0, sumCol7 = 0, sumCol8 = 0, sumCol9 = 0, sumCol10 = 0,
        sumCol11 = 0, sumCol12 = 0;

    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\.");  // Escape the dots in `rind`
        sumCol1 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_1").val()) || 0;
        sumCol2 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_2").val()) || 0;
        sumCol3 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_3").val()) || 0;
        sumCol4 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_4").val()) || 0;
        sumCol5 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_5").val()) || 0;
        sumCol6 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_6").val()) || 0;
        sumCol7 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_7").val()) || 0;
        sumCol8 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_8").val()) || 0;
        sumCol9 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_9").val()) || 0;
        sumCol10 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_10").val()) || 0;
        sumCol11 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_11").val()) || 0;
        sumCol12 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_12").val()) || 0;

    });

    // Set the calculated values into the respective readonly fields for row 010
    $("#49_1049_79215_020_1").val(sumCol1 !== 0 ? sumCol1 : "").prop("readonly", true);
    $("#49_1049_79215_020_2").val(sumCol2 !== 0 ? sumCol2 : "").prop("readonly", true);
    $("#49_1049_79215_020_3").val(sumCol3 !== 0 ? sumCol3 : "").prop("readonly", true);
    $("#49_1049_79215_020_4").val(sumCol4 !== 0 ? sumCol4 : "").prop("readonly", true);
    $("#49_1049_79215_020_5").val(sumCol5 !== 0 ? sumCol5 : "").prop("readonly", true);
    $("#49_1049_79215_020_6").val(sumCol6 !== 0 ? sumCol6 : "").prop("readonly", true);
    $("#49_1049_79215_020_7").val(sumCol7 !== 0 ? sumCol7 : "").prop("readonly", true);
    $("#49_1049_79215_020_8").val(sumCol8 !== 0 ? sumCol8 : "").prop("readonly", true);
    $("#49_1049_79215_020_9").val(sumCol9 !== 0 ? sumCol9 : "").prop("readonly", true);
    $("#49_1049_79215_020_10").val(sumCol10 !== 0 ? sumCol10 : "").prop("readonly", true);
    $("#49_1049_79215_020_11").val(sumCol11 !== 0 ? sumCol11 : "").prop("readonly", true);
    $("#49_1049_79215_020_12").val(sumCol12 !== 0 ? sumCol12 : "").prop("readonly", true);


}


function sumCap1049_Rind030() {
    var rowIDs = [
        { id: "80740", rind: "302111.1" },
        { id: "80741", rind: "302111.2" },
        { id: "80742", rind: "302111.3" },
        { id: "80743", rind: "302111.4" },
        { id: "80744", rind: "302111.5" },
        { id: "80745", rind: "302111.6" },
        { id: "80746", rind: "302111.7" },
        { id: "80747", rind: "302111.102111.5" },
        { id: "80748", rind: "302111.302111.2" },
        { id: "80749", rind: "302141.1" },
        { id: "80750", rind: "302142.1" },
        { id: "80751", rind: "302143.1" },
        { id: "80752", rind: "302144.1" },
        { id: "80753", rind: "302144.2" },
        { id: "80754", rind: "302144.3" },
        { id: "80755", rind: "304161.1" },
        { id: "80756", rind: "304161.2" },
        { id: "80757", rind: "304161.3" },
        { id: "80758", rind: "306111.1" },
        { id: "80759", rind: "306111.2" },
        { id: "80760", rind: "306111.106111.2" },
        { id: "80761", rind: "307111.1" },
        { id: "80762", rind: "307111.2" },
        { id: "80763", rind: "307131.1" },
        { id: "80764", rind: "307131.2" },
        { id: "80765", rind: "307131.3" },
        { id: "80766", rind: "307131.4" },
        { id: "80767", rind: "307131.5" },
        { id: "80768", rind: "307131.107131.3" },
        { id: "80769", rind: "307131.307131.4" },
        { id: "80770", rind: "307132.607132.8" },
        { id: "80771", rind: "307132.1" },
        { id: "80772", rind: "307132.2" },
        { id: "80773", rind: "307132.3" },
        { id: "80774", rind: "307132.4" },
        { id: "80775", rind: "307132.5" },
        { id: "80776", rind: "307132.6" },
        { id: "80777", rind: "307132.7" },
        { id: "80778", rind: "307132.8" },
        { id: "80779", rind: "307132.9" },
        { id: "80780", rind: "307133.1" },
        { id: "80781", rind: "307133.2" },
        { id: "80782", rind: "307133.3" },
        { id: "80783", rind: "307141.1" },
        { id: "80784", rind: "307141.2" },
        { id: "80785", rind: "307141.3" },
        { id: "80786", rind: "307141.4" },
        { id: "80787", rind: "307142.1" },
        { id: "80788", rind: "307143.1" },
        { id: "80789", rind: "307143.2" },
        { id: "80790", rind: "307143.3" },
        { id: "80791", rind: "307144.1" },
        { id: "80792", rind: "307144.2" },
        { id: "80793", rind: "307144.3" },
        { id: "80794", rind: "307144.4" },
        { id: "80795", rind: "307151.1" },
        { id: "80796", rind: "307151.2" },
        { id: "80797", rind: "307151.3" },
        { id: "80798", rind: "307151.4" },
        { id: "80799", rind: "307151.5" },
        { id: "80800", rind: "307151.6" },
        { id: "80801", rind: "307151.7" },
        { id: "80802", rind: "307151.207151.5" },
        { id: "80803", rind: "307152.1" },
        { id: "80804", rind: "307153.1" },
        { id: "80805", rind: "307161.1" },
        { id: "80806", rind: "307161.2" },
        { id: "80807", rind: "307161.3" },
        { id: "80808", rind: "307161.4" },
        { id: "80809", rind: "307161.207161.4" },
        { id: "80810", rind: "307161.407161.3" },
        { id: "80811", rind: "307162.1" },
        { id: "80812", rind: "307162.2" },
        { id: "80813", rind: "307211.1" },
        { id: "80814", rind: "307211.2" },
        { id: "80815", rind: "307211.3" },
        { id: "80816", rind: "307211.4" },
        { id: "80817", rind: "307211.207211.3" },
        { id: "80818", rind: "307212.1" },
        { id: "80819", rind: "307212.2" },
        { id: "80820", rind: "307212.3" },
        { id: "80821", rind: "307212.4" },
        { id: "80822", rind: "307212.107212.3" },
        { id: "80823", rind: "307213.1" },
        { id: "80824", rind: "307213.2" },
        { id: "80825", rind: "307214.1" },
        { id: "80826", rind: "307214.2" },
        { id: "80827", rind: "307214.3" },
        { id: "80828", rind: "307214.4" },
        { id: "80829", rind: "307214.5" },
        { id: "80830", rind: "307214.6" },
        { id: "80831", rind: "307215.1" },
        { id: "80832", rind: "307215.2" },
        { id: "80833", rind: "307221.1" },
        { id: "80834", rind: "307221.2" },
        { id: "80835", rind: "307221.3" },
        { id: "80836", rind: "307221.4" },
        { id: "80837", rind: "307221.5" },
        { id: "80838", rind: "307221.6" },
        { id: "80839", rind: "307221.7" },
        { id: "80840", rind: "307221.8" },
        { id: "80841", rind: "307221.9" },
        { id: "80842", rind: "307221.10" },
        { id: "80843", rind: "307221.11" },
        { id: "80844", rind: "307221.1007221.3" },
        { id: "80845", rind: "307221.1107221.5" },
        { id: "80846", rind: "307221.207221.9" },
        { id: "80847", rind: "307222.1" },
        { id: "80848", rind: "307223.1" },
        { id: "80849", rind: "307223.2" },
        { id: "80850", rind: "307224.1" },
        { id: "80851", rind: "307224.2" },
        { id: "80852", rind: "307224.3" },
        { id: "80853", rind: "307231.1" },
        { id: "80854", rind: "307231.2" },
        { id: "80855", rind: "307231.3" },
        { id: "80856", rind: "307231.4" },
        { id: "80857", rind: "307231.5" },
        { id: "80858", rind: "307231.6" },
        { id: "80859", rind: "307231.7" },
        { id: "80860", rind: "307231.407231.5" },
        { id: "80861", rind: "307232.1" },
        { id: "80862", rind: "307232.2" },
        { id: "80863", rind: "307241.1" },
        { id: "80864", rind: "307321.1" },
        { id: "80865", rind: "307321.2" },
        { id: "80866", rind: "307321.3" },
        { id: "80867", rind: "307321.4" },
        { id: "80868", rind: "307321.5" },
        { id: "80869", rind: "307321.6" },
        { id: "80870", rind: "307321.7" },
        { id: "80871", rind: "307321.8" },
        { id: "80872", rind: "307321.9" },
        { id: "80873", rind: "307321.10" },
        { id: "80874", rind: "307321.11" },
        { id: "80875", rind: "307321.12" },
        { id: "80876", rind: "307321.13" },
        { id: "80877", rind: "307321.14" },
        { id: "80878", rind: "307321.1207321.9" },
        { id: "80879", rind: "307321.1207321.14" },
        { id: "80880", rind: "307322.1" },
        { id: "80881", rind: "307323.1" },
        { id: "80882", rind: "307323.2" },
        { id: "80883", rind: "307323.3" },
        { id: "80884", rind: "307323.4" },
        { id: "80885", rind: "307323.5" },
        { id: "80886", rind: "307323.6" },
        { id: "80887", rind: "307323.7" },
        { id: "80888", rind: "307324.1" },
        { id: "80889", rind: "307324.2" },
        { id: "80890", rind: "307324.3" },
        { id: "80891", rind: "308111.1" },
        { id: "80892", rind: "308112.1" },
        { id: "80893", rind: "308112.2" },
        { id: "80894", rind: "308112.3" },
        { id: "80895", rind: "308113.1" },
        { id: "80896", rind: "308114.1" },
        { id: "80897", rind: "308121.1" },
        { id: "80898", rind: "308121.2" },
        { id: "80899", rind: "308121.3" },
        { id: "80900", rind: "308121.4" },
        { id: "80901", rind: "308121.308121.4" },
        { id: "82974", rind: "308122.1" },
        { id: "82975", rind: "308122.2" },
        { id: "82976", rind: "308122.3" },
        { id: "80902", rind: "308211.1" },
        { id: "80903", rind: "308311.1" },
        { id: "80904", rind: "309111.1" },
        { id: "80905", rind: "309211.1" },
        { id: "80906", rind: "309211.2" },
        { id: "80907", rind: "309221.1" },
        { id: "80908", rind: "309221.2" },
        { id: "80909", rind: "310121.1" },
        { id: "80910", rind: "310121.2" },
        { id: "80911", rind: "310121.3" },
        { id: "80912", rind: "310121.4" },
        { id: "80913", rind: "310121.5" },
        { id: "80914", rind: "310121.6" },
        { id: "80915", rind: "310121.7" },
        { id: "80916", rind: "310131.1" },
        { id: "80917", rind: "310131.2" },
        { id: "80918", rind: "310131.3" },
        { id: "80919", rind: "310132.1" },
        { id: "80920", rind: "310132.110131.3" },
        { id: "80921", rind: "310151.1" },
        { id: "80922", rind: "310311.1" },
        { id: "80923", rind: "310311.2" },
        { id: "80924", rind: "310311.3" },
        { id: "80925", rind: "310312.1" },
        { id: "80926", rind: "310312.2" },
        { id: "80927", rind: "310313.1" },
        { id: "80928", rind: "310313.2" },
        { id: "80929", rind: "310313.3" },
        { id: "80930", rind: "310411.1" },
        { id: "80931", rind: "310411.2" },
        { id: "80932", rind: "310411.3" },
        { id: "80933", rind: "310411.4" },
        { id: "80934", rind: "310411.5" },
        { id: "80935", rind: "310411.6" },
        { id: "80936", rind: "310411.7" },
        { id: "80937", rind: "310411.8" },
        { id: "80938", rind: "310411.9" },
        { id: "80939", rind: "310411.10" },
        { id: "80940", rind: "310411.11" },
        { id: "80941", rind: "310411.12" },
        { id: "80942", rind: "310411.13" },
        { id: "80943", rind: "310411.14" },
        { id: "80944", rind: "310411.910411.8" },
        { id: "80945", rind: "310411.1410411.13" }
    ];

    // Declare variables to store the sums for 12 columns
    var sumCol1 = 0, sumCol2 = 0, sumCol3 = 0, sumCol4 = 0, sumCol5 = 0,
        sumCol6 = 0, sumCol7 = 0, sumCol8 = 0, sumCol9 = 0, sumCol10 = 0,
        sumCol11 = 0, sumCol12 = 0;

    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\.");  // Escape the dots in `rind`
        sumCol1 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_1").val()) || 0;
        sumCol2 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_2").val()) || 0;
        sumCol3 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_3").val()) || 0;
        sumCol4 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_4").val()) || 0;
        sumCol5 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_5").val()) || 0;
        sumCol6 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_6").val()) || 0;
        sumCol7 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_7").val()) || 0;
        sumCol8 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_8").val()) || 0;
        sumCol9 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_9").val()) || 0;
        sumCol10 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_10").val()) || 0;
        sumCol11 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_11").val()) || 0;
        sumCol12 += parseInt($("#49_1049_" + row.id + "_" + escapedRind + "_12").val()) || 0;

    });

    // Set the calculated values into the respective readonly fields for row 010
    $("#49_1049_79006_030_1").val(sumCol1 !== 0 ? sumCol1 : "").prop("readonly", true);
    $("#49_1049_79006_030_2").val(sumCol2 !== 0 ? sumCol2 : "").prop("readonly", true);
    $("#49_1049_79006_030_3").val(sumCol3 !== 0 ? sumCol3 : "").prop("readonly", true);
    $("#49_1049_79006_030_4").val(sumCol4 !== 0 ? sumCol4 : "").prop("readonly", true);
    $("#49_1049_79006_030_5").val(sumCol5 !== 0 ? sumCol5 : "").prop("readonly", true);
    $("#49_1049_79006_030_6").val(sumCol6 !== 0 ? sumCol6 : "").prop("readonly", true);
    $("#49_1049_79006_030_7").val(sumCol7 !== 0 ? sumCol7 : "").prop("readonly", true);
    $("#49_1049_79006_030_8").val(sumCol8 !== 0 ? sumCol8 : "").prop("readonly", true);
    $("#49_1049_79006_030_9").val(sumCol9 !== 0 ? sumCol9 : "").prop("readonly", true);
    $("#49_1049_79006_030_10").val(sumCol10 !== 0 ? sumCol10 : "").prop("readonly", true);
    $("#49_1049_79006_030_11").val(sumCol11 !== 0 ? sumCol11 : "").prop("readonly", true);
    $("#49_1049_79006_030_12").val(sumCol12 !== 0 ? sumCol12 : "").prop("readonly", true);


}


function f_Capitol_1049() {
    // Execute the custom functions
    sumCap1049_Rind010();
    sumCap1049_Rind020();
    sumCap1049_Rind030();

 }

var from = "";
$(document).ready(function () {
    from = $("#formDenShort").val();
    f_Capitol_1049();
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", f_Capitol_1049);
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", f_Capitol_1049);
});
