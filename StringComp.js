/* Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. */

function Compression(str){
    let compression = ''
    let countedStr = 1

    for(let i = 0; i<str.length; i++){
        if(str[i]===str[i+1]){
            countedStr++
        }
        else{
            compression += str[i] + countedStr
            count = 1
        }
    }
  console.log (compression.length < str.length ? compression : str)


}
Compression("aabcccc");
