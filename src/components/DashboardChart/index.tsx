import React from 'react'
import styles from './style.module.scss'
import * as V from 'victory'
import { chartGreen } from '../../constants/style/colors'

const DashboardChart = () => {
    return(
        <div className={styles.chartContainer}>
            <V.VictoryChart 
                theme={V.VictoryTheme.material} 
                style={{
                    parent: { height: "100%", width: "100%" }
                }}
            >
                <V.VictoryLine 
                    style={{
                        data: { stroke: chartGreen },
                        parent: { height: "100%", width: "100%" }
                    }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
            </V.VictoryChart>
        </div>
    )
}

export default DashboardChart   