function attack()
{
    if (gamePlay)
    {
        if ( ( (enemy_x+canvas.width/10==player_x || enemy_x-canvas.width/10==player_x) && (enemy_y==player_y) ) || ( (enemy_y+canvas.height/10==player_y || enemy_y-canvas.height/10==player_y) && (enemy_x==player_x) ) )
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
                $('#instr').html("You killed the zombie!<br>");//\
                    // <a href=\"level2.html\?title="+title+"&pos=("+String(player_x)+","+String(player_y)+")\" <button type='button' class='btn'>Next Level</button></a>");
            }
            // }<form id=\"foo\" method=\"post\" action=\"servletURL\"><input type=\"hidden\" name=\"title\" value=title><input type=\"hidden\" name=\"pos\" value=\"(\"+String(player_x)+\",\"+String(player_y)+\")\"></form>\
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
            $('#enem_h').text(zombie_hp);
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

