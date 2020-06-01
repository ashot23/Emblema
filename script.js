var divs = document.getElementsByClassName('div0')
var button = document.getElementById('but')

var x = 0
var ca = 0
var ass = 0
var pordz = []
//.onclick
//.onmouseover
for (let i = 0; i < divs.length; i++) {


    divs[i].onmouseover = function () {


        var cl = document.createElement('div')
        cl.setAttribute('class', 'div1')
        cl.setAttribute('id', i)
        var sa = document.getElementsByClassName('div1')
        this.append(cl)
    



        if (cl.id == 1 || cl.id == 5 || cl.id == 6 || cl.id == 7 || cl.id == 8) {
             ca++
          if (cl.id==1) {
              pordz[0]=1

              console.log(pordz);
              
          }
          else if (pordz[0]==1&&cl.id == 5 ) {
            pordz[1]=2
            console.log(pordz);
          }
          else if (pordz[1]==2&&pordz[0]==1&&cl.id == 8 ) {
            pordz[2]=3
            console.log(pordz);
          }
          else if (pordz[2]==3&&pordz[1]==2&&pordz[0]==1&&cl.id == 7) {
            pordz[3]=4
            console.log(pordz);
          }
          else if (pordz[3]==4&&pordz[2]==3&&pordz[1]==2&&pordz[0]==1&&cl.id == 6) {
            pordz[4]=5
            console.log(pordz);
          }

          
        }
        else {
            ass++
           
            
        }


        //  if (ca==5&&as>=1) {
        //      setTimeout(() => {


        //      }, 200);
        this.onmouseover = 'None'

    }











}

button.onclick = function () {

    // if (ca == 5 && ass == 0) {
        if (pordz[4]==5&&pordz[3]==4&&pordz[2]==3&&pordz[1]==2&&pordz[0]==1&&ass == 0) {
        var random = Math.floor(Math.random() * 10)
        var h1 = document.createElement('h1')
        document.body.append(h1)
        h1.setAttribute("align","center")
        h1.innerText = "Ապրես Գյադա !!"
        var h1s = document.getElementById('h1')
    if (h1s) {
        document.body.removeChild(h1s)
    }
               

        this.onclick = 'None'



        var vid = document.createElement("video")
        vid.autoplay = 'on'
        vid.controls = "on"
        vid.src = "audacity/" + random + ".mp4"
        // vid.src = "../Zell  Nard - Танцевали (lyrics video ТЕКСТ ПЕСНИ) 2019.mp3"
        document.body.appendChild(vid)

    }
else if (ca==0&&ass==0) {
x++
if (x==5) {
var h = document.getElementsByClassName("hner")
console.log(h);

var s1 = document.createElement('h1')
            document.body.append(s1)
            s1.innerText = "Դե բանմ արա վայ"
            s1.setAttribute("id", "h1")
            s1.setAttribute("class","hner")
            s1.setAttribute("align","center")
            s1.style.color = "red"
            if (h[1]||h[2]) {
                console.log(h);
                document.body.removeChild(h[1])
            }
            x=0
}

 }

    else {


        if (ca >= 1 || ass >= 1) {

            var sax = document.getElementsByClassName("hner")
                        var hs = document.getElementsByClassName("h1ner")
          
                    var h1 = document.createElement('h1')
                        document.body.append(h1)
                        h1.innerText = "Սխալ կոդ ես  զարգե սխմի Թաժժա կրկին փորձի !!!"
                        h1.setAttribute("id", "h1")
                        h1.setAttribute("class", "h1ner")
                        h1.setAttribute("align","center")
                        h1.style.color = "red"
                        if (hs[1]) {
                            document.body.removeChild(h1)
                        }
                    
                        if (sax[0]) {
                            document.body.removeChild(sax[0])
                         
                        }
                        
                        
            
                        
            
            
                    }





    }


}


var tazza = document.getElementById('buta')
tazza.onclick = function () {

    var divo = document.getElementsByClassName('div0')
    ca = 0
    ass = 0
    ss = 0
    pordz = []
    console.log(pordz);
    
    var h1 = document.getElementById('h1')
    if (h1) {
        document.body.removeChild(h1)
    }

    // document.body.removeChild(h1)
    // divo[0].removeChild(sd0)
    for (let i = 0; i < divo.length; i++) {
        divo[i].onmouseover = function () {

            var cl = document.createElement('div')
            cl.setAttribute('class', 'div1')
            cl.setAttribute('id', i)
            var sa = document.getElementsByClassName('div1')
            this.append(cl)
            //console.log(sa);



            if (cl.id == 1 || cl.id == 5 || cl.id == 6 || cl.id == 7 || cl.id == 8) {
                ca++
                // console.log(ca);

                if (cl.id==1) {
                    pordz[0]=1
      
                    console.log(pordz);
                    
                }
                else if (pordz[0]==1&&cl.id == 5 ) {
                  pordz[1]=2
                  console.log(pordz);
                }
                else if (pordz[1]==2&&pordz[0]==1&&cl.id == 8 ) {
                  pordz[2]=3
                  console.log(pordz);
                }
                else if (pordz[2]==3&&pordz[1]==2&&pordz[0]==1&&cl.id == 7) {
                  pordz[3]=4
                  console.log(pordz);
                }
                else if (pordz[3]==4&&pordz[2]==3&&pordz[1]==2&&pordz[0]==1&&cl.id == 6) {
                  pordz[4]=5
                  console.log(pordz);
                }

            }
            else {
                ass++
            }
            this.onmouseover = 'None'

        }

//es mas@ xelrcrelem./
        if (document.getElementById(i)) {
            divo[i].removeChild(document.getElementById(i))
        }
        var vid = document.getElementsByTagName("video")
        if (vid[0]) {

            function random(min,max) {


return Math.floor(Math.random()*(max-min+1)+min)
}


           // var random = Math.floor(Math.random() * 8)
            vid[0].src = "audacity/" + random(0,10) + ".mp4"
        }
//.




    }



}