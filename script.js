function attack()
{
    if (gamePlay)
    {
        if ( ( (enemy_x+canvas.width/10==player_x || enemy_x-canvas.width/10==player_x) && (enemy_y==player_y) ) || ( (enemy_y+canvas.height/10==player_y || enemy_y-canvas.height/10==player_y) && (enemy_x==player_x) ) )
        {
            currPlayerImage = knightAttack_i;
            currEnemyImage = zombieHurt_i;
            attackFlag = true;
            setTimeout(function(){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                drawTiles();
                ctx.drawImage(knight_i,player_x,player_y,player_x2,player_y2);
                ctx.drawImage(zombie_i,enemy_x,enemy_y,enemy_x2,enemy_y2);
                currPlayerImage = knight_i;
                currEnemyImage = zombie_i;
                attackFlag = false;
            },500);

            zombie_hp = zombie_hp - player_damage;
            player_hp = player_hp + zombie_hp;
        }
    }
}






function enemyAttack()
{
    if (gamePlay)
    {
        if ( ( (enemy_x+canvas.width/10==player_x || enemy_x-canvas.width/10==player_x) && (enemy_y==player_y) ) || ( (enemy_y+canvas.height/10==player_y || enemy_y-canvas.height/10==player_y) && (enemy_x==player_x) ) )
        {
            console.log("attack");
            currPlayerImage = knightAttack_i;
            currEnemyImage = zombieHurt_i;
            attackFlag = true;
            setTimeout(function(){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                drawTiles();
                ctx.drawImage(knight_i,player_x,player_y,player_x2,player_y2);
                ctx.drawImage(zombie_i,enemy_x,enemy_y,enemy_x2,enemy_y2);
                currPlayerImage = knight_i;
                currEnemyImage = zombie_i;
                attackFlag = false;
            },500);

            player_hp = player_hp - 1;
            zombie_hp = player_hp - player_damage;
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
            ctx.drawImage(currPlayerImage,player_x,player_y,player_x2,player_y2);
            if (turnsToEnemyMove == 0)
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
    
            ctx.drawImage(currEnemyImage,enemy_x,enemy_y,enemy_x2,enemy_y2);
        }
    });
});

g1 = false;
g2 = false;


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

    if ((typeof x == "number" && typeof y == "number") && (x > 0 && x <= 10 && y > 0 && y <= 10) && (x!=8 && y!=8))
    {
        g1 = true;
        x *= canvas.width/10;
        x -= canvas.width/10;
        y *= canvas.height/10;
        y -= canvas.height/10;
        player_x = x;
        player_y = y;
        ctx.drawImage(currPlayerImage,player_x,player_y,player_x2,player_y2);
        $('#instr').text("You need to complete the second goal!");
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
        $('#title').text(title);
        g2 = true;
        $('#instr').text("You need to complete the third goal!");
    }
    else if (Title != null)
    {
        $('#title').text(Title);
        g2 = true;
        $('#instr').text("You need to complete the third goal!");
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
    let enemyDefeated = null;

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
        $('#title').text(title);
    }
    else if (Title != null)
    {
        $('#title').text(Title);
    }
    if (enemyDefeated == true)
    {
        alert('Is the enemy defeated yet?');
        return;
    }
    if (enemyDefeated == false)
    {
        $('#enem_h').text('10');
        $('#enem_h_p').append(' hp');
        g3 = true;
    }
}







