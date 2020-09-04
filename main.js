data1 = {
            "time":30,
            "text":"question text 1",
            "answers":{
                0:{
                    "text":"ans. text1",
                    "truefalse":true
                },
                1:{
                    "text":"ans. text2",
                    "truefalse":false
                },
                2:{
                    "text":"ans. text3",
                    "truefalse":false
                },
                3:{
                    "text":"ans. text4",
                    "truefalse":false
                },
            },
        }

        


data2 = {
        "time":30,
        "text":"question text 2",
        "answers":{
            0:{
                "text":"ans. text",
                "truefalse":false
            },
            1:{
                "text":"ans. text",
                "truefalse":false
            },
            2:{
                "text":"ans. text",
                "truefalse":false
            },
            3:{
                "text":"ans. text",
                "truefalse":true
            },
        }
}
    
    
data3 = {
    "time":30,
    "text":"question text 3",
    "answers":{
        0:{
            "text":"ans. text1",
            "truefalse":true
        },
        1:{
            "text":"ans. text2",
            "truefalse":false
        },
        2:{
            "text":"ans. text3",
            "truefalse":false
        },
        3:{
            "text":"ans. text4",
            "truefalse":false
        },
    },
}



    
data4 = {
    "time":30,
    "text":"En yaxsi Programlama Dili Hansidir?",
    "answers":{
        0:{
            "text":"Python",
            "truefalse":true
        },
        1:{
            "text":"Javascript",
            "truefalse":false
        },
        2:{
            "text":"Java",
            "truefalse":false
        },
        3:{
            "text":"C#",
            "truefalse":false
        },
    },
}



    
data5 = {
    "time":30,
    "text":"Django Hansi Proqramlasdirma Dilinin frameworkudur?",
    "answers":{
        0:{
            "text":"javascript",
            "truefalse":false
        },
        1:{
            "text":"dart",
            "truefalse":false
        },
        2:{
            "text":"python",
            "truefalse":true
        },
        3:{
            "text":"hec biri",
            "truefalse":false
        },
    },
}






    
data6 = {
    "time":30,
    "text":"Sun Microsystem sirketini etdiyi en populyar dil",
    "answers":{
        0:{
            "text":"java",
            "truefalse":true
        },
        1:{
            "text":"C",
            "truefalse":false
        },
        2:{
            "text":"ruby",
            "truefalse":false
        },
        3:{
            "text":"Angular(:D)",
            "truefalse":false
        },
    },
}

data7 = {
    "time":30,
    "text":"Hansi Proqramlasdirma dilinin OOP desteyi yoxdur?",
    "answers":{
        0:{
            "text":"Java",
            "truefalse":false
        },
        1:{
            "text":"Javascript",
            "truefalse":false
        },
        2:{
            "text":"C",
            "truefalse":true
        },
        3:{
            "text":"Go(lang)",
            "truefalse":false
        },
    },
}






var body = document.querySelector("body")






class game{
    constructor(data){
        this.data = data
        this.cont = document.createElement("div")
        this.cont.classList.add("container")
        body.appendChild(this.cont)
        this.timer = document.createElement("p")
        this.timer.classList.add("time")
        this.timer.innerText = this.data.time
        this.cont.appendChild(this.timer)
        this.questxt = document.createElement("p")
        this.questxt.classList.add("text")
        this.questxt.innerText = data.text
        this.cont.appendChild(this.questxt)
        this.btncont = document.createElement("div")
        this.btncont.classList.add("btncontainer")
        this.duzsehvp = document.createElement("p")
        this.duzsehvp.classList.add("duzsehv")
        this.cont.appendChild(this.duzsehvp)
        this.cont.appendChild(this.btncont)
        this.buttonlist = []
        this.truefalse = function(bu,obj){
            var e;
            if(bu.value == "true"){
                clearInterval(obj.inttimer)
                bu.classList.add("green")
                obj.duzsehvp.innerText = "Duzgun Cavab!"
                for(e of obj.buttonlist){
                    e.classList.remove("hoverlibtn")
                    e.disabled = true
                }
            }
            else if(bu.value == "false"){
                bu.classList.add("red")
                clearInterval(obj.inttimer)
                obj.duzsehvp.innerText = "Sehv Cavab!"
                for(e of obj.buttonlist){
                    e.disabled = true
                    e.classList.remove("hoverlibtn")
                    if(e.value == "true"){
                        e.classList.add("green")
                    }
                }
            }
            
            clearInterval(obj.inttimer)
        }

        this.createbtn()
    }
    

    createbtn(){
        for(var i = 0;i<4;i++){
            this.btn = document.createElement("button")
            this.btn.classList.add("answerbtn")
            this.btn.classList.add("hoverlibtn")
            this.btn.innerText = this.data.answers[i].text
            this.btn.value = this.data.answers[i].truefalse
            // console.log(this.btn.value)
            this.btn.addEventListener("click",this.truefalse.bind(null,this.btn,this))
            this.btncont.appendChild(this.btn)
            this.buttonlist.push(this.btn)
        }
    }



    start(){
        this.cont.style.display = "inline-block"
        this.inttimer = setInterval(this.timermethod,1000,this)
    }
    
    timermethod(bu){
        var e
        if(bu.data.time > 0){
        bu.data.time -= 1
        bu.timer.innerText = bu.data.time
        }
        else{
            clearInterval(bu.inttimer)
            bu.duzsehvp.innerText = "Gecikdiniz!"
            for(e of bu.buttonlist){
                e.disabled = true
                e.classList.remove("hoverlibtn")
                if(e.value == "true"){
                    e.classList.add("green")
                }
                else{
                    e.classList.add("red")
                }
            }

        }
    }


    over(){
        this.cont.style.display = "none"
        clearInterval(this.inttimer)
        this.data.time = 30
        this.timer.innerText = this.data.time 
        this.duzsehvp.innerText = ""
        for(var e of this.buttonlist){
            e.disabled = false
            e.classList.add("hoverlibtn")
            e.classList.remove("green")
            e.classList.remove("red")
        }

    }

}




function deneme(){
    console.log("denemdasndkbskhdlasjd")
}

var gameobjlist = []

var gameobj1 = new game(data1)
var gameobj2 = new game(data2)
var gameobj3 = new game(data3)
gameobjlist.push(gameobj1)
gameobjlist.push(gameobj2)
gameobjlist.push(gameobj3)
var gameobj4 = new game(data4)
var gameobj5 = new game(data5)
var gameobj6 = new game(data6)
var gameobj7 = new game(data7)
gameobjlist.push(gameobj4)
gameobjlist.push(gameobj5)
gameobjlist.push(gameobj6)
gameobjlist.push(gameobj7)



var nextbut = document.querySelector("#next")
reqem = 0




function next(){
    if(!reqem == 0){
        if(reqem == gameobjlist.length){
            gameobjlist[gameobjlist.length-1].over()
            reqem = 0
            gameobjlist[reqem].start()
            gameobjlist[0].over()
        }
        else{
            gameobjlist[reqem-1].over()
            gameobjlist[reqem].start()
            reqem++
        }
        gameobjlist[0].over()
    }
    else{
        gameobjlist[0].over()
        gameobjlist[gameobjlist.length-1].over()
        gameobjlist[reqem].start()
        reqem++
    }

}














