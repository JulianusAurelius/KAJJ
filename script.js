function attack()
{
    if (gamePlay)
    {
        if ( ( (enemy_x+canvas.width/10==player_x || enemy_x-canvas.width/10==player_x) && (enemy_y==player_y) ) || ( (enemy_y+canvas.height/10==player_y || enemy_y-canvas.height/10==player_y) && (enemy_x==player_x) ) )
        {
            if (!damageOff)
            {
                zombie_hp -= player_damage;
                player_hp += player_damage;
                $('#enem_h').text(zombie_hp);
                $('#play_h').text(player_hp);
                enemyDead = true;
                if (zombie_hp == 0)
                {
                    currEnemyImage = zombieHurt_i;
                    zombie_i = zombieHurt_i;
                    console.log('test');
                    $('#instr').html("You killed the zombie!<br>\
                        <a id='next_level' href=\"level2.html?title="+title+"&pos=("+String(player_x)+","+String(player_y)+")\">Next Level</a>");
                }
                // }<form id=\"foo\" method=\"post\" action=\"servletURL\"><input type=\"hidden\" name=\"title\" value=title><input type=\"hidden\" name=\"pos\" value=\"(\"+String(player_x)+\",\"+String(player_y)+\")\"></form>\
            }
            currPlayerImage = knightAttack_i;
            currEnemyImage = zombieHurt_i;
            attackFlag = true;
            setTimeout(function(){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                drawTiles();
                currPlayerImage = knight_i;
                currEnemyImage = zombie_i;
                ctx.drawImage(currPlayerImage,player_x,player_y,player_x2,player_y2);
                ctx.drawImage(currEnemyImage,enemy_x,enemy_y,enemy_x2,enemy_y2);
                attackFlag = false;
            },500);

            
        }
    }
}






function enemyAttack()
{
    if (gamePlay)
    {
        if ( ( (enemy_x+canvas.width/10==player_x || enemy_x-canvas.width/10==player_x) && (enemy_y==player_y) ) || ( (enemy_y+canvas.height/10==player_y || enemy_y-canvas.height/10==player_y) && (enemy_x==player_x) ) )
        {
            currPlayerImage = knightHurt_i;
            attackFlag = true;
            setTimeout(function(){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                drawTiles();
                currPlayerImage = knight_i;
                currEnemyImage = zombie_i;
                ctx.drawImage(currPlayerImage,player_x,player_y,player_x2,player_y2);
                ctx.drawImage(currEnemyImage,enemy_x,enemy_y,enemy_x2,enemy_y2);
                attackFlag = false;
            },500);

            player_hp -= 1;
            zombie_hp += 1;
            if (!damageOff)
            {
                $('#enem_h').text(zombie_hp);
            }
            $('#play_h').text(player_hp);
        }
    }
}

function collision(my_x, my_y, other_x, other_y)
{
    if ( (my_x == other_x) && (my_y == other_y) )
    {
        return true;
    }
    else
    {
        return false;
     }
}
        
        

$(function(){
    $('html').keydown(function(e){
        if (gamePlay)
        {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            drawTiles();
            if(e.keyCode == 38){
                if (player_y != 0 && !collision(player_x,player_y-canvas.height/10,enemy_x,enemy_y))// && !attackFlag)
                {
                    player_y -= canvas.height/10;
                }
            }
            if(e.keyCode == 40){
                if (player_y != canvas.height - canvas.height/10 && !collision(player_x,player_y+canvas.height/10,enemy_x,enemy_y))// && !attackFlag)
                {
                    player_y += canvas.height/10;
                }
            }
            if( e.keyCode == 37){
                if (player_x != 0 && !collision(player_x-canvas.width/10,player_y,enemy_x,enemy_y))// && !attackFlag)
                {
                    player_x -= canvas.width/10;
                }
            }
            if(e.keyCode == 39){
                if (player_x != canvas.width - canvas.width/10 && !collision(player_x+canvas.width/10,player_y,enemy_x,enemy_y))// && !attackFlag)
                {
                    player_x += canvas.width/10;
                }
            }
            if (e.keyCode == 32)
            {
                if (attackFlag == false)
                {
                    attack();
                }
            }
            if (turnsToEnemyMove == 0 && !enemyDead)
            {
                if (enemyMoveList[0] == 0 && !collision(enemy_x,enemy_y-canvas.height/10,player_x,player_y))
                {
                    enemy_y -= canvas.height/10;
                    let temp = enemyMoveList.shift();
                    enemyMoveList.push(temp);
                    turnsToEnemyMove = 3;
                }
                else if (enemyMoveList[0] == 1 && !collision(enemy_x-canvas.width/10,enemy_y,player_x,player_y))
                {
                    enemy_x -= canvas.width/10;
                    let temp = enemyMoveList.shift();
                    enemyMoveList.push(temp);
                    turnsToEnemyMove = 3;
                }
                else if (enemyMoveList[0] == 2 && !collision(enemy_x,enemy_y+canvas.height/10,player_x,player_y))
                {
                    enemy_y += canvas.height/10;
                    let temp = enemyMoveList.shift();
                    enemyMoveList.push(temp);
                    turnsToEnemyMove = 3;
                }
                else if (enemyMoveList[0] == 3 && !collision(enemy_x+canvas.width/10,enemy_y,player_x,player_y))
                {
                    enemy_x += canvas.width/10;
                    let temp = enemyMoveList.shift();
                    enemyMoveList.push(temp);
                    turnsToEnemyMove = 3;
                }
            }
            else
            {
                turnsToEnemyMove--;
            }
            if (Math.floor(Math.random()*5) == 0)
            {
                enemyAttack();
            }
            ctx.drawImage(currEnemyImage,enemy_x,enemy_y,enemy_x2,enemy_y2);
            ctx.drawImage(currPlayerImage,player_x,player_y,player_x2,player_y2);
        }
    });
});

g1 = false;
g2 = false;
g3 = false;


function goal1()
{
    if (g1 == true)
    {
        return true;
    }
    let text = $('#code').val();
    let x = undefined;
    let y = undefined;

    try
    {
        eval(text);
    }
    catch(err)
    {
        alert("Error: " + err.message+"\n"+"Please try again.");
    }

    if ((typeof x == "number" && typeof y == "number") && (x > 0 && x <= 10 && y > 0 && y <= 10) && ( (x!=8) || (y!=8) ))
    {
        g1 = true;
        x *= canvas.width/10;
        x -= canvas.width/10;
        y *= canvas.height/10;
        y -= canvas.height/10;
        player_x = x;
        player_y = y;
        ctx.drawImage(currPlayerImage,player_x,player_y,player_x2,player_y2);
        $('#instr').html("In this next task you need to set the title of your game! What will you call it? Knights? Zombies? Zombie Knights?! You have the freedom.\
            Before you were working with numbers. Now you want to work with words, not numbers. To do that we need to make a special data type that tells the computer\
            that we want to work with English, not math. This data type is called a string and you make it by putting quotes around it, either double or single, like this:<br>\
            <span class=\"codeblock\">myVar = \"Hello World!\";</span><br>\
            \nor<br>\
            <span class=\"codeblock\">myVar = 'Hello World!';</span><br>\
            Go ahead and name your game with a variable called Title or title, and setting equal to some string");
    }
    else
    {
        $('#instr').append("\nAre you sure you typed the correct code? (Make sure you type the variable name, say then put it equal to a number)");
    }
}

function goal2()
{
    //check if it's already completed
    if (!g1)
    {
        return;
    }
    if (g2 == true && goal1())
    {
        return true;
    }
    let text = $('#code').val();

    let title = null;
    let Title = null;
            
    try
    {
        eval(text);
    }
    catch(err)
    {
        alert("Error: " + err.message+"\n"+"Please try again.");
    }

    if(title != null)
    {
        Title = title;
        $('#title').text(title);
        g2 = true;
        $('#instr').html("Now, you might have noticed one thing that might make life tough for our player... Our enemy is invincible!! We need to fix that. I heard he has a weakness,\
            I heard a rumor that he changed a variable called 'damageOff' to true, when it should really be false. Let's go ahead and change that back so we can have a\
            fair fight.<br>\
            To do this, we need to use something with a funny name, Booleans. It's basically yes/no, true/false, on/false, etc. In Javascript we can say something is equal\
            to true or false, like this:<br>\
            <span class=\"codeblock\">myVar = true;</span><br> (or false)<br>\
            With that, let's change that variable so we can damage the enemy!");
    }
    else if (Title != null)
    {
        title = Title;
        $('#title').text(Title);
        g2 = true;
        $('#instr').html("Now, you might have noticed one thing that might make life tough for our player... Our enemy is invincible!! We need to fix that. I heard he has a weakness,\
            I heard a rumor that he changed a variable called 'damageOff' to true, when it should really be false. Let's go ahead and change that back so we can have a\
            fair fight.<br>\
            To do this, we need to use something with a funny name, Booleans. It's basically yes/no, true/false, on/false, etc. In Javascript we can say something is equal\
            to true or false, like this:<br>\
            <span class=\"codeblock\">myVar = true;</span><br> (or false)<br>\
            With that, let's change that variable so we can damage the enemy!");
    }
}

    
function goal3()
{
    if (!g1 || !g2)
    {
        return;
    }
    if (g3 == true && goal2())
    {
        return true;
    }
    let text = $('#code').val();

    try
    {
        eval(text);
    }
    catch(err)
    {
        alert("Error: " + err.message+"\n"+"Please try again.");
    }
    console.log('test');
    if(title != null)
    {
        $('#title').text(title);
    }
    else if (Title != null)
    {
        $('#title').text(Title);
    }
    if (damageOff == false)
    {
        $('#enem_h').text(zombie_hp);
        $('#enem_h_p').append(' hp');
        g3 = true;
        $('#instr').html("Ready for functions?<br>\
            Defeat the zombie to move on!");

    }
}







