function getRadians(degrees) {
    return (Math.PI / 180) * degrees;
}
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
//штаны
ctx.moveTo(115, 320);
ctx.lineTo(115, 340);
ctx.lineTo(235, 340);
ctx.lineTo(235, 320);
ctx.lineTo(115, 320);
ctx.fillStyle = "#4169e1";
ctx.fill();
//обувь
ctx.beginPath();
ctx.moveTo(105, 340);
ctx.lineTo(245, 340);
ctx.quadraticCurveTo(195, 330, 175, 340);
ctx.quadraticCurveTo(135, 330, 105, 340);
ctx.fillStyle = "#000";
ctx.fill();
ctx.stroke();
ctx.beginPath();
//куртка, тело
ctx.moveTo(105,235);
ctx.bezierCurveTo(100, 225, 95, 220, 80, 300);
ctx.quadraticCurveTo(90, 290, 105, 300);
ctx.quadraticCurveTo(110, 280, 120, 260);
ctx.lineTo(105, 320);
ctx.quadraticCurveTo(175, 330, 245, 320);
ctx.lineTo(230, 260);
ctx.quadraticCurveTo(240, 280, 245, 300);
ctx.quadraticCurveTo(260, 290, 270, 300);
ctx.bezierCurveTo(255, 220, 250, 225, 245, 235);
ctx.bezierCurveTo(200, 250, 150, 250, 105, 235);
ctx.fillStyle = "#cd9575";
ctx.fill();
ctx.stroke();
//шапка
ctx.beginPath();
ctx.arc(175, 175, 90, 0, Math.PI*2, true);
ctx.fillStyle = "#4169e1";
ctx.fill();
//линия под шапкой
ctx.beginPath();
ctx.moveTo(85, 155);
ctx.bezierCurveTo(155, 125, 195, 125, 265, 155);
ctx.lineTo(265, 140);
ctx.bezierCurveTo(195, 110, 155, 110, 85, 140);
ctx.lineTo(85, 155);
ctx.fillStyle = "#ff0000";
ctx.fill();
//лицо
ctx.beginPath();
ctx.moveTo(87, 155);
ctx.bezierCurveTo(155, 125, 195, 125, 263, 155);
ctx.arc(175, 175, 90, 0, getRadians(192), false);
ctx.fillStyle = "#ffdab9";
ctx.fill();
ctx.stroke();
ctx.beginPath();
//глаза
ctx.moveTo(205, 190);
ctx.bezierCurveTo(230, 180, 210, 145, 190, 150);
ctx.bezierCurveTo(175, 150, 165, 185, 205, 190)
ctx.moveTo(145, 190);
ctx.bezierCurveTo(120, 180, 140, 145, 160, 150);
ctx.bezierCurveTo(175, 150, 185, 185, 145, 190);
ctx.fillStyle = "#fffafa";
ctx.fill();
ctx.stroke();
//варешки
ctx.beginPath();
ctx.arc(95, 300, 20, 0, getRadians(360), true);
ctx.arc(255, 300, 20, 0, getRadians(360), true);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.beginPath();
ctx.arc(105, 290, 10, 0, getRadians(360), true);
ctx.moveTo(245, 290);
ctx.arc(245, 290, 10, 0, getRadians(360), true);
ctx.moveTo(175, 290);
ctx.stroke();
ctx.fill();
//замок куртки
ctx.beginPath();
ctx.moveTo(175, 325);
ctx.lineWidth = 5;
ctx.lineTo(175, 265);
ctx.stroke();
//пуговицы, зрачки
ctx.beginPath();
ctx.arc(190, 170, 3, 0, getRadians(360), true);
ctx.arc(160, 170, 3, 0, getRadians(360), true);   
ctx.moveTo(155, 293);
ctx.arc(155, 293, 3, 0, getRadians(360), true);
ctx.moveTo(155, 280);
ctx.arc(155, 280, 3, 0, getRadians(360), true);
ctx.moveTo(155, 305);
ctx.arc(155, 305, 3, 0, getRadians(360), true);       
ctx.fillStyle = "#000"
ctx.fill();
ctx.beginPath();
//элемент куртки
ctx.lineWidth = 1;
ctx.moveTo(105, 235);
ctx.bezierCurveTo(125, 255, 155, 265, 170, 265);
ctx.bezierCurveTo(185, 270, 145, 295, 105, 235);
ctx.moveTo(245, 235);
ctx.bezierCurveTo(225, 255, 195, 265, 180, 265);
ctx.bezierCurveTo(165, 270, 205, 295, 245, 235);
//брови
ctx.lineWidth = 2;
ctx.moveTo(200, 130);
ctx.lineTo(220, 145);
ctx.moveTo(150, 130);
ctx.lineTo(130, 145);
ctx.stroke();
ctx.fillStyle = "#ff0000";
ctx.fill();
//рот
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(205, 215);
ctx.lineTo(145, 215);
ctx.quadraticCurveTo(159, 237, 175, 240);
ctx.bezierCurveTo(180, 240, 200, 220, 205, 215);
ctx.stroke();
ctx.fillStyle = "#000";
ctx.fill();
//зубы
ctx.beginPath();
ctx.moveTo(150, 215);
ctx.quadraticCurveTo(155, 230, 165, 215);
ctx.quadraticCurveTo(175, 230, 175, 215);
ctx.quadraticCurveTo(185, 230, 185, 215); 
ctx.quadraticCurveTo(190, 230, 195, 215);
ctx.stroke();
ctx.fillStyle = "#fffafa";
ctx.fill();
//линии на шапке
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#ff0000";
ctx.moveTo(160, 100);
ctx.lineTo(180, 70);
ctx.moveTo(180, 100);
ctx.lineTo(160, 70);
ctx.moveTo(150, 85);
ctx.lineTo(190, 85);
ctx.moveTo(150, 80);
ctx.lineTo(190, 90);
ctx.moveTo(185, 78);
ctx.lineTo(150, 90);
ctx.moveTo(170, 70);
ctx.lineTo(168, 100);
ctx.moveTo(155, 95);
ctx.lineTo(185, 72);
ctx.moveTo(155, 75);
ctx.lineTo(185, 95);
ctx.stroke();

//2-ой персонаж
ctx.beginPath();
//штаны
ctx.moveTo(415, 320);
ctx.lineTo(415, 340);
ctx.lineTo(535, 340);
ctx.lineTo(535, 320);
ctx.lineTo(415, 320);
ctx.fillStyle = "#009999";
ctx.fill();
//обувь
ctx.beginPath();
ctx.moveTo(405, 340);
ctx.lineTo(545, 340);
ctx.quadraticCurveTo(495, 330, 475, 340);
ctx.quadraticCurveTo(435, 330, 405, 340);
ctx.fillStyle = "#666";
ctx.fill();
//куртка
ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.lineWidth = 1;
ctx.moveTo(405, 235);
ctx.bezierCurveTo(400, 225, 395, 220, 380, 300);
ctx.quadraticCurveTo(390, 290, 405, 300);
ctx.quadraticCurveTo(410, 280, 420, 260);
ctx.lineTo(405, 320);
ctx.quadraticCurveTo(475, 330, 545, 320);
ctx.lineTo(530, 260);
ctx.quadraticCurveTo(540, 280, 545, 300);
ctx.quadraticCurveTo(560, 290, 570, 300);
ctx.bezierCurveTo(555, 220, 550, 225, 545, 235);
ctx.bezierCurveTo(500, 250, 450, 250, 405, 235);
ctx.fillStyle = "#ff751a";
ctx.fill();
ctx.stroke();
//варешки
ctx.beginPath();
ctx.arc(395, 300, 20, 0, getRadians(360), true);
ctx.arc(555, 300, 20, 0, getRadians(360), true);
ctx.fillStyle = "#33cc33";
ctx.fill();
ctx.beginPath();
ctx.arc(405, 290, 10, 0, getRadians(360), true);
ctx.moveTo(545, 290);
ctx.arc(545, 290, 10, 0, getRadians(360), true);
ctx.moveTo(475, 290);
ctx.stroke();
ctx.fill();
//замок куртки
ctx.beginPath();
ctx.moveTo(475, 325);
ctx.lineTo(475, 265);
ctx.lineWidth = 4;
ctx.stroke();
ctx.lineWidth = 1;
ctx.moveTo(435, 280);
ctx.lineTo(435, 300);
ctx.lineTo(455, 300);
ctx.lineTo(455, 280);
ctx.lineTo(435, 280);
ctx.lineTo(445, 290);
ctx.lineTo(455, 280);
ctx.moveTo(515, 280);
ctx.lineTo(515, 300);
ctx.lineTo(495, 300);
ctx.lineTo(495, 280);
ctx.lineTo(515, 280);
ctx.lineTo(505, 290);
ctx.lineTo(495, 280);
ctx.stroke();
ctx.beginPath();
//элемент куртки
ctx.lineWidth = 1;
ctx.moveTo(405, 235);
ctx.bezierCurveTo(425, 255, 455, 265, 470, 265);
ctx.bezierCurveTo(485, 265, 455, 290, 405, 235);
ctx.moveTo(545, 235);
ctx.bezierCurveTo(525, 255, 495, 265, 480, 265);
ctx.bezierCurveTo(465, 265, 495, 290, 545, 235);
ctx.stroke();
ctx.fillStyle = "#2eb82e";
ctx.fill();
//лицо
ctx.beginPath();
ctx.moveTo(387, 155);
ctx.bezierCurveTo(455, 125, 495, 125, 563, 155);
ctx.arc(475, 175, 90, 0, getRadians(192), false);
ctx.fillStyle = "#ffdab9";
ctx.fill();
ctx.stroke();
//карманы куртки
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(505, 215);
ctx.lineTo(445, 215);
ctx.quadraticCurveTo(459, 237, 475, 240);
ctx.bezierCurveTo(480, 240, 500, 220, 505, 215);
ctx.stroke();
ctx.fillStyle = "#000";
ctx.fill();
//зубы
ctx.beginPath();
ctx.moveTo(502, 215);
ctx.quadraticCurveTo(495, 230, 490, 215);
ctx.quadraticCurveTo(485, 230, 480, 215);
ctx.quadraticCurveTo(475, 230, 465, 215); 
ctx.quadraticCurveTo(456, 230, 450, 215);
ctx.stroke();
ctx.fillStyle = "#fffafa";
ctx.fill();
//глаза
ctx.moveTo(505, 190);
ctx.bezierCurveTo(530, 180, 510, 145, 490, 150);
ctx.bezierCurveTo(475, 150, 465, 190, 505, 190)
ctx.moveTo(445, 190);
ctx.bezierCurveTo(420, 180, 440, 145, 460, 150);
ctx.bezierCurveTo(475, 150, 480, 195, 445, 190);
ctx.fillStyle = "#fffafa";
ctx.fill();
ctx.stroke();
//зрачки
ctx.beginPath();
ctx.arc(490, 170, 3, 0, getRadians(360), true);
ctx.arc(460, 170, 3, 0, getRadians(360), true);  
ctx.fillStyle = "#000";
ctx.fill();
//шапка
ctx.beginPath();
ctx.moveTo(380, 145);
ctx.lineTo(570, 145);
ctx.lineTo(570, 100);
ctx.quadraticCurveTo(560, 80, 475, 80);
ctx.quadraticCurveTo(380, 80, 380, 100);
ctx.lineTo(380, 145);
ctx.fillStyle = "#33cc33";
ctx.fill();
ctx.beginPath();
ctx.moveTo(400, 130);
ctx.bezierCurveTo(380, 120, 360, 160, 370, 190);
ctx.bezierCurveTo(380, 220, 400, 120, 400, 130);
ctx.moveTo(550, 130);
ctx.bezierCurveTo(580, 120, 590, 160, 580, 190);
ctx.bezierCurveTo(570, 220, 550, 120, 550, 130);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(395, 110);
ctx.lineTo(555, 110);
ctx.lineTo(555, 150);
ctx.bezierCurveTo(505, 140, 445, 140, 395, 150);
ctx.lineTo(395, 110);
ctx.fillStyle = "#008000";
ctx.fill();
//брови
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(420, 150);
ctx.lineTo(440, 140);
ctx.moveTo(530, 150);
ctx.lineTo(510, 140);
ctx.stroke();