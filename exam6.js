function solution(numbers) {
    let answer = 0;
    let hap = 0;
    for (i=0; i<numbers.length; i=i+1){
        hap = hap + numbers[i];
    }
    answer = hap / numbers.length;
    return answer;
}
