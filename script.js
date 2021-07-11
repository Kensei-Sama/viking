$(".buttonOfWeapons").on("click", function(e) {
    $("#home-btn").hide();
    $("#weapons").fadeIn();
})

$(".buttonOfMythology").on("click", function(e) {
    $("#home-btn").hide();
    $("#mythology").fadeIn();
})

$(".backToHome").on("click", function(e) {
    $(this).parent().parent().hide();
    $("#home-btn").fadeIn();
})

$(".backToWeapons").on("click", function(e) {
    $(this).parent().parent().hide();
    $("#weapons").fadeIn();
})

$(".backToMythology").on("click", function(e) {
    $(this).parent().parent().hide();
    $("#mythology").fadeIn();
})

$(".buttonOfSword").on("click", function(e) {
    $("#weapons").hide();
    $("#sword").fadeIn();
})

$(".buttonOfAxe").on("click", function(e) {
    $("#weapons").hide();
    $("#axe").fadeIn();
})

$(".buttonOfSpears").on("click", function(e) {
    $("#weapons").hide();
    $("#spears").fadeIn();
})

$(".toMythology").on("click", function(e) {
    $("#valhalla").hide();
    $("#runes").hide();
    $("#ragnar").hide();
    $("#mythology").fadeIn();
})

$(".toValhalla").on("click", function(e) {
    $("#mythology").hide();
    $("#runes").hide();
    $("#ragnar").hide();
    $("#valhalla").fadeIn();
})

$(".toRagnar").on("click", function(e) {
    $("#mythology").hide();
    $("#runes").hide();
    $("#valhalla").hide();
    $("#ragnar").fadeIn();
})

$(".toRunes").on("click", function(e) {
    $("#mythology").hide();
    $("#valhalla").hide();
    $("#ragnar").hide();
    $("#runes").fadeIn();
})

function weapons_bg_change()
{
    document.getElementById("bd").style.backgroundImage="url(bg5.jpg)";
}

function mythology_bg_change()
{
    document.getElementById("bd").style.backgroundImage="url(ragnar2.jpg)";
}

function homeBg_change()
{
    document.getElementById("bd").style.backgroundImage="url(bg3.jpg)";
}

function sword_axe_spears_bg_change()
{
    document.getElementById("bd").style.backgroundImage="url(sight.jpg)";
}

function bearAlert()
{
    alert("A medve nem játék! 🐻");
}

function odinAlert()
{
    alert("Odin - A költészet, a halál, a rúnák, és a varázslat istene.");
}


