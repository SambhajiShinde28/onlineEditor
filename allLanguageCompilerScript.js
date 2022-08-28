// Language variable to know which language is choosed by user

let  language;



let editor;

window.onload=function(){
    editor=ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/html");

    document.getElementById("iframeTagId").style.display="block";
    document.getElementById("outputId").style.display="none";


    editor.getSession().setValue('\n\n <!-- Welcome in CodingTutorial -->\n\n <!DOCTYPE html>\n <html lang="en">\n <head>\n\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>CodingTutorial</title>\n\n    <style></style>\n\n </head>\n <body>\n\n </body>\n <script></script>\n </html>');
}

function changeLanguage(){
    language=$("#languages").val();

    if(language=='html'){

        editor.session.setMode("ace/mode/html")

        document.getElementById("iframeTagId").style.display="block";
        document.getElementById("outputId").style.display="none";


        editor.getSession().setValue('\n\n <!-- Welcome in CodingTutorial -->\n\n <!DOCTYPE html>\n <html lang="en">\n <head>\n\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>CodingTutorial</title>\n\n    <style></style>\n\n </head>\n <body>\n\n </body>\n <script></script>\n </html>');
    }

    else if(language=='css'){
        editor.session.setMode("ace/mode/html")

        document.getElementById("iframeTagId").style.display="block";
        document.getElementById("outputId").style.display="none";
        

        editor.getSession().setValue('\n\n <!-- Welcome in CodingTutorial -->\n\n <!DOCTYPE html>\n <html lang="en">\n <head>\n\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>CodingTutorial</title>\n\n    <style></style>\n\n </head>\n <body>\n\n </body>\n <script></script>\n </html>');
    }

    else if(language=='javascript'){
        editor.session.setMode("ace/mode/javascript")

        document.getElementById("iframeTagId").style.display="block";
        document.getElementById("outputId").style.display="none";

        
        editor.getSession().setValue('\n\n // Welcome in CodingTutorial\n // See your "console.log("")" output in your browser console\n\n\n console.log("Welcome in CodingTutorial");\n alert("CodingTutorial");');
    }
}






function executeCode(){

    if (language=='html') {

        var displaySection=editor.getSession().getValue();

        var iframeTagId=document.getElementById('iframeTagId');

        iframeTagId.contentDocument.body.innerHTML=displaySection;



        var extraDiv=document.getElementById('extraDivId');
        extraDiv.insertAdjacentHTML("afterbegin",displaySection);

        var scriptTag=document.getElementsByTagName('script')[5].innerHTML;
        
        iframeTagId.contentWindow.eval(scriptTag);

        extraDiv.innerHTML="";
        
    } 
    else if(language=='css'){
        
        var displaySection=editor.getSession().getValue();
        
        var iframeTagId=document.getElementById('iframeTagId');

        iframeTagId.contentDocument.body.innerHTML=displaySection;



        var extraDiv=document.getElementById('extraDivId');
        extraDiv.insertAdjacentHTML("afterbegin",displaySection);

        var scriptTag=document.getElementsByTagName('script')[5].innerHTML;

        iframeTagId.contentWindow.eval(scriptTag);

        extraDiv.innerHTML="";

    }
    else if(language=='javascript'){
        
        var displaySection=editor.getSession().getValue();

        var iframeTagId=document.getElementById('iframeTagId');

        iframeTagId.contentWindow.eval(displaySection);

    }

    else{

        var displaySection=editor.getSession().getValue();

        var iframeTagId=document.getElementById('iframeTagId');

        iframeTagId.contentDocument.body.innerHTML=displaySection;



        var extraDiv=document.getElementById('extraDivId');
        extraDiv.insertAdjacentHTML("afterbegin",displaySection);

        var scriptTag=document.getElementsByTagName('script')[5].innerHTML;
        
        iframeTagId.contentWindow.eval(scriptTag);

        extraDiv.innerHTML="";    

    }

}



function fontChange(){
    var inputText=document.getElementById('fontInput').value;

    var editorText=document.getElementById('editor');

    var editorOutput=document.getElementById('outputId');

    editorText.style.fontSize=""+inputText+"px";

    editorOutput.style.fontSize=""+inputText+"px";
}



function themeChangeInHeader(){

    var theme=document.getElementById('editorThemeIdInHeader').value;
    
    if (theme=="monokai") {
        editor.setTheme("ace/theme/monokai");
    }
    else if(theme=="ambiance"){
        editor.setTheme("ace/theme/ambiance");
    }
    else if(theme=="chaos"){
        editor.setTheme("ace/theme/chaos");
    }
    else if(theme=="chrome"){
        editor.setTheme("ace/theme/chrome");
    }
    else if(theme=="cloud9_day"){
        editor.setTheme("ace/theme/cloud9_day");
    }
    else if(theme=="cloud9_night_low_color"){
        editor.setTheme("ace/theme/cloud9_night_low_color");
    }
    else if(theme=="cloud9_night"){
        editor.setTheme("ace/theme/cloud9_night");
    }
    else if(theme=="clouds_midnight"){
        editor.setTheme("ace/theme/clouds_midnight");
    }
    else if(theme=="clouds"){
        editor.setTheme("ace/theme/clouds");
    }
    else if(theme=="cobalt"){
        editor.setTheme("ace/theme/cobalt");
    }
    else if(theme=="crimson_editor"){
        editor.setTheme("ace/theme/crimson_editor");
    }
    else if(theme=="dawn"){
        editor.setTheme("ace/theme/dawn");
    }
    else if(theme=="dracula"){
        editor.setTheme("ace/theme/dracula");
    }
    else if(theme=="dreamweaver"){
        editor.setTheme("ace/theme/dreamweaver");
    }
    else if(theme=="eclipse"){
        editor.setTheme("ace/theme/eclipse");
    }
    else if(theme=="github"){
        editor.setTheme("ace/theme/github");
    }
    else if(theme=="gob"){
        editor.setTheme("ace/theme/gob");
    }
    else if(theme=="gruvbox_dark_hard"){
        editor.setTheme("ace/theme/gruvbox_dark_hard");
    }
    else if(theme=="gruvbox_light_hard"){
        editor.setTheme("ace/theme/gruvbox_light_hard");
    }
    else if(theme=="gruvbox"){
        editor.setTheme("ace/theme/gruvbox");
    }
    else if(theme=="idle_fingers"){
        editor.setTheme("ace/theme/idle_fingers");
    }
    else if(theme=="iplastic"){
        editor.setTheme("ace/theme/iplastic");
    }
    else if(theme=="katzenmilch"){
        editor.setTheme("ace/theme/katzenmilch");
    }
    else if(theme=="kr_theme"){
        editor.setTheme("ace/theme/kr_theme");
    }
    else if(theme=="kuroir"){
        editor.setTheme("ace/theme/kuroir");
    }
    else if(theme=="merbivore"){
        editor.setTheme("ace/theme/merbivore");
    }
    else if(theme=="mono_industrial"){
        editor.setTheme("ace/theme/mono_industrial");
    }
    else if(theme=="nord_dark"){
        editor.setTheme("ace/theme/nord_dark");
    }
    else if(theme=="one_dark"){
        editor.setTheme("ace/theme/one_dark");
    }
    else if(theme=="pastel_on_dark"){
        editor.setTheme("ace/theme/pastel_on_dark");
    }
    else if(theme=="solarized_dark"){
        editor.setTheme("ace/theme/solarized_dark");
    }
    else if(theme=="solarized_light"){
        editor.setTheme("ace/theme/solarized_light");
    }
    else if(theme=="sqlserver"){
        editor.setTheme("ace/theme/sqlserver");
    }
    else if(theme=="terminal"){
        editor.setTheme("ace/theme/terminal");
    }
    else if(theme=="textmate"){
        editor.setTheme("ace/theme/textmate");
    }
    else if(theme=="tomorrow_night_blue"){
        editor.setTheme("ace/theme/tomorrow_night_blue");
    }
    else if(theme=="tomorrow_night_bright"){
        editor.setTheme("ace/theme/tomorrow_night_bright");
    }
    else if(theme=="tomorrow_night_eighties"){
        editor.setTheme("ace/theme/tomorrow_night_eighties");
    }
    else if(theme=="tomorrow_night"){
        editor.setTheme("ace/theme/tomorrow_night");
    }
    else if(theme=="tomorrow"){
        editor.setTheme("ace/theme/tomorrow");
    }
    else if(theme=="twilight"){
        editor.setTheme("ace/theme/twilight");
    }
    else if(theme=="vibrant_ink"){
        editor.setTheme("ace/theme/vibrant_ink");
    }
    else if(theme=="xcode"){
        editor.setTheme("ace/theme/xcode");
    }
}




function themeChange(){

    var theme=document.getElementById('editorThemeId').value;
    
    if (theme=="monokai") {
        editor.setTheme("ace/theme/monokai");
    }
    else if(theme=="ambiance"){
        editor.setTheme("ace/theme/ambiance");
    }
    else if(theme=="chaos"){
        editor.setTheme("ace/theme/chaos");
    }
    else if(theme=="chrome"){
        editor.setTheme("ace/theme/chrome");
    }
    else if(theme=="cloud9_day"){
        editor.setTheme("ace/theme/cloud9_day");
    }
    else if(theme=="cloud9_night_low_color"){
        editor.setTheme("ace/theme/cloud9_night_low_color");
    }
    else if(theme=="cloud9_night"){
        editor.setTheme("ace/theme/cloud9_night");
    }
    else if(theme=="clouds_midnight"){
        editor.setTheme("ace/theme/clouds_midnight");
    }
    else if(theme=="clouds"){
        editor.setTheme("ace/theme/clouds");
    }
    else if(theme=="cobalt"){
        editor.setTheme("ace/theme/cobalt");
    }
    else if(theme=="crimson_editor"){
        editor.setTheme("ace/theme/crimson_editor");
    }
    else if(theme=="dawn"){
        editor.setTheme("ace/theme/dawn");
    }
    else if(theme=="dracula"){
        editor.setTheme("ace/theme/dracula");
    }
    else if(theme=="dreamweaver"){
        editor.setTheme("ace/theme/dreamweaver");
    }
    else if(theme=="eclipse"){
        editor.setTheme("ace/theme/eclipse");
    }
    else if(theme=="github"){
        editor.setTheme("ace/theme/github");
    }
    else if(theme=="gob"){
        editor.setTheme("ace/theme/gob");
    }
    else if(theme=="gruvbox_dark_hard"){
        editor.setTheme("ace/theme/gruvbox_dark_hard");
    }
    else if(theme=="gruvbox_light_hard"){
        editor.setTheme("ace/theme/gruvbox_light_hard");
    }
    else if(theme=="gruvbox"){
        editor.setTheme("ace/theme/gruvbox");
    }
    else if(theme=="idle_fingers"){
        editor.setTheme("ace/theme/idle_fingers");
    }
    else if(theme=="iplastic"){
        editor.setTheme("ace/theme/iplastic");
    }
    else if(theme=="katzenmilch"){
        editor.setTheme("ace/theme/katzenmilch");
    }
    else if(theme=="kr_theme"){
        editor.setTheme("ace/theme/kr_theme");
    }
    else if(theme=="kuroir"){
        editor.setTheme("ace/theme/kuroir");
    }
    else if(theme=="merbivore"){
        editor.setTheme("ace/theme/merbivore");
    }
    else if(theme=="mono_industrial"){
        editor.setTheme("ace/theme/mono_industrial");
    }
    else if(theme=="nord_dark"){
        editor.setTheme("ace/theme/nord_dark");
    }
    else if(theme=="one_dark"){
        editor.setTheme("ace/theme/one_dark");
    }
    else if(theme=="pastel_on_dark"){
        editor.setTheme("ace/theme/pastel_on_dark");
    }
    else if(theme=="solarized_dark"){
        editor.setTheme("ace/theme/solarized_dark");
    }
    else if(theme=="solarized_light"){
        editor.setTheme("ace/theme/solarized_light");
    }
    else if(theme=="sqlserver"){
        editor.setTheme("ace/theme/sqlserver");
    }
    else if(theme=="terminal"){
        editor.setTheme("ace/theme/terminal");
    }
    else if(theme=="textmate"){
        editor.setTheme("ace/theme/textmate");
    }
    else if(theme=="tomorrow_night_blue"){
        editor.setTheme("ace/theme/tomorrow_night_blue");
    }
    else if(theme=="tomorrow_night_bright"){
        editor.setTheme("ace/theme/tomorrow_night_bright");
    }
    else if(theme=="tomorrow_night_eighties"){
        editor.setTheme("ace/theme/tomorrow_night_eighties");
    }
    else if(theme=="tomorrow_night"){
        editor.setTheme("ace/theme/tomorrow_night");
    }
    else if(theme=="tomorrow"){
        editor.setTheme("ace/theme/tomorrow");
    }
    else if(theme=="twilight"){
        editor.setTheme("ace/theme/twilight");
    }
    else if(theme=="vibrant_ink"){
        editor.setTheme("ace/theme/vibrant_ink");
    }
    else if(theme=="xcode"){
        editor.setTheme("ace/theme/xcode");
    }
}







var countDeveloper=220;

// Developer scrolling image function

function scrollDeveloperImage(){
    
    var z=document.getElementById('imagesId');
    z.scrollBy(countDeveloper,0);

    var y=(z.scrollWidth-z.clientWidth)-2;

    if(z.scrollLeft>=y-220){
        countDeveloper=-220
    }

    if(z.scrollLeft<=0+220){
        countDeveloper=220
    }
}

var interval=setInterval(scrollDeveloperImage,3000);