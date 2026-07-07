console.log("MAIN JS MULAI");
/* ================= LOADING SCREEN ================= */

window.addEventListener("load",()=>{

    const loader = document.querySelector(".pageLoader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.transition="0.5s";

            setTimeout(()=>{

                loader.remove();

            },500);


        },800);

    }

});



/* ================= AUTO YEAR ================= */

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}



/* ================= GREETING ================= */


const greeting = document.getElementById("greeting");


function updateGreeting(){

    if(!greeting) return;


    const hour = new Date().getHours();


    let text;


    if(hour >= 5 && hour < 12){

        text = "Selamat Pagi, Piki ☀️";

    }

    else if(hour >= 12 && hour < 15){

        text = "Selamat Siang, Piki 🌤️";

    }

    else if(hour >= 15 && hour < 18){

        text = "Selamat Sore, Piki 🌅";

    }

    else{

        text = "Selamat Malam, Piki 🌙";

    }


    greeting.textContent = text;


}


updateGreeting();



/* ================= CLOCK ================= */

const clock = document.getElementById("clock");


function updateClock(){

    if(!clock) return;


    const now = new Date();


    const hours = String(now.getHours()).padStart(2,"0");

    const minutes = String(now.getMinutes()).padStart(2,"0");

    const seconds = String(now.getSeconds()).padStart(2,"0");


    clock.textContent =
    `${hours}:${minutes}:${seconds}`;

}


updateClock();


setInterval(updateClock,1000);

/* ================= DATE ================= */


const date = document.getElementById("date");


function updateDate(){

    if(!date) return;


    const now = new Date();


    date.textContent =
    now.toLocaleDateString(
        "id-ID",
        {
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    );

}


updateDate();



console.log("Main JS Part 1 aktif ✅");
/* ================= BATTERY ================= */

const batteryLevel = document.getElementById("batteryLevel");
const charging = document.getElementById("charging");


if(navigator.getBattery){

    navigator.getBattery().then(battery=>{


        function updateBattery(){


            if(batteryLevel){

                batteryLevel.textContent =
                Math.round(battery.level * 100) + "%";

            }


            if(charging){

                charging.textContent =
                battery.charging ? "Mengisi ⚡" : "Tidak";

            }


        }


        updateBattery();


        battery.addEventListener(
            "levelchange",
            updateBattery
        );


        battery.addEventListener(
            "chargingchange",
            updateBattery
        );


    });


}
else{

    if(batteryLevel){

        batteryLevel.textContent="Tidak tersedia";

    }

}
/* ================= BATTERY STATUS ================= */

const batteryText = document.getElementById("batteryLevel");
const chargingText = document.getElementById("charging");


if(batteryText){

    batteryText.textContent="--%";

}


if(chargingText){

    chargingText.textContent="Tidak";

}



/* ================= INTERNET STATUS ================= */

const networkText = document.getElementById("networkStatus");


if(networkText){

    networkText.textContent =
    navigator.onLine
    ? "Online 🟢"
    : "Offline 🔴";

}


console.log("Main JS Part 2 aktif ✅");
console.log("MAIN JS SELESAI");
/* ================= QUOTE GENERATOR ================= */


const quoteInput = document.getElementById("quoteInput");
const charCount = document.getElementById("charCount");

const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");

const quoteResult = document.getElementById("quoteResult");

const animationType = document.getElementById("animationType");

const fontType =
document.getElementById("fontType");

const speed = document.getElementById("speed");
const speedValue = document.getElementById("speedValue");

const copyBtn = document.getElementById("copyQuote");



/* ================= CHARACTER COUNT ================= */


if(quoteInput){

    quoteInput.addEventListener("input",()=>{

        charCount.textContent =
        quoteInput.value.length;

    });

}



/* ================= SPEED DISPLAY ================= */


if(speed){

    speed.addEventListener("input",()=>{

        speedValue.textContent =
        speed.value;

    });

}




/* ================= GENERATE ================= */


if(generateBtn){


generateBtn.addEventListener("click",()=>{


    const text =
    quoteInput.value.trim();


    if(text===""){

        quoteResult.textContent =
        "Masukkan quote terlebih dahulu.";

        return;

    }



    quoteResult.textContent=text;



    // hapus animasi lama

    quoteResult.className="";



    const type =
    animationType.value;



    const duration =
    11 - speed.value;



    quoteResult.style.animationDuration =
    duration+"s";



    // aktifkan animasi

    quoteResult.classList.add(type);


// ================= FONT STYLE =================

quoteResult.classList.remove(
    "poppins",
    "orbitron",
    "playfair"
);


quoteResult.classList.add(
    fontType.value
);



});


}





/* ================= RESET ================= */


if(resetBtn){


resetBtn.addEventListener("click",()=>{


    quoteInput.value="";

    charCount.textContent="0";


    quoteResult.textContent =
    "Masukkan quote untuk melihat preview.";


    quoteResult.className="";


});


}



/* ================= COPY ================= */


if(copyBtn){


copyBtn.addEventListener("click",()=>{


navigator.clipboard.writeText(
    quoteResult.textContent
);


copyBtn.innerHTML =
"✔ Tersalin";


setTimeout(()=>{


copyBtn.innerHTML =
'<i class="fa-solid fa-copy"></i> Salin Quote';


},1500);



});


}



console.log("Main JS Part 3 Quote System aktif ✅");
/* ================= QUOTE ANIMATION CONTROLLER ================= */


const quoteBox =
document.getElementById("quoteResult");

const animationSelect =
document.getElementById("animationType");

const speedRange =
document.getElementById("speed");



function updateQuoteAnimation(){


    if(!quoteBox || !speedRange) return;



    const speed =
    11 - Number(speedRange.value);



    quoteBox.style.animationDuration =
    speed + "s";


}



/* ================= SPEED CONTROL ================= */


if(speedRange){


    speedRange.addEventListener(
        "input",
        updateQuoteAnimation
    );


}




/* ================= ANIMATION CHANGE ================= */


if(animationSelect && quoteBox){


    animationSelect.addEventListener(
        "change",
        ()=>{


            quoteBox.classList.remove(

                "fade",
                "slideLeft",
                "slideRight",
                "zoom",
                "glow"

            );



            quoteBox.classList.add(

                animationSelect.value

            );



            updateQuoteAnimation();


        }
    );


}




console.log(
"Main JS Part 9 Quote Animation aktif ✅"
);
/* ================= QUOTE VIDEO RECORDER ================= */


const recordBtn =
document.getElementById("recordQuote");


const downloadVideoBtn =
document.getElementById("downloadVideo");


let recordedChunks = [];

let mediaRecorder;

let videoURL;



if(recordBtn){


recordBtn.addEventListener("click",()=>{


    const quotePreview =
    document.getElementById("quoteResult");


    if(!quotePreview){

        return;

    }



    const stream =
    quotePreview.captureStream
    ? quotePreview.captureStream(30)
    : null;



    if(!stream){

        alert(
        "Browser tidak mendukung rekaman preview"
        );

        return;

    }



    recordedChunks=[];



    mediaRecorder =
    new MediaRecorder(stream);



    mediaRecorder.ondataavailable =
    e=>{


        if(e.data.size > 0){

            recordedChunks.push(e.data);

        }


    };



    mediaRecorder.onstop = ()=>{


        const blob =
        new Blob(
            recordedChunks,
            {
                type:"video/webm"
            }
        );


        videoURL =
        URL.createObjectURL(blob);



        downloadVideoBtn.disabled=false;


    };



    mediaRecorder.start();



    recordBtn.innerHTML =
    "⏹ Stop Rekam";


    setTimeout(()=>{


        mediaRecorder.stop();


        recordBtn.innerHTML =
        '<i class="fa-solid fa-video"></i> Buat Video';



    },5000);



});


}





if(downloadVideoBtn){


downloadVideoBtn.addEventListener(
"click",
()=>{


    if(!videoURL) return;



    const a =
    document.createElement("a");


    a.href=videoURL;


    a.download =
    "quote-piki.webm";


    a.click();



});


}



console.log(
"Main JS Part 10 Video Quote aktif ✅"
);
/* ================= QUOTE FONT SYSTEM ================= */


const fontButtons =
document.querySelectorAll(".fontBtn");


const quotePreview =
document.getElementById("quoteResult");



fontButtons.forEach(btn=>{


    btn.addEventListener("click",()=>{


        if(!quotePreview) return;



        quotePreview.classList.remove(

            "font1",
            "font2",
            "font3"

        );



        quotePreview.classList.add(

            btn.dataset.font

        );


    });


});



console.log(
"Main JS Part 11 Font aktif ✅"
);
/* ================= QUOTE BACKGROUND SYSTEM ================= */


const bgButtons =
document.querySelectorAll(".bgBtn");


const quotePreviewBox =
document.getElementById("quoteResult");



bgButtons.forEach(btn=>{


    btn.addEventListener("click",()=>{


        if(!quotePreviewBox) return;



        quotePreviewBox.classList.remove(

            "bg1",
            "bg2",
            "bg3"

        );



        quotePreviewBox.classList.add(

            btn.dataset.bg

        );


    });


});



console.log(
"Main JS Part 12 Background aktif ✅"
);
/* ==========================================
   PART 13
   DOWNLOAD ENGINE
========================================== */

const downloadBtn = document.getElementById("downloadBtn");
const urlInput = document.getElementById("urlInput");
const statusText = document.getElementById("statusText");
const progressBar = document.getElementById("progressBar");

function isTikTokUrl(url){

    return /tiktok\.com|vt\.tiktok\.com/i.test(url);

}

async function startDownload(){

    const url = urlInput.value.trim();

    if(url===""){

        statusText.innerText="Masukkan link TikTok.";

        return;

    }

    if(!isTikTokUrl(url)){

        statusText.innerText="Link bukan berasal dari TikTok.";

        return;

    }

    downloadBtn.disabled=true;
    
    downloadBtn.innerHTML =
'<i class="fa-solid fa-spinner fa-spin"></i> Mencari Video...';

    statusText.innerText="Menghubungi server...";

    progressBar.style.width="5%";

    let progress=5;

    const fakeLoading=setInterval(()=>{

        if(progress<90){

            progress+=2;

            progressBar.style.width=progress+"%";

        }

    },150);

    try{

        /*
        GANTI API DISINI
        */

        const response = await fetch(
    "/api/tiktok?url=" + encodeURIComponent(url)
)

        const data = await response.json();

console.log(data);

        clearInterval(fakeLoading);

        progressBar.style.width="100%";

        if(data.status==="success"){

            statusText.innerText="Download siap.";

            showResult(data);

        }else{

            statusText.innerText=data.message;

        }

    }catch(e){

        clearInterval(fakeLoading);

        statusText.innerText="Server tidak dapat dihubungi.";

    }

    setTimeout(()=>{

        progressBar.style.width="0%";

        downloadBtn.disabled=false;
        
        downloadBtn.innerHTML =
'<i class="fa-solid fa-magnifying-glass"></i> Cari Video';

    },1200);

}

downloadBtn.addEventListener("click",startDownload);
/* ==========================================
   PART 14
   RESULT CARD
========================================== */

const resultPanel = document.getElementById("downloadResult");
const resultThumb = document.getElementById("videoThumbnail");
const resultTitle = document.getElementById("videoTitle");
const resultAuthor = document.getElementById("videoAuthor");
const resultDuration = document.getElementById("videoDuration");
const resultQuality = document.getElementById("videoQuality");
const downloadLink = document.getElementById("downloadLink");
function showResult(data){

    resultPanel.classList.add("show");

    resultThumb.src =
        data.thumbnail || "assets/default-thumbnail.png";

    resultTitle.textContent =
        data.title || "Video TikTok";

    resultAuthor.textContent =
        data.author || "@unknown";

    resultDuration.textContent =
        "Durasi : " + (data.duration || "--:--");

    resultQuality.textContent =
        "Kualitas : HD";

    const downloadLink = document.getElementById("downloadLink");

    if (downloadLink) {
        downloadLink.href = data.download || "#";
    }

}
/* ==========================================
   PART 15
   SMART INPUT
========================================== */

// Tekan Enter untuk mencari video
urlInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        e.preventDefault();

        startDownload();

    }

});

// Auto paste dari clipboard (jika diizinkan browser)
async function autoPasteTikTok() {

    try {

        const text = await navigator.clipboard.readText();

        if (isTikTokUrl(text)) {

            urlInput.value = text;

        }

    } catch (e) {

        // Browser tidak mengizinkan akses clipboard
    }

}

// Jalankan saat halaman dibuka
window.addEventListener("load", autoPasteTikTok);