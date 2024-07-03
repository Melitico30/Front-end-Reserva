// Crear el escenario
var stage = new Konva.Stage({
    container: 'container',
    width: 800,
    height: 700
});

// Crear una capa
var layer = new Konva.Layer();
stage.add(layer);

// Colores para diferentes tipos de asientos
var seatColors = {
    available: '#d3d3d3',
    notAvailable: '#ff0000',
    chosen: '#00ff00',
    fixed: '#ffcc00'
};

// Función para crear un asiento con número y color específico
function createSeat(x, y, color, label = '') {
    var seat = new Konva.Rect({
        x: x,
        y: y,
        width: 30,
        height: 30,
        fill: color,
        stroke: 'black',
        strokeWidth: 1,
        cornerRadius: 5
    });

    var seatText = new Konva.Text({
        x: x + 7,
        y: y + 7,
        text: label,
        fontSize: 12,
        fontFamily: 'Calibri',
        fill: 'black'
    });

    seat.on('click', function() {
        if (seat.fill() === seatColors.available) {
            seat.fill(seatColors.chosen);
        } else if (seat.fill() === seatColors.chosen) {
            seat.fill(seatColors.available);
        }
        layer.draw();
    });

    layer.add(seat);
    layer.add(seatText);
}

//Función para crear un rectángulo grande con un color específico y texto
function createLargeRectangle(x, y, color, label) {
    var rectangle = new Konva.Rect({
        x: x,
        y: y,
        width: 100,
        height: 60,
        fill: color,
        stroke: 'black',
        strokeWidth: 1,
        cornerRadius: 5
    });

    var text = new Konva.Text({
        x: x + 10,
        y: y + 20,
        text: label,
        fontSize: 12,
        fontFamily: 'Calibri',
        fill: 'black'
    });

    layer.add(rectangle);
    layer.add(text);
}

// Crear asientos según el plano proporcionado

// Sección izquierda (arriba)
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 5; j++) {
        createSeat(50 + j * 40, 50 + i * 40, seatColors.fixed);
    }
}
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 5; j++) {
        createSeat(50 + j * 40, 200 + i * 40, seatColors.available);
    }
}

// Sección derecha (medio)
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
        var color = seatColors.available;
        if ((i === 2 && j === 1) || (i === 2 && j === 2)) {
            color = seatColors.fixed;
        } else if (i === 3 && j === 2) {
            color = seatColors.chosen;
        }
        createSeat(450 + j * 40, 50 + i * 40, color);
    }
}
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        createSeat(450 + j * 40, 300 + i * 40, seatColors.fixed);
    }
}

// Sección inferior (jefatura)
createTriangle(690, 520, seatColors.notAvailable, 'Jefatura');
createTriangle(730, 520, seatColors.notAvailable, 'Jefatura');

// Sala de juntas
createTriangle(170, 520, seatColors.fixed, 'Sala de Juntas');
createTriangle(210, 520, seatColors.fixed, 'Sala de Juntas');

// Dibujar la capa
layer.draw();
