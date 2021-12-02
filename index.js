import MovingAverageFilter from "./moving_average_filter.js";
import * as fs from "fs";

// sample 데이터를 배열 형태로 로딩
const sampleFile = fs.readFileSync('sample.csv', 'utf8');
const sampleDatas = sampleFile.toString().split('\n').map(data => Number(data));

// buffer size가 3인 필터 객체 생성
const movingAverageFilter = new MovingAverageFilter(3);

const results = [];

// 필터링 진행
for (let i = 0; i < sampleDatas.length; i++) {

    const origin = sampleDatas[i];
    const filtered = movingAverageFilter.push(origin);

    results.push(filtered);
}

// 원본 출력
console.log('Origin : ');
for (let i = 0; i < sampleDatas.length; i++) {
    console.log(sampleDatas[i]);
}

// 필터 결과 출력
console.log('Filter results : ');
for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
}