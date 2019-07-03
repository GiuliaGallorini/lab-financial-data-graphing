var ctx = document.getElementById("myChart").getContext("2d");

// Iteration 1
axios
  .get("http://api.coindesk.com/v1/bpi/historical/close.json")
  .then(response => {
    let dates = Object.keys(response.data.bpi);
    let values = Object.values(response.data.bpi);

    let myChart = new Chart(ctx, {
      // The type of my chart
      type: "line",

      // The data for the dataset
      data: {
        labels: dates,
        datasets: [
          {
            label: "Bitcoin Price Index",
            backgroundColor: "#425cbb22",
            borderColor: "#425cbb",
            data: values,
          }
        ]
      },
    });
  });

// Y-axis => bitcoin value
// X-axis => date of each value
