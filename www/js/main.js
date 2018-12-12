$(document).on("pagecreate","#page1",function(){
    $("#process").on("tap",function(){
         ti = parseInt($("#process").text());
        $("#process").text(ti + 1);
        initProcess();
    });
});

function initProcess() {
    $("#results").html("");
    // words
    abc = ["a", "á", "b", "c", "d", "e", "é", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "ñ", "o", "ó", "p", "q", "r", "s", "t", "u", "ú", "v", "w", "x", "y", "z"];
    p_wl = $("#param_wordlength").val();
    p_lt = $("#param_letters").val();
    console.log("plt1:" +  p_lt);
    p_lt = p_lt.replace(" ", "");
    console.log("plt2:" +  p_lt);
    p_lt = p_lt.replace(" ", "");
    console.log("plt3:" +  p_lt);
    p_lt = p_lt.toLowerCase();
    console.log("plt4:" +  p_lt);
    couldcontain = p_lt.split(","),
    notcontains = [];
    filtered = [];
    found = [];
    out = [];
    htmout = "";
    abc.forEach((letter)=>{
        if(!couldcontain.includes(letter)) {
            notcontains.push(letter);
        }
    });
    phase1(words);
}

function phase1(words) {
    words.forEach((word)=>{
        //Filters
        if(word.length==p_wl) {
            filtered.push(word);
        }
    });
    phase2(filtered);
}

function phase2(filtered) {
    console.log(couldcontain)
    console.log(notcontains)
    console.log(found + "end");
    filtered.forEach((elem)=>{
        notcontains.forEach((lt)=>{
            if(out.includes(elem)) return;
            if(elem.includes(lt)) {
                out.push(elem);
            }
        });
    });
    filtered.forEach((elem)=>{
        if(!out.includes(elem)) {
            found.push(elem);
        }
    });
    console.log("Found these:")
    console.log(found)
    found.forEach((f)=>{
        htmout+=`<li><b>${f}</b></li>`;
    });
    $("#results").html(htmout);
    $("#results_title").text(`Resultados [${found.length}]:`);
}
