import { connect } from 'dva';
import { Charts, Page } from '@components';
import View from './components/view';
import {
    Line,
    Bar,
    Area,
 } from '@components/Echarts';

const {
    // Line,
    // Bar,
    // Area,
    Pie,
    BarWaterfall,
    ScatterAqiColor,
    PieCustom,
    PieNest,
    Sankey,
    Radar,
    ChinaMap,
    Multipie,
    LineBar
} = Charts;
function Chart(props) {
    const {
        dispatch,
        lineData = [],
        barData = [],
        barWaterfallData,
        scatterAqiColorData,
        pieData = [],
        nestData,
        sankeyData,
        radarData,
        chinamapdata,
        multipiedata,
        lineBardata
    } = props;// eslint-disable-line
    const handleClick = (p) => {
        console.log(p);
    };
    const handleBlur = (value, type) => {
        dispatch({
            type: "chartView/save",
            payload: {
                [type]: value
            }
        });
    };
    return (
        <Page loading={false} title={'echarts数据可视化组件'}>
            <View
                title="折线图"
                data={lineBardata}
                onBlur={(value) => {
                    handleBlur(value, "lineBardata");
                }}
            >
                <LineBar data={lineBardata} handleClick={handleClick} Y2Show Y2Index={2} YUnit={'万'} Y2Unit={'万'} />
            </View>
            <View
                title="多饼图"
                data={multipiedata}
                onBlur={(value) => {
                    handleBlur(value, "multipiedata");
                }}
            >
                <Multipie data={multipiedata} handleClick={handleClick} />
            </View>
            <View
                title="中国地图"
                data={chinamapdata}
                onBlur={(value) => {
                    handleBlur(value, "chinamapdata");
                }}
            >
                <ChinaMap title={'地域用户分析'} seriesName='地域分析' target={'email'} data={chinamapdata} handleClick={handleClick} />
            </View>
            <View
                title="折线图"
                data={lineData}
                onBlur={(value) => {
                    handleBlur(value, "lineData");
                }}
            >
                <Line data={lineData} handleClick={handleClick} />
            </View>
            <View
                title="面积图"
                data={barData}
                onBlur={(value) => {
                    handleBlur(value, "barData");
                }}
            >
                <Area data={barData} handleClick={handleClick} />
            </View>
            <View
                title="柱状图"
                data={barData}
                onBlur={(value) => {
                    handleBlur(value, "barData");
                }}
            >
                <Bar data={barData} handleClick={handleClick} />
            </View>
            <View
                title="瀑布图"
                data={barWaterfallData}
                onBlur={(value) => {
                    handleBlur(value, "barWaterfallData");
                }}
            >
                <BarWaterfall data={barWaterfallData} handleClick={handleClick} />
            </View>
            <View
                title="散点图"
                data={scatterAqiColorData}
                rows={24}
                onBlur={(value) => {
                    handleBlur(value, "scatterAqiColorData");
                }}
            >
                <ScatterAqiColor data={scatterAqiColorData} handleClick={handleClick} style={{ height: '400px', marginTop: '50px' }} />
            </View>
            <View
                title="饼图"
                data={pieData}
                rows={24}
                onBlur={(value) => {
                    handleBlur(value, "pieData");
                }}
            >
                <Pie data={pieData} style={{ height: '400px', marginTop: '50px' }} />
            </View>
            <View
                title="饼图"
                data={pieData}
                rows={24}
                onBlur={(value) => {
                    handleBlur(value, "pieData");
                }}
            >
                <PieCustom data={pieData} style={{ height: '400px', marginTop: '50px' }} />
            </View>
            <View
                title="嵌套图"
                data={nestData}
                rows={24}
                onBlur={(value) => {
                    handleBlur(value, "nestData");
                }}
            >
                <PieNest data={nestData} style={{ height: '400px', marginTop: '50px' }} />
            </View>
            <View
                title="桑基图"
                data={sankeyData}
                rows={24}
                onBlur={(value) => {
                    handleBlur(value, "sankeyData");
                }}
            >
                <Sankey data={sankeyData} style={{ height: '400px', marginTop: '50px' }} />
            </View>
            <View
                title="雷达图"
                data={radarData}
                rows={24}
                onBlur={(value) => {
                    handleBlur(value, "radarData");
                }}
            >
                <Radar data={radarData} style={{ height: '400px', marginTop: '50px' }} />
            </View>
        </Page >
    );
}
function mapStateToProps({ chartView }) {
    return {
        ...chartView,
    };
}
export default connect(mapStateToProps)(Chart);