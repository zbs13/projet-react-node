import React, { useEffect } from 'react';
import StatCard from '../StatCard';
import useDashboard from "../../../hooks/useDashboard";
import { Bar } from 'react-chartjs-2';

function ContentDashboard(){

    const { selectors, actions } = useDashboard();

    useEffect(() => {
        actions.setPricesAvg();
    })

    var data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }]
      };

    return(
        <>
            <StatCard title="Prix moyens" value={"$" + selectors.getPricesAverage()} />
            <Bar 
                data={data}
            />
        </>
    )

}

export default ContentDashboard;