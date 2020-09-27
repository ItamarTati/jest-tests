module.exports = function intersectionOfNumbers(nums1: number[], nums2: number[]): number[]{
    let hashmap = {}, answer: number[] = []
    for(let index: number = 0; index < nums1.length; index++){
        if(hashmap[nums1[index]] === undefined) hashmap[nums1[index]] = 1
    }
    for(let index: number = 0; index < nums2.length; index++){
        if(hashmap[nums2[index]] === 1){ 
            answer.push(nums2[index])
            hashmap[nums2[index]] = 2
        } 
    }
    return answer
}