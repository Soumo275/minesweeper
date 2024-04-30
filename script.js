const random = [];
const all_value=[];

function createbomb(){

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
        var x=document.getElementById('n');
    x.innerHTML=x.innerHTML+" "+random[i];
    }
};

function checkvalue(c,i,j){

    let neighbour=[]

    if(i-1>=0){
        neighbour.push(c-7);
        if(j-1>=0)neighbour.push(c-7-1);
        if(j+1<=6)neighbour.push(c-7+1);
    }

    if(i+1<=6){
        neighbour.push(c+7);
        if(j-1>=0)neighbour.push(c+7-1);
        if(j+1<=6)neighbour.push(c+7+1);
    }

    if(j-1>=0)neighbour.push(c-1);
    if(j+1<=6)neighbour.push(c+1);
    

    var count=0;

    for(let i=0; i< neighbour.length ;i++ ){
    
        if( random.includes(neighbour[i]) ) count++;
    }

    if(count==0)
        return ' ';
    else 
        return count;

    

};

function reveal(tile){

    var x=document.getElementById('n');
    x.innerHTML=tile;
    
    document.getElementById(tile).innerHTML=all_value[tile];
    document.getElementById(tile).style.backgroundColor='lightgreen';
    document.getElementById(tile).style.color='black';
    

};


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

                


               board.innerHTML += "<button id=" + c + " onClick='reveal(this.id)'> </button>";
                c++;

        }
        board.innerHTML=board.innerHTML + "<br>";
        
    }
};

