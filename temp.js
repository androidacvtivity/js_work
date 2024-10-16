function sumCap1049_Rind010() {
    var rowIDs = [
        // Your list of rowIDs remains the same
    ];

    // Declare variables to store the sums for 12 columns
    var sumCol1 = 0, sumCol2 = 0, sumCol3 = 0, sumCol4 = 0, sumCol5 = 0,
        sumCol6 = 0, sumCol7 = 0, sumCol8 = 0, sumCol9 = 0, sumCol10 = 0,
        sumCol11 = 0, sumCol12 = 0;

    // Iterate over the rowIDs array and sum values for each column
    rowIDs.forEach(function (row) {
        var escapedRind = row.rind.replace(/\./g, "\\.");  // Escape dots in `rind`

        // Sum for each column
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

function f_Capitol_1049() {
    // Execute the custom function
    sumCap1049_Rind010();
}

$(document).ready(function () {
    f_Capitol_1049();
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", f_Capitol_1049);
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", f_Capitol_1049);
});
