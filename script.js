const random = [];
const all_value=[];


//generating 10 random non repeating numbers as positions of bombs
function createbomb(){
    var x=document.getElementById('m').innerHTML="";
    while (random. length > 0) { random. pop(); };

    for (let i = 0; i < 10; i++) {
    
    let num=Math.floor(Math.random() * 49);

    if( random.includes(num) && num==24){
        i--;
    }
    else
        random.push(num);

    }
    for(let i = 0; i < 10; i++){
        var x=document.getElementById('m');
        x.innerHTML=x.innerHTML+" "+random[i];
    }
};

//putting values inside the boxes according to the number of bombs present around 
function checkvalue(c,i,j){

    let neighbour=[]

    if(i-1>=0){
        neighbour.push(c-7);
        if(j-1>=0)neighbour.push(c-7-1);
        if(j+1<7)neighbour.push(c-7+1);
    }

    if(i+1<7){
        neighbour.push(c+7);
        if(j-1>=0)neighbour.push(c+7-1);
        if(j+1<7)neighbour.push(c+7+1);
    }

    if(j-1>=0)neighbour.push(c-1);
    if(j+1<7)neighbour.push(c+1);
    

    var count=0;

    for(let i=0; i< neighbour.length ;i++ ){
    
        if( random.includes(neighbour[i]) ) count++;
    }

    if(count==0)
        return ' ';
    else 
        return count;

};


function gameover(){
    let c=0;
    var tile=document.getElementById(c);
    for(i=0;i<7;i++){
        for(j=0;j<7;j++){

            var tile=document.getElementById(c);
            
            tile.innerHTML=all_value[c];

            if(all_value[c]==='X')
            tile.style.backgroundColor='tomato';
            else   
            tile.style.backgroundColor='lightgreen';

            tile.style.color='black';

            tile.disabled=true; // disable the button after click
            c++;
        }
    }

}

//check if bomb is clicked
function checkbomb(val){
    if(all_value[val]==='X'){
        alert('bomb clickd , womp womp!')
        gameover();
    }
        
    
}

// is a sqare is clicked
function clicked_box(tile){
    reveal(tile);
    reveal_neighbour(tile);

};


//revealing the square if clicked
function reveal(tile){

    var x=document.getElementById('n');
    x.innerHTML=tile;
    document.getElementById(tile).innerHTML=all_value[tile];

    if(all_value[tile]==='X')
        document.getElementById(tile).style.backgroundColor='yellow';
    else   
        document.getElementById(tile).style.backgroundColor='lightgreen';

    document.getElementById(tile).style.color='black';

    document.getElementById(tile).disabled=true; // disable the button after click
    checkbomb(tile);
};


//have to complete
// revealing neighbouring sqares 
function reveal_neighbour(c){
    let i=(c+1)/7;
    let j=(c+1)%7;
}


//creating the boxes using buttons and nested loops
function createboxes(){

    var i,j;
    var board=document.getElementById("board");
    board.innerHTML="";
    let c=0;
    createbomb();

    for(i=0;i<7;i++){
        for(j=0;j<7;j++){

                let bomb=random.includes(c);
                if(bomb==false) bomb="";
                else bomb="X";

                let value=checkvalue(c,i,j);

                if(bomb=='X')
                    all_value.push('X');
                else
                    all_value.push(value)

                


               board.innerHTML += "<button id=" + c + " onClick='clicked_box(this.id)'>" +c+" </button>";
                c++;

        }
        board.innerHTML=board.innerHTML + "<br>";
        
    }
};

