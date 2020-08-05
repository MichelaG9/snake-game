import { snakeSpeed, update as updateSnake, draw as drawSnake, getHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0 
let gameOver = false
const gameBoard = document.getElementById('gameBoard')

function main(currTime) {

    if(gameOver){
        if(confirm('Game Over. Press ok to restart')){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currTime

    update()
    draw()

}

window.requestAnimationFrame(main)



function update() {
    updateSnake()
    updateFood()
    youLose()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function youLose(){
    gameOver = outsideGrid(getHead()) || snakeIntersection()
}