module.exports = function uncommonWords(sentence1: string, sentence2: string): string[]{
    let hashmap = {}, answer = [], splitSentence1: string[] = sentence1.split(' '), splitSentence2: string[] = sentence2.split(' ')
    for(let index: number = 0; index < splitSentence1.length; index++){
        if(hashmap[splitSentence1[index]] === undefined) hashmap[splitSentence1[index]] = 1 
    }
    for(let index: number = 0; index < splitSentence2.length; index++){
        if(hashmap[splitSentence2[index]] === undefined) hashmap[splitSentence2[index]] = 1
        else  hashmap[splitSentence2[index]] = hashmap[splitSentence2[index]] - 1
    }
    for(let word in hashmap){
        if(hashmap[word] === 1) answer.push(word)
    }

    return answer
}


