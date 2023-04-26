
import {maxCost} from "./homework1/script.js";
import {calculate} from "./homework3/script.js";
import {res3} from "./homework4/script.js";
import {result} from "./homework5/script.js";
import {resultWihtSubjects}from "./homework6/script.js";
import {myTax} from "./homework7/script.js";
import {student1} from "./homework8/script.js";
import {blocks}from "./homework9/script.js"
import {audio}from "./homework10/script.js";
import {randomChinese}from "./homework11/script.js";
import {getFilmData} from "./homework12/script.js";
import{idGenerator} from "./homework13/script.js"

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#hw-1").innerHTML+=maxCost;
    document.querySelector("#hw-3").innerHTML+=calculate;
    document.querySelector("#hw-4").innerHTML+=res3;
    document.querySelector("#hw-5").innerHTML+=result;
    document.querySelector("#hw-6").innerHTML+=resultWihtSubjects;
    document.querySelector("#hw-7").innerHTML+=myTax;
    document.querySelector("#hw-8").innerHTML+=student1.getInfo();
    document.querySelector("#parent").innerHTML+=blocks;
    document.querySelector("#div").innerHTML+=randomChinese;
    document.querySelector("#hw-13").innerHTML+= idGenerator;
})