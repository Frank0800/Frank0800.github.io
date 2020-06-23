var roundDecimal = function (val, precision) {
    return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
}


$(() => {
    $('button').on('click', () => {
        let h = +$('#inputHeight').val()
        let w = +$('#inputWeight').val()
        let f = +$('#inputFat').val()
        let bmi = w / (h * h) / 10000
        $('#outputBMI').val(roundDecimal(bmi, 4))
        let ffmi = w * (1 - f / 100) / ((h / 100) ^ 2)
        $('#outputFFMI').val(roundDecimal(ffmi, 4))
    })
})


$(() => {
    $('button').on('click', () => {
        $('#Result').show()
    })
})


$("#show").click(function () {
    $("p").show();
});


var FFMI = (
    $('button').on('click', () => {
        let h = +$('#inputHeight').val()
        let w = +$('#inputWeight').val()
        let f = +$('#inputFat').val()
        let ffmi = [w * (1 - f / 100) / ((h / 100) ^ 2)]
        let ffmiClear = roundDecimal(ffmi, 2)
        FFMI = ffmiClear
    })
)
// make a chart
var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'white'
var chart = new Chart(ctx, {

    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Below', 'Average', 'Above', 'Excellent', 'Sepurior', 'uspicious', 'Steroid-Used'],
        datasets: [{
            label: 'Male In Statistic',
            backgroundColor: 'color: rgba(255, 255, 255, 0.712)',
            fontColor: 'white',
            data: [16.5, 18.5, 20.5, 22, 24, 26.5, 29]
        }]
    },
    // Configuration options go here
    options: {}
});


var ctx_1 = document.getElementById('myChart_1').getContext('2d');
Chart.defaults.global.defaultFontColor = 'white'
var chart_1 = new Chart(ctx_1, {

    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Below', 'Average', 'Above', 'Excellent', 'Sepurior', 'uspicious', 'Steroid-Used'],
        datasets: [{
            label: 'Female In Statistic',
            backgroundColor: 'color: rgba(255, 255, 255, 0.712)',
            fontColor: 'white',
            data: [14, 15, 17, 18.5, 19, 20, 20.5]
        }]
    },
    // Configuration options go here
    options: {}
});