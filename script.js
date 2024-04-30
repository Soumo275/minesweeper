const random = [];

function createbomb(){

    while (random. length > 0) { random. pop(); };

    for (let i = 0; i < 10; i++) {
    
    let num=Math.floor(Math.random() * 64);

    if( random.includes(num) ){
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


function createboxes(){

    var i,j;
    var board=document.getElementById("board");
    board.innerHTML="";
    let c=0;
    createbomb();

    for(i=0;i<8;i++){
        for(j=0;j<8;j++){

                let bomb=random.includes(c);
                if(bomb==false) bomb="";
                else bomb="X";

                let value=checkvalue(c,i,j);;
                if(bomb=='X')
                    value='';

                

                board.innerHTML=board.innerHTML + "<button value=' "+ c+ " ' onClick='check(this.value)'> "+bomb+value+"</button>";
                c++;

        }
        board.innerHTML=board.innerHTML + "<br>";
        

    }

};

function checkvalue(c,i,j){

    let neighbour=[]

    if(i-1>=0){
        neighbour.push(c-8);
        if(j-1>=0)neighbour.push(c-8-1);
        if(j+1<=7)neighbour.push(c-8+1);
    }

    if(i+1<=7){
        neighbour.push(c+8);
        if(j-1>=0)neighbour.push(c+8-1);
        if(j+1<=7)neighbour.push(c+8+1);
    }


    if(j-1>=0)neighbour.push(c-1);
    if(j+1<=7)neighbour.push(c+1);
    

    var count=0;

    for(let i=0; i< neighbour.length ;i++ ){
    
        if( random.includes(neighbour[i]) ) count++;
    }

    if(count==0)
        return ' ';
    else 
        return count;

}

function check(v){
    var x=document.getElementById('n');
    x.innerHTML=v;
};